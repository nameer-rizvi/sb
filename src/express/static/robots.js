const { origin, resource, log } = require("../../shared");

// We disallow crawling through the website to enforce use of the sitemap.

function robots(req, res) {
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
      value: origin + resource.sitemap,
    },
    {
      sectionBreak: true,
    },
    {
      name: "Host",
      value: origin,
    },
  ].map((rule) => (rule.sectionBreak ? "" : rule.name + ": " + rule.value));

  // Log successful txt generation for request by bot crawler.

  log.bot("Crawled " + resource.robots);

  // Set response content type to text/plain.

  res.set("Content-Type", "text/plain");

  // Send client a 200 ("OK") status with the joined robots rules store.

  res.send(rules.join("\n"));
}

module.exports = robots;

// https://www.robotstxt.org/robotstxt.html
// https://developers.google.com/search/docs/advanced/robots/intro
// https://developers.google.com/search/docs/advanced/robots/create-robots-txt
