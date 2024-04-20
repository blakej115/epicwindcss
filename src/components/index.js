module.exports = function (theme) {
  return {
    ...require("./btns")(theme),
    ...require("./content")(theme),
    ...require("./navbar")(theme),
  };
};
