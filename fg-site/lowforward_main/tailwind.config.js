/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'nav-background': 'rgb(18, 18, 22)', 
        'whitesmoke': '#f5f5f5', 
        'nav-hover': '#cecade27',
        'nav-focus': '#e5e2f146',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

