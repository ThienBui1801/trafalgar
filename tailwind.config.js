module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat']
      }
    },
    
    screens: {
      'xl': {
        'min': '1280px'
      },

      'lg': {
        'min': '1024px',
        'max': '1279px'
      } ,

      'tb': {
        'min': '740px',
        'max': '1023px'
      },

      'mb': {
        'max': '739px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
