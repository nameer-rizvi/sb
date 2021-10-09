const sanitized = require("sanitized");

function validateValidationIsSanitized({
  ignoreIsSanitized,
  type,
  value,
  label,
}) {
  if (!ignoreIsSanitized) {
    if (type === "isString" && value !== sanitized(value))
      throw new Error(label + " is a dirty value.");
  }
}

module.exports = validateValidationIsSanitized;
