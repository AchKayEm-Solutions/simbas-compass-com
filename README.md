# Simba's Compass — Website

A warm, modern marketing site for **Simba's Compass, LLC**, a compassionate dog
training company founded by Savannah.

Built as a static, zero-config Next.js site — no forms, logins, payments, booking,
or backend (yet). Just a polished, trustworthy first version ready to deploy to
Vercel.

> _"Helping dogs and their people find their way together."_

---

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **next/font** (Fraunces display serif + Nunito Sans body)
- SEO via the Next.js **Metadata API** (+ `sitemap.ts` / `robots.ts`)
- No runtime dependencies beyond React/Next — lightweight and fast

---

## Getting started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install          # install dependencies
npm run dev          # start the dev server at http://localhost:3000
npm run build        # production build
npm run start        # serve the production build locally
```

---

## Project structure

```
public/
  images/                 # photos + generated placeholder images
  favicon.svg
scripts/
  generate-placeholders.mjs   # regenerates on-brand SVG placeholders
src/
  app/
    layout.tsx            # root layout, fonts, header/footer, base metadata
    page.tsx              # Home
    about/page.tsx        # About Savannah + "meaning behind the name"
    services/page.tsx     # Services (editable placeholders)
    philosophy/page.tsx   # Training philosophy
    gallery/page.tsx      # Photo gallery + testimonials placeholder
    contact/page.tsx      # Contact (no form — details coming soon)
    not-found.tsx         # 404
    sitemap.ts, robots.ts # SEO
    globals.css           # Tailwind layers, base styles, reduced-motion
  components/             # reusable UI (Header, Hero, cards, Reveal, etc.)
  data/
    site.ts               # ⭐ site config: contact, socials, nav, SEO
    images.ts             # ⭐ image manifest — one place to swap photos
    services.ts           # ⭐ service cards (placeholder copy)
tailwind.config.ts        # brand palette, fonts, animations
```

The three ⭐ files in `src/data/` are where nearly all content edits happen —
you rarely need to touch component code.

---

## Editing content

### Contact info, socials, service area, SEO

Everything lives in [`src/data/site.ts`](src/data/site.ts). Values are currently
**placeholders** (phone, email, service area, socials). Replace them and they
update across the whole site automatically. To activate a social link, give it a
real `href`; leave it `""` to keep showing "coming soon."

### Services

Edit [`src/data/services.ts`](src/data/services.ts). Titles, descriptions,
"best for," and status are all editable. Pricing/availability currently show
**"Details coming soon"** — no prices are invented.

### Swapping in real photos

All images are referenced through [`src/data/images.ts`](src/data/images.ts), so
you never dig through components.

The repo ships with tasteful, on-brand **SVG placeholders** in `public/images/`.
To use real photos:

1. Drop the photo into `public/images/` (e.g. `savannah-dog-hero.jpg`).
2. Change that entry's `src` in `src/data/images.ts` to the new file
   (e.g. `/images/savannah-dog-hero.jpg`).
3. Update the `alt` text to describe the actual photo (important for
   accessibility and SEO).

For the gallery, edit the `galleryImages` array in the same file — add or remove
entries freely; the masonry grid adapts.

To regenerate the placeholder set:

```bash
npm run images:placeholders
```

---

## Design & accessibility notes

- **Palette:** soft cream background, deep forest green, muted sage, caramel/tan
  accents, charcoal text, and a subtle gold for the compass theme.
- **Motion:** fade/slide-in on scroll, hover lift on cards, subtle hero float —
  all gated behind `prefers-reduced-motion` (reduced-motion users get a calm,
  static experience).
- **Accessibility:** semantic HTML, a skip link, keyboard-navigable mobile nav
  and gallery lightbox, visible focus states, and descriptive alt text.
- **Honesty:** no fake testimonials, no invented prices, no guaranteed-results
  claims, and no medical/behaviorist claims.

---

## Deploying to Vercel

This project is zero-config on Vercel.

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Framework preset auto-detects **Next.js** — no settings to change.
   - Build command: `next build`
   - Output: handled automatically
4. Click **Deploy**.

After deploying, update `site.url` in [`src/data/site.ts`](src/data/site.ts) to
your production domain so Open Graph/Twitter previews and the sitemap use correct
absolute URLs.

Alternatively, deploy from the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## Still to confirm (placeholders in the site)

These are intentionally left as placeholders until confirmed:

- Service area / city
- Final list of services + availability + pricing
- Exact certification name and wording
- Phone, email, and social links
- Any testimonials (none are shown until real ones exist)

Update them in `src/data/*` when ready.

---

© Simba's Compass, LLC. Dog training rooted in patience, trust, and animal care
experience.
