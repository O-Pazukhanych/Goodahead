/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html","./src/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {},
    screens: {
      'tablet': '1023px',
      'tablet-max': {'max': '1023px'},
      'mobile': '767px',
      'mobile-max': {'max': '767px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      border: '#f4f5f7',
      primary: '#0049b0',
      text2: '#5e5d5c',
      text3: '#303030',
      subText: '#808080',
      bgIcon: '#202020',
      borderIcon: '#404040'
    }
  },
  plugins: [],
}

