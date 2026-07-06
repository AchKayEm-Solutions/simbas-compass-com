import { type SVGProps } from "react";

/**
 * The house compass motif. Used decoratively throughout the site (hero, section
 * accents, footer). Purely presentational — always aria-hidden.
 */
export function Compass({
  className,
  spin = false,
  ...props
}: SVGProps<SVGSVGElement> & { spin?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`${spin ? "motion-safe:animate-spin-slow" : ""} ${className ?? ""}`}
      {...props}
    >
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      <circle
        cx="60"
        cy="60"
        r="44"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.5"
      />
      {/* Cardinal ticks */}
      <g stroke="currentColor" strokeWidth="2" opacity="0.5">
        <line x1="60" y1="6" x2="60" y2="16" />
        <line x1="60" y1="104" x2="60" y2="114" />
        <line x1="6" y1="60" x2="16" y2="60" />
        <line x1="104" y1="60" x2="114" y2="60" />
      </g>
      {/* Compass needle / star */}
      <path d="M60 20 L68 60 L60 100 L52 60 Z" fill="currentColor" opacity="0.85" />
      <path d="M20 60 L60 52 L100 60 L60 68 Z" fill="currentColor" opacity="0.35" />
      <circle cx="60" cy="60" r="4" fill="currentColor" />
    </svg>
  );
}
