const express = require("express");
const staticRouter = express.Router();
const shared = require("../../shared");

staticRouter.get(shared.CONSTANT.RESOURCE.ROBOTS, require("./robots"));
staticRouter.get(shared.CONSTANT.RESOURCE.SITEMAP, require("./sitemap"));
staticRouter.use(require("./singlePageApplication"));

module.exports = staticRouter;
