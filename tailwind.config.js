/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Adding customization to the theme
    extend: {
      // Extend the utility class 'container' (not overrid it completely)
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",      // With screens smaller than sm (640px) : padding of 1rem
          sm: "2rem",           // With sm screens and above : padding of 2rem
        }
      }
    },
  },
  plugins: [],
}

