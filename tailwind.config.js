/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        founders: ['FoundersGrotesk', 'sans-serif'],
      },
      colors: {
        tpink:'#EEBFB3',
        tpurple: '#c48efa',
        torange: '#ff9700',
        tbrown: '#d48330',
        tred: '#ff4400',
        tgrey:'#929292',
        twhite:'#ffffff',
        tbeige: '#e4ded4',
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(tpink|tpurple|tred|torange|tbrown|tgrey|twhite|tbeige)/,
    },
  ],
}
