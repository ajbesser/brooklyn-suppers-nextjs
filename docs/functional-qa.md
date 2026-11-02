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
- The first confirmation reached Gmail Spam and failed DMARC with the audience's legacy Gmail From address. Confirmed `brooklynsuppers.com` is already authenticated in Mailchimp. Per the owner's clarified preference, Mailchimp's default newsletter sender/reply address is saved as `alex@brooklynsuppers.com` and verified in audience settings. Public site email links and the fixed Contact recipient use `hello@brooklynsuppers.com`. Delivery/authentication after the sender correction still needs a fresh email test.
- The Mailchimp key expires November 2, 2027 and must be rotated before then. Credentials are not stored in the repository or local files.
- Email preference follow-up: owner selected `hello@brooklynsuppers.com` for inbound website messages because it forwards to their personal inbox. The updated Vercel preview displays that address on Contact and in the footer. All 12 tests, lint, and build pass, including the fixed Contact recipient assertion. Mailchimp uses the separately requested `alex@` default newsletter sender/reply address.

## Resend preview setup — November 2, 2026

- Confirmed Free plan (3,000/month, 100/day), with pay-as-you-go off. Resend receiving is off.
- Published only the approved Resend DKIM TXT and two sending CNAME records in Porkbun. All 22 existing DNS records are unchanged (25 afterward). Public DNS resolves the three exact additions; Resend shows Verified and ready to send.
- Created a sending-access key restricted to `brooklynsuppers.com`. Saved `RESEND_API_KEY` as a server-only Preview secret and `CONTACT_FROM_EMAIL=Brooklyn Suppers <hello@brooklynsuppers.com>` as Preview configuration. Production settings are unchanged.
- Owner completed Vercel email-code verification; preview `9166294` rebuilt successfully as `CfDUJ8BdrSEqGGkhwctxaropMy7F`. Controlled Contact submission showed success. Resend email `01a19c91-1ece-7e0b-aba9-2d409bdf4a33` confirms the fixed `hello@` destination and visitor Reply-To `ajbesser@gmail.com`; accepted/sent, then permanently bounced with SMTP 550 5.1.1 (“Address is not configured to receive emails”). Resend automatically suppressed `hello@`. Porkbun lists the correct forward to Gmail, but pre-existing root MX records point to both Porkbun and Proton. Owner confirmed Proton is still used and approved migrating the two existing forwards to Proton before removing competing Porkbun MX/SPF records. hello@ creation is blocked by Proton’s address-conflict error (“used by a user outside of your organization”); owner confirms no separate Proton mailbox. suppers@ creation and its Gmail forward are complete, with the rule confirmed Active. Receiving DNS remains unchanged until hello@ is resolved. A Proton Support request remains unsent. The owner deferred this routing issue on November 2; do not resume it or send the draft without renewed direction. No Contact inbox delivery pass.

## Mobile readability and keyboard follow-up — November 2, 2026

BES-167/83/108 changes retain the approved green/gold palette and original media. On phones, secondary stats move after the video; the signup remains before it. At 390×844 the video starts around y=474 instead of y=808, with a 260px frame. At 320px it starts around y=500 with a 220px frame. Desktop order is unchanged. Menu dishes and notes use 16px text, headers stack on narrow cards, and archive photos fill the available phone width at 4:3 (desktop remains 200×260). Photo captions have a dark backing. The separate chicken photo no longer has an unnecessary brightness reduction; its caption remains outside the image.

Keyboard testing found Escape left the mobile menu open when focus stayed on its toggle. Handling Escape at the header now closes it from the toggle or a dropdown link and restores focus to the toggle. Header/footer targets are at least 44px high. Scroll buttons respect reduced motion instead of explicitly forcing smooth scrolling.

Verified on the production build in the connected in-app browser:

- Homepage, archive, About, Contact, and Join at 320/390/768/1440px: 20 layout checks, no horizontal overflow, one main and one h1 per page, visible header/footer targets at least 44px.
- Escape from both menu toggle and a dropdown link closes the menu and restores focus. Collapsed links remain hidden/inert.
- Archive photos load after scrolling into view and measure 272×204 at 320px, 342×257 at 390px, and 200×260 at desktop widths. Dish text computes to 16px.
- Representative color ratios: body on cream 8.94:1; muted on cream 6.55:1; gold-button text 8.13:1; white on green 12.96:1; muted on green 8.03:1. Caption text over its 90% dark backing remains above 10:1 even over a white image. These are sampled text combinations, not a full WCAG conformance claim.
- Lint and production build pass after the navigation changes; the existing 12 provider/validation tests passed before these presentation-only changes.

