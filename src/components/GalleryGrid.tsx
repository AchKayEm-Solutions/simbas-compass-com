"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { type SiteImage } from "@/data/images";

/**
 * Responsive masonry-style gallery with a lightweight, dependency-free lightbox.
 * Keyboard accessible: arrow keys navigate, Escape closes.
 */
export function GalleryGrid({ images }: { images: SiteImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      {/* CSS columns give a natural masonry flow without JS layout math. */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View larger: ${image.alt}`}
            className="group relative block w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-forest/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-forest/0 transition-colors duration-300 group-hover:bg-forest/10" />
          </button>
        ))}
      </div>

      {isOpen && active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-dark/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              ×
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20 sm:left-6"
          >
            <span aria-hidden="true" className="text-2xl">
              ‹
            </span>
          </button>

          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={images[active].width}
              height={images[active].height}
              sizes="90vw"
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-cream/80">
              {images[active].alt} · {active + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20 sm:right-6"
          >
            <span aria-hidden="true" className="text-2xl">
              ›
            </span>
          </button>
        </div>
      ) : null}
    </>
  );
}
