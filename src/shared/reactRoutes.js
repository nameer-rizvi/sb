// --starterKit-flag [set react route configs here]

// We host the react route configs here for use by the sitemap generator in the express folder.

const { dateformat } = require("simpul");

const makeXMLDate = (date) => dateformat(date, "Y-M-D");

const reactRoutes = [
  {
    name: "Home",
    path: "/",
    xml: () => ({
      loc: "/",
      lastmod: makeXMLDate(),
      changefreq: "yearly",
      priority: 1,
    }),
    document: () => ({
      title: "Home Page",
      description: "This is your application's home page.",
    }),
    // structuredData: () => ({}),
  },
  {
    name: "Post",
    path: "/post/:id/:username",
    document: ({ id }) => ({
      title: "Post " + id,
      description: "Page for post #" + id + ".",
    }),
    // structuredData: () => ({}),
  },
  {
    name: "NotFound",
    path: "*",
    document: () => ({
      title: "Not Found",
      description: "Page does not exist.",
    }),
  },
];

module.exports = reactRoutes;
