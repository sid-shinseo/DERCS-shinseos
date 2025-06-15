/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6A75FF",
          secondary: "#3B2F6E",
          dark: "#0f172a",
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          display: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }