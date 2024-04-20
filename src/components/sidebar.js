module.exports = function (theme) {
  return {
    ".sidebar": {},
    ".sidebar-nav": {},
    ".sidebar-ul": {},
    ".sidebar-li": {},
    ".sidebar-a, .sidebar-a-child": {
      display: "block",
      padding: `${theme("gutter.xs")} ${theme("gutter.sm")}`,
      borderRadius: theme("borderRadius.DEFAULT"),
    },
    ".sidebar-a:hover, .sidebar-a-active": {
      color: theme("colors.light"),
      backgroundColor: theme("colors.primary"),
    },
  };
};
