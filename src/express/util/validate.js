const simpul_validate = require("simpul-validate");

const dictionary = [{ key: "error", type: "error" }];

const validate = simpul_validate(dictionary);

module.exports = validate;
