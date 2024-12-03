import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'bright-red': 'var(--bright-red)',
					'dark-blue': 'var(--dark-blue)'
				},
				neutral: {
					'dark-grayish-blue': 'var(--dark-grayish-blue)',
					'very-dark-blue': 'var(--very-dark-blue)',
					'very-pale-red': 'var(--very-pale-red)',
					'very-light-gray': 'var(--very-light-gray)'
				}
			},
			fontFamily: {
				vietnam: ['Be Vietnam Pro', 'sans-serif']
			}
		}
	},
	plugins: []
} satisfies Config;
