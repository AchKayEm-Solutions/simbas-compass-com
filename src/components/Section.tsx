import { type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Background tone for alternating sections. */
  tone?: "cream" | "white" | "forest" | "sage";
  id?: string;
  as?: ElementType;
  /** Vertical padding size. */
  spacing?: "md" | "lg";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  cream: "bg-cream",
  white: "bg-cream-50",
  forest: "bg-forest text-cream",
  sage: "bg-sage/15",
};

export function Section({
  children,
  className = "",
  tone = "cream",
  id,
  as: Tag = "section",
  spacing = "lg",
}: Props) {
  const pad = spacing === "lg" ? "py-20 sm:py-28" : "py-14 sm:py-20";
  return (
    <Tag id={id} className={`${tones[tone]} ${pad} ${className}`}>
      <div className="container-page">{children}</div>
    </Tag>
  );
}
