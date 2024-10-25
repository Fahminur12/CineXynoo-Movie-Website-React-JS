/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        customBlue: '#141D2E', 
        customBlue2: '#2c3546',
        darkBlue: '#202334',
        violetPurple: '#725CFF'
      },
    },
  },
  plugins: [require('daisyui'),],
}

