const express = require("express");

const expressJSONMiddleware = express.json({ limit: "1mb" });

module.exports = expressJSONMiddleware;

// https://expressjs.com/en/api.html
