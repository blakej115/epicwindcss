const plugin = require("tailwindcss/plugin"),
  merge = require("lodash/merge");

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addBase, addComponents, addUtilities, theme }) {
      addBase(merge(require("./base")(theme), options.styles.base));
      addComponents(
        merge(require("./components")(theme), options.styles.components)
      );
      addUtilities(
        merge(require("./utilities")(theme), options.styles.utilities)
      );
    };
  },
  function (options) {
    return {
      theme: require("./theme")(options),
    };
  }
);
