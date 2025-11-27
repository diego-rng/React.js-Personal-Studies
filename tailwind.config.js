import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        elms: ['Elms Sans Thin', 'ui-sans-serif', 'system-ui', '','sans-serif'],
        sans: ['Elms Sans Thin', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
     },
  },
  plugins:[],
};
