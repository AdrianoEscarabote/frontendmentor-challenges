import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        "rose-50": "var(--rose-50)",
        "rose-100": "var(--rose-100)",
        "rose-300": "var(--rose-300)",
        "rose-400": "var(--rose-400)",
        "rose-500": "var(--rose-500)",
        "rose-900": "var(--rose-900)",
      },
      fontFamily: {
        red: ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
