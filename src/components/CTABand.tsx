import { Button } from "./Button";
import { Compass } from "./Compass";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

type Props = {
  title?: string;
  description?: string;
};

/**
 * Full-width call-to-action band. Booking runs through Call of the Wild, so the
 * primary action links there; the secondary points to the services page.
 */
export function CTABand({
  title = "Ready to find your way forward together?",
  description = "Savannah offers her services through Call of the Wild. Head to their page to check availability and book your dog in.",
}: Props) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-4xl bg-forest px-6 py-14 text-cream shadow-lift sm:px-14 sm:py-16">
          {/* Decorative compass motifs */}
          <Compass
            className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 text-cream/10"
            spin
          />
          <Compass className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 text-cream/5" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-3xl text-cream sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/80">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={site.partner.href}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Book through {site.partner.name}
              </Button>
              <Button href="/services" variant="ghostLight" size="lg">
                View services
              </Button>
            </div>
            <p className="mt-6 text-sm text-cream/60">
              Serving the {site.contact.serviceArea} · Booking via {site.partner.name}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
