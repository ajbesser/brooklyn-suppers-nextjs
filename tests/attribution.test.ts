import { test } from "node:test";
import assert from "node:assert/strict";
import { cleanSource, detectSource, readSource, rememberSource, SOURCE_STORAGE_KEY } from "../lib/attribution.ts";

function memory() {
  const data = new Map<string, string>();
  return { getItem: (k: string) => data.get(k) ?? null, setItem: (k: string, v: string) => void data.set(k, v) };
}

test("tagged links win, Instagram referrers are recognised, everything else is unattributed", () => {
  assert.equal(detectSource("?utm_source=Instagram&utm_medium=bio", ""), "instagram");
  assert.equal(detectSource("?utm_source=mailchimp", "https://l.instagram.com/"), "mailchimp");
  assert.equal(detectSource("", "https://l.instagram.com/?u=x"), "instagram");
  assert.equal(detectSource("", "https://www.instagram.com/brooklynsuppers"), "instagram");
  assert.equal(detectSource("", "https://notinstagram.com/"), undefined);
  assert.equal(detectSource("", "https://www.google.com/"), undefined);
  assert.equal(detectSource("", ""), undefined);
});

test("sources are restricted to short, safe tag text", () => {
  assert.equal(cleanSource(" Story_1 "), "story_1");
  for (const bad of ["", "a b", "x".repeat(33), "<script>", "source:evil", 42, null]) assert.equal(cleanSource(bad), undefined);
});

test("first touch is kept for 90 days, then replaced", () => {
  const storage = memory();
  const day = 24 * 60 * 60 * 1000;
  rememberSource(storage, "instagram", 0);
  rememberSource(storage, "google", day);
  assert.equal(readSource(storage, day), "instagram");
  assert.equal(readSource(storage, 91 * day), undefined);
  rememberSource(storage, "mailchimp", 91 * day);
  assert.equal(readSource(storage, 91 * day), "mailchimp");
});

test("corrupt or tampered storage is ignored", () => {
  const storage = memory();
  for (const value of ["not json", "null", JSON.stringify({ source: "<b>", at: Date.now() }), JSON.stringify({ source: "instagram" })]) {
    storage.setItem(SOURCE_STORAGE_KEY, value);
    assert.equal(readSource(storage), undefined);
  }
});
