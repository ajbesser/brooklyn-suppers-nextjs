# Monthly site update

## Before editing

Confirm the dinner date/year, public title, full dishes, optional wine details, and approved photos with Alex. Do not infer dates from filenames or add missing dishes. Original photos remain untouched; publish selected web derivatives only after review. Keep the apartment address private, prices in invitation emails, and dietary approval before payment.

## Update deliberately

1. Add the approved public entry to `data/menus.ts` with an ISO `sortDate`. Its sorted export controls the two newest homepage cards and `/dinners`. Check omitted-dish counts against that card's courses; those counts are not numbers of additional dinners.
2. Separately update the hosted-dinner total in `data/stats.ts` when confirmed. It includes dinners without a public menu; never derive it from `menus.length`.
3. `data/dinners-archive.ts` is reference history, not imported by public pages. Update it separately where useful; its `visible` flag does not publish anything. A future shared dataset could reduce drift, but no CMS migration is required.
4. Check homepage menu dates, years, chronological order, no-photo cards, archive wording (“selected” menus), image alt text, and photo captions. Do not claim a complete archive while only selected menus are public.
5. For a confirmed announcement, set `NEXT_PUBLIC_NEXT_DINNER_DATE` in the intended Vercel environment, optionally with `NEXT_PUBLIC_NEXT_DINNER_SPOTS`, then **redeploy**. These values are compiled into the build. Manually maintained seat counts are described as “at last update,” never live inventory. The canceled November banner remains canceled; no date/capacity is inferred.
6. Put a reset on the host's dinner checklist: when sold out or when the dinner ends, remove the banner values and redeploy. Check the live banner disappeared. Avoid leaving an old invitation active indefinitely.

## Review and release

Run `npm run lint`, `npm test`, and `npm run build`. Review desktop/phone previews and submit a PR. Obtain the required owner review before merging/deploying.

After an approved deployment, check the homepage and all public routes, latest-two menus, no broken media, signup/contact delivery with a controlled address, canonical/social tags, `robots.txt`, and `sitemap.xml`. Submit new URLs/sitemap to the owner's Search Console property when applicable. Report actual device/browser coverage separately from simulated widths. Keep provider delivery, indexing, and real-user performance issues open until evidence exists.
