/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#1A1A1A',
          200: '#0D0D0D',
          300: '#030014',
        },
        accent: '#AB8BFF'
      }
    },
  },
  plugins: [],
}