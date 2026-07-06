import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { nav } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return nav.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
