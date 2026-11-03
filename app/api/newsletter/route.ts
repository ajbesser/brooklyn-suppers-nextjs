import { formResponse, readFields, validate, type Fields } from "../../../lib/forms.ts";
import { cleanSource } from "../../../lib/attribution.ts";

export async function POST(request: Request) {
  const reply = (message: string, status: number, errors?: Record<string, string>) => formResponse(request, { message, errors }, status, "newsletter", fields);
  let fields: Fields = {};
  try { fields = await readFields(request); }
  catch { return reply("Please use the signup form to join the list.", 400); }
  if (fields.website) return reply("We couldn't submit this signup. Please try again.", 400);
  const errors = validate(fields, "newsletter");
  if (Object.keys(errors).length) return reply("Please check the highlighted fields.", 422, errors);

  const source = cleanSource(fields.source);

  const key = process.env.MAILCHIMP_API_KEY;
  const audience = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = key?.split("-").at(-1);
  if (!key || !audience || !/^us\d+$/.test(server || "") || !/^[a-zA-Z0-9]+$/.test(audience)) {
    return reply("Signup is temporarily unavailable. Please try again later or email Alex.", 503);
  }
  try {
    const response = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${audience}/members`, {
      method: "POST",
      headers: { Authorization: `Basic ${Buffer.from(`brooklyn-suppers:${key}`).toString("base64")}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email_address: fields.email,
        status: "pending",
        merge_fields: { FNAME: fields.firstName, LNAME: fields.lastName, MMERGE11: fields.dietary || "" },
        ...(source && { tags: [`source:${source}`] }),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    const data = await response.json();
    if (response.ok && data.status === "pending") return reply("Check your inbox to confirm your signup. You'll join the list after you confirm.", 200);
    if (response.status === 400 && data.title === "Member Exists") {
      return reply("This address is already registered with Mailchimp. If you're missing invitations or need to rejoin, please contact Alex.", 409);
    }
    if (response.status === 429) return reply("Signup is busy right now. Please wait a moment and try again.", 429);
    return reply("We couldn't confirm your signup. Please try again or email Alex.", 502);
  } catch {
    return reply("We couldn't confirm your signup. Please try again or email Alex.", 502);
  }
}
