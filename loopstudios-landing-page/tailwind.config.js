/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		backgroundImage: {
			'gradient-image': 'linear-gradient(180deg, transparent 40%, #000b)',
			'gradient-hover': 'linear-gradient(180deg, transparent 50%, hsla(0, 0%, 100%, 1))'
		},
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
