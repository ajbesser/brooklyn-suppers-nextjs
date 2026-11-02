import { site } from "../data/site.ts";

export type FormResult = { message: string; errors?: Record<string, string> };
export type FormKind = "newsletter" | "contact";
export type Fields = Record<string, string>;

export const contactEmail = "hello@brooklynsuppers.com";
export const isEmail = (value: string) => value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function validate(fields: Fields, kind: FormKind) {
  const errors: Record<string, string> = {};
  if (!isEmail(fields.email || "")) errors.email = "Please enter a valid email address.";
  for (const [name, label] of kind === "contact" ? [["name", "name"]] : [["firstName", "first name"], ["lastName", "last name"]]) {
    if (!fields[name]?.trim()) errors[name] = `Please enter your ${label}.`;
    else if (fields[name].length > 100) errors[name] = `Please keep your ${label} to 100 characters.`;
  }
  if (kind === "contact" && (!fields.message?.trim() || fields.message.length > 5000)) {
    errors.message = "Please enter a message of up to 5,000 characters.";
  }
  if (kind === "newsletter" && (fields.dietary?.length || 0) > 2000) {
    errors.dietary = "Please keep dietary notes to 2,000 characters.";
  }
  return errors;
}

// Reject oversized bodies before parsing; Content-Length alone is not trustworthy.
export async function readFields(request: Request): Promise<Fields> {
  const origin = request.headers.get("origin");
  if (request.headers.get("sec-fetch-site") === "cross-site" || (origin && origin !== new URL(request.url).origin)) {
    throw new Error("origin");
  }
  const type = request.headers.get("content-type")?.split(";")[0];
  if (type !== "application/json" && type !== "application/x-www-form-urlencoded") throw new Error("format");
  const reader = request.body?.getReader();
  let text = "";
  let size = 0;
  const decoder = new TextDecoder();
  if (reader) {
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 65_536) { await reader.cancel(); throw new Error("size"); }
        text += decoder.decode(value, { stream: true });
      }
      text += decoder.decode();
    } finally { reader.releaseLock(); }
  }
  const data = type === "application/json" ? JSON.parse(text) : Object.fromEntries(new URLSearchParams(text));
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("format");
  return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, typeof value === "string" ? value.trim() : ""]));
}

const escape = (value: string) => value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

// Native POSTs get a usable fallback page; personal data never enters a GET URL.
export function formResponse(request: Request, result: FormResult, status: number, kind: FormKind, fields: Fields = {}, options: { retry?: boolean; instagramFallback?: boolean } = {}) {
  const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
  if (request.headers.get("accept")?.includes("application/json")) return Response.json(result, { status, headers });
  const inputs = kind === "contact" ? [["name", "Name"], ["email", "Email"], ["message", "Message"]] : [["email", "Email"], ["firstName", "First name"], ["lastName", "Last name"], ["dietary", "Dietary restrictions (optional)"]];
  const form = status >= 400 && options.retry !== false ? `<form action="/api/${kind}" method="post">${inputs.map(([name, label]) => {
    const attrs = `id="${name}" name="${name}" ${name === "dietary" ? "" : "required"} aria-describedby="${name}-error"`;
    return `<p><label for="${name}">${label}</label>${name === "message" || name === "dietary" ? `<textarea ${attrs} maxlength="${name === "message" ? 5000 : 2000}">${escape(fields[name] || "")}</textarea>` : `<input ${attrs} type="${name === "email" ? "email" : "text"}" maxlength="${name === "email" ? 254 : 100}" value="${escape(fields[name] || "")}">`}<span id="${name}-error">${escape(result.errors?.[name] || "")}</span></p>`;
  }).join("")}<div hidden><label>Leave blank<input name="website" tabindex="-1" autocomplete="off"></label></div><button>Try again</button></form>` : "";
  const fallback = options.instagramFallback
    ? `<p>Message <a href="${escape(site.instagramUrl)}">${escape(site.instagramHandle)} on Instagram</a>.</p>`
    : `<p>You can also email <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>`;
  return new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Brooklyn Suppers</title><style>body{font:18px Georgia,serif;max-width:36rem;margin:3rem auto;padding:1rem;color:#2a1f16;background:#faf6ee}label,input,textarea{display:block}input,textarea{box-sizing:border-box;width:100%;font:inherit;padding:.75rem}button{font:inherit;padding:.75rem 1rem}span{color:#843c29}a{color:inherit}</style><main><h1>${escape(result.message)}</h1>${form}${fallback}<a href="/">Back to Brooklyn Suppers</a></main></html>`, { status, headers: { ...headers, "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'" } });
}
