module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        deca: 'Lexend Deca, sans-serif',

      },
      colors: {
        darkBlue: "hsl(233, 47%, 7%)",
        desaturatedBlue: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
