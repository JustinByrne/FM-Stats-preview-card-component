module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'smr': '0.9rem',
        '2.5xl': '1.7rem',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        deca: 'Lexend Deca, sans-serif',
      },
      colors: {
        darkBlue: "hsl(233, 47%, 7%)",
        desaturatedBlue: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
      },
      brightness: {
        '130': '1.3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
