import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoCard } from "@/components/PhotoCard";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { Compass } from "@/components/Compass";
import { StethoscopeIcon, BookIcon, PawIcon, HeartIcon } from "@/components/Icons";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Savannah",
  description:
    "Meet Savannah, founder of Simba's Compass — six years as a veterinary assistant, pursuing LVT licensure, and finishing her Certified Dog Trainer course through Liberty K9 Academy.",
  openGraph: {
    title: "About Savannah | Simba's Compass",
    description:
      "Meet Savannah — veterinary assistant of six years, lifelong animal lover, and the person behind Simba's Compass.",
    images: [images.portrait.src],
  },
};

const journey = [
  {
    icon: <StethoscopeIcon className="h-6 w-6" />,
    title: "6 years as a veterinary assistant",
    body: "Working closely with animals every day — reading body language, handling nervous patients with care, and understanding what keeps a dog healthy and calm. She has a particular strength with animals who have medical needs.",
  },
  {
    icon: <BookIcon className="h-6 w-6" />,
    title: "Pursuing LVT licensure",
    body: "Currently working toward her Licensed Veterinary Technician (LVT) licensure, deepening an already health-aware understanding of the animals in her care.",
  },
  {
    icon: <PawIcon className="h-6 w-6" />,
    title: "Certified Dog Trainer in progress",
    body: "Finishing the Certified Dog Trainer course through Liberty K9 Academy — pairing years of hands-on experience with formal, up-to-date training methods.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet Savannah"
        description="The person behind Simba's Compass — grounded in real animal-care experience, and driven by a genuine love for dogs and the people who love them."
      />

      {/* Intro + portrait */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal from="left">
            <PhotoCard
              image={images.portrait}
              shape="blob"
              sizes="(min-width:1024px) 40vw, 90vw"
            />
          </Reveal>
          <div className="prose-warm space-y-4 text-lg">
            <p>
              Savannah has spent six years doing the quiet, patient work of
              caring for animals. As a veterinary assistant, she&apos;s handled
              dogs on their best days and their most frightened ones — learning
              how much a calm presence and a little trust can change an outcome.
              She has a real strength with animals who have medical needs.
            </p>
            <p>
              That experience is the foundation of Simba&apos;s Compass. Training
              here isn&apos;t about commands for their own sake; it&apos;s about
              understanding each dog as an individual and helping them feel
              secure, capable, and understood.
            </p>
            <p>
              She&apos;s pursuing her Licensed Veterinary Technician (LVT)
              licensure and finishing her Certified Dog Trainer course through
              Liberty K9 Academy — because doing this well means always learning,
              and always putting the animal first.
            </p>
          </div>
        </div>
      </Section>

      {/* Experience & education */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Experience & education"
          title="A background built on real animal care"
          description="Simba's Compass grows out of years of hands-on work, not a weekend course."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {journey.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-4xl bg-cream-50 p-7 shadow-card ring-1 ring-forest/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg">{item.title}</h3>
                <p className="prose-warm mt-2 text-[15px]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-sm italic text-charcoal-muted">
            Savannah offers her services through Call of the Wild, serving the
            Brainerd Lakes Area.
          </p>
        </Reveal>
      </Section>

      {/* Her approach */}
      <Section tone="sage">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Her approach"
              title="Balanced, and built around your dog"
              description="A balanced way of working that meets each dog — and their people — right where they are. No dog is the same, and no plan should be either."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Balanced methods, tailored to the dog in front of her",
                "Clear communication and structure both dogs and owners can follow",
                "Fair and humane — firm when it helps, gentle where it counts",
                "Consistency that builds real, lasting habits",
                "Supportive and free of judgment — for you and your dog",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Compass className="mt-0.5 h-5 w-5 shrink-0 text-caramel-dark" />
                  <span className="prose-warm text-[15px]">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal from="right">
            <PhotoCard
              image={images.trainingSession}
              sizes="(min-width:1024px) 45vw, 90vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* The meaning behind Simba's Compass */}
      <Section tone="forest">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-white p-3 shadow-lift ring-4 ring-gold/30">
            <Image
              src={images.logo.src}
              alt={images.logo.alt}
              width={images.logo.width}
              height={images.logo.height}
              className="h-full w-full object-contain"
            />
          </span>
          <h2 className="mt-6 text-3xl text-cream sm:text-4xl">
            The Meaning Behind Simba&apos;s Compass
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-cream/80">
            <p>
              Simba is Savannah&apos;s own dog. She first trained him as an
              assistance dog, but he was medically retired young because of his
              own health challenges. He has since become a devoted emotional
              support dog who still works quietly at home — and for the last six
              years, he has been her guiding compass through her darkest days.
            </p>
            <p>
              That is what the compass stands for here: guidance, direction, and
              steady companionship — the things a good dog gives us, and the
              things thoughtful training helps build between you and yours.
            </p>
            <p className="font-display text-xl italic text-gold">
              &ldquo;{site.motto}&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* Simba portrait — the living guiding compass */}
      <Section tone="cream" spacing="md">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <figure>
              <div className="overflow-hidden rounded-4xl shadow-card ring-1 ring-forest/5">
                <Image
                  src={images.simba.src}
                  alt={images.simba.alt}
                  width={images.simba.width}
                  height={images.simba.height}
                  sizes="(min-width:768px) 60vw, 90vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-center gap-2 text-center text-sm italic text-charcoal-muted">
                <Compass className="h-4 w-4 text-caramel" />
                Simba — Savannah&apos;s guiding compass.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Remembering Spur — the dog who changed her */}
      <Section tone="sage">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-dark">
              <span className="h-px w-6 bg-caramel/60" aria-hidden="true" />
              And the ones who change us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Remembering Spur</h2>
            <div className="prose-warm mt-5 space-y-4">
              <p>
                Spur came to Savannah as a Northern Lakes Rescue foster — a dog
                with big behavioral challenges who had spent three and a half
                years in rescue, including professional training with Liberty K9,
                waiting for a home. She began fostering him in June 2025 and soon
                realized his forever home was already right where he was. She
                adopted him that October.
              </p>
              <p>
                Their time together was short. Spur passed away on May 29, 2026,
                from a suspected brain tumor. But he was a turning point in
                Savannah&apos;s training journey — teaching her patience,
                structure, and just how much love a behavioral dog can hold. He
                will always be part of who she is as a trainer.
              </p>
            </div>
          </div>
          <Reveal from="right">
            <figure>
              <div className="overflow-hidden rounded-4xl shadow-card ring-1 ring-forest/5">
                <Image
                  src={images.spur.src}
                  alt={images.spur.alt}
                  width={images.spur.width}
                  height={images.spur.height}
                  sizes="(min-width:1024px) 40vw, 90vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-center gap-2 text-center text-sm italic text-charcoal-muted">
                <HeartIcon className="h-4 w-4 text-caramel" />
                In loving memory of Spur.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title={`Want to work with ${site.founder}?`}
        description={`If Savannah's approach sounds like the right fit for your dog, she'd love to help. Booking runs through ${site.partner.name}.`}
      />
    </>
  );
}
