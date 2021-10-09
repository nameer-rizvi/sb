const { isValid } = require("simpul");
const dictionaryGet = require("./dictionary.get");

function validateHasRequired(payload, required) {
  for (let i = required.length - 1; i >= 0; i--) {
    let requiredPropertyKey = required[i];

    let requiredPropertyValue = payload[requiredPropertyKey];

    let hasRequiredPropertyValue = isValid(requiredPropertyValue, "all");

    if (!hasRequiredPropertyValue) {
      const label =
        dictionaryGet(requiredPropertyKey, "label") || requiredPropertyKey;

      throw new Error(label + " is required.");
    }
  }
}

module.exports = validateHasRequired;
