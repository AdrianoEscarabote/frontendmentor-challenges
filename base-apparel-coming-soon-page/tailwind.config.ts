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
        primary: {
          "desaturated-red": "var(--desaturated-red)",
          "soft-red": "var(--soft-red)",
        },
        neutral: {
          "dark-grayish-red": "var(--dark-grayish-red)",
        },
      },
      backgroundImage: {
        "gradient-light":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "gradient-dark":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
    },
  },
  plugins: [],
};
export default config;
