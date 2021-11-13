const { origin, resource, log } = require("../../shared");

function robots(req, res) {
  // Initialize rules store.

  const rules = [
    {
      name: "User-agent",
      value: "*",
    },
    {
      name: "Allow",
      value: "/",
    },
    {
      name: "Crawl-delay",
      value: "10",
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
  ].map((rule) => (rule.sectionBreak ? "\n" : rule.name + ": " + rule.value));

  // Log successful txt generation for request by bot crawlers.

  log.bot("Crawled " + resource.robots);

  // Set response content type to text/plain.

  res.set("Content-Type", "text/plain");

  // Send joined robots rules store.

  res.send(rules.join("\n"));
}

module.exports = robots;

// https://www.robotstxt.org/robotstxt.html
// https://developers.google.com/search/docs/advanced/robots/intro
// https://developers.google.com/search/docs/advanced/robots/create-robots-txt
