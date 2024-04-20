module.exports = function (options) {
  return {
    ...require("./container-full")(options),
    ...require("./gutter")(options),
    extend: require("./extend")(options),
  };
};
