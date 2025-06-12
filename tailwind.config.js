/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'beige-warm': '#F1E3D3',
        'blue-soft': '#A8DADC',
        'gray-dark': '#4A4A4A',
      },
    },
  },
  plugins: [],
};