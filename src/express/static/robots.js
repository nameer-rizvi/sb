const shared = require("../../shared");

// We disallow crawling through the website to enforce use of the sitemap.

function staticRouteRobots(req, res) {
  // Initialize rules store.

  const rules = [
    {
      name: "User-agent",
      value: "*",
    },
    {
      name: "Disallow",
      value: "/",
    },
    {
      sectionBreak: true,
    },
    {
      name: "Sitemap",
      value: shared.CONSTANT.ORIGIN + shared.CONSTANT.PATHNAME.SITEMAP,
    },
    {
      sectionBreak: true,
    },
    {
      name: "Host",
      value: shared.CONSTANT.ORIGIN,
    },
  ]
    .map((rule) => (rule.sectionBreak ? "" : `${rule.name}: ${rule.value}`))
    .join("\n");

  // Log successful txt generation for request by bot crawler.

  shared.util.log.bot("Crawled " + shared.CONSTANT.PATHNAME.ROBOTS);

  // Set response content type to text/plain.

  res.set("Content-Type", "text/plain");

  // Send client a 200 ("OK") status with the joined robots rules store.

  res.send(rules);
}

module.exports = staticRouteRobots;

// https://www.robotstxt.org/robotstxt.html
// https://developers.google.com/search/docs/advanced/robots/intro
// https://developers.google.com/search/docs/advanced/robots/create-robots-txt
