module.exports = function (theme) {
  return {
    ...require("./btns")(theme),
    ...require("./center")(theme),
    ...require("./content")(theme),
    ...require("./sidebar")(theme),
    ...require("./navbar")(theme),
  };
};
