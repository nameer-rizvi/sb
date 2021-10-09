const getConfigFromDictionary = require("./dictionary.get");
const validationResolver = require("./validation.index");

function validateIsValid(payload) {
  const payloadKeys = Object.keys(payload);

  const ignoreValidationConfigKeys = ["key", "label"];

  for (let i = payloadKeys.length - 1; i >= 0; i--) {
    let payloadKey = payloadKeys[i];

    let validationConfig = getConfigFromDictionary(payloadKey);

    let validationConfigKeys = Object.keys(validationConfig).filter(
      (validationConfigKey) =>
        !ignoreValidationConfigKeys.includes(validationConfigKey)
    );

    let value = payload[payloadKey];

    let label = validationConfig.label || payloadKey;

    if (value !== null && value !== undefined) {
      for (let j = 0; j < validationConfigKeys.length; j++) {
        let validationConfigKey = validationConfigKeys[j];

        let validation = validationResolver[validationConfigKey];

        if (!validation) {
          let error = "Missing validation for: " + validationConfigKey + ".";
          throw new Error(error);
        }

        let setting = validationConfig[validationConfigKey];

        validation({ setting, value, label });
      }

      validationResolver.isSanitized({ value, label, ...validationConfig });
    }
  }
}

module.exports = validateIsValid;
