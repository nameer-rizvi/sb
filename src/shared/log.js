const { log: generateLogger } = require("simpul");

// Can add/overwrite methods by changing "undefined" to
//   "[ { key: "fail", emoji: "🚨" }, ...]"

const log = generateLogger(undefined, {
  ignoreNonCriticalLogs: process.env.IGNORE_NON_CRITICAL_LOGS === "true",
});

module.exports = log;
