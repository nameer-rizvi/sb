// --starterKit-flag [set react route configs here]

// We host the react route configs here for use by the sitemap generator in the express folder.

const { dateformat } = require("simpul");

const makeXMLDate = (date) => dateformat(date, "Y-M-D");

const reactRoutes = [
  {
    name: "Home",
    pathname: "/",
    redirectFroms: ["/redirect-to-home"],
    xml: () => ({
      loc: "/",
      lastmod: makeXMLDate(),
      changefreq: "yearly",
      priority: 1,
    }),
  },
  {
    name: "Redirect Sample",
    pathname: "/redirect-from-here",
    redirectTo: "/",
  },
  {
    name: "Content",
    pathname: "/content/:content_name",
    document: () => ({
      title: "",
      description: "",
    }),
    structuredData: () => ({}),
  },
  {
    name: "NotFound",
  },
];

module.exports = reactRoutes;
