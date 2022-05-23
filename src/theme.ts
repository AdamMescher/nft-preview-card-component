const theme = {
  breakpoints: {
    mobile: "375px",
    desktop: "1440px"
  },
  colors: {
    primary: {
      softBlue: "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)"
    },
    neutral: {
      veryDarkBlue: {
        mainBg: "hsl(217, 54%, 11%)",
        cardBg: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)"
      },
      white: "hsl(0, 0%, 100%)"
    }
  },
  typography: {
    bodyCopy: { fontSize: "18px" },
    font: {
      fontFamily: "'Outfit', sans-serif",
      weights: {
        thin: 300,
        regular: 400,
        bold: 700
      }
    }
  }
};

export default theme;
