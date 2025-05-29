/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  extend: {
    animation: {
      pulse: "pulse 1.5s ease-in-out infinite",
    },
  },
},
  plugins: [],
}
