# Brooklyn Suppers Migration Handoff

**Updated:** May 31, 2026
**Status:** Next.js/Vercel migration is complete; remaining work is post-cutover QA and polish.

## Current Source Of Truth

- **Repo:** `ajbesser/brooklyn-suppers-nextjs`
- **Local path:** `/Users/abesser2013/Downloads/brooklyn-suppers-nextjs`
- **Live site:** `https://www.brooklynsuppers.com`
- **Hosting:** Vercel
- **Tracker:** Linear project `Brooklyn Suppers Website`

The previous React/Vite/Railway site is legacy fallback only. Keep it available until final Vercel stability, form QA, and SEO checks are complete, then decommission it through BES-113.

## Completed Migration Work

- Next.js App Router + TypeScript project created
- Components migrated from the Vite site
- Real dinner photos and hero video integrated
- `/dinners` archive created
- Mailchimp signup flow migrated
- SEO metadata, Open Graph, robots, sitemap, and JSON-LD added
- Vercel deployment and custom-domain DNS cutover completed under BES-139

## Remaining Post-Cutover Work

- **BES-143:** Fix menu chronology and homepage latest-two logic
- **BES-144:** Reconcile canonical domain across metadata, sitemap, robots, and JSON-LD
- **BES-145:** Improve signup modal accessibility and confirmation reliability
- **BES-146:** Clean up migration tracking and stale deployment tasks
- **BES-147:** Design polish pass for homepage rhythm, archive hierarchy, and brand finish
- **BES-110/BES-111:** Google Search Console and indexing verification
- **BES-113:** Decommission Railway after stability checks

## Verification Checklist

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Production signup tested with a real email address
- [ ] Desktop and mobile QA completed
- [ ] Safari, Chrome, and Firefox smoke tests completed
- [ ] Sitemap submitted in Google Search Console
- [ ] Railway deployment shut down after stable Vercel period
