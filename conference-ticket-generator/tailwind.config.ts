import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-0": "var(--neutral-0)",
        "neutral-300": "var(--neutral-300)",
        "neutral-500": "var(--neutral-500)",
        "neutral-700": "var(--neutral-700)",
        "neutral-900": "var(--neutral-900)",

        "orange-500": "var(--orange-500)",
        "orange-700": "var(--orange-700)",
      },
      backgroundImage: {
        "gradient-text":
          "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))",
      },
    },
  },
  plugins: [],
} satisfies Config;
