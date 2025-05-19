/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      myfont: ['CUL', 'sans-serif']
      },
            keyframes: {
        shake: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '10%': { transform: 'translate(-2px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(3px, 2px) rotate(1deg)' },
          '30%': { transform: 'translate(-4px, 1px) rotate(0deg)' },
          '40%': { transform: 'translate(3px, -2px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(2px, -1px) rotate(0deg)' },
          '70%': { transform: 'translate(-2px, 1px) rotate(1deg)' },
          '80%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
          '90%': { transform: 'translate(-1px, 1px) rotate(0deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

