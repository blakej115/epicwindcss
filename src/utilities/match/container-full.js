module.exports = function (theme) {
  return [
    {
      "container-full": (value) => ({
        maxWidth: value,
        marginInline: "auto",
        width: "100%",
      }),
    },
    { values: theme("containerFull") },
  ];
};
