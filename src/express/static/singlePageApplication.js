const placeholderTemplate = require("./singlePageApplication.placeholderTemplate");
const { isEnv } = require("simpul");
const fs = require("fs");
const shared = require("../../shared");
const express = require("express");

// Set middleware to send client a 404 ("Not Found") status with the placeholder template.

let singlePageApplicationMiddleware = (req, res) =>
  res.status(404).send(placeholderTemplate);

// If application is in a live environment and the index.html exists in the /dist folder...
//  Set middleware to serve the /dist folder.

if (isEnv.live && fs.existsSync(shared.util.makePath.dist("/index.html")))
  singlePageApplicationMiddleware = express.static(shared.util.makePath.dist());

module.exports = singlePageApplicationMiddleware;
