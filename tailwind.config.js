/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-mono': ['DM Mono', 'monospace'],
        'neue-montreal': ['Neue Montreal', 'sans-serif'],
        'pkiko': ['PKiko', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
