# Brooklyn Suppers - Next.js Migration Handoff

**Date:** May 30, 2026  
**Status:** Phase 1 Complete, Phase 2 Started  
**Linear Project:** https://linear.app/besser/project/brooklyn-suppers-website-dcc1b8834991

---

## 🎯 Goal

Migrate Brooklyn Suppers from Vite/React → Next.js and deploy to Vercel for proper SEO (currently not indexed by Google due to client-side rendering).

---

## ✅ What's Complete

### Phase 1: Next.js Setup (Issues BES-86, BES-87, BES-88)

**Location:** `/Users/abesser2013/Downloads/brooklyn-suppers-nextjs/`

1. ✅ Next.js 15 project created with:
   - TypeScript
   - Tailwind CSS v4 (new inline config system)
   - App Router
   - ESLint

2. ✅ Tailwind configured in `app/globals.css`:
   ```css
   @theme inline {
     --color-cream: #faf6ee;
     --color-tan: #d4c4ad;
     --color-terracotta: #a04e33;
     --color-dark: #2a1f16;
     --color-brown: #4a3a2a;
     --color-light-tan: #e8dcc8;
     --color-warm-tan: #c4b5a0;
   }
   ```

3. ✅ Google Fonts configured in `app/layout.tsx`:
   - Newsreader (serif) - headings & body
   - Kalam (cursive) - accent text
   - Loaded via `next/font/google` for optimal performance

4. ✅ SEO metadata configured in `app/layout.tsx`:
   - Title: "Brooklyn Suppers — A Monthly Table in Bed-Stuy"
   - Meta description optimized
   - Open Graph tags
   - Twitter Card tags
   - Favicon configured

5. ✅ Folder structure created:
   ```
   /app
     layout.tsx (✓ configured)
     globals.css (✓ configured)
     page.tsx (needs updating)
   /components
     Hero.tsx (✓ migrated)
   /public
     /images (empty - needs assets)
     /videos (empty - needs assets)
   ```

### Phase 2: Component Migration (Started)

1. ✅ **Hero.tsx** migrated and ready
   - "use client" directive added (uses useState)
   - Mailchimp form integration preserved
   - Video + email signup working
   - Font variables updated (`var(--font-newsreader)`, `var(--font-kalam)`)
   - Image paths updated to use `/images/` and `/videos/`

---

## 📋 What's Left

### Immediate: Phase 2 - Component Migration

**Source:** `/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/src/app/components/`

#### Issue BES-90: Nav Component
- **File:** `nav.tsx`
- **Action:** Copy and adapt (may need "use client" if interactive)
- **Destination:** `components/Nav.tsx`

#### Issue BES-91: About Component
- **File:** `about.tsx`
- **Action:** Copy, update image imports to use Next.js Image
- **Destination:** `components/About.tsx`
- **Note:** Has one image - needs to be copied to `/public/images/`

#### Issue BES-92: Menus Component
- **File:** `menus.tsx`
- **Action:** Copy, update image imports for menu cards
- **Destination:** `components/Menus.tsx`
- **Note:** Has menu card photos - copy to `/public/images/`

#### Issue BES-93: What to Expect Component
- **File:** `what-to-expect.tsx`
- **Action:** Simple copy (likely no images)
- **Destination:** `components/WhatToExpect.tsx`

#### Issue BES-94: Save a Seat Component
- **File:** `save-a-seat.tsx`
- **Action:** Copy, add "use client" (has scroll functionality)
- **Destination:** `components/SaveASeat.tsx`
- **Note:** Has smooth scroll to Hero - needs "use client"

#### Issue BES-95: Footer Component
- **File:** `footer.tsx`
- **Action:** Simple copy
- **Destination:** `components/Footer.tsx`

---

### Phase 3: Assets & Integrations

#### Issue BES-96: Optimize Images
**Action:** Copy images from old project to new project using Next.js Image component

**Source images location:**
- Old project: `/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/src/assets/`
- Old public: `/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/public/`

**Images to copy:**

| Old Path | New Path | Used In |
|----------|----------|---------|
| `src/assets/2108354b80ceaa608fa1fc4709e4197af793e1cb.jpg` | `public/images/hero-people.jpg` | Hero.tsx |
| `src/assets/9e68f8793e6f67c0fd5130f78ea97da9bed1c275.jpg` | `public/images/hero-food.jpg` | Hero.tsx |
| `src/assets/96badee1e513008ebf5530cdd0f07ca6fdd47237.jpg` | `public/images/menu-*.jpg` | Menus.tsx |
| `src/assets/a474695a0abc603be21cff6b77f41bb42daf2c78.png` | `public/images/about.png` | About.tsx |

