/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`,],
  theme: {
    extend: {
      backgroundImage: {
        'commentsPage': "url('../assets/bg/commentsBg.png')",
      },
    },
  },
  plugins: [],
}

