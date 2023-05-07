/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'triangle': "url('./assets/ProjectsImg/triangle.svg')",
        'footer-contactme': "url('./assets/ContactMeImg/bg-footer.svg')",
      },
    },
  },
  plugins: [],
}

