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
          orange: "var(--orange)",
          "pale-orange": "var(--pale-orange)",
        },
        neutral: {
          "very-dark-blue": "var(--very-dark-blue)",
          "dark-grayish-blue": "var(--dark-grayish-blue)",
          "grayish-blue": "var(--grayish-blue)",
          "light-grayish-blue": "var(--light-grayish-blue)",
          white: "var(--white)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
