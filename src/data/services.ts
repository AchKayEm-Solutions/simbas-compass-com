// -----------------------------------------------------------------------------
// Training services.
//
// These are EDITABLE PLACEHOLDERS until Savannah confirms her real offerings,
// availability, and pricing. Titles and descriptions are safe, non-committal,
// and make no guarantees. Update freely.
// -----------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  description: string;
  bestFor: string;
  status: string; // pricing/availability placeholder
};

export const services: Service[] = [
  {
    slug: "puppy-foundations",
    title: "Puppy Foundations",
    description:
      "Gentle early guidance for the big first months — socialization, handling, and the everyday habits that set a puppy up to feel secure.",
    bestFor: "New puppies and first-time puppy owners",
    status: "Details coming soon",
  },
  {
    slug: "basic-obedience",
    title: "Basic Obedience",
    description:
      "Clear, kind fundamentals like sit, down, stay, and reliable recall, taught in a way that keeps training calm and enjoyable for both of you.",
    bestFor: "Dogs of any age starting their training journey",
    status: "Details coming soon",
  },
  {
    slug: "leash-manners",
    title: "Leash Manners",
    description:
      "Practical help for calmer walks — reducing pulling and building focus so time on the leash feels relaxed instead of stressful.",
    bestFor: "Dogs who pull, lunge, or struggle to settle on walks",
    status: "Details coming soon",
  },
  {
    slug: "confidence-building",
    title: "Confidence Building",
    description:
      "Patient, low-pressure work that helps a hesitant dog build trust in new places, people, and experiences, at their own pace.",
    bestFor: "Shy, nervous, or under-socialized dogs",
    status: "Details coming soon",
  },
  {
    slug: "household-manners",
    title: "Household Manners",
    description:
      "Everyday living skills — greeting guests politely, settling on a mat, and the small routines that make home life smoother.",
    bestFor: "Families who want a calmer, more settled home",
    status: "Details coming soon",
  },
  {
    slug: "crate-training-support",
    title: "Crate Training Support",
    description:
      "Compassionate guidance to help a dog see the crate as a safe, restful space, built on comfort rather than pressure.",
    bestFor: "Puppies and dogs new to crate or den routines",
    status: "Details coming soon",
  },
  {
    slug: "enrichment-guidance",
    title: "Enrichment Guidance",
    description:
      "Simple, sustainable ideas to keep a dog's mind and body engaged, channeling natural energy into healthy, satisfying outlets.",
    bestFor: "High-energy or easily bored dogs",
    status: "Details coming soon",
  },
  {
    slug: "one-on-one-sessions",
    title: "One-on-One Sessions",
    description:
      "Focused, personalized time built around your dog's specific goals and your daily routine, at a pace that works for your family.",
    bestFor: "Owners who want tailored, individual attention",
    status: "Details coming soon",
  },
];
