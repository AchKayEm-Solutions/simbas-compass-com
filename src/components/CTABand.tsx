import { Button } from "./Button";
import { Compass } from "./Compass";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

type Props = {
  title?: string;
  description?: string;
};

/**
 * Full-width call-to-action band. Points people to the contact page — there is
 * no form yet, so it's honest that details are coming soon.
 */
export function CTABand({
  title = "Ready to find your way forward together?",
  description = "Reach out to Savannah to talk about your dog, your goals, and how Simba's Compass can help. Booking and full contact details are coming soon.",
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
              <Button href="/contact" variant="secondary" size="lg">
                Contact Simba&apos;s Compass
              </Button>
              <Button href="/services" variant="ghost" size="lg" className="text-cream hover:bg-cream/10 hover:text-cream">
                View training services
              </Button>
            </div>
            <p className="mt-6 text-sm text-cream/60">
              {site.contact.email} · Full details coming soon
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
