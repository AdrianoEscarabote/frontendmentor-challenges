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
        lime: "var(--lime)",
        red: "var(--red)",
        slate100: "var(--slate100)",
        slate300: "var(--slate300)",
        slate500: "var(--slate500)",
        slate700: "var(--slate700)",
        slate900: "var(--slate900)",
      },
    },
  },
  plugins: [],
}
export default config
