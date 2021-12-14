const { isEnv } = require("simpul");
const fs = require("fs");
const { path } = require("../../shared");
const express = require("express");
const template = require("./singlePageApplication.placeholderTemplate");

// Set middleware to send client a 404 ("Not Found") status with the placeholder template.

let singlePageApplicationMiddleware = (req, res) =>
  res.status(404).send(template);

// If application is in a live environment and the index.html exists in the /dist folder...
//   Set middleware to serve the /dist folder.

if (isEnv.live && fs.existsSync(path.dist("index.html")))
  singlePageApplicationMiddleware = express.static(path.dist());

module.exports = singlePageApplicationMiddleware;
