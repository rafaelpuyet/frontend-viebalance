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
        'olive-green': '#a1a075',
        'terracotta': '#d6a67a',
        'cream-beige': '#f5f1e6',
        'golden-beige': '#e2c792',
        'grayish-green': '#c3c7a6',
        'soft-salmon': '#efaf9e',
        'dusty-pink': '#d98e99',
        'light-pink': '#e8b6b7',
        'cream-white': '#f9f5ec',
        'light-blue': '#d3eaf2',
        'dark-moss': '#868554',
        'dark-text': '#333333',
        'medium-text': '#555555',
        'light-text': '#777777',
      },
    },
  },
  plugins: [],
};