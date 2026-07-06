// Generates tasteful, on-brand SVG placeholder images into /public/images.
//
// These exist so the site looks finished before Savannah's real photos arrive.
// To use real photos: drop .jpg files into /public/images using the same names
// (e.g. savannah-dog-hero.jpg) and update the matching `src` in
// src/data/images.ts to point at the .jpg. Then you can delete the .svg files.
//
// Run with: npm run images:placeholders

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");

// Brand palette (kept in sync with tailwind.config.ts)
const PALETTES = [
  { a: "#3C5A47", b: "#2E4636", accent: "#DEC17E" }, // forest
  { a: "#7E9B84", b: "#5F7C66", accent: "#F7F2E9" }, // sage
  { a: "#D6A874", b: "#C08A4E", accent: "#2E4636" }, // caramel
  { a: "#A6BCA9", b: "#7E9B84", accent: "#2E4636" }, // light sage
];

function compassMotif(color, opacity = 0.22) {
  return `
    <g stroke="${color}" stroke-opacity="${opacity}" fill="none" stroke-width="2">
      <circle cx="0" cy="0" r="128" />
      <circle cx="0" cy="0" r="96" stroke-dasharray="4 8" />
      <path d="M0,-120 L22,-22 L120,0 L22,22 L0,120 L-22,22 L-120,0 L-22,-22 Z"
        fill="${color}" fill-opacity="${opacity * 0.6}" stroke="none" />
      <path d="M0,-150 L0,150 M-150,0 L150,0" stroke-opacity="${opacity * 0.7}" />
    </g>`;
}

function svg({ w, h, label, palette }) {
  const p = PALETTES[palette % PALETTES.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.a}" />
      <stop offset="1" stop-color="${p.b}" />
    </linearGradient>
    <radialGradient id="glow" cx="0.7" cy="0.25" r="0.9">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.16" />
      <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)" />
  <rect width="${w}" height="${h}" fill="url(#glow)" />
  <g transform="translate(${w * 0.72}, ${h * 0.32})">${compassMotif(p.accent)}</g>
  <g transform="translate(${w * 0.2}, ${h * 0.78})">${compassMotif(p.accent, 0.12)}</g>
  <text x="${w / 2}" y="${h / 2}" text-anchor="middle" dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(Math.min(w, h) * 0.06)}"
    fill="${p.accent}" fill-opacity="0.9" font-style="italic">${label}</text>
  <text x="${w / 2}" y="${h / 2 + Math.round(Math.min(w, h) * 0.07)}" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.028)}"
    fill="#ffffff" fill-opacity="0.7" letter-spacing="2">PLACEHOLDER · REPLACE WITH PHOTO</text>
</svg>`;
}

const files = [
  { name: "savannah-dog-hero", w: 1200, h: 1500, label: "Savannah & pup", palette: 0 },
  { name: "savannah-animal-care", w: 1200, h: 900, label: "Animal care", palette: 1 },
  { name: "savannah-portrait", w: 1000, h: 1200, label: "Savannah", palette: 2 },
  { name: "simba", w: 1200, h: 900, label: "Simba", palette: 0 },
  { name: "training-session", w: 1200, h: 900, label: "A training session", palette: 3 },
  { name: "og-default", w: 1200, h: 630, label: "Simba's Compass · Dog Training", palette: 0 },
];

// A dozen gallery images with varied aspect ratios for a natural masonry feel.
const galleryShapes = [
  [1000, 1250],
  [1200, 800],
  [1000, 1000],
  [900, 1200],
  [1200, 900],
  [1000, 1300],
  [1200, 820],
  [1000, 1000],
  [960, 1200],
  [1200, 900],
  [1040, 1240],
  [1200, 800],
];
galleryShapes.forEach(([w, h], i) => {
  files.push({
    name: `training-gallery-${String(i + 1).padStart(2, "0")}`,
    w,
    h,
    label: `Gallery ${i + 1}`,
    palette: i,
  });
});

await mkdir(outDir, { recursive: true });
await Promise.all(
  files.map((f) => writeFile(join(outDir, `${f.name}.svg`), svg(f), "utf8"))
);

console.log(`Generated ${files.length} placeholder images in public/images/`);
