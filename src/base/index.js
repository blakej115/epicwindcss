module.exports = function (theme) {
  return {
    ...require("./body")(theme),
    ...require("./transition")(theme),
  };
};
