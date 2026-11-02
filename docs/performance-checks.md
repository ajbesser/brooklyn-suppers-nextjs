# Performance monitoring

Web Analytics and Speed Insights serve different purposes. The existing Analytics component records visits. Speed Insights measures real-browser FCP, LCP, INP, CLS and TTFB through the Next.js component in the root layout.

## November 2, 2026 baseline

- Web Analytics is already active on the Hobby project. Production, last seven days: 16 visitors, 26 page views, 69% bounce rate; 69% of visits on iOS. This is a small sample, not a conversion diagnosis.
- Speed Insights showed its setup instructions and **No events collected**. The site lacked `@vercel/speed-insights`; adding the SDK addresses that collection gap. It does not establish passing field metrics before release and sufficient visits.
- Existing production homepage [PageSpeed report](https://pagespeed.web.dev/analysis/https-www-brooklynsuppers-com/8jw5h62332?form_factor=mobile): mobile Performance 99, LCP 0.9s, TBT 10ms, CLS 0; desktop Performance 100, LCP 0.4s, TBT 0, CLS 0. Field experience says No Data. This was measured before the review PRs were published.

## Preview collection verified

On November 2, the authenticated PR #11 preview rendered in native Chrome. After a controlled homepage visit and signup-dialog interaction without submitting, the Vercel Speed Insights **Preview** environment showed **6 events** and a Real Experience Score of 98. This verifies collection from the review preview; it is a tiny controlled sample, not evidence of passing production or real-visitor Core Web Vitals. Production remains on the previous code.

The native Chrome check also confirmed the browser's explicit **200%** zoom setting, readable/reflowed homepage signup controls and responsive navigation, and dialog first-name focus/Escape restoration. Zoom was restored to 100%. The default Runtime Logs view showed no entries in its last-30-minutes window; no broader error-free or delivery claim is made.

## Free-plan scope

The project is on Vercel Hobby. [Vercel's documented limits](https://vercel.com/docs/speed-insights/limits-and-pricing) include Speed Insights for one Hobby project, 10,000 data points and a seven-day reporting window. No Plus/Pro upgrade, trial, paid feature or account setting is enabled by this code change. Recheck plan/limits before any future plan change.

Use the official `@vercel/speed-insights/next` component alongside existing Analytics. Keep the root layout server-rendered; the SDK supplies its own client boundary/Suspense wrapper. No API key, custom identity, custom event or session replay is added. Vercel describes [anonymous data collection](https://vercel.com/docs/speed-insights/privacy-policy).

## Verify after a review preview and approved release

1. In a Vercel-hosted preview, load a public route and confirm `/_vercel/speed-insights/script.js` loads. Local Next start does not host this platform script; a local 404 alone is not a deployment defect.
2. Navigate among public routes, then check the appropriate Preview environment in Speed Insights. Record actual event receipt rather than treating a successful build as collection evidence.
3. After an owner-approved production release, verify the Production environment collects measurements. Assess LCP, CLS and INP at the 75th percentile with sufficient real visits. FID is obsolete; TBT from a lab audit is not field INP.
4. Review runtime logs and asset errors separately. Record the observed environment/time window; no recent logs is not proof the unshipped Contact route works.

Email routing is deferred. Performance verification must not trigger newsletter subscriptions or Contact delivery tests.
