const { isEnv, log: generateLogger } = require("simpul");

// Can add/overwrite methods by changing "undefined" to
//   "[ { key: "fail", emoji: "🚨" }, ...]"

const logEnvConfig = isEnv.production
  ? {
      ignoreEnvironment: true,
      ignoreNonCriticalLogs: true,
      flags: ["minimal"],
    }
  : {
      ignoreEnvironment: true,
    };

const log = generateLogger(undefined, logEnvConfig);

module.exports = log;
