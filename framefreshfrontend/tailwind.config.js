/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",  // scan all ts and tsx files in src
  ],
  theme: {
    extend: {

       screens: {
        lg1180: "1180px", 
      },
    },
  },
  plugins: [],
}
