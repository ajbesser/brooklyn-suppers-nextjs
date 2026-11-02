# Dependency maintenance

## November 1, 2026 patch (BES-165)

- Upgrade Next.js and eslint-config-next together from 16.2.6 to 16.4.3.
- Upgrade React and React DOM together from 19.2.4 to the 19.2.9 patch.
- Refresh compatible transitive dependencies without forcing major-version overrides.
- Current full audit: 25 findings before (one critical, eight high, sixteen moderate), sixteen moderate after. The production-only audit is clean.
- The remaining moderate findings cascade from `minimatch <11.0.1` in ESLint/TypeScript lint tooling (GHSA-g3hv-75wg-m249). These packages process repository paths during local/CI linting; they are not part of the production dependency tree. This site accepts no user-supplied glob patterns. This is a limited exposure assessment, not a claim the dependency is fixed. Do not apply npm's suggested downgrade to ESLint 4 or force an incompatible minimatch major. Revisit when compatible upstream tooling releases a fix.

The original app has no `next/og` ImageResponse, remote image patterns, user uploads, custom server, or Server Actions. The framework upgrade includes fixes beyond those paths; absence of those features was not used to defer patching.

## Routine checks

Dependabot opens monthly update PRs. Next/React packages are grouped to make compatibility review easier; updates are never automatically merged. `docs/ci.yml.example` is a ready-to-enable workflow that installs the lockfile, runs lint, available tests, production build, and a high-severity production dependency audit. Copy it to `.github/workflows/ci.yml` using a GitHub credential with workflow permission. The current OAuth credential was explicitly denied that permission; CI is not active from this PR.

For an update, run `npm audit --json` and `npm audit --omit=dev --json`, inspect actual dependency paths with `npm ls`, then verify all public routes, media, metadata, and forms. Keep outstanding advisory details here rather than describing a nonzero full audit as clean.

Maintainer references:
- https://nextjs.org/blog/nextjs-security-update-october-14-2026
- https://github.com/vercel/next.js/releases/tag/v16.4.3
- https://github.com/advisories/GHSA-g3hv-75wg-m249
