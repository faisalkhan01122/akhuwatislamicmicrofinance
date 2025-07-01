/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    	extend: {
		colors: {
			primary: {
				100: '#F5ECCB',
				200: '#EDD199',
				300: '#E5B668',
				400: '#D99A36',
				500: '#22C55E',//
				600: '#2700D7',//button
				700: '#755A24',
				800: '#544013',
				900: '#332602',
			},
		},
	},
  },
  plugins: [],
}