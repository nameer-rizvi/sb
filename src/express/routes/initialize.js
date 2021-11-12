// Send config to initialize client applicaiton.

const routeAppInitialize = (req, res) =>
  res.json({
    ...res.locals.user,
    welcome:
      "This was fetched from the '/initialize' endpoint @ /express/routes/initialize.js.",
  });

module.exports = routeAppInitialize;
