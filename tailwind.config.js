/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode
  content: ['./src/views/**/*.{html,js,vue}',
    './src/components/**/*.{html,js,vue}',
    './src/forms/**/*.{html,js,vue}',
    './src/index.html'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}

