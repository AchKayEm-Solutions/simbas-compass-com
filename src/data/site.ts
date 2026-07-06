// -----------------------------------------------------------------------------
// Central site configuration.
//
// Everything here is safe to edit without touching component code. Values marked
// PLACEHOLDER are intentionally not real — they are waiting on Savannah's answers
// (service area, phone, email, socials, certification name). Update them here and
// they flow through the whole site.
// -----------------------------------------------------------------------------

export const site = {
  name: "Simba's Compass",
  legalName: "Simba's Compass, LLC",
  tagline: "Dog training rooted in patience, trust, and animal care experience.",
  // Used for absolute URLs in metadata / Open Graph. Update to the real domain
  // once it's live on Vercel.
  url: "https://simbas-compass.com",
  founder: "Savannah",

  seo: {
    defaultTitle: "Simba's Compass | Dog Training",
    titleTemplate: "%s | Simba's Compass",
    description:
      "Compassionate dog training focused on trust, confidence, and clear communication between dogs and their people.",
  },

  // PLACEHOLDER contact details — replace with real values when confirmed.
  contact: {
    phone: "(000) 000-0000",
    phoneNote: "Placeholder — real number coming soon",
    email: "hello@simbas-compass.com",
    emailNote: "Placeholder — real address coming soon",
    serviceArea: "Your local area",
    serviceAreaNote: "Placeholder — service area coming soon",
  },

  // PLACEHOLDER social links. Set `href` to a real URL to activate a link;
  // leave as "" to render it as "coming soon".
  socials: [
    { label: "Instagram", href: "", handle: "@simbascompass" },
    { label: "Facebook", href: "", handle: "Simba's Compass" },
    { label: "TikTok", href: "", handle: "@simbascompass" },
  ],

  // Footer build credit. Set `href` to a URL to make it a link; leave "" for text.
  builtBy: {
    name: "AchKayEm Solutions",
    href: "https://achkayem-solutions.com",
  },

  // A single flag so the whole site can honestly say details aren't final yet.
  detailsComingSoon: true,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
