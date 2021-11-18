const routes = require("../middlewares/routeManager.configs");

// Send client a 200 ("OK") status with a json map of api routes + route config/requirements.

const routeAppRoot = (req, res) => res.json({ routes });

module.exports = routeAppRoot;
