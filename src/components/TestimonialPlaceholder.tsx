import { Compass } from "./Compass";

/**
 * Intentionally shows NO fake testimonials. This is an honest placeholder that
 * signals real client stories will appear here once Savannah has them. When
 * that day comes, swap this component for a real testimonial list.
 */
export function TestimonialPlaceholder() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <figure
          key={i}
          className="flex h-full flex-col rounded-4xl border border-dashed border-forest/20 bg-cream-50/50 p-7"
        >
          <Compass className="h-8 w-8 text-sage/60" />
          <blockquote className="mt-4 flex-1">
            <p className="font-display text-lg italic text-forest/40">
              A kind word from a happy dog and owner will live here soon.
            </p>
          </blockquote>
          <figcaption className="mt-5 text-sm text-charcoal-muted/70">
            — Client stories coming soon
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
