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
    body: "Six years as a veterinary assistant shape a calm, informed, whole-dog approach — with a real strength in animals who have medical needs.",
  },
  {
    title: "Balanced, individual training",
    body: "No two dogs are the same, so no two plans are either. Training is tailored to the dog in front of us.",
  },
  {
    title: "Clear, practical guidance",
    body: "Simple, doable steps and consistent structure that fit real life at home, on walks, and everywhere in between.",
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
              title="6 years as a veterinary assistant"
              description="Hands-on animal-care experience, with a specialty in pets who have medical needs."
            />
          </Reveal>
          <Reveal delay={80}>
            <TrustBadge
              icon={<BookIcon className="h-6 w-6" />}
              title="Pursuing LVT licensure"
              description="Currently working toward Licensed Veterinary Technician licensure."
            />
          </Reveal>
          <Reveal delay={160}>
            <TrustBadge
              icon={<PawIcon className="h-6 w-6" />}
              title="Certified Dog Trainer in progress"
              description="Finishing the Certified Dog Trainer course through Liberty K9 Academy."
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
                The name carries meaning. Simba is Savannah&apos;s own dog — the
                steady companion who has been her &ldquo;guiding compass&rdquo;
                through some of her hardest years. The compass stands for
                guidance and direction: helping each dog and owner find their way
                forward, together.
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
            title="Featured services"
            description="A few of the ways Savannah can support you and your dog — from board & train to boarding, daycare, and pet sitting. Offered through Call of the Wild."
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
                Simba is Savannah&apos;s dog, and the reason for the name. She
                first began training him as an assistance dog, but he was
                medically retired young because of health challenges of his own.
                Today he&apos;s a devoted emotional support dog who still
                performs tasks at home.
              </p>
              <p>
                For the last six years he has been her guiding compass — steady
                by her side through her darkest days. That partnership is the
                heart of how she trains: with patience, trust, and deep respect
                for what a dog gives us.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondaryLight">
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
                Simba — Savannah&apos;s guiding compass.
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
