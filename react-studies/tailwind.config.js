import defaultTheme from 'tailwindcss/defaultTheme';

export default{
  theme: {
    extend: {
      fontFamily: {
        'sans': ['elms-sans', ...defaultTheme.fontFamily.sans], 
      },
    },
  },
};