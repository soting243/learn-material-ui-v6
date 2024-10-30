/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // 2. configure dark mode based on https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  theme: {
    extend: {},
  },
  plugins: [],
  // 1. Add the preset from https://mui-treasury.com/?path=/docs/tailwind-preset--docs
};
