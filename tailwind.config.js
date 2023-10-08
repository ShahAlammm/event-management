/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: "Playfair Display, serif",

      }

    },
  },
  plugins: [require("daisyui","@sira-ui/tailwind")],
}

