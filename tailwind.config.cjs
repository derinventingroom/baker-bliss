/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro,md}", // tells Tailwind where to look for class usage
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          softpink: "#FDF7FA", // example custom color
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
