const { log: generateLogger } = require("simpul");

module.exports = generateLogger(undefined, {
  ignoreNonCriticalLogs: process.env.IGNORE_NON_CRITICAL_LOGS === "true",
});
