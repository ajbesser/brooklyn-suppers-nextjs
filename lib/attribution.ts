// Where a subscriber first came from, recorded as a Mailchimp tag (e.g. "source:instagram").
// Pure helpers so the browser capture and the server route agree on the same rules.

export const SOURCE_STORAGE_KEY = "bs-source";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

// Lowercase letters, digits, dot, dash and underscore only; anything else is dropped.
export function cleanSource(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const source = value.trim().toLowerCase();
  return /^[a-z0-9._-]{1,32}$/.test(source) ? source : undefined;
}

// A tagged link (?utm_source=...) wins; otherwise recognise visits from Instagram's
// in-app browser or link shim, which usually arrive untagged.
export function detectSource(search: string, referrer: string): string | undefined {
  const tagged = cleanSource(new URLSearchParams(search).get("utm_source"));
  if (tagged) return tagged;
  try {
    const host = new URL(referrer).hostname;
    if (host === "instagram.com" || host.endsWith(".instagram.com")) return "instagram";
  } catch {}
  return undefined;
}

// First touch within 90 days is kept, so a later direct visit doesn't erase where someone came from.
export function rememberSource(storage: Pick<Storage, "getItem" | "setItem">, source: string | undefined, now = Date.now()) {
  if (!source || readSource(storage, now)) return;
  storage.setItem(SOURCE_STORAGE_KEY, JSON.stringify({ source, at: now }));
}

export function readSource(storage: Pick<Storage, "getItem">, now = Date.now()): string | undefined {
  try {
    const saved = JSON.parse(storage.getItem(SOURCE_STORAGE_KEY) || "null");
    if (!saved || typeof saved.at !== "number" || now - saved.at > MAX_AGE_MS) return undefined;
    return cleanSource(saved.source);
  } catch {
    return undefined;
  }
}
