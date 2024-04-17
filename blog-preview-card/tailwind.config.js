/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			neutral: {
				'000': 'var(--neutral-000)',
				600: 'var(--neutral-600)',
				900: 'var(--neutral-900)',
				999: 'var(--neutral-999)'
			},
			primary: {
				700: 'var(--primary-700)'
			}
		},
		fontFamily: {
			sans: ['Figtree', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
