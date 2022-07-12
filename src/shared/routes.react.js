// --starterKit-flag [set react route configs here]

const { dateformat } = require("simpul");

// We host the react route configs here for use by
//  the sitemap generator in the express folder.

const sharedRoutesReact = [
  {
    name: "Home",
    path: "/",
    xml: () => ({
      loc: "/",
      lastmod: makeXMLDate(),
    }),
    document: () => ({
      title: "Home",
      description: "Application home page.",
    }),
  },
  {
    name: "Post",
    path: "/post/:id",
    document: ({ id }) => ({
      title: "Post: #" + id,
      description: "Page for post #" + id + ".",
    }),
  },
  {
    name: "404",
    path: "/404",
    redirects: ["*"],
    document: () => ({
      title: "Not Found",
      description: "This page does not exist or is not available.",
      robots: "noindex",
    }),
  },
];

module.exports = sharedRoutesReact;

function makeXMLDate(date) {
  return dateformat(date, "Y-M-D");
}

// https://developers.google.com/search/docs/advanced/crawling/special-tags
