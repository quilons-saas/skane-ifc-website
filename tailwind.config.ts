import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a2438",
          muted: "#f5f1ea",
          deep: "#ebe6dc",
        },
        navy: "#2a3d56",
        paper: "#faf8f5",
        body: "#3d4d62",
        mist: "#5c6b7d",
        line: "rgba(26, 36, 56, 0.12)",
        "line-soft": "rgba(26, 36, 56, 0.06)",
        accent: "#b8923f",
        "accent-soft": "rgba(184, 146, 63, 0.22)",
        "accent-muted": "rgba(184, 146, 63, 0.1)",
      },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(165deg, #faf8f5 0%, #f5f0e8 45%, #efe9df 100%)",
        "hero-warm":
          "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(184, 146, 63, 0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 10%, rgba(42, 61, 86, 0.06), transparent 50%)",
        "section-warm":
          "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(184, 146, 63, 0.08), transparent 55%)",
      },
      maxWidth: {
        measure: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
