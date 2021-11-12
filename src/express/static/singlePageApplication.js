const { isEnv } = require("simpul");
const fs = require("fs");
const { path } = require("../../shared");
const express = require("express");
const template = require("./singlePageApplication.placeholderTemplate");

// If the application is in production,
// Serve the index.html in the /dist folder,
// Otherwise send the 404 placeholder template.

const singlePageApplicationMiddleware =
  isEnv.live && fs.existsSync(path.dist("index.html"))
    ? express.static(path.dist())
    : (req, res) => res.status(404).send(template);

module.exports = singlePageApplicationMiddleware;
