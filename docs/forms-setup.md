# Forms: setup and delivery verification

## Required before merging/deploying the form changes

In local `.env.local` and the intended Vercel preview/production environment, set:

- `MAILCHIMP_API_KEY`: an existing Mailchimp API key. Its suffix identifies the datacenter, e.g. `us9`. Keep it server-only.
- `MAILCHIMP_AUDIENCE_ID`: the current audience is `bfc2de2d8a`; verify in the audience dashboard before deployment.
- `RESEND_API_KEY`: a Resend sending key.
- `CONTACT_FROM_EMAIL`: a sender on a domain already verified in Resend, for example `Brooklyn Suppers <hello@brooklynsuppers.com>` if that sender/domain is verified. The visitor email is Reply-To; the destination is always `hello@brooklynsuppers.com` and cannot be supplied by a visitor. The owner prefers this forwarding address because it reaches the personal inbox they check.

Never put keys in `NEXT_PUBLIC_` variables, code, commits, screenshots, issue comments, or PR descriptions. The routes return a clear unavailable state when settings are missing. The contact page always includes a direct email fallback. These safe failures are not proof of working delivery.

In Mailchimp, confirm that the audience merge tags are `FNAME`, `LNAME`, and `MMERGE11` (dietary notes). Mark first and last names required in audience settings so other hosted signup paths also enforce the requirement. Check that the audience's confirmation email/form is configured and branded.

## Preview setup verified November 2, 2026

`MAILCHIMP_API_KEY` and `MAILCHIMP_AUDIENCE_ID` are saved as server-only Vercel Preview secrets. The audience dashboard confirms ID `bfc2de2d8a` and merge tags `FNAME`, `LNAME`, and `MMERGE11`; first and last names are now required in Mailchimp as well as the website. The owner-generated key expires November 2, 2027; rotate it before expiry. No credential was saved in source or local files.

Preview deployment `GrvEw1c9fqycZPdUi29EF8tYA3P5` rebuilt commit `e10c078` with the real Mailchimp settings. A controlled plus-alias signup received the pending response and confirmation email; after the owner completed confirmation, the audience showed Subscribed with the submitted names and dietary test note. An existing subscriber received recovery guidance without overwriting their record.

The initial confirmation email arrived in Gmail Spam with DMARC failure while the audience default sender was `ajbesser@gmail.com`. Mailchimp already authenticates `brooklynsuppers.com`. The owner subsequently selected the original forwarding address, `hello@brooklynsuppers.com`, for the site, Contact destination, and Mailchimp sender/replies. This supersedes the earlier `alex@brooklynsuppers.com` choice. The Mailchimp default was updated to `hello@` and its saved value verified; a fresh confirmation email is still needed to verify delivery and authentication after the final sender change. See [Mailchimp's confirmation-email troubleshooting guidance](https://mailchimp.com/help/troubleshoot-the-opt-in-confirmation-email/).

Production environment variables and deployment are unchanged. Contact delivery still needs `RESEND_API_KEY`, a verified `CONTACT_FROM_EMAIL`, and an actual inbox test. Do not treat preview signup evidence as a production or contact-form delivery pass.

## Signup behavior

The new route creates a pending member via the Marketing API. A verified `pending` response displays “Check your inbox to confirm”; it never claims the person is subscribed before confirmation. This deliberately uses double opt-in. Existing members receive contact/recovery guidance without overwriting their data or resubscribing unsubscribed contacts. Provider/network/configuration errors preserve the entered fields and offer retry/contact. The old opaque `no-cors` path is removed.

Both signup placements use the same form. First/last names are validated in the browser and again on the server. The native dialog contains focus, supports Escape and focus restoration, and scrolls within short viewports. Without JavaScript, the initial email step opens `/join` without putting the email into a GET query; complete signup and contact forms submit a native POST. Error pages retain escaped values and never cache personal data.

Honeypots, same-origin request checks, bounded request bodies, and length validation are included. They are modest spam defenses, not a distributed rate limiter. Monitor provider quotas and add managed throttling/Turnstile if abuse appears; do not use an in-memory serverless counter as a reliable limit.

## Before marking BES-145/160/85/101/109 complete

1. Use an owner-approved test mailbox on a preview deployment with the real provider configuration. Enter first/last name and an optional dietary note.
2. Confirm the contact appears in the intended Mailchimp audience as pending, with all merge fields populated. Receive and click its confirmation email; confirm subscribed status afterward.
3. Test an existing subscriber and an unsubscribed address without changing consent/status; verify recovery guidance rather than silently resubscribing.
4. Test invalid names, whitespace-only input, invalid email, a provider rejection, blocked/offline requests, and retry. No failed request may show success.
5. Test both homepage form placements with keyboard only: focus stays inside the modal; Enter submits; Escape closes and focus returns; 844×390/320px layouts keep every field reachable.
6. Submit one owner-approved contact test, confirm receipt in Alex's actual inbox, and confirm Reply-To points to the visitor. An API message ID confirms acceptance, not inbox delivery.
7. After owner review and deployment, repeat the controlled signup/contact smoke tests on production, and record delivery evidence in Linear.

`npm test` covers validation, spam rejection, provider outcomes, configuration failure, native fallback escaping, request limits, and fixed recipient behavior using stubs. It sends no real email and does not modify a Mailchimp audience. Actual iPhone/Safari, Android, Firefox, and VoiceOver checks remain separate from in-app browser QA.

API references: https://mailchimp.com/developer/marketing/api/lists/members/create-member and https://resend.com/docs/api-reference/emails/send-email
