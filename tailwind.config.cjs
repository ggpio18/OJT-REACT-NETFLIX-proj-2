/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Regular: ["Regular", "Roboto"],
        Bold: ["Bold", "Roboto"],
      },
      colors: {
        accent: "#c11119"
      }
    },
  },
  plugins: [],
}

