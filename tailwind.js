module.exports = {
  purge: [
      './src/js/*.js',
      './src/scss/*.scss',
      '*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            strawberry: '#FBDEE5',
            caramel: '#F8ECD1',
            sky: '#CDE9F3',
            darkSky: '#A9C2D0',
            stone: '#55565A',
            hotPink: '#EF476F',
            cinnamon: '#D9C8C2'
        },
        fontFamily: {
            body: ['Open Sans', 'sans-serif'],
            heading: ['Dosis', 'sans-serif'],
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
