// Send config to initialize client applicaiton.

function routeAppInitialize(req, res) {
  const welcome =
    "This was fetched from the '/initialize' endpoint @ /express/routes/initialize.js.";

  res.json({ ...res.locals.user, welcome });
}

module.exports = routeAppInitialize;
