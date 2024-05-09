/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      neutral: {
        white: "var(--white)",
        "light-pink": "var(--light-pink)",
        "grayish-purple": "var(--grayish-purple)",
      },
      primary: {
        "dark-purple": "var(--dark-purple)",
      },
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
