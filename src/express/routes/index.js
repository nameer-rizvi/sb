const express = require("express");
const router = express.Router();

router.get("/", require("./root"));

module.exports = router;
