/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        warn: '#f56565',
        success: '#48bb78',
        info: '#4299e1',
        dark: '#2d3748',
        light: '#f7fafc',
        surface: '#fcfcfc',
        darkSurface: '#00040a'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      },
      fontSize: {
        '2xs': '0.625rem'
      },
      spacing: {
        28: '7rem',
        36: '9rem',
        44: '11rem'
      }
    }
  },
  plugins: []
};
