import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-button":
          "linear-gradient(to right, var(--limeGreen), var(--brightCyan))",
      },
      colors: {
        darkBlue: "var(--darkBlue)",
        limeGreen: "var(--limeGreen)",
        brightCyan: "var(--brightCyan)",
        white: "var(--white)",
        grayishBlue: "var(--grayishBlue)",
        lightGrayishBlue: "var(--lightGrayishBlue)",
        veryLightGray: "var(--veryLightGray)",
      },
      fontFamily: {
        sans: ["Public Sans, sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
