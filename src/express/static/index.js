const express = require("express");
const staticRouter = express.Router();
const { resource } = require("../../shared");

staticRouter.get(resource.robots, require("./robots"));
staticRouter.get(resource.sitemap, require("./sitemap"));
staticRouter.use(require("./singlePageApplication"));

module.exports = staticRouter;
