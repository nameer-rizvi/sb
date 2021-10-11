const { log: generateLogger } = require("simpul");

const log = generateLogger(undefined, {
  ignoreNonCriticalLogs: process.env.IGNORE_NON_CRITICAL_LOGS === "true",
});

module.exports = log;
