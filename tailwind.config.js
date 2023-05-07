/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'triangle': `url('./src/assets/ProjectsImg/hero.png')`,
        'footer-contactme': `url('./src/assets/ContactMeImg/bg-footer.svg')`,
      },
    },
  },
  plugins: [],
}

