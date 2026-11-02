# Brooklyn Suppers

Next.js site for [Brooklyn Suppers](https://www.brooklynsuppers.com), a monthly supper club in Brooklyn.

## Current Stack

- **Framework:** Next.js App Router + TypeScript
- **Hosting:** Vercel
- **Canonical URL:** `https://www.brooklynsuppers.com`
- **Newsletter:** Mailchimp signup endpoint
- **Analytics:** Vercel Analytics for visits; Speed Insights for performance measurements

The older React/Vite/Railway site is legacy fallback only and should not be treated as the source of truth.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run lint
npm run build
```

## Content Updates

- Homepage sections live in `components/`.
- Public menu cards and the `/dinners` archive use `data/menus.ts`.
- Hero stats use `data/stats.ts`.
- Shared site metadata uses `data/site.ts`.
- Images belong in `public/images/`; hero video/poster assets live in `public/`.

When adding a new public menu, add a `sortDate` in ISO format so homepage and archive ordering remain deterministic.

## Deployment

Vercel deploys from the GitHub repo. After content or metadata changes, verify:

- `npm run lint`
- `npm run build`
- `npm test` (Node 22.6+; mocked provider tests send no real email)

Set up the server-only form credentials before deploying signup/contact changes:
[forms setup and delivery checks](docs/forms-setup.md).
For dinner content and announcements, follow the [monthly update checklist](docs/monthly-update.md).
For lab/field performance evidence and free-plan monitoring, see [performance checks](docs/performance-checks.md).
- Homepage renders correctly on desktop and mobile
- `/dinners` remains reverse chronological
- `robots.txt`, `sitemap.xml`, Open Graph, and JSON-LD use the canonical `www` URL
