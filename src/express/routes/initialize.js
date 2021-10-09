// Send config to initialize client applicaiton.

const routeAppInitialize = (req, res) =>
  res.json({
    welcome:
      "This was fetched from the '/initialize' endpoint @ /express/routes/initialize.js.",
    ...res.locals.user,
  });

module.exports = routeAppInitialize;
