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
          blue: "var(--blue)",
          "light-red-primary": "var(--light-red-primary)",
          "soft-blue": "var(--soft-blue)",
          "light-red-secondary": "var(--light-red-secondary)",
          "lime-green": "var(--lime-green)",
          violet: "var(--violet)",
          "soft-orange": "var(--soft-orange)",
        },
        neutral: {
          "very-dark-blue": "var(--very-dark-blue)",
          "dark-blue": "var(--dark-blue)",
          "desaturated-blue": "var(--desaturated-blue)",
          "pale-blue": "var(--pale-blue)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
