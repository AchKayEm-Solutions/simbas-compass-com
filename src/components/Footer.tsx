import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";
import { images } from "@/data/images";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest text-cream/85">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-xl text-cream"
              aria-label={`${site.name} — home`}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 ring-1 ring-white/20">
                <Image
                  src={images.logo.src}
                  alt=""
                  width={images.logo.width}
                  height={images.logo.height}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-semibold">{site.name}</span>
            </Link>
            <p className="mt-4 leading-relaxed text-cream/70">{site.tagline}</p>
            <p className="mt-3 text-sm italic text-cream/55">
              &ldquo;{site.motto}&rdquo;
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold/90">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold/90">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2.5 text-cream/75">
              <li>
                <span className="block text-cream">Email</span>
                <span>{site.contact.email}</span>
              </li>
              <li>
                <span className="block text-cream">Phone</span>
                <span>{site.contact.phone}</span>
              </li>
              <li className="pt-1">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {site.socials.map((s) =>
                    s.href ? (
                      <a
                        key={s.label}
                        href={s.href}
                        className="text-cream/75 underline-offset-4 transition-colors hover:text-cream hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {s.label}
                      </a>
                    ) : (
                      <span key={s.label} className="text-cream/50">
                        {s.label}
                      </span>
                    )
                  )}
                </div>
                <span className="mt-1 block text-xs text-cream/45">
                  Contact details coming soon
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-6 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-cream/45">
            <span>Built by</span>
            {site.builtBy.href ? (
              <a
                href={site.builtBy.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${site.builtBy.name} (opens in a new tab)`}
                className="group inline-flex items-center gap-2 font-medium text-cream/70 underline-offset-4 transition-colors hover:text-cream"
              >
                <Image
                  src={images.builderLogo.src}
                  alt=""
                  width={images.builderLogo.width}
                  height={images.builderLogo.height}
                  className="h-14 w-14 object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
                <span className="group-hover:underline">{site.builtBy.name}</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-medium text-cream/70">
                <Image
                  src={images.builderLogo.src}
                  alt=""
                  width={images.builderLogo.width}
                  height={images.builderLogo.height}
                  className="h-14 w-14 object-contain opacity-80"
                />
                {site.builtBy.name}
              </span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
