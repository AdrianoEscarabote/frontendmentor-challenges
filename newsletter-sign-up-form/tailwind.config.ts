import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-button":
          "linear-gradient(90deg, var(--gradient-pink), var(--gradient-orange))",
      },
      colors: {
        tomato: "var(--tomato)",
        "dark-slate-grey": "var(--dark-slate-grey)",
        "charcoal-grey": "var(--charcoal-grey)",
        grey: "var(--grey)",
        white: "var(--white)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
