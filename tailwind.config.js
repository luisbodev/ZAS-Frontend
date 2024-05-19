/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Adding custom colors
      colors: {
        "colors-1": '#0052B4', 
        "colors-2": '#D1D4FF',
        "colors-3": '#FA1768',
        "colors-4": '#353232',
        "colors-5": '#DDECFF',
        "colors-6": '#E8E9FF',
        "colors-7": '#FFDBE8',
        "colors-8": '#DED9D9',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
