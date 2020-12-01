const settings = require("./src/shared").settings.eslint;

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["react-app", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  reportUnusedDisableDirectives: true,
  ...settings,
};

// Configuring ESLint:
// https://eslint.org/docs/user-guide/configuring
//
// Create-React-App's ESLint Package:
// https://www.npmjs.com/package/eslint-config-react-app
//
// A11Y's ESLint Package (integrated for accessibility):
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
