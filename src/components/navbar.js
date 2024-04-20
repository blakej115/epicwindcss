module.exports = function (theme) {
  return {
    ".navbar": {
      display: "flex",
      justifyContent: "space-between",
      padding: `${theme("gutter.sm")} ${theme("gutter.DEFAULT")}`,
      boxShadow: theme("boxShadow.DEFAULT"),
    },
    ".logo": {
      display: "flex",
      alignItems: "center",
      gap: theme("gutter.sm"),
      fontSize: theme("fontSize.lg"),
      lineHeight: theme("fontSize.lg[1].lineHeight"),
      fontWeight: "bold",
    },
    ".nav": {
      display: "flex",
      alignItems: "center",
    },
    ".nav-ul": {
      display: "flex",
      gap: theme("gutter.sm"),
    },
    ".nav-li": {},
    ".nav-a": {
      display: "block",
      padding: `${theme("gutter.xs")} ${theme("gutter.sm")}`,
      borderRadius: theme("borderRadius.DEFAULT"),
    },
    ".nav-a:hover, .nav-a-active": {
      color: theme("colors.light"),
      backgroundColor: theme("colors.primary"),
    },
  };
};
