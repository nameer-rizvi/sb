const settings = require("./src/shared").settings.eslint;

const eslintrc = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["react-app", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  ...settings,
};

module.exports = eslintrc;

// Create-React-App's ESLint Package:
// https://www.npmjs.com/package/eslint-config-react-app
//
// Configuring ESLint:
// https://eslint.org/docs/user-guide/configuring
//
// A11Y's ESLint Package (integrated for accessibility):
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
