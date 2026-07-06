import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryLight" | "ghost" | "ghostLight";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-cream shadow-soft hover:bg-forest-light hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-cream text-forest ring-1 ring-forest/25 hover:ring-forest/50 hover:bg-cream-50 hover:-translate-y-0.5",
  // Translucent light button for use on dark (forest) backgrounds.
  secondaryLight:
    "bg-cream/10 text-cream ring-1 ring-cream/25 hover:bg-cream/20 hover:-translate-y-0.5",
  ghost: "text-forest hover:text-caramel-dark hover:bg-forest/5",
  // Ghost styling for use on dark (forest) backgrounds.
  ghostLight: "text-cream hover:bg-cream/10 hover:text-cream",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

// Renders as a Next.js <Link> when `href` is provided, otherwise a <button>.
type AsLink = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;
type AsButton = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
