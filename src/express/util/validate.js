const simpul_validate = require("simpul-validate");

const dictionary = [{ key: "error", type: "object" }];

const validate = simpul_validate(dictionary);

module.exports = validate;
