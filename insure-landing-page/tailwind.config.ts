/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutral: {
        'very-dark-violet': 'var(--veryDarkViolet)',
        'dark-grayish-violet': 'var(--darkGrayishViolet)',
        'very-light-gray': 'var(--veryLightGray)',
        white: 'var(--white)',
      },
      primary: {
        'dark-violet': 'var(--darkViolet)',
        'grayish-blue': 'var(--grayishBlue)',
      },
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['DM Serif Display', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
