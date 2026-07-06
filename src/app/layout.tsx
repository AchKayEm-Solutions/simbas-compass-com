import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { images } from "@/data/images";

// Soft display serif for headings; friendly, readable sans for body.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  keywords: [
    "dog training",
    "puppy training",
    "positive reinforcement",
    "obedience",
    "confidence building",
    "leash manners",
    site.legalName,
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seo.defaultTitle,
    description: site.seo.description,
    url: site.url,
    images: [
      {
        url: images.ogDefault.src,
        width: images.ogDefault.width,
        height: images.ogDefault.height,
        alt: images.ogDefault.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.seo.description,
    images: [images.ogDefault.src],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* Skip link for keyboard and screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
