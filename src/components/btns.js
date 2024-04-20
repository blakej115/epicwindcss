module.exports = function (theme) {
  return {
    ".btn": {
      display: "inline-block",
      padding: ".5rem 1rem",
      borderRadius: ".25rem",
      backgroundColor: theme("colors.dark"),
      color: theme("colors.light"),
      textDecoration: "none",
      transition: ".4s",
      "&:hover": {
        backgroundColor: theme("colors.secondary"),
      },
    },
  };
};
