/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#f97316",
    darkbg: "#0f172a",
    sectionDark: "#111827",
    glass: "rgba(255,255,255,0.05)"
  }
}
  },
  plugins: [],
}