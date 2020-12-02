const express = require("express");
const router = express.Router();
const { isEnvProduction } = require("../../shared");

router.use((req, res) =>
  res.status(200).send({
    welcome:
      "📟 This has been fetched from the express server via fetch, using the /api endpoint." +
      (!isEnvProduction ? " You can find me at /src/express/api.js." : ""),
  })
);

module.exports = router;
