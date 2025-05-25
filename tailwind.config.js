/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#e6ebfa',
          100: '#c2d1f2',
          200: '#9bb4ea',
          300: '#7497e2',
          400: '#5a82dc',
          500: '#3457d5',
          600: '#2d4bc0',
          700: '#273daa',
          800: '#213094',
          900: '#1b246d'
        },
        secondary: {
          50: '#f0e6fa',
          100: '#d9c2f2',
          200: '#c09bea',
          300: '#a774e2',
          400: '#955adc',
          500: '#7a3cd5',
          600: '#6a34c0',
          700: '#5b2caa',
          800: '#4b2494',
          900: '#391c6d'
        },
        accent: {
          50: '#fae6e9',
          100: '#f2c2ca',
          200: '#ea9ba8',
          300: '#e27486',
          400: '#dc5a6e',
          500: '#d5354a',
          600: '#c02e42',
          700: '#aa2839',
          800: '#942231',
          900: '#6d1925'
        }
      }
    },
  },
  plugins: [],
};