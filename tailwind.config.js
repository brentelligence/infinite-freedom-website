/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1F4E58', // Dark Teal from FREEDOM
          secondary: '#7C8A63', // Olive/Gold from INFINITE
          accent: '#A9A9A9', // Silver from swoosh
          dark: '#1A2E35', // Dark Slate for text
          light: '#F5F7F5', // Very light greenish-grey for backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

