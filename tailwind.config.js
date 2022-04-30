module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        round: '0 0 20px rgba(0,0,0,0.6)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
