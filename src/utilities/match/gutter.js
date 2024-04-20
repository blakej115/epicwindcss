module.exports = function (theme) {
  return [
    {
      gutter: (value) => ({
        padding: value,
      }),
    },
    { values: theme("gutter") },
  ];
};
