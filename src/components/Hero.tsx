import Image from "next/image";
import { Button } from "./Button";
import { Compass } from "./Compass";
import { images } from "@/data/images";

/**
 * Home page hero. Large, photo-forward, with soft organic shapes behind the
 * image and a gentle floating motion (motion-safe only).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient + blobs backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 via-cream to-sage/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-40 -z-10 h-80 w-80 rounded-full bg-caramel/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div className="max-w-xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-forest/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest ring-1 ring-forest/10">
            <Compass className="h-4 w-4 text-caramel" />
            Compassionate dog training
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Helping dogs and their people find their way{" "}
            <span className="text-caramel-dark">together</span>.
          </h1>

          <p className="prose-warm mt-6 text-lg sm:text-xl">
            Compassionate, practical dog training rooted in animal care
            experience, patience, and trust.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/services" size="lg">
              View Training Services
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Meet Savannah
            </Button>
          </div>

          <p className="mt-6 text-sm text-charcoal-muted">
            Rooted in 5+ years of hands-on veterinary care experience.
          </p>
        </div>

        {/* Hero image with layered organic shapes */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[42%_58%_63%_37%/41%_44%_56%_59%] bg-sage/25 motion-safe:animate-float-slow"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[42%_58%_63%_37%/41%_44%_56%_59%] shadow-lift ring-1 ring-forest/5">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating credential chip */}
          <div className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl bg-cream-50/95 px-4 py-3 shadow-card ring-1 ring-forest/10 backdrop-blur sm:left-6">
            <Compass className="h-8 w-8 text-caramel" />
            <div className="text-left">
              <p className="text-sm font-semibold text-forest">Vet tech background</p>
              <p className="text-xs text-charcoal-muted">Certification in progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
