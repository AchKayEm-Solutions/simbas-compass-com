// -----------------------------------------------------------------------------
// Image manifest — the ONE place to manage photos.
//
// Every image on the site is referenced by a key from this file, so swapping a
// photo never means digging through components. To replace a photo:
//   1. Drop the new photo into /public/images
//   2. Change that entry's `src` below
//   3. Update `alt` to describe the actual photo (important for accessibility)
//   4. Update `width`/`height` to the real pixel dimensions (keeps layout tidy)
// -----------------------------------------------------------------------------

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const IMG = "/images";

export const images = {
  // Savannah teaching Simba, her white husky, to "shake" on a tree-lined path.
  hero: {
    src: `${IMG}/hero.jpg`,
    alt: "Savannah training Simba, her white husky, to shake a paw on a forest path",
    width: 1588,
    height: 2048,
  },
  // Savannah kneeling in a sunlit meadow with a tan dog at her side.
  animalCare: {
    src: `${IMG}/animal-care.jpg`,
    alt: "Savannah kneeling in a sunlit grassy field beside a relaxed tan dog",
    width: 2048,
    height: 1366,
  },
  // Savannah sitting on a tree-lined road, smiling, with a white husky-type dog.
  portrait: {
    src: `${IMG}/portrait.jpg`,
    alt: "Savannah sitting cross-legged on a wooded road, smiling, next to a white dog",
    width: 1024,
    height: 682,
  },
  // Simba, Savannah's white husky and the living dog the company is named for.
  simba: {
    src: `${IMG}/simba.jpg`,
    alt: "Simba, a happy white husky in a blue bandana, sitting at Savannah's feet",
    width: 1024,
    height: 682,
  },
  // Spur, the rescue dog who reshaped Savannah as a trainer (1 in memoriam).
  spur: {
    src: `${IMG}/spur.jpg`,
    alt: "Spur, a red rescue dog, gazing up affectionately at Savannah on a forest path",
    width: 683,
    height: 1024,
  },
  // A real training moment: offering a reward to a focused dog in a field.
  trainingSession: {
    src: `${IMG}/training-session.jpg`,
    alt: "Savannah rewarding an attentive red dog during an outdoor training session",
    width: 1366,
    height: 2048,
  },
  // The Simba's Compass logo (compass emblem with a person and two dogs).
  logo: {
    src: `${IMG}/logo.jpg`,
    alt: "Simba's Compass logo — a compass with a person walking two dogs",
    width: 360,
    height: 360,
  },
  // AchKayEm Solutions (site builder) logo — white version for the dark footer.
  builderLogo: {
    src: `${IMG}/achkayem-logo-white.webp`,
    alt: "AchKayEm Solutions",
    width: 500,
    height: 500,
  },
  // Social share image (Open Graph / Twitter). Reuses the warm meadow photo.
  ogDefault: {
    src: `${IMG}/animal-care.jpg`,
    alt: "Simba's Compass — Savannah with a dog in a sunlit field",
    width: 2048,
    height: 1366,
  },
} satisfies Record<string, SiteImage>;

// Gallery photos. Add or remove entries freely — the masonry grid adapts.
// Dimensions match the real files so the layout is correct on first paint.
export const galleryImages: SiteImage[] = [
  {
    src: `${IMG}/gallery-01.jpg`,
    alt: "Savannah sitting on a wooded road smiling beside a calm white dog",
    width: 1024,
    height: 682,
  },
  {
    src: `${IMG}/gallery-02.jpg`,
    alt: "A red dog gazing up affectionately at Savannah on a forest path",
    width: 683,
    height: 1024,
  },
  {
    src: `${IMG}/gallery-03.jpg`,
    alt: "A happy white dog in a blue bandana sitting between Savannah's boots",
    width: 1024,
    height: 682,
  },
  {
    src: `${IMG}/gallery-04.jpg`,
    alt: "Savannah gently handling a small brown rescue puppy on a leash",
    width: 1536,
    height: 2048,
  },
  {
    src: `${IMG}/gallery-05.jpg`,
    alt: "A smiling red dog wearing an 'in training / adopt me' vest indoors",
    width: 1536,
    height: 2048,
  },
  {
    src: `${IMG}/gallery-06.jpg`,
    alt: "A tan shepherd-mix playing with a toy in a fenced training yard",
    width: 1152,
    height: 2048,
  },
  {
    src: `${IMG}/gallery-07.jpg`,
    alt: "Savannah walking a red dog through a lush green field for enrichment",
    width: 1536,
    height: 2048,
  },
  {
    src: `${IMG}/gallery-08.jpg`,
    alt: "A tan shepherd-mix sitting proudly with a yellow star toy in its mouth",
    width: 1152,
    height: 2048,
  },
  {
    src: `${IMG}/gallery-09.jpg`,
    alt: "A white husky-type dog and Savannah exploring rocks by a river",
    width: 504,
    height: 536,
  },
  {
    src: `${IMG}/gallery-10.jpg`,
    alt: "Savannah offering a reward to an eager red dog during training",
    width: 1366,
    height: 2048,
  },
  {
    src: `${IMG}/gallery-11.jpg`,
    alt: "Savannah kneeling in a golden field beside a happy tan dog",
    width: 2048,
    height: 1366,
  },
  {
    src: `${IMG}/gallery-12.jpg`,
    alt: "Savannah walking a quiet wooded path with two dogs, in black and white",
    width: 1462,
    height: 2048,
  },
];
