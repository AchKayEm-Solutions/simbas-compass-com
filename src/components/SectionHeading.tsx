import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  as: Tag = "h2",
}: Props) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-dark">
          <span className="h-px w-6 bg-caramel/60" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <Tag className="text-3xl leading-tight sm:text-4xl">{title}</Tag>
      {description ? (
        <p className="prose-warm text-lg text-charcoal-light">{description}</p>
      ) : null}
    </Reveal>
  );
}
