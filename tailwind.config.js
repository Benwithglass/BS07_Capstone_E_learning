module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "second": "#081b27",
        "green": "#36867b",
        "green-light": "#41b294",
        "yellow": "#f6ba35"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-8%)' },
          '50%': { transform: 'translateY(8%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}