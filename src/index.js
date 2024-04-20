const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addComponents, theme }) {
    addComponents({
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
      ".content": {
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        "h1, h2, h3, h4, h5, h6": {
          fontWeight: "bold",
        },
        h1: {
          fontSize: "3rem",
        },
        h2: {
          fontSize: "2.75rem",
        },
        h3: {
          fontSize: "2.5rem",
        },
        h4: {
          fontSize: "2.25rem",
        },
        h5: {
          fontSize: "2rem",
        },
        h6: {
          fontSize: "1.75rem",
        },
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          light: "#fff",
          dark: "#000",
          primary: "#5399ff",
          secondary: "green",
        },
      },
    },
  }
);
