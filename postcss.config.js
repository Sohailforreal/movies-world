export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'postcss-nesting': {}, // 👈 this is what enables `&` nesting
    'autoprefixer': {},
  },
}