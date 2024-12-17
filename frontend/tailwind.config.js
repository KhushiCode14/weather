import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Add this for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
