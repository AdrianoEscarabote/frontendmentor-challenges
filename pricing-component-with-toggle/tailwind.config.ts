/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutral: {
        white: 'var(--white)',
        'very-light-grayish-blue': 'var(--very-light-grayish-blue)',
        'light-grayish-blue': 'var(--light-grayish-blue)',
        'grayish-blue': 'var(--grayish-blue)',
        'dark-grayish-blue': 'var(--dark-grayish-blue)',
        'secondary-border-color': 'var(--secondary-border-color)',
        'primary-border-color': 'var(--primary-border-color)',
      },
      primary: {
        purple: 'var(--purple)',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(135.06deg, #a2a7f0 -0.05%, #696edd 100.05%)',
      },
    },
  },
  plugins: [],
}
