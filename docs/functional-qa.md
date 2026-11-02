# Functional fix verification — November 1, 2026

## Review branches

The existing palette PR #7 merged into main during this work. The functional branch preserves that palette, resolves its overlapping edits, and includes dependency PR #8. The functional PR is stacked on #8; review/merge #8 first, then retarget the functional PR to main. This chat did not merge a PR or change production.

## Implemented

- BES-145/160: server-validated required-name signup, provider-accepted pending opt-in confirmation, error/retry handling, no email-only bypass, native modal/background inertness, explicit forward/reverse Tab wrapping, Escape and focus restoration, unique field labels/errors, 16px inputs, short-screen scrolling, and a native POST fallback via `/join`.
- BES-163/164/168: approved About page, Contact page/Resend route, shared navigation/footer links, owner-preferred `hello@brooklynsuppers.com` contact destination, and the approved dietary-before-payment/email-first RSVP sequence.
- BES-166: route-specific canonical/Open Graph/Twitter metadata, matching sitemap entries, accurate existing social-image dimensions (1080×1350), and structured data without unapproved pricing/cuisine or a private address.
- BES-162: specified “to enjoy the group's company” copy correction.
- BES-83: hidden collapsed mobile links, responsive header behavior, archive main/skip-link target, native video pause controls, poster-first reduced-motion code, and a quote pause/resume control with timer cleanup.
- BES-169: monthly content/announcement checklist and corrected build-time environment-variable instructions. No canceled announcement was activated.

## Passed locally

- `npm run lint`, `npm test` (12 tests), and `npm run build` on Next 16.4.3.
- Production-built homepage, About, Contact, Join, and archive return 200 and each contain one main landmark. Server-rendered canonical/OG URLs match each route; social-image dimensions are accurate. robots, sitemap, existing video/poster/social photo/favicon return 200.
- In-app browser: homepage, Contact, and archive at 320/390/768/1440px have no horizontal overflow. About navigation and its 320px/tablet layout work.
- Both homepage signup placements open the dialog. Whitespace-only names are rejected; Enter submits; Tab/Shift+Tab wrap; Escape restores trigger focus and body scrolling. At 844×390 the dialog remains between y=16 and y=374 with internal scrolling, instead of clipping inaccessible content. All visible inputs use 16px type.
- Local provider stubs verify browser error preservation/retry and provider-accepted pending signup. Successful signup closes the dialog and focuses its status message. Contact errors preserve the message; simulated accepted contact submissions replace the form and focus confirmation. The stubs run outside the repository as local runtime instrumentation; no production test switch or test credential is in source.
- Quote pause toggles its pressed state and stops rotation. Video has native controls; only the visible desktop/mobile instance auto-plays. The reduced-motion preference handler is implemented but was not emulated in the connected browser.

## Favicon follow-up (BES-170)

The stale app/favicon.ico was confirmed visually as the Vercel triangle. Replaced it with a gold plate/fork on bottle green, with 16/32/48px ICO frames, matching app/icon.svg, and a 180px Apple icon. The legacy public/favicon.svg is updated too. Removed the manual metadata icon entry so file conventions consistently supply the icons. Lint/build pass; all five public routes advertise the same three branded icons with new hashed URLs, and every served asset matches its source bytes. Checked 16px readability and the local browser head tags. Available in the functional-fixes preview; production review/deployment is still pending.

## Real Mailchimp preview verification — November 2, 2026

- Saved server-only Mailchimp key/audience settings for Vercel Preview and rebuilt `e10c078` as deployment `GrvEw1c9fqycZPdUi29EF8tYA3P5`. No production deployment or production environment-variable change.
- Existing `ajbesser@gmail.com` returns already-registered guidance without overwriting the contact. The approved Gmail plus alias received a pending response and confirmation email. After the owner completed the human check and confirmation, Mailchimp showed Subscribed with Alex/Besser and the optional dietary test note intact. The record source identifies the new Vercel API integration.
- Confirmed audience ID and all three merge tags. Enabled first/last Required in Mailchimp and reopened each field to verify persistence.
- The first confirmation reached Gmail Spam and failed DMARC with the audience's legacy Gmail From address. Confirmed `brooklynsuppers.com` is already authenticated in Mailchimp. The owner subsequently chose the original forwarding address, `hello@brooklynsuppers.com`, superseding the intermediate `alex@` sender. Site email links and the fixed Contact recipient now use `hello@`; the Mailchimp default sender/reply address is also saved as `hello@` and verified in audience settings. Delivery/authentication after the final sender correction still needs a fresh email test.
- The Mailchimp key expires November 2, 2027 and must be rotated before then. Credentials are not stored in the repository or local files.
- Email preference follow-up: owner selected `hello@brooklynsuppers.com` because it forwards to their personal inbox. The updated Vercel preview displays that address on Contact and in the footer. All 12 tests, lint, and build pass, including the fixed Contact recipient assertion. Mailchimp audience settings also show the saved `hello@` default sender/reply address.

## Still open

- **Finish provider setup before merging/deploying.** Mailchimp Preview is configured and its pending-to-subscribed flow is verified above. Verify fresh-email delivery after the sender correction, configure Mailchimp for production, and set up Contact delivery (`RESEND_API_KEY` / verified `CONTACT_FROM_EMAIL`). Actual Contact inbox receipt and production checks remain outstanding. BES-145/160/164/85/101/109 remain open for their remaining acceptance checks; do not treat preview signup evidence as a contact or production pass.
- Actual Safari/iPhone, Android, Firefox, VoiceOver, and production checks are still required for BES-83/107/108. Local simulated widths are not real-device coverage.
- The existing portrait social photo is retained with correct dimensions. A reviewed landscape sharing crop remains under BES-166; no replacement image or photo choice was inferred.
- Search Console ownership/indexing, real-user performance, and Railway shutdown require account/live verification. No production deployment, domain change, or service shutdown was performed.
- June/August menu titles/completeness and photo selections remain a content batch. The supplied June/September folders were inventoried; originals were not changed or published, and September photos were not assumed to depict the August dinner.
