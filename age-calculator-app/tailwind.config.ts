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
        purple: "var(--purple)",
        "light-red": "var(--light-red)",
        white: "var(--white)",
        "off-white": "var(--off-white)",
        "light-grey": "var(--light-grey)",
        "smokey-grey": "var(--smokey-grey)",
        "off-black": "var(--off-black)",
      },
    },
  },
  plugins: [],
};
export default config;
