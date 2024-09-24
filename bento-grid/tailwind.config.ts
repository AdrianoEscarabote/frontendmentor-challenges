import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple100: "var(--purple100)",
        purple500: "var(--purple500)",
        yellow100: "var(--yellow100)",
        yellow500: "var(--yellow500)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
}
export default config
