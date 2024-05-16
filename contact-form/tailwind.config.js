/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		colors: {
			neutral: {
				white: 'var(--white)',
        "medium-grey": "var(--mediumGrey)",
        "dark-grey": "var(--darkGrey)"
			},
			primary: {
				"light-green": "var(--lightGreen)",
        green: "var(--green)",
        red: "var(--red)",
      }
		},
		fontFamily: {
			sans: ['Karla', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
