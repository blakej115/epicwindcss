const plugin = require("tailwindcss/plugin"),
  merge = require("lodash/merge");

module.exports = plugin.withOptions(
  function (options) {
    return function ({
      addBase,
      addComponents,
      addUtilities,
      matchUtilities,
      theme,
    }) {
      addBase(merge(require("./base")(theme), theme("epic.base")));
      addComponents(
        merge(require("./components")(theme), theme("epic.components"))
      );
      addUtilities(
        merge(require("./utilities")(theme), theme("epic.utilities"))
      );
      require("./utilities/match")(theme, matchUtilities);
    };
  },
  function (options) {
    return {
      theme: require("./theme")(options),
    };
  }
);
