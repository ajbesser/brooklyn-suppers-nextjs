import { detectSource, rememberSource } from "./lib/attribution.ts";

// Runs once per page load before the app starts. Storage can be blocked
// (private mode, in-app browsers), in which case attribution is simply skipped.
try {
  rememberSource(window.localStorage, detectSource(window.location.search, document.referrer));
} catch {}
