# Simba's Compass K9 — Website

A warm, modern marketing site for **Simba's Compass K9, LLC**, a compassionate dog
training company founded by Savannah.

Built as a static, zero-config Next.js site — no forms, logins, payments, booking,
or backend (yet). Just a polished, trustworthy first version, deployed on Netlify.

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

## Deploying to Netlify

This project is deployed on **Netlify** and configured via
[`netlify.toml`](netlify.toml) (build command + Node version). Netlify
auto-detects Next.js and applies its official runtime (`@netlify/plugin-nextjs`),
which handles prerendering and `next/image` optimization.

1. Push the repo to GitHub (the repo must be **public**, or on a paid Netlify
   plan — Netlify's free tier does not deploy private repos owned by an
   organization).
2. In [Netlify](https://app.netlify.com) → **Add new site → Import an existing
   project → Deploy with GitHub**, pick this repository.
3. Build settings are read from `netlify.toml` — no changes needed:
   - Build command: `npm run build`
   - Node: 20
4. Click **Deploy**. Every push to `main` auto-deploys.

After deploying, update `site.url` in [`src/data/site.ts`](src/data/site.ts) to
the production domain so Open Graph/Twitter previews and the sitemap use correct
absolute URLs.

Alternatively, deploy from the CLI:

```bash
npm i -g netlify-cli
netlify login
netlify init     # link the repo and create the site
netlify deploy --prod
```

> **Note on Next.js version:** Netlify blocks deploys on Next.js releases with
> known critical CVEs. Keep `next` on a currently-patched release (this project
> uses the security-backported 15.x line). If a deploy is ever blocked, bump
> `next` to the latest patch and redeploy.

---

## Confirmed details (in `src/data/*`)

- **Founder:** Savannah — 6 years as a veterinary assistant, pursuing LVT
  (Licensed Veterinary Technician) licensure, finishing the Certified Dog
  Trainer course through Liberty K9 Academy.
- **Service area:** Brainerd Lakes Area (central Minnesota).
- **Services:** board & train (specialty), dog training, boarding, daycare,
  in-home pet sitting, drop-in visits, and medical-needs care (specialty).
- **Booking:** handled by **Call of the Wild** (`site.partner`) — the site links
  out to their Facebook page for scheduling.
- **Approach:** balanced training, tailored to the dog in front of us.
- **Story:** Simba (living — Savannah's guiding compass) and Spur (in memoriam).

Still open / not shown until provided:

- Direct phone/email (booking currently routes through Call of the Wild)
- Testimonials (none shown until real ones exist)

Update everything in `src/data/site.ts`, `src/data/services.ts`, and
`src/data/images.ts`.

---

© Simba's Compass K9, LLC. Dog training rooted in patience, trust, and animal care
experience.
