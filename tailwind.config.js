module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      colors: {
        'color-primary': '#fea934',
        'color-grey': '#404040',
        'color-lightgrey': ' #F9F9F9',
        'color-btn': '#04A5C2',
        'color-red': '#bd3b2e',
        'color-green': '#82bf58',
        'color-blue': '#378caa',
        'color-yellow': '#ead82f',
        'color-black': '#343434',
        'color-bg': '#dfefef',
      },
    },
    screens: {
      xs: '300px',
      // => @media (min-width: 640px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
