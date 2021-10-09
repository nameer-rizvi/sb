const express = require("express");
const router = express.Router();

router.get("/", require("./root"));
router.post("/error", require("./error"));
router.get("/health", require("./health"));
router.get("/initialize", require("./initialize"));

module.exports = router;
