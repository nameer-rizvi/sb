const { isEnv, log: generateLogger } = require("simpul");

// keyEmojis can add/overwrite methods "[ { key: "fail", emoji: "🚨" }, ...]"

const keyEmojis = [{ key: "performance", emoji: "⏱️ " }];

const logEnvConfig = isEnv.production
  ? { ignoreEnvironment: true } // ...ignoreNonCriticalLogs: true, flags: ["minimal"],
  : { ignoreEnvironment: true };

const sharedUtilLog = generateLogger(keyEmojis, logEnvConfig);

module.exports = sharedUtilLog;

// https://github.com/nameer-rizvi/simpul/blob/master/src/log.js
