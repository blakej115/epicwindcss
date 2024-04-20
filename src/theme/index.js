module.exports = function (options) {
  return {
    ...require("./gutter")(options),
    extend: require("./extend")(options),
  };
};
