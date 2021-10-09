const { isObject } = require("simpul");
const isValid = require("./isValid");
const hasRequired = require("./hasRequired");
const sanitized = require("sanitized");

function validate(payload, required) {
  if (!isObject(payload)) throw new Error("Payload must be an object.");

  isValid(payload);

  if (required) hasRequired(payload, required);

  return sanitized(payload);
}

module.exports = validate;
