// -----------------------------------------------------------------------------
// Services offered by Savannah through Call of the Wild.
//
// Booking, availability, and pricing are handled by Call of the Wild
// (see site.partner). Update copy freely as offerings evolve.
// -----------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  description: string;
  bestFor: string;
  status: string;
  // Highlights the areas Savannah personally specializes in.
  specialty?: boolean;
};

export const services: Service[] = [
  {
    slug: "board-and-train",
    title: "Board & Train",
    description:
      "Your dog stays with us for an immersive stretch of hands-on training and comes home with real-world skills and steady habits. This is where Savannah does her best work.",
    bestFor: "Owners who want focused, live-in training progress",
    status: "Book through Call of the Wild",
    specialty: true,
  },
  {
    slug: "medical-needs-care",
    title: "Medical-Needs Boarding & Pet Sitting",
    description:
      "Attentive boarding and pet sitting for animals with medical needs, backed by Savannah's years of veterinary-assistant experience — medications, monitoring, and careful, informed care.",
    bestFor: "Pets needing medication, monitoring, or extra medical attention",
    status: "Book through Call of the Wild",
    specialty: true,
  },
  {
    slug: "dog-training",
    title: "Dog Training",
    description:
      "Personalized training built around your dog and your goals, using a balanced approach that meets each dog exactly where they are.",
    bestFor: "Dogs and owners working toward specific goals",
    status: "Book through Call of the Wild",
  },
  {
    slug: "boarding",
    title: "Boarding",
    description:
      "A safe, attentive place for your dog to stay while you're away, with care shaped around their routine, comfort, and individual needs.",
    bestFor: "Travel, work trips, and time away from home",
    status: "Book through Call of the Wild",
  },
  {
    slug: "daycare",
    title: "Daycare",
    description:
      "Supervised daytime care and activity that keeps your dog engaged, exercised, and comfortable while your day gets busy.",
    bestFor: "Busy weekdays and social, active dogs",
    status: "Book through Call of the Wild",
  },
  {
    slug: "in-home-pet-sitting",
    title: "In-Home Pet Sitting",
    description:
      "Care for your pets in the comfort of their own home, keeping their environment and routine familiar and low-stress while you're away.",
    bestFor: "Pets who do best in their own space",
    status: "Book through Call of the Wild",
  },
  {
    slug: "drop-in-visits",
    title: "Drop-In Visits",
    description:
      "Quick check-ins for feeding, potty breaks, playtime, and companionship when your pet just needs someone to stop by.",
    bestFor: "Shorter absences and daily check-ins",
    status: "Book through Call of the Wild",
  },
];
