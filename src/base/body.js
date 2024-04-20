module.exports = function (theme) {
  return {
    body: {
      fontSize: theme("fontSize.base"),
      lineHeight: theme("fontSize.base[1].lineHeight"),
    },
  };
};
