# Brooklyn Suppers Owner Review Notes

**Updated:** May 31, 2026

These are human-decision items and future improvements, not blockers for the current Next.js/Vercel site.

## Copy And Content To Revisit

- **Hero stats:** `data/stats.ts` currently tracks dinners hosted and attendees. Update after future dinners.
- **About copy:** The line about starting “a little over three years ago” will eventually become stale. Consider changing to a specific year.
- **Menu archive:** Public menus live in `data/menus.ts`. Add new dinners with a `sortDate` so homepage and archive order stay correct.
- **Footer year:** `© 2026` should be revisited in January 2027.
- **Instagram:** Footer and structured data point to `@brooklynsuppers`; verify this remains the preferred handle.

## Design Opportunities

- **Typographic wordmark:** A restrained masthead-style wordmark would make the header feel more finished without making the site feel commercial.
- **Archive hierarchy:** The `/dinners` page is useful and crawlable; it could feel more editorial with a stronger date/title/photo rhythm.
- **Mobile CTA calmness:** The hero works on mobile, but the first screen carries headline, stats, signup, nav CTA, and image/video in a small space.
- **Reduced-motion rendering:** Scroll/reveal behavior should be checked so content remains visible and complete for reduced-motion users and automated screenshots.

## Operational Opportunities

- **Production Mailchimp test:** Submit a real test email and confirm it reaches the intended audience.
- **Google Search Console:** Add the canonical `www` property and submit the sitemap.
- **Railway decommissioning:** Once Vercel has been stable and QA is complete, shut down the old Railway deployment to avoid drift and unnecessary cost.
- **Next dinner system:** Consider a simple content/config path for announcing the next dinner without code edits.
