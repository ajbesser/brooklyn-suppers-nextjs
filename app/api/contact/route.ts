import { contactSettings, contactUnavailableMessage } from "../../../lib/contact.ts";
import { contactEmail, formResponse, readFields, validate, type Fields } from "../../../lib/forms.ts";

export async function POST(request: Request) {
  const settings = contactSettings();
  if (!settings) return formResponse(request, { message: contactUnavailableMessage }, 503, "contact", {}, { retry: false, instagramFallback: true });
  let fields: Fields = {};
  const reply = (message: string, status: number, errors?: Record<string, string>) => formResponse(request, { message, errors }, status, "contact", fields);
  try { fields = await readFields(request); }
  catch { return reply("Please use the contact form to send your message.", 400); }
  if (fields.website) return reply("We couldn't send this message. Please try again.", 400);
  const errors = validate(fields, "contact");
  if (Object.keys(errors).length) return reply("Please check the highlighted fields.", 422, errors);
  const { key, from } = settings;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [contactEmail], reply_to: fields.email, subject: "A note from the Brooklyn Suppers website", text: `From: ${fields.name} <${fields.email}>\n\n${fields.message}` }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    const data = await response.json();
    if (response.ok && typeof data.id === "string" && data.id) return reply("Thanks for reaching out. I'll get back to you soon.", 200);
    return reply("We couldn't confirm your message was sent. Please try again, or email Alex directly.", 502);
  } catch {
    return reply("We couldn't confirm your message was sent. Please try again, or email Alex directly.", 502);
  }
}
