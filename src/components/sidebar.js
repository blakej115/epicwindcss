module.exports = function (theme) {
  return {
    ".sidebar": {},
    ".sidebar-nav": {},
    ".sidebar-ul": {},
    ".sidebar-li": {},
    ".sidebar-a, .sidebar-a-parent, .sidebar-a-child": {
      display: "block",
      padding: `${theme("gutter.xs")} ${theme("gutter.sm")}`,
    },
    ".sidebar-a-parent": {
      fontSize: theme("fontSize.lg"),
      lineHeight: theme("fontSize.lg[1].lineHeight"),
      fontWeight: theme("fontWeight.bold"),
    },
    ".sidebar-a:hover": {},
  };
};
