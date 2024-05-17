/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: 'var(--white)',
			black: 'var(--black)',
			'dark-gray': 'var(--dark-gray)',
			'very-dark-gray': 'var(--very-dark-gray)'
		},
		fontFamily: {
			sans: ['Josefin Sans', 'sans-serif'],
			alata: ['Alata', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
