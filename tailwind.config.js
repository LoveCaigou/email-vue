/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue':'#1766c1',
        'hblue':'#003878',
        'black':'#282c34'
      },
    },
  },
  plugins: [],
}

