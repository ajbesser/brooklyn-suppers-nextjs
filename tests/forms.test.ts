import { afterEach, beforeEach, mock, test } from "node:test";
import assert from "node:assert/strict";
import { POST as newsletter } from "../app/api/newsletter/route.ts";
import { POST as contact } from "../app/api/contact/route.ts";

let stub: { mock: { callCount(): number } };
const original = { ...process.env };
const signup = { email: "guest@example.test", firstName: " Guest ", lastName: " Tester ", dietary: "Vegetarian", website: "" };
const note = { email: "guest@example.test", name: "Guest Tester", message: "A question about dinner.", website: "" };
function request(kind: string, data: unknown, headers: Record<string, string> = {}) {
  return new Request(`https://www.brooklynsuppers.com/api/${kind}`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json", Origin: "https://www.brooklynsuppers.com", ...headers }, body: JSON.stringify(data) });
}
beforeEach(() => {
  process.env.MAILCHIMP_API_KEY = "test-key-us9";
  process.env.MAILCHIMP_AUDIENCE_ID = "testaudience";
  process.env.RESEND_API_KEY = "test-key";
  process.env.CONTACT_FROM_EMAIL = "Brooklyn Suppers <alex@brooklynsuppers.com>";
  stub = mock.method(globalThis, "fetch", async () => { throw new Error("Unexpected provider request"); });
});
afterEach(() => { mock.restoreAll(); process.env = { ...original }; });

test("signup rejects empty, missing and whitespace-only names without contacting Mailchimp", async () => {
  for (const change of [{ firstName: "" }, { lastName: "" }, { firstName: "  " }, { lastName: "  " }, { email: "bad" }]) {
    const response = await newsletter(request("newsletter", { ...signup, ...change }));
    assert.equal(response.status, 422);
    assert.ok(Object.keys((await response.json()).errors).length);
  }
  assert.equal(stub.mock.callCount(), 0);
});

test("signup sends trimmed merge fields and only confirms a provider-accepted pending opt-in", async () => {
  mock.restoreAll();
  const provider = mock.method(globalThis, "fetch", async (url: Parameters<typeof fetch>[0], options?: RequestInit) => {
    assert.equal(url, "https://us9.api.mailchimp.com/3.0/lists/testaudience/members");
    assert.equal(options?.method, "POST");
    assert.deepEqual(JSON.parse(String(options?.body)), { email_address: signup.email, status: "pending", merge_fields: { FNAME: "Guest", LNAME: "Tester", MMERGE11: "Vegetarian" } });
    return Response.json({ status: "pending" });
  });
  const response = await newsletter(request("newsletter", signup));
  assert.equal(response.status, 200);
  assert.match((await response.json()).message, /confirm/);
  assert.equal(provider.mock.callCount(), 1);
});

test("existing members get recovery guidance and are never overwritten or resubscribed", async () => {
  mock.restoreAll();
  const provider = mock.method(globalThis, "fetch", async () => Response.json({ title: "Member Exists" }, { status: 400 }));
  const response = await newsletter(request("newsletter", signup));
  assert.equal(response.status, 409);
  assert.match((await response.json()).message, /contact Alex/);
  assert.equal(provider.mock.callCount(), 1);
});

test("provider errors, invalid responses and network failure never become signup success", async () => {
  for (const result of [Response.json({}, { status: 500 }), Response.json({}), new Response("not json"), new Error("offline")]) {
    mock.restoreAll();
    mock.method(globalThis, "fetch", async () => { if (result instanceof Error) throw result; return result; });
    const response = await newsletter(request("newsletter", signup));
    assert.equal(response.status, 502);
    assert.match((await response.json()).message, /couldn't confirm/);
  }
});

test("Mailchimp throttling is retryable rather than a success", async () => {
  mock.restoreAll();
  mock.method(globalThis, "fetch", async () => Response.json({}, { status: 429 }));
  assert.equal((await newsletter(request("newsletter", signup))).status, 429);
});

test("missing or malformed configuration fails safely without a provider request", async () => {
  for (const key of ["MAILCHIMP_API_KEY", "MAILCHIMP_AUDIENCE_ID"]) {
    const previous = process.env[key]; delete process.env[key];
    assert.equal((await newsletter(request("newsletter", signup))).status, 503);
    process.env[key] = previous;
  }
  process.env.MAILCHIMP_API_KEY = "bad-key";
  assert.equal((await newsletter(request("newsletter", signup))).status, 503);
  delete process.env.RESEND_API_KEY;
  assert.equal((await contact(request("contact", note))).status, 503);
  assert.equal(stub.mock.callCount(), 0);
});

test("honeypots reject both form types before any provider request", async () => {
  assert.equal((await newsletter(request("newsletter", { ...signup, website: "spam" }))).status, 400);
  assert.equal((await contact(request("contact", { ...note, website: "spam" }))).status, 400);
  assert.equal(stub.mock.callCount(), 0);
});

test("contact validates required fields and length before sending", async () => {
  for (const change of [{ name: " " }, { email: "bad" }, { message: " " }, { message: "a".repeat(5001) }]) {
    assert.equal((await contact(request("contact", { ...note, ...change }))).status, 422);
  }
  assert.equal(stub.mock.callCount(), 0);
});

test("contact uses the fixed owner inbox, safe text content, and the visitor as reply-to", async () => {
  mock.restoreAll();
  mock.method(globalThis, "fetch", async (url: Parameters<typeof fetch>[0], options?: RequestInit) => {
    assert.equal(url, "https://api.resend.com/emails");
    const payload = JSON.parse(String(options?.body));
    assert.deepEqual(payload.to, ["alex@brooklynsuppers.com"]);
    assert.equal(payload.reply_to, note.email);
    assert.equal(payload.html, undefined);
    assert.match(payload.text, /A question about dinner/);
    return Response.json({ id: "test-message" });
  });
  const response = await contact(request("contact", note));
  assert.equal(response.status, 200);
  assert.match((await response.json()).message, /Thanks/);
});

test("contact provider failures cannot show success", async () => {
  for (const result of [Response.json({}, { status: 403 }), Response.json({}), new Error("offline")]) {
    mock.restoreAll();
    mock.method(globalThis, "fetch", async () => { if (result instanceof Error) throw result; return result; });
    assert.equal((await contact(request("contact", note))).status, 502);
  }
});

test("native POST fallback retains and escapes entered values on failure", async () => {
  const body = new URLSearchParams({ ...note, message: '<script>alert("test")</script>' });
  delete process.env.RESEND_API_KEY;
  const response = await contact(new Request("https://www.brooklynsuppers.com/api/contact", { method: "POST", body }));
  assert.equal(response.status, 503);
  const html = await response.text();
  assert.match(html, /guest@example.test/);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /<script>/);
  assert.equal(response.headers.get("cache-control"), "no-store");
});

test("cross-origin, malformed, and oversized bodies are rejected without contacting providers", async () => {
  assert.equal((await newsletter(request("newsletter", signup, { Origin: "https://elsewhere.test" }))).status, 400);
  assert.equal((await newsletter(request("newsletter", signup, { "Sec-Fetch-Site": "cross-site" }))).status, 400);
  assert.equal((await newsletter(request("newsletter", null))).status, 400);
  assert.equal((await newsletter(request("newsletter", { ...signup, dietary: "a".repeat(70000) }))).status, 400);
  assert.equal(stub.mock.callCount(), 0);
});
