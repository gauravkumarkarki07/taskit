/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#7209b7',
        secondary:'#3a0ca3',
        tertiary:'#4361ee',
        accentPrimary:'#f72585',
        accentSecondary:'#4cc9f0',
      },
      fontFamily:{
        Poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}