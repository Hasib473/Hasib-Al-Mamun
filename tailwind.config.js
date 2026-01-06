/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // ✅ Dark mode will work using class="dark"
  darkMode: "class",

  theme: {
    extend: {
      // ✅ Google Font
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },

      // (Optional) custom colors for portfolio
      colors: {
        primary: "#10b981", // emerald-500
        darkBg: "#020617",  // slate-950
      },
    },
  },

  plugins: [],
};
