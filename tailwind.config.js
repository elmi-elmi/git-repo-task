/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'public': '#0099FF',
        'private':'#9835FF',
        'selected': '#FF4F66',
        'my-border': '#CBCBCB',
        'my-black': '#141414',
        'my-black-light': '#545454',
        'input-bg': '#EEEEEE',
      },
      opacity: {
        15: '.15'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif',"ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI"]
      }
    },
  },
  plugins: [],
}
