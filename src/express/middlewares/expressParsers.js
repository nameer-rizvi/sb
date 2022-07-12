const express = require("express");

// Express's parsers are required to parse requests for json values.
// These json values get validated and sanitized in the validation middleware
// and stored in res locals for use in route functions.

const expressJSONParser = express.json({ limit: "1mb" });

const expressURLEncodedParser = express.urlencoded({ extended: true });

module.exports = [expressJSONParser, expressURLEncodedParser];

// https://expressjs.com/en/api.html
