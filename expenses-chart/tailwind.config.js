/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			neutral: {
				white: 'var(--white)',
				darkBrown: 'var(--darkBrown)',
				mediumBrown: 'var(--mediumBrown)',
				cream: 'var(--cream)',
				veryPaleOrange: 'var(--veryPaleOrange)'
			},
			primary: {
				softRed: 'var(--softRed)',
				cyan: 'var(--cyan)'
			}
		},
		fontFamily: {
			sans: ['DM Sans', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
