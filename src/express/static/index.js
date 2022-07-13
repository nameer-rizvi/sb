const express = require("express");
const staticRouter = express.Router();
const shared = require("../../shared");

staticRouter.get(shared.CONSTANT.PATHNAME.FAVICON, require("./favicon"));
staticRouter.get(shared.CONSTANT.PATHNAME.ROBOTS, require("./robots"));
staticRouter.get(shared.CONSTANT.PATHNAME.SITEMAP, require("./sitemap"));
staticRouter.use(require("./singlePageApplication"));

module.exports = staticRouter;
