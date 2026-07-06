import { type ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

/**
 * A single credential / trust highlight. Copy stays honest and non-committal —
 * no specific certification names or claims (those are TBD).
 */
export function TrustBadge({ icon, title, description }: Props) {
  return (
    <div className="flex items-start gap-4 rounded-3xl bg-cream-50/60 p-5 ring-1 ring-forest/5 transition-colors duration-300 hover:ring-forest/15">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest/10 text-forest">
        {icon}
      </span>
      <div>
        <p className="font-display text-lg leading-snug text-forest">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-charcoal-light">{description}</p>
      </div>
    </div>
  );
}
