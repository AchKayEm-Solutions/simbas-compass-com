import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Compass } from "@/components/Compass";
import { MailIcon, MapPinIcon, PawIcon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book Simba's Compass K9 through Call of the Wild in the Brainerd Lakes Area — dog training, board & train, boarding, daycare, and pet sitting.",
  openGraph: {
    title: "Contact & Booking | Simba's Compass K9",
    description:
      "Booking runs through Call of the Wild, serving the Brainerd Lakes Area.",
  },
};

export default function ContactPage() {
  const details = [
    {
      icon: <MailIcon className="h-6 w-6" />,
      label: "Email",
      value: (
        <a
          href={`mailto:${site.contact.email}`}
          className="underline-offset-4 transition-colors hover:text-forest-light hover:underline"
        >
          {site.contact.email}
        </a>
      ),
      note: "Reaches Savannah directly",
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      label: "Service area",
      value: site.contact.serviceArea,
      note: site.contact.serviceAreaNote,
    },
    {
      icon: <PawIcon className="h-6 w-6" />,
      label: "Specialties",
      value: "Board & train · Medical-needs care",
      note: "Where Savannah does her best work",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        title="Let's find your way together"
        description={`Savannah offers her services through ${site.partner.name}, who handle booking and scheduling for the ${site.contact.serviceArea}.`}
      />

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Details */}
          <div>
            <h2 className="text-2xl">How to reach Savannah</h2>
            <p className="prose-warm mt-3 max-w-lg">
              The easiest way to book Simba&apos;s Compass K9 — for training,
              boarding, daycare, or pet sitting — is through {site.partner.name}.
              Their team handles availability, scheduling, and pricing.
            </p>

            <ul className="mt-8 space-y-4">
              {details.map((d) => (
                <Reveal key={d.label} as="li">
                  <div className="flex items-start gap-4 rounded-4xl bg-cream-50 p-6 shadow-card ring-1 ring-forest/5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                      {d.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-caramel-dark">
                        {d.label}
                      </p>
                      <p className="mt-0.5 font-display text-lg text-forest">
                        {d.value}
                      </p>
                      <p className="text-xs italic text-charcoal-muted">
                        {d.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            {/* Online */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-muted">
                Find us online
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-cream-50 px-4 py-2 text-sm font-medium text-forest ring-1 ring-forest/15 transition hover:-translate-y-0.5 hover:ring-forest/40"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Booking panel */}
          <Reveal from="right">
            <div className="sticky top-28 overflow-hidden rounded-4xl bg-forest p-8 text-cream shadow-lift sm:p-10">
              <Compass className="h-12 w-12 text-gold" spin />
              <h2 className="mt-6 text-2xl text-cream">Ready to book?</h2>
              <p className="mt-3 leading-relaxed text-cream/80">
                {site.partner.blurb} It&apos;s the first step toward a calmer,
                more confident dog — and a stronger bond between you.
              </p>
              <div className="mt-6">
                <Button
                  href={site.partner.href}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  Book through {site.partner.name}
                </Button>
                <p className="mt-4 text-center text-sm text-cream/75">
                  …or contact Savannah directly at{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-cream underline underline-offset-4 transition-colors hover:text-gold-light"
                  >
                    {site.contact.email}
                  </a>
                </p>
              </div>
              <div className="mt-6 rounded-2xl bg-cream/10 p-4 text-sm text-cream/75 ring-1 ring-cream/15">
                <p className="font-semibold text-cream">What to expect</p>
                <p className="mt-1">
                  A friendly conversation about your dog, your goals, and how
                  Simba&apos;s Compass K9 can help — no pressure, no judgment.
                </p>
              </div>
              <p className="mt-6 text-xs text-cream/50">
                {site.legalName} · Serving the {site.contact.serviceArea}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Service-area map */}
      <Section tone="white" spacing="md">
        <SectionHeading
          eyebrow="Where to find us"
          title="Serving the Brainerd Lakes Area"
          description={`Simba's Compass K9 works with dogs and their people across the ${site.contact.serviceArea} in ${site.contact.serviceAreaNote}.`}
        />
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-4xl shadow-card ring-1 ring-forest/10">
            <iframe
              title={`Map of the ${site.contact.serviceArea}, ${site.contact.serviceAreaNote}`}
              src={site.contact.mapEmbedSrc}
              className="h-80 w-full border-0 sm:h-[26rem]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
