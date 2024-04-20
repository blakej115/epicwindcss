module.exports = function (theme) {
  return {
    "a, button, input, textarea": {
      transitionProperty: theme("transitionProperty.DEFAULT"),
      transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
      transitionDuration: theme("transitionDuration.DEFAULT"),
    },
  };
};
