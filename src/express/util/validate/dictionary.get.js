const dictionary = require("./dictionary");

function validateDictionaryGet(key, get) {
  const config = dictionary.find((i) => i.key === key);

  if (config) {
    return get ? config[get] : config;
  } else throw new Error(`Missing dictionary config for key: ${key}.`);
}

module.exports = validateDictionaryGet;
