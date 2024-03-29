module.exports = {
  content: ['./src/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '479px' },
    },

    extend: {
      colors: {
        primary: {
          50: '#E6F7F9',
          100: '#CCEFF3',
          150: '#B3E7EC',
          200: '#99DFE6',
          250: '#80D7E0',
          300: '#66CFDA',
          350: '#4DC7D4',
          400: '#33BFCD',
          450: '#1AB7C7',
          DEFAULT: '#00AFC1',
          500: '#009EAE',
          550: '#008C9A',
          600: '#007A87',
          650: '#006974',
          700: '#005861',
          750: '#00464D',
          800: '#00343A',
          850: '#002327',
          900: '#001113',
        },
        secondary: {
          50: '#FFFAE9',
          100: '#FFF6D3',
          150: '#FFF1BD',
          200: '#FFEDA7',
          250: '#FFE892',
          300: '#FFE37C',
          350: '#FFDF66',
          400: '#FFDA50',
          450: '#FFD63A',
          DEFAULT: '#FFD124',
          500: '#E6BC20',
          550: '#CCA71D',
          600: '#B39219',
          650: '#997D16',
          700: '#806912',
          750: '#66540E',
          800: '#4C3F0B',
          850: '#332A07',
          900: '#191504',
        },
        'primary-gray': '#7B808C',
        'primary-white': '#F7F9FC',
      },
    },
  },
  plugins: [
    require('animatecss-tailwind'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwind-table-padding'),
    require('tailwindcss-hero-patterns'),
    require('tailwind-children'),
  ],
};
