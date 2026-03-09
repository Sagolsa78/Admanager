import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        surface: "#161616",
        "surface-2": "#1F1F1F",
        primary: {
          DEFAULT: "#E8500A",
          hover: "#FF6120",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#A0A0A0",
        },
        border: "#2A2A2A",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      boxShadow: {
        glow: "0 4px 24px rgba(232, 80, 10, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-bricolage-grotesque)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
