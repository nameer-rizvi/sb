const simpul = require("simpul");

function validateValidationType({ setting, value, label }) {
  if (!simpul[setting](value)) throw new Error(`${label} is an invalid type.`);
}

module.exports = validateValidationType;