**Command to copy images:**
```bash
cd "/Users/abesser2013/Downloads/brooklyn-suppers-nextjs"
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/src/assets/2108354b80ceaa608fa1fc4709e4197af793e1cb.jpg" public/images/hero-people.jpg
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/src/assets/9e68f8793e6f67c0fd5130f78ea97da9bed1c275.jpg" public/images/hero-food.jpg
# ... repeat for all images
```

#### Issue BES-97: Set up Video Files
**Action:** Copy optimized video to public folder

```bash
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/public/hero-video.mp4" public/videos/hero-video.mp4
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/public/hero-poster.jpg" public/images/hero-poster.jpg
```

#### Issue BES-98: Google Fonts
✅ **Already done** in `app/layout.tsx`

#### Issue BES-99: Static Files
**Action:** Copy static files

```bash
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/public/favicon.svg" public/favicon.svg
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/public/og-image.jpg" public/og-image.jpg
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/public/robots.txt" public/robots.txt
cp "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/public/sitemap.xml" public/sitemap.xml
```

Update sitemap.xml lastmod date to current date.

#### Issue BES-100: Configure Metadata
✅ **Already done** in `app/layout.tsx`

#### Issue BES-101: Test Mailchimp Integration
**Action:** After deploying to Vercel, test the email signup form

---

### Phase 4: Deployment & DNS

#### Issue BES-102: Create Vercel Project

**Prerequisites:**
1. Create new GitHub repository: `brooklyn-suppers-nextjs`
2. Initialize git and push:
   ```bash
   cd brooklyn-suppers-nextjs
   git add .
   git commit -m "Initial Next.js migration"
   git remote add origin https://github.com/ajbesser/brooklyn-suppers-nextjs.git
   git branch -M main
   git push -u origin main
   ```

**Vercel Setup:**
1. Go to https://vercel.com
2. Sign up/login (free Hobby tier)
3. Click "Add New Project"
4. Import `ajbesser/brooklyn-suppers-nextjs`
5. Framework: Next.js (auto-detected)
6. Deploy (no configuration needed)

#### Issue BES-103: Verify Build
- Check build logs in Vercel
- Test preview URL
- Verify all assets load

#### Issue BES-104: Add Custom Domain
1. Vercel → Project Settings → Domains
2. Add: `brooklynsuppers.com`
3. Copy DNS records provided

#### Issue BES-105: Update DNS (CRITICAL)
**In Porkbun:**
1. Go to Domain Management → brooklynsuppers.com → DNS
2. **Edit** existing ALIAS record (currently points to Railway)
3. **Change target** from Railway to Vercel DNS
4. Use DNS records from previous step

**Current DNS:**
- ALIAS: brooklynsuppers.com → txt3c8h.up.railway.app

**New DNS (from Vercel):**
- Will be either A record or CNAME - copy exactly from Vercel

**DNS Propagation:** 5-30 minutes

