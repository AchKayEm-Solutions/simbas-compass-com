import Image from "next/image";
import { type SiteImage } from "@/data/images";

type Props = {
  image: SiteImage;
  /** Optional caption shown below/over the image. */
  caption?: string;
  className?: string;
  /** Use an organic blob mask instead of a rounded rectangle. */
  shape?: "rounded" | "blob";
  priority?: boolean;
  sizes?: string;
};

/**
 * A soft, rounded photo frame with a gentle hover zoom. Wraps next/image so all
 * photos get optimization and lazy-loading for free.
 */
export function PhotoCard({
  image,
  caption,
  className = "",
  shape = "rounded",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: Props) {
  const radius = shape === "blob" ? "blob-mask" : "rounded-4xl";

  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative overflow-hidden ${radius} bg-sage/20 shadow-card ring-1 ring-forest/5`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm italic text-charcoal-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
