/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			neutral: {
				white: 'var(--neutral-white)',
				'rose-white': 'var(--neutral-rose-white)',
				eggshell: 'var(--neutral-eggshell)',
				'light-grey': 'var(--neutral-light-grey)',
				'dark-charcoal': 'var(--neutral-dark-charcoal)',
				dark: 'var(--neutral-dark)'
			},
			primary: {
				nutmeg: 'var(--primary-nutmeg)',
				'dark-raspberry': 'var(--primary-dark-raspberry)'
			}
		},
		fontFamily: {
			serif: ['Young Serif', 'serif'],
			sans: ['Outfit', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
