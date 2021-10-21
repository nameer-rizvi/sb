// starterKit-flag [TODO: Define data dictionary for back-end use.]

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