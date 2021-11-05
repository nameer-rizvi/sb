// starterKit-flag [basically everything in this folder... Let's get busy!]

const express = require("express");
const router = express.Router();

router.get("/", require("./root"));
router.post("/error", require("./error"));
router.get("/initialize", require("./initialize"));

module.exports = router;
