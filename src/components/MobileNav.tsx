"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { Button } from "./Button";
import { Compass } from "./Compass";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and support Escape-to-close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest ring-1 ring-forest/15 transition hover:bg-forest/5"
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {/* Overlay panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-forest-dark/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          aria-label="Mobile"
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream-50 shadow-lift transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="flex items-center gap-2 font-display text-lg text-forest">
              <Compass className="h-6 w-6 text-caramel" />
              {site.name}
            </span>
          </div>
          <ul className="flex flex-col gap-1 px-4 py-2">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-lg transition ${
                      active
                        ? "bg-forest/10 font-semibold text-forest"
                        : "text-charcoal-light hover:bg-forest/5 hover:text-forest"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto px-6 py-6">
            <Button href="/contact" size="lg" className="w-full">
              Get in touch
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
