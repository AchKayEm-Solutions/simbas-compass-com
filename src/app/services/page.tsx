import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { Notice } from "@/components/Notice";
import { CTABand } from "@/components/CTABand";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Training Services",
  description:
    "Explore dog training services from Simba's Compass — from puppy foundations and basic obedience to leash manners, confidence building, and one-on-one sessions.",
  openGraph: {
    title: "Training Services | Simba's Compass",
    description:
      "Puppy foundations, obedience, leash manners, confidence building, and more. Details and pricing coming soon.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Training built around your dog"
        description="Every dog and household is a little different. These are some of the ways Simba's Compass can help — a starting point for a plan that fits you."
      >
        <Notice>
          Service details, availability, and pricing are coming soon.
        </Notice>
      </PageHero>

      <Section tone="cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-4xl border border-dashed border-forest/20 bg-cream-50/60 p-8 text-center sm:p-10">
            <h2 className="text-2xl">Don&apos;t see quite what you need?</h2>
            <p className="prose-warm mx-auto mt-3 max-w-xl">
              These offerings are a flexible starting point, not a fixed menu.
              Training can be shaped around your dog&apos;s specific needs and
              your goals — the best fit is something we&apos;ll figure out
              together.
            </p>
            <p className="mt-5 text-sm italic text-charcoal-muted">
              Services shown here are editable placeholders and may change as
              Savannah finalizes her offerings.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Curious which service fits your dog?"
        description="Reach out and we can talk through where your dog is now and where you'd like to go. Booking and pricing details are coming soon."
      />
    </>
  );
}
