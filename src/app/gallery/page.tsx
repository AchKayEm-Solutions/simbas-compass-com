import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TestimonialPlaceholder } from "@/components/TestimonialPlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { galleryImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at Savannah and the animals she works with — warm, real moments from the world of Simba's Compass K9 dog training.",
  openGraph: {
    title: "Gallery | Simba's Compass K9",
    description:
      "Warm, real moments of Savannah with dogs and animals from Simba's Compass K9.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments with dogs and animals"
        description="A little window into the work — the calm, the trust, and the everyday joy of helping dogs and their people. Click any photo to view it larger."
      />

      <Section tone="cream">
        <GalleryGrid images={galleryImages} />
        <p className="mt-8 text-center text-sm italic text-charcoal-muted">
          Photos shown are placeholders and will be replaced with Savannah&apos;s
          real photos.
        </p>
      </Section>

      {/* Testimonials placeholder — intentionally no fake reviews */}
      <Section tone="white">
        <SectionHeading
          align="center"
          eyebrow="Kind words"
          title="Client stories, coming soon"
          description="Real reviews from real dog owners will live here. We'd rather leave this honest and empty than fill it with anything made up."
          className="mb-12"
        />
        <TestimonialPlaceholder />
      </Section>

      <CTABand />
    </>
  );
}
