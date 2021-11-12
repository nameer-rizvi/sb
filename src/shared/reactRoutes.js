const { dateformat } = require("simpul");

const makeXMLDate = (date) => dateformat(date, "Y-M-D");

const reactRoutes = [
  {
    name: "home",
    xml: () => ({
      loc: "/",
      lastmod: makeXMLDate(),
      changefreq: "yearly",
      priority: 1,
    }),
  },
  {
    name: "notFound",
  },
];

module.exports = reactRoutes;
