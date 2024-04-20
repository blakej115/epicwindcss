module.exports = function (theme) {
  return {
    ...require("./btns")(theme),
    ...require("./center")(theme),
    ...require("./content")(theme),
    ...require("./navbar")(theme),
  };
};
