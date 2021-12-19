const { reactRoutes, origin, log, resource } = require("../../shared");

// Dynamically generate sitemap using react route configs.
//  This is convenient for if there are dynamic routes that depend on data from a database.

// NOTE: 45,000 urls || 50MB maximum for each sitemap.
//       Indexing two levels deep gives a maximum of 2,025,000,000.

async function sitemap(req, res) {
  try {
    // Initialize store for xml elements with required elements.

    const XMLElements = [
      `<?xml version="1.0" encoding="UTF-8"?>`,
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ];

    // Loop through react route configs.

    for (let reactRoute of reactRoutes)
      if (reactRoute.xml) {
        // If a react route has an xml method...

        // Push opening tag for route url to xml elements store.

        XMLElements.push("<url>");

        // Loop through route xml config, and push data into xml elements store.

        for (const [XMLURLKey, XMLURLValue] of Object.entries(reactRoute.xml()))
          XMLElements.push(
            `<${XMLURLKey}>${
              XMLURLKey === "loc" ? origin + XMLURLValue : XMLURLValue
            }</${XMLURLKey}>`
          );

        // Push closing tag for route url to xml elements store.

        XMLElements.push("</url>");
      }

    // Push urlset closing tag to xml elements store.

    XMLElements.push("</urlset>");

    // Log successful xml generation for request by bot crawler.

    log.bot("Crawled " + resource.sitemap);

    // Set response content type to xml.

    res.set("Content-Type", "text/xml");

    // Send client a 200 ("OK") status with the joined xml elements store.

    res.send(XMLElements.join("\n"));
  } catch (error) {
    // Log any error.

    log.bot(error, { flag: "minimal" });

    // Send client a 500 ("Internal Server Error") status.

    res.sendStatus(500);
  }
}

module.exports = sitemap;

// https://www.sitemaps.org/
// https://developers.google.com/search/docs/advanced/sitemaps/overview
// https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap
// https://developers.google.com/search/docs/advanced/sitemaps/news-sitemap
//
// Sample:
//
// <url>
//    <loc>http://www.example.com/</loc>
//    <lastmod>2005-01-01</lastmod>
//    <changefreq>monthly</changefreq>
//    <priority>0.8</priority>
// </url>
