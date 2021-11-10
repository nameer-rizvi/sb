// --starterkit-flag [define data dictionary configs]

// The data dictionary store contains configs that define any and all
// values that can be passed to the api routes (unless a routeConfig
// has explicity set "ignoreValidation" to true).

const simpul_validate = require("simpul-validate");

const dictionary = [
  {
    key: "error",
    type: "object",
    whitelistKeys: ["pathname", "message", "stack"],
  },
];

const validate = simpul_validate(dictionary);

module.exports = validate;

// https://github.com/nameer-rizvi/simpul-validate/tree/main/src
