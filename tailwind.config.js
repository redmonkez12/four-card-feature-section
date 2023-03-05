/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#FAFAFA",
        black: "#4D4F62",
      },
      boxShadow: {
        card: "0 15px 30px -11px rgba(131, 166, 210, 0.5)",
      },
    },
  },
  plugins: [],
}
