const { isEnv } = require("../../shared");

function rootRoute(req, res) {
  const welcome =
    "📟 This has been fetched from the express server via fetch, using the /api endpoint." +
    (!isEnv.live ? " You can find me at /src/express/routes/root.js." : "");

  res.json({ welcome });
}

module.exports = rootRoute;
