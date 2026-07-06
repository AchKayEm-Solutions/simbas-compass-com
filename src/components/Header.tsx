"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { images } from "@/data/images";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-forest/10 bg-cream/85 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(46,70,54,0.4)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-28 items-center justify-between sm:h-32">
        <Link
          href="/"
          className="group flex items-center"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 ring-1 ring-forest/10 transition-transform duration-500 group-hover:scale-105 sm:h-28 sm:w-28">
            <Image
              src={images.logo.src}
              alt={`${site.name} logo`}
              width={images.logo.width}
              height={images.logo.height}
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-forest"
                        : "text-charcoal-light hover:text-forest"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-caramel transition-all duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="/contact" variant="primary">
              Get in touch
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
