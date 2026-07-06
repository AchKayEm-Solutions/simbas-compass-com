import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadge } from "@/components/TrustBadge";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoCard } from "@/components/PhotoCard";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Compass } from "@/components/Compass";
import {
  PawIcon,
  StethoscopeIcon,
  BookIcon,
  HeartIcon,
  CheckIcon,
} from "@/components/Icons";
import { services } from "@/data/services";
import { images } from "@/data/images";

const whyPoints = [
  {
    title: "An animal-care foundation",
    body: "Years spent caring for animals as a vet tech shape a calm, informed, whole-dog approach to training.",
  },
  {
    title: "Patience over pressure",
    body: "Training moves at your dog's pace. Confidence is built gently, never forced, and never through shame.",
  },
  {
    title: "Clear, practical guidance",
    body: "Simple, doable steps that fit real life at home, on walks, and everywhere in between.",
  },
  {
    title: "A partnership, not a program",
    body: "The goal is a stronger relationship between you and your dog, not just a checklist of commands.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <Section tone="white" spacing="md">
        <div className="grid gap-4 sm:grid-cols-3">
          <Reveal delay={0}>
            <TrustBadge
              icon={<StethoscopeIcon className="h-6 w-6" />}
              title="5+ years as a vet tech"
              description="Hands-on veterinary experience caring for animals of all kinds and temperaments."
            />
          </Reveal>
          <Reveal delay={80}>
            <TrustBadge
              icon={<BookIcon className="h-6 w-6" />}
              title="Studying veterinary care"
              description="Ongoing education deepens a thoughtful, health-aware understanding of dogs."
            />
          </Reveal>
          <Reveal delay={160}>
            <TrustBadge
              icon={<PawIcon className="h-6 w-6" />}
              title="Certification in progress"
              description="Actively completing a dog training certification to formalize years of practice."
            />
          </Reveal>
        </div>
      </Section>

      {/* Intro to Simba's Compass */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <PhotoCard image={images.animalCare} shape="blob" sizes="(min-width:1024px) 45vw, 90vw" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Welcome to Simba's Compass"
              title="Training that starts with trust"
              description="Simba's Compass is a small, local dog training practice founded by Savannah — built on real animal-care experience and a deep love for dogs."
            />
            <div className="prose-warm mt-6 space-y-4">
              <p>
                The name carries meaning. Simba was Savannah&apos;s own dog, and
                the bond they shared is at the heart of this work. The compass
                stands for guidance and direction — helping each dog and owner
                find their way forward, together.
              </p>
              <p>
                Whether you&apos;re raising a new puppy or working through
                everyday challenges, the approach is the same: calm, clear, and
                built around your dog as an individual.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Read Savannah&apos;s story
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured services preview */}
      <Section tone="sage">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="How we can help"
            title="Featured training services"
            description="A few of the ways Simba's Compass can support you and your dog. Details, availability, and pricing are coming soon."
          />
          <Reveal delay={100} className="hidden sm:block">
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <Reveal key={service.slug} delay={i * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button href="/services" variant="secondary" className="w-full">
            View all services
          </Button>
        </div>
      </Section>

      {/* Why Simba's Compass */}
      <Section tone="cream">
        <SectionHeading
          align="center"
          eyebrow="Why Simba's Compass?"
          title="A calmer, kinder path forward"
          description="Practical results matter — but so does how you get there. Here's what guides every session."
          className="mb-12"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {whyPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 80}>
              <div className="flex h-full items-start gap-4 rounded-4xl bg-cream-50 p-6 shadow-card ring-1 ring-forest/5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg">{point.title}</h3>
                  <p className="prose-warm mt-1.5 text-[15px]">{point.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Simba's story */}
      <Section tone="forest">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Compass className="h-4 w-4" />
              The heart of the name
            </span>
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl">
              A little about Simba
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-cream/80">
              <p>
                Simba was Savannah&apos;s dog and constant companion. He passed
                away a couple of years ago, but the loyalty, love, and trust he
                represented still guide this work every day.
              </p>
              <p>
                Naming the company after him felt right — a quiet way to carry
                that bond forward and to honor the relationship every dog and
                owner deserves.
              </p>
            </div>
            <div className="mt-8">
              <Button
                href="/about"
                variant="secondary"
                className="bg-cream/10 text-cream ring-cream/20 hover:bg-cream/20"
              >
                The meaning behind Simba&apos;s Compass
              </Button>
            </div>
          </div>
          <Reveal from="right">
            <figure className="relative">
              <div className="overflow-hidden rounded-4xl shadow-lift ring-1 ring-cream/10">
                <Image
                  src={images.simba.src}
                  alt={images.simba.alt}
                  width={images.simba.width}
                  height={images.simba.height}
                  sizes="(min-width:1024px) 50vw, 90vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-cream/60">
                In memory of Simba — the reason for the name.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Personal note / heart line */}
      <Section tone="cream" spacing="md">
        <Reveal className="mx-auto max-w-2xl text-center">
          <HeartIcon className="mx-auto h-10 w-10 text-caramel" />
          <p className="mt-5 font-display text-2xl leading-relaxed text-forest sm:text-3xl">
            &ldquo;Every dog deserves a patient guide, and every owner deserves
            to feel confident, too.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-muted">
            — Savannah, founder of Simba&apos;s Compass
          </p>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
