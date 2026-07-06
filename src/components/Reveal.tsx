"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the reveal transition starts (for staggering). */
  delay?: number;
  /** Direction the content slides in from. */
  from?: "up" | "left" | "right" | "none";
  as?: ElementType;
};

/**
 * Fade + slide content in when it scrolls into view.
 *
 * Uses IntersectionObserver (no scroll libraries). Fully respects
 * prefers-reduced-motion: those users see content immediately with no movement.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as,
}: RevealProps) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the user prefers reduced motion, skip observing and show immediately.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const offset =
    from === "left"
      ? "-translate-x-8"
      : from === "right"
        ? "translate-x-8"
        : from === "up"
          ? "translate-y-8"
          : "";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${offset}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
