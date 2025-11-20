import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--text-muted)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
        "glass-surface": "var(--glass-surface)",
        "glass-surface-border": "var(--glass-surface-border)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-main": "var(--gradient-main)",
      },
    },
  },
  plugins: [],
};
export default config;
