import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { Notice } from "@/components/Notice";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dog training, boarding, daycare, in-home pet sitting, and drop-in visits from Savannah at Simba's Compass K9 — including board & train and specialized care for pets with medical needs. Booked through Call of the Wild.",
  openGraph: {
    title: "Services | Simba's Compass K9",
    description:
      "Board & train, boarding, daycare, pet sitting, and more — offered through Call of the Wild in the Brainerd Lakes Area.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Care and training built around your dog"
        description={`Savannah offers her services through ${site.partner.name}, serving the ${site.contact.serviceArea}. She specializes in board & train and in caring for pets with medical needs.`}
      >
        <Notice>Booking and scheduling are handled by {site.partner.name}.</Notice>
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
          <div className="rounded-4xl border border-forest/10 bg-cream-50 p-8 text-center shadow-card sm:p-10">
            <h2 className="text-2xl">Ready to book?</h2>
            <p className="prose-warm mx-auto mt-3 max-w-xl">
              All scheduling, availability, and pricing run through{" "}
              {site.partner.name}. Visit their page to book your dog in or to ask
              about the right fit — including board & train and specialized care
              for pets with medical needs.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                href={site.partner.href}
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Book through {site.partner.name}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Curious which service fits your dog?"
        description={`Savannah can help you land on the right fit — from board & train to boarding, daycare, and pet sitting. Booking runs through ${site.partner.name}.`}
      />
    </>
  );
}
