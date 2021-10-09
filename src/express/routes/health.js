// Return 200 response code to signal "OK" server health.

const routeAppHealth = (req, res) => res.sendStatus(200);

module.exports = routeAppHealth;
