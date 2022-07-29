module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
        "1": "1",
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['dark'],
    },
  },
  plugins: [],
};
