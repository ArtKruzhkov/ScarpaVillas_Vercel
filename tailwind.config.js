/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#121212',
          800: '#1a1a1a',
          700: '#2a2a2a',
        },
        sand: {
          50: '#fbfaf7',
          100: '#f6f1e8',
          200: '#eee5d7',
        },
        wine: {
          600: '#7a2e2e',
          700: '#662626',
        },
        olive: {
          600: '#59664b',
          700: '#48523d',
        },
      },
      // fontFamily: {
      //   serif: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
      //   sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      // },
      fontFamily: {
        serif: ['Bodoni Moda', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        caps: '0.18em',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
