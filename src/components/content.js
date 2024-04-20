module.exports = function (theme) {
  return {
    ".content": {
      display: "flex",
      flexDirection: "column",
      rowGap: "1rem",
      "h1, h2, h3, h4, h5, h6": {
        fontWeight: "bold",
      },
      h1: {
        fontSize: theme("fontSize.5xl"),
        lineHeight: theme("fontSize.5xl[1].lineHeight"),
      },
      h2: {
        fontSize: theme("fontSize.4xl"),
        lineHeight: theme("fontSize.4xl[1].lineHeight"),
      },
      h3: {
        fontSize: theme("fontSize.3xl"),
        lineHeight: theme("fontSize.3xl[1].lineHeight"),
      },
      h4: {
        fontSize: theme("fontSize.2xl"),
        lineHeight: theme("fontSize.2xl[1].lineHeight"),
      },
      h5: {
        fontSize: theme("fontSize.xl"),
        lineHeight: theme("fontSize.xl[1].lineHeight"),
      },
      h6: {
        fontSize: theme("fontSize.lg"),
        lineHeight: theme("fontSize.lg[1].lineHeight"),
      },
    },
  };
};