#### Issue BES-106: Verify HTTPS
- Visit https://brooklynsuppers.com
- Check for green padlock
- Vercel auto-provisions SSL (Let's Encrypt)

---

### Phase 5: Testing & Launch

#### Issue BES-107: Cross-browser Testing
Test in Safari, Chrome, Firefox (desktop & mobile)

#### Issue BES-108: Mobile Testing
Test on iPhone and Android

#### Issue BES-109: Test Forms
- Submit test email to Mailchimp
- Verify it arrives in Mailchimp audience
- Test on mobile

#### Issue BES-110: Google Search Console
1. https://search.google.com/search-console
2. Add property: brooklynsuppers.com
3. Verify ownership (DNS TXT record recommended)
4. Submit sitemap: https://brooklynsuppers.com/sitemap.xml
5. Request indexing for homepage

#### Issue BES-111: Verify SEO
- Run Lighthouse audit (aim for 90+ scores)
- Check `site:brooklynsuppers.com` in Google (should start appearing after a few days)
- Verify OG tags: https://www.opengraph.xyz/
- Verify Twitter Card: https://cards-dev.twitter.com/validator

#### Issue BES-112: Monitor Performance
- Enable Vercel Analytics (free)
- Check Core Web Vitals
- Monitor error logs

#### Issue BES-113: Decommission Railway
**Wait 48 hours after Vercel is live, then:**
1. Verify no traffic going to Railway
2. Delete Railway deployment
3. Keep Railway account for future projects
4. Remove `railway.json` from old Vite repo

---

## 🔧 Component Migration Pattern

When copying components from old project:

1. **Read the old component:**
   ```bash
   cat "/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/src/app/components/COMPONENT_NAME.tsx"
   ```

2. **Add "use client" if needed:**
   - Uses `useState`, `useEffect`, `useRef`
   - Has event handlers (`onClick`, `onChange`, etc.)
   - Uses browser APIs

3. **Update imports:**
   ```tsx
   // OLD (Figma/Vite):
   import imgExample from "figma:asset/abc123.png";
   import imgExample from "@/assets/abc123.jpg";
   
   // NEW (Next.js):
   import Image from "next/image";
   // Use: <Image src="/images/example.jpg" />
   ```

4. **Update fonts:**
   ```tsx
   // OLD:
   fontFamily: "Newsreader, serif"
   fontFamily: "Kalam, cursive"
   
   // NEW:
   fontFamily: "var(--font-newsreader)"
   fontFamily: "var(--font-kalam)"
   ```

5. **Update images:**
   ```tsx
   // OLD:
   <img src={imgExample} alt="..." />
   
   // NEW:
   <Image 
     src="/images/example.jpg" 
     alt="..."
     width={500}
     height={300}
     // OR for fill layouts:
     fill
     className="object-cover"
   />
   ```

---

## 📝 Update app/page.tsx

After migrating all components, update `app/page.tsx`:

```tsx
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Menus } from "@/components/Menus";
import { WhatToExpect } from "@/components/WhatToExpect";
import { SaveASeat } from "@/components/SaveASeat";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <WhatToExpect />
      <Menus />
      <SaveASeat />
      <Footer />
    </>
  );
}
```

---

## 🧪 Testing Locally

```bash
cd brooklyn-suppers-nextjs
npm run dev
# Visit http://localhost:3000
```

**What to check:**
- All sections render
- Video autoplays (desktop)
- Email form works
- Hover animations work
- Mobile responsive
- No console errors
- Fonts load correctly

---

## 🚀 Deployment Checklist

Before going live:

- [ ] All components migrated
- [ ] All images copied to `/public/images/`
- [ ] Video copied to `/public/videos/`
- [ ] Static files (favicon, og-image, robots.txt, sitemap.xml) copied
- [ ] Tested locally (npm run dev)
- [ ] No TypeScript errors (npm run build)
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] DNS updated in Porkbun
- [ ] HTTPS working
- [ ] Email form submits to Mailchimp
- [ ] Site tested on mobile
- [ ] Google Search Console set up
- [ ] Sitemap submitted

---

## 📞 Important Links

- **Linear Project:** https://linear.app/besser/project/brooklyn-suppers-website-dcc1b8834991
- **Old Vite Project:** `/Users/abesser2013/Downloads/Figma Design File - Brooklyn Suppers/`
- **New Next.js Project:** `/Users/abesser2013/Downloads/brooklyn-suppers-nextjs/`
- **Current Live Site (Railway):** https://brooklynsuppers.com
- **Mailchimp Form:** https://instagram.us9.list-manage.com/subscribe/post?u=2dc474f2d0acdfb6984a19dec&id=bfc2de2d8a&f_id=0055eee1f0
- **Vercel:** https://vercel.com
- **Porkbun DNS:** https://porkbun.com (Domain Management → brooklynsuppers.com)

---

## 💡 Tips

1. **Work in Linear order** - Issues are sequenced for a reason
2. **Test frequently** - Run `npm run dev` after each component
3. **Mark issues done** - Update Linear as you complete tasks
4. **Commit often** - Git commit after each working component
5. **Ask for help** - If stuck, the pattern is in Hero.tsx
6. **Keep Railway running** - Until Vercel is fully tested (48 hours)

---

## ⚠️ Common Issues

**Build errors about Image component:**
- Make sure to import: `import Image from "next/image";`
- Provide width/height OR use `fill` prop

**Fonts not loading:**
- Check layout.tsx has font variables in className
- Verify globals.css has `--font-newsreader` and `--font-kalam`

**"use client" needed:**
- If component uses hooks (useState, useEffect, etc.)
- If component has event handlers

**Images 404:**
- Verify images are in `/public/images/` (not `/public/`)
- Paths should be `/images/name.jpg` (not `/public/images/`)

---

## 🎯 Next Session Start Here

1. Open this file: `MIGRATION_HANDOFF.md`
2. Check Linear: https://linear.app/besser/project/brooklyn-suppers-website-dcc1b8834991
3. Start with next incomplete issue (likely BES-90: Nav Component)
4. Follow the **Component Migration Pattern** above
5. Test locally after each component
6. Mark Linear issues complete as you go

**Estimated remaining time:** 3-4 hours

Good luck! 🚀
