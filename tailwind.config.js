/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f4f4f4',
        'dark-gray': '#2f2f2f',
        'light-blue': '#eaf4f4',
        'dark-blue': '#004f4f',
      },
    },
  },
  plugins: [],
};
