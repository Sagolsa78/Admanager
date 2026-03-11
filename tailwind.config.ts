import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surf)",
        primary: {
          DEFAULT: "#2563EB",
          light: "#EFF6FF",
          hover: "#1D4ED8",
        },
        text: {
          primary: "#0F172A",
          secondary: "#64748B",
        },
        border: {
          DEFAULT: "var(--border)",
          m: "var(--border-m)",
        },
        violet: {
          DEFAULT: "var(--violet)",
          hover: "var(--violet-hover)",
          light: "var(--violet-light)",
          mid: "var(--violet-mid)"
        },
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink2)",
          3: "var(--ink3)"
        },
        surf: {
          DEFAULT: "var(--surf)",
          2: "#F3F4F6",
        },
        emerald: {
          DEFAULT: "var(--emerald)",
        },
        rose: {
          DEFAULT: "var(--rose)",
        },
        amber: {
          DEFAULT: "#F59E0B",
        }
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;

