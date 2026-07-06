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
    "Meet Savannah, founder of Simba's Compass — a vet tech with 5+ years of animal care experience and a dog training certification in progress.",
  openGraph: {
    title: "About Savannah | Simba's Compass",
    description:
      "Meet Savannah — vet tech, lifelong animal lover, and the person behind Simba's Compass dog training.",
    images: [images.portrait.src],
  },
};

const journey = [
  {
    icon: <StethoscopeIcon className="h-6 w-6" />,
    title: "5+ years as a veterinary technician",
    body: "Working closely with animals every day — reading body language, handling nervous patients with care, and understanding what keeps a dog healthy and calm.",
  },
  {
    icon: <BookIcon className="h-6 w-6" />,
    title: "Ongoing veterinary education",
    body: "Continuing to study animal care, which grounds her training in a genuine understanding of canine health and behavior.",
  },
  {
    icon: <PawIcon className="h-6 w-6" />,
    title: "Dog training certification in progress",
    body: "Actively pursuing a formal dog training certification to pair years of hands-on experience with up-to-date, ethical methods.",
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
              Savannah has spent years doing the quiet, patient work of caring
              for animals. As a veterinary technician, she&apos;s handled dogs
              on their best days and their most frightened ones — learning how
              much a calm presence and a little trust can change an outcome.
            </p>
            <p>
              That experience is the foundation of Simba&apos;s Compass. Training
              here isn&apos;t about commands for their own sake; it&apos;s about
              understanding each dog as an individual and helping them feel
              secure, capable, and understood.
            </p>
            <p>
              She&apos;s continuing her education in veterinary care and
              completing a dog training certification — because doing this well
              means always learning, and always putting the dog first.
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
            Note: the specific certification name and credentials will be added
            here once confirmed.
          </p>
        </Reveal>
      </Section>

      {/* Her approach */}
      <Section tone="sage">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Her approach"
              title="Calm, clear, consistent, and kind"
              description="A relationship-based way of working that meets dogs — and their people — right where they are."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Calm and unhurried, so dogs can actually learn",
                "Clear communication that dogs and owners can both follow",
                "Consistency that builds real, lasting habits",
                "Relationship-first, strengthening the bond you already share",
                "Free of shame — for your dog and for you",
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
              Simba was Savannah&apos;s dog. He passed away a couple of years
              ago, but his memory represents everything this work is about:
              loyalty, love, and the quiet, powerful bond between a person and
              their dog.
            </p>
            <p>
              The compass represents guidance and direction — a way of helping
              each dog-and-owner team find their footing and keep moving forward
              with confidence.
            </p>
            <p className="font-display text-xl italic text-gold">
              Together, they capture the whole idea: honoring the bond, and
              helping you find your way.
            </p>
          </div>
        </div>
      </Section>

      {/* Simba portrait */}
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
                <HeartIcon className="h-4 w-4 text-caramel" />
                In loving memory of Simba.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title={`Want to work with ${site.founder}?`}
        description="If Savannah's approach sounds like the right fit for your dog, reach out. Booking and full contact details are coming soon."
      />
    </>
  );
}
