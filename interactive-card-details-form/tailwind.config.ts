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
        white: "var(--white)",
        "light-grayish-violet": "var(--light-grayish-violet)",
        "dark-grayish-violet": "var(--dark-grayish-violet)",
        "very-dark-violet": "var(--very-dark-violet)",
        red: "var(--red)",
      },
      backgroundImage: {
        "input-border-gradient":
          "linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))",
        "card-front": "url('/images/bg-card-front.png')",
        "card-back": "url('/images/bg-card-back.png')",
        "main-desktop": "url('/images/bg-main-desktop.png')",
        "main-mobile": "url('/images/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
}
export default config
