/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
       black: '#202020',
       darkgreen: '#20282a',
       lightgrey:'#9ca7ac ' ,
       red: '#fe393a' ,
       grey: '#97a0a5 ',
       darkgrey: '#959fa5',
      },
       screens: { 'sm': { 'max': '767px' } },
    },
  },
  plugins: [],
}
