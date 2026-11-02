# Functional fix verification — November 1, 2026

## Implemented

- BES-145/160: server-validated required-name signup, provider-accepted pending opt-in confirmation, error/retry handling, no email-only bypass, native modal/background inertness, explicit forward/reverse Tab wrapping, Escape and focus restoration, unique field labels/errors, 16px inputs, short-screen scrolling, and a native POST fallback via `/join`.
- BES-163/164/168: approved About page, Contact page/Resend route, shared navigation/footer links, confirmed `alex@` contact destination, and the approved dietary-before-payment/email-first RSVP sequence.
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

## Still open

- **Configure provider credentials before merging/deploying.** Without them the new endpoints deliberately show unavailable errors; they do not fall back to false success. Follow `docs/forms-setup.md` for audience tags/required settings, confirmed test mailbox, double-opt-in confirmation, and actual inbox receipt. Stub tests are not delivery evidence. BES-145/160/164/85/101/109 remain open for that verification.
- Actual Safari/iPhone, Android, Firefox, VoiceOver, and production checks are still required for BES-83/107/108. Local simulated widths are not real-device coverage.
- The existing portrait social photo is retained with correct dimensions. A reviewed landscape sharing crop remains under BES-166; no replacement image or photo choice was inferred.
- Search Console ownership/indexing, real-user performance, and Railway shutdown require account/live verification. No production deployment, domain change, or service shutdown was performed.
- June/August menu titles/completeness and photo selections remain a content batch. The supplied June/September folders were inventoried; originals were not changed or published, and September photos were not assumed to depict the August dinner.
