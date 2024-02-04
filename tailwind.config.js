/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        gradient :{
          '0%': {
            backgroundPosition: '0% 100%'
          },
          '50%': {
            backgroundPosition: '100% 0%'
          },
          '100%': {
            backgroundPosition: '0% 100%'
          },
        },
        
      },
    },
  },
  plugins: [],
}