import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        darkGray:"#1a1f25",
        lightGray:"#272c35",
      },
      container: {
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        }

      },
    fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
      },
    },
  },
    plugins: [forms],
};
