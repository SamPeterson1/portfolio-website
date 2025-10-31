// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purplebrand: {
          50: '#f7f2ff',
          100: '#efe6ff',
          200: '#dccaff',
          300: '#c5a9ff',
          400: '#a97cff',
          500: '#7b3cff',
          600: '#6a2fe6',
          700: '#5726b3',
          800: '#421d80',
          900: '#2b124d',
        },
      },
    },
  },
  plugins: [],
};
