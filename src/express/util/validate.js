const simpul_validate = require("simpul-validate");
const dictionary = require("./dictionary");

const validate = simpul_validate(dictionary);

module.exports = validate;

// https://github.com/nameer-rizvi/simpul-validate/tree/main/src
