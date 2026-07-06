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
  motto: "In honor of the dogs who guide us — and the ones who change us.",
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

  contact: {
    serviceArea: "Brainerd Lakes Area",
    serviceAreaNote: "Central Minnesota",
  },

  // Savannah offers her services through Call of the Wild, who handle booking
  // and scheduling. This is the primary way clients reach her for now.
  partner: {
    name: "Call of the Wild",
    href: "https://www.facebook.com/share/1D9njYaLL8/?mibextid=wwXIfr",
    blurb:
      "Simba's Compass services are offered through Call of the Wild, who handle booking, availability, and scheduling.",
  },

  socials: [
    {
      label: "Call of the Wild on Facebook",
      href: "https://www.facebook.com/share/1D9njYaLL8/?mibextid=wwXIfr",
      handle: "Call of the Wild",
    },
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
