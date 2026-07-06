import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, natural brand palette
        cream: {
          DEFAULT: "#F7F2E9",
          50: "#FDFBF6",
          100: "#F7F2E9",
          200: "#EFE7D6",
        },
        forest: {
          DEFAULT: "#2E4636",
          light: "#3C5A47",
          dark: "#22352A",
        },
        sage: {
          DEFAULT: "#7E9B84",
          light: "#A6BCA9",
          dark: "#5F7C66",
        },
        caramel: {
          DEFAULT: "#C08A4E",
          light: "#D6A874",
          dark: "#A0713C",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#DEC17E",
        },
        charcoal: {
          DEFAULT: "#2B2A26",
          light: "#4A483F",
          muted: "#6B6559",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(46, 70, 54, 0.18)",
        card: "0 8px 30px -10px rgba(46, 70, 54, 0.16)",
        lift: "0 22px 48px -18px rgba(46, 70, 54, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
