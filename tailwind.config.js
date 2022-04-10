module.exports = {
  content: ['./src/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('animated-tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('./plugins/tailwind-animation-delay'),
    require('./plugins/tailwind-table-padding'),
  ],
};
