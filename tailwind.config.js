import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}', 
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        elms: ['Elms Sans Thin', 'ui-sans-serif', 'system-ui', '','sans-serif'],
        sans: ['Elms Sans Thin', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
     },
  },
  utility: {
    '.clip-border-bottom': {
      'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))',
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.clip-border-bottom': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
};


