/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily:{
        body : ['Vazirmatn','Vazirmatn'],
        display : ['Vazirmatn','Vazirmatn']
      },
      height: {
        '17':'4.125rem',
        '85': '22rem',
        '100':'28rem',
        '102':'30.88rem'
      },
      colors: {
        'regal-blue': '#463074',
        'silver' : '#C5C5C5',
      },
    },
  },
  plugins: [],
}
