/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
  
          bkg: 'var(--color-bkg)',
          txt: 'var(--color-txt)',
          wtxt: 'var(--color-wtxt)',
  
          green: 'var(--color-green)',
          red: 'var(--color-red)'
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
