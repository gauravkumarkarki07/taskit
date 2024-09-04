/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#7209b7',
  			secondary: '#3a0ca3',
  			tertiary: '#4361ee',
  			accentPrimary: '#f72585',
  			accentSecondary: '#4cc9f0'
  		},
  		fontFamily: {
  			Poppins: ['Poppins','sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}