/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B3C8A",
          orange: "#FF7A18",
        },
      },
    },
  },
  plugins: [],
}
