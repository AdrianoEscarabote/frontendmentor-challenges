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
        primary: {
          "grayish-blue": "var(--grayish-blue)",
          "soft-red": "var(--soft-red)",
        },
        neutral: {
          white: "var(--white)",
          "dark-desaturated-blue": "var(--dark-desaturated-blue)",
          "dark-blue": "var(--dark-blue)",
          "very-dark-blue": "var(--very-dark-blue)",
        },
      },
      backgroundImage: {
        stars: "url('/images/bg-stars.svg')",
        hills: "url('/images/pattern-hills.svg')",
        gradient: "linear-gradient(to bottom, #1E1E28,  #241C2B)",
      },
    },
  },
  plugins: [],
} satisfies Config;
