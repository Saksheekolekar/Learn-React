/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswald:['oswald','oswald'],
        Embed_code:["Patua One", 'serif']
      }
    },
  },
  plugins: [],
}
