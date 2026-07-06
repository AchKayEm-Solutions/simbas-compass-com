import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Notice } from "@/components/Notice";
import { Compass } from "@/components/Compass";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Simba's Compass about dog training. Booking and full contact details are coming soon.",
  openGraph: {
    title: "Contact | Simba's Compass",
    description:
      "Interested in dog training with Simba's Compass? Contact details are coming soon.",
  },
};

export default function ContactPage() {
  const details = [
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: "Phone",
      value: site.contact.phone,
      note: site.contact.phoneNote,
    },
    {
      icon: <MailIcon className="h-6 w-6" />,
      label: "Email",
      value: site.contact.email,
      note: site.contact.emailNote,
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      label: "Service area",
      value: site.contact.serviceArea,
      note: site.contact.serviceAreaNote,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find your way together"
        description="Simba's Compass is getting set up, and full booking and contact details are on the way. Here's where they'll live."
      >
        <Notice>Booking and contact details coming soon.</Notice>
      </PageHero>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl">Get in touch</h2>
            <p className="prose-warm mt-3 max-w-lg">
              Once everything&apos;s ready, you&apos;ll be able to reach Savannah
              through the details below. For now, these are placeholders — check
              back soon.
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

            {/* Socials */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-muted">
                Find us online
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {site.socials.map((s) =>
                  s.href ? (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-cream-50 px-4 py-2 text-sm font-medium text-forest ring-1 ring-forest/15 transition hover:-translate-y-0.5 hover:ring-forest/40"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <span
                      key={s.label}
                      className="rounded-full bg-cream-50/60 px-4 py-2 text-sm text-charcoal-muted ring-1 ring-dashed ring-forest/15"
                    >
                      {s.label}{" "}
                      <span className="text-charcoal-muted/70">· soon</span>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* CTA panel */}
          <Reveal from="right">
            <div className="sticky top-28 overflow-hidden rounded-4xl bg-forest p-8 text-cream shadow-lift sm:p-10">
              <Compass className="h-12 w-12 text-gold" spin />
              <h2 className="mt-6 text-2xl text-cream">
                Interested in training?
              </h2>
              <p className="mt-3 leading-relaxed text-cream/80">
                Contact details will be added soon. When they&apos;re live,
                reaching out will be the first step toward a calmer, more
                confident dog — and a stronger bond between you.
              </p>
              <div className="mt-6 rounded-2xl bg-cream/10 p-4 text-sm text-cream/75 ring-1 ring-cream/15">
                <p className="font-semibold text-cream">What to expect</p>
                <p className="mt-1">
                  A friendly conversation about your dog, your goals, and how
                  Simba&apos;s Compass can help — no pressure, no judgment.
                </p>
              </div>
              <p className="mt-6 text-xs text-cream/50">
                {site.legalName} · Serving {site.contact.serviceArea.toLowerCase()}{" "}
                (details coming soon)
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
