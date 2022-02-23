const routes = require("../middlewares/routeManager.configs");

// Send client a 200 ("OK") status with a json map of api routes + route config/requirements.

const routeAppRoot = (req, res) =>
  res.json({
    name: "Application API",
    description: "List of available routes and route requirements.",
    routes,
  });

module.exports = routeAppRoot;
