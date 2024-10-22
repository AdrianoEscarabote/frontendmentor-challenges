/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          "very-dark-blue": "var(--very-dark-blue)",
          "dark-grayish-blue": "var(--dark-grayish-blue)",
          "grayish-blue": "var(--grayish-blue)",
          "light-grayish-blue": "var(--light-grayish-blue)",
        },
        primary: {
          red: "var(--red)",
        },
      },
    },
  },
  plugins: [],
};