The first native Safari attempt was blocked by the locked Mac; later desktop coverage is recorded below. Real-device/iOS/Android/Firefox, VoiceOver, browser zoom, and reduced-motion emulation remain unverified. The 44px targets satisfy this project's mobile requirement; this report does not present WCAG 2.1's AAA target-size criterion as AA.

## Approved content and account verification — November 2, 2026

- Alex approved **A Table in the South of France** and **Bo Ssam & Makgeolli**, and confirmed that the old 22 excluded those dinners. PR #10 commit `944951c` applies both titles and **24 dinners hosted**, preserving **150+ new and returning attendees**. No other public hardcoded dinner count was found. Lint/build pass; homepage/archive title fit and no horizontal overflow verified at actual 320/390/768/1440 viewports.
- Native macOS Safari 27.2 rendered all five local production-built routes. The original video played and native Pause worked. The signup dialog focused first name, rejected missing names and focused the first error, then Escape closed it and restored the Hear first button focus. No valid provider submission was sent from Safari. Full Safari Tab-cycle/zoom, VoiceOver and real-device coverage are not claimed.
- Search Console domain property `brooklynsuppers.com` already exists; signed-in Settings confirms **You are a verified owner**. Existing sitemap is **Success** (last read October 31; two discovered pages). Canonical homepage URL Inspection says **URL is on Google / Page is indexed** and offers Request again. BES-110 is Done; no duplicate setup or unnecessary re-request performed.
- Page-indexing report last updated October 22 has one indexed page and five exclusions: three redirects, discovered/not-indexed `/dinners`, and crawled/not-indexed the old hashed favicon URL. Do not request indexing for the favicon. Release the archive canonical fix before requesting `/dinners` indexing. Redirect examples have not been inspected individually.
- Existing production homepage PageSpeed audit on November 2 at 10:48 AM EST: mobile Performance 99 / Accessibility 100 / Best Practices 100 / SEO 100, LCP 0.9s, TBT 10ms, CLS 0; desktop all four scores 100, LCP 0.4s, TBT 0, CLS 0. These are one lab audit of existing production, not preview or complete accessibility results. Real-user experience reports No Data. [Report](https://pagespeed.web.dev/analysis/https-www-brooklynsuppers-com/8jw5h62332?form_factor=mobile).
- Vercel Overview showed existing analytics (16 visitors over one week) and six-hour observability of 264 CDN requests, zero function invocations and 0% error rate. Detailed Analytics/Speed Insights/runtime logs remain to inspect. No new analytics settings or paid plan enabled.
- Full continuation context and remaining work: [Linear implementation handoff](https://linear.app/besser/document/brooklyn-suppers-implementation-handoff-and-next-steps-nov-2-2026-5a451458555e).

## Still open

- **Finish provider setup before merging/deploying.** Mailchimp Preview is configured and its pending-to-subscribed flow is verified above. Verify fresh-email delivery after the sender correction, configure Mailchimp for production, and repair inbound routing before repeating the Contact delivery test. Actual Contact inbox receipt and production checks remain outstanding. BES-145/160/164/85/101/109 remain open for their remaining acceptance checks; do not treat preview signup evidence as a contact or production pass.
- Complete native browser keyboard/zoom, actual iPhone/Android/iPad, Firefox, VoiceOver, and production checks for BES-83/107/108. Native Safari desktop smoke coverage is recorded above; simulated widths are not real-device coverage.
- The existing portrait social photo is retained with correct dimensions. A reviewed landscape sharing crop remains under BES-166; no replacement image or photo choice was inferred.
- Search Console setup and homepage indexing are verified above; corrected archive indexing after release, real-user performance, detailed Vercel logs, and Railway shutdown remain open. No production deployment or service shutdown was performed. Only the approved Resend sending DNS additions above were made.
- June/August titles and the 24-dinner total are approved and applied. June menu completeness and photo selections remain open. The supplied June/September folders were inventoried; originals were not changed or published, and September photos were not assumed to depict the August dinner.
