const express = require("express");

// Express's json middleware is required to parse requests for json values.
// These json values get validated and sanitized in the validation middleware
// and stored in res locals for use in route functions.

const expressJSONMiddleware = express.json({ limit: "1mb" });

module.exports = expressJSONMiddleware;

// https://expressjs.com/en/api.html
