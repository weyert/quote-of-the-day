/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: 'var(--font-serif, monospace)',
        sans: 'var(--font-sans-serif, monospace)',
      },
      colors: {
        page: 'rgb(var(--main-bg-color))',
        accent: 'rgb(var(--quote-marker-color))',
        body: 'rgb(var(--quote-text-color))',
        byline: 'rgb(var(--author-text-color))',
      }
    },
  },
  plugins: [],
}
