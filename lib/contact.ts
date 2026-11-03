import { isEmail } from "./forms.ts";

// Server-side contact configuration. Enabling requires verified inbox delivery.
export function contactSettings() {
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!to || !isEmail(to)) return null;
  if (process.env.CONTACT_FORM_ENABLED !== "true" || !key || !from) return null;
  return { key, from, to };
}

export const contactUnavailableMessage = "The contact form is temporarily unavailable. Please message @brooklynsuppers on Instagram.";
