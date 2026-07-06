import { type ReactNode } from "react";
import { Compass } from "./Compass";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/**
 * Consistent, compact page header used on interior pages (About, Services, etc.).
 */
export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream">
      <Compass
        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 text-forest/[0.05]"
        spin
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-dark">
              <span className="h-px w-6 bg-caramel/60" aria-hidden="true" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
          {description ? (
            <p className="prose-warm mt-5 text-lg sm:text-xl">{description}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
