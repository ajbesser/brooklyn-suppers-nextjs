# Brooklyn Suppers — Owner Review Notes

*Generated during the autonomous improvement session — things I found that need a human decision.*

---

## 📝 Copy That Needs Updating

### Stats in Hero section (`components/Hero.tsx:79`)
```
"22 dinners hosted"
"150+ new and returning attendees"
```
Update these after each dinner. They're hardcoded — consider making them easy to find or moving to a config file if you update frequently.

### "Three years ago" in About (`components/About.tsx:35`)
> "Brooklyn Suppers started a little over three years ago…"

This will become stale. Consider changing to a specific year: *"since 2022"* or *"since 2023"*. Readers will notice if the site says "three years ago" for three years running.

### Menus component (`components/Menus.tsx`)
The May and April menu course lists are hardcoded. After each dinner, the oldest menu should rotate out and the newest one in. Consider a simple JSON file at `data/menus.ts` so you can update menus without touching component code.

### Footer copyright year (`components/Footer.tsx:45`)
`© 2026` — this is fine for now but will need updating in January.

### Instagram handle in Footer
The link points to `https://instagram.com/brooklynsuppers` — verify this is the correct handle before launch.

---

## 📸 Images Worth Adding

### 1. Portrait of the host (highest impact)
A single warm, candid photo of you in the kitchen or at the table would add enormous personality. Currently the site has no human face — just food and gatherings. People book a seat because they trust *you*. Even one photo in the About section changes the feel completely.

### 2. More dinner photos for the Menus section
The April menu card has no photo (only May does). A second dinner photo would make the Menus section feel richer and more balanced. Warm, candid shots of the actual food plated at the table work better than styled food photography here.

### 3. Market / prep photos
A photo of you at the farmers market or prepping in the kitchen would reinforce the "seasonal, intentional cooking" narrative. Could live in About or WhatToExpect.

### 4. The table set before guests arrive
An "empty table" photo — the candles lit, wine glasses out, plates ready — is a classic hospitality image that conveys intimacy and care. Would be beautiful in the WhatToExpect section alongside the blockquote.

---

## 🔧 Services Worth Integrating

### 1. Vercel Analytics (free, 1 hour of work)
Already mentioned in the handoff. Vercel's analytics dashboard gives you page views, Core Web Vitals, and geography — zero third-party script overhead since it runs at the edge.

**How:** Add `import { Analytics } from '@vercel/analytics/react'` to `app/layout.tsx` after installing `@vercel/analytics`.

---

### 2. Instagram feed embed (medium effort, high visual impact)
Embedding your most recent 4–6 Instagram posts on the site would:
- Keep the page feeling fresh without code deploys
- Provide instant social proof
- Surface the food photography you're already creating

**Options:**
- **Elfsight** (no-code, ~$5/mo) — simple embed script
- **Instagram Basic Display API** (free, requires app approval, ~4 hours dev work)
- **Behold.so** (~$7/mo) — the easiest developer-friendly Instagram embed

A good location: between the Menus section and SaveASeat, or in the Footer area.

---

### 3. Typeform or Tally for RSVP (medium effort, high UX impact)
Currently the flow is: join email list → receive RSVP email → fill in RSVP via email reply or separate form. A dedicated RSVP form embedded directly on the site would:
- Capture dietary notes, guest count, and +1 info upfront
- Reduce back-and-forth emails
- Give you structured data

**Tally.so** is free, beautiful, and easy to embed. You could create a form with:
- Name + email
- Dietary restrictions (checkboxes)
- Guest count (you + how many)
- "How did you hear about us?"
- Free text for anything else

Embed it in the SaveASeat section or as a modal from the "Hear first" button (post-email-capture).

---

### 4. Google Analytics 4 (free, 30 min setup)
Once deployed to Vercel, add GA4 to understand:
- Where visitors are coming from (Instagram, word of mouth, search)
- How far down the page they scroll
- Which CTA they click

**How in Next.js:** Use the `<Script>` component in `app/layout.tsx` with `strategy="afterInteractive"` to avoid impacting Core Web Vitals.

---

### 5. Simple "next dinner" announcement system
When the next dinner is scheduled, you currently have no way to surface it on the homepage without a code change. A few options:

**Easy (1 hour):** Add an environment variable `NEXT_PUBLIC_NEXT_DINNER_DATE` in Vercel. Create a `components/DinnerBanner.tsx` that reads it and shows a banner:
> *"Next dinner: June 14 — join the list for access"*

Set the env var in Vercel when a dinner is announced; it redeploys automatically.

**Medium (half day):** A Notion database or Airtable that the site reads from via their API. Update the dinner details in Notion, site reflects it within minutes via ISR (Incremental Static Regeneration).

---

### 6. Email list segmentation via Mailchimp tags
When someone signs up, tag them in Mailchimp based on:
- How they found the site (add a hidden field to the form)
- Their first dinner date (tag them after they attend)

This enables you to send targeted emails: "returning guests" get different language than "new list members."

---

## 🎨 UI Polish Ideas (Low-hanging fruit)

### Add a `data/menus.ts` config file
Move the menu data out of `Menus.tsx` into a structured data file. Makes it easy to add new menus without touching component logic:
```ts
// data/menus.ts
export const menus = [
  { month: "June", theme: "...", courses: [...], photo: "/images/menu-june.jpg" },
  { month: "May", theme: "...", courses: [...], photo: "/images/menu-may.jpg" },
]
```
The component renders `menus.slice(0, 2)` — easy to update.

### Active section highlighting in the Nav
The nav could highlight which section is currently in view (e.g., "About" becomes slightly darker when the About section is on screen). This uses IntersectionObserver on each section — the same pattern as RevealSection.

### Subtle grain texture on hero background
The tan hero background (`#d4c4ad`) is clean but could have a very subtle paper grain texture via CSS `background-image: url("noise.svg")` with low opacity. This is a common technique to give warmth to flat color backgrounds. Takes about 20 minutes.

### Photo captions with Kalam font
Currently only the About and Menus sections have Kalam captions under photos. If you add more photos, apply the same caption style consistently — it's a distinctive brand detail.

---

## 🚀 Deployment Checklist (Once you're back)

1. Create GitHub repo `ajbesser/brooklyn-suppers-nextjs` (git push will work then)
2. Connect to Vercel → auto-deploys on every push to main
3. Add custom domain `brooklynsuppers.com` in Vercel
4. Update Porkbun DNS: replace Railway ALIAS with Vercel's A or CNAME record
5. Test Mailchimp form on production URL (Mailchimp requires exact domain)
6. Submit sitemap to Google Search Console
7. Test on iPhone Safari and Chrome Android
8. Keep Railway running for 48h while Vercel stabilizes
