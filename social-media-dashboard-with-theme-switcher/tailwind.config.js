/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        limeGreen: "var(--lime-green)",
        brightRed: "var(--bright-red)",
        facebook: "var(--facebook)",
        twitter: "var(--twitter)",
        instagram: "var(--instagram)",
        youtube: "var(--youtube)",
        toggle: "var(--toggle)",
        "bg-color": "var(--bg-color)",
        "bg-card-top": "var(--bg-card-top)",
        "bg-card": "var(--bg-card)",
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "color-tertiary": "var(--color-tertiary)",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(225deg, #40DB82 0%, #388FE7 98.02%)",
      },
    },
  },
  plugins: [],
};
