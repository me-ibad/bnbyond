module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      colors: {
        'color-primary': '#e8ad21',
        'color-secondry': '#58c0d0',
        'color-grey': '#cecece',
        'color-lightgrey': ' #F9F9F9',
        'color-btn': '#04A5C2',
        'color-red': '#c0392d',
        'color-green': '#c1e1c2',
        'color-blue': '#58c0d0',
        'color-yellow': '#e8ad21',
        'color-black': '#343434',
        'color-bg': '#dfefef',
        'color-dotgrey': '#DADADA',
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
