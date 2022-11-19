/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#56657F',
        'color-primary-light': '#D7D7DE',
        'color-primary-active': '#1570EF',
        'color-dangerous': '#F7685B',
        'color-secondary': '#192A3E',
        'color-secondary-dark-blue': '#334D6E',
        'color-secondary-light': '#707683',
        'primary-bg': '#F5F5F5',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
