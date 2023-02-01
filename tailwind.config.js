/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2hxl': '10px 10px 0px 10px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [
  ]
}
