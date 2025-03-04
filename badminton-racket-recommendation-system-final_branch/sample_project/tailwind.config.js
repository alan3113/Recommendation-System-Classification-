/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        'opensans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* CSS styles to hide the scrollbar */
          '&::-webkit-scrollbar': {
            display: 'none',  // Hide scrollbar for Chrome, Safari and Opera
          },
          '-ms-overflow-style': 'none',  // Hide scrollbar for Internet Explorer and Edge
          'scrollbar-width': 'none',  // Hide scrollbar for Firefox
        },
      })
    },
  ],
}