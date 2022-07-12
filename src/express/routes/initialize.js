const shared = require("../../shared");

// Send client a 200 ("OK") status with json payload.

const routeInitialize = (req, res) =>
  res.json({
    ...res.locals.token,
    url: {
      post: `/post/${Math.floor(Math.random() * (10000 - 1 + 1) + 1)}`,
      github: shared.CONSTANT.URL.GITHUB,
    },
    footnote:
      "The data for this page was fetched from the server @ /express/routes/initialize.js.",
  });

module.exports = routeInitialize;
