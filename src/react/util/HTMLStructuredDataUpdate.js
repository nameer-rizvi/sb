import { CONSTANT } from "../../shared";

// https://developers.google.com/search/docs/advanced/structured-data/search-gallery

const HTMLStructuredDataDefaults = [
  {
    "@type": "Organization",
    url: CONSTANT.URL.DOMAIN,
    logo: CONSTANT.URL.DOMAIN + CONSTANT.URL.APPLE_TOUCH_ICON,
  },
];

export function HTMLStructuredDataUpdate(update = []) {
  const structuredData = {
    "@context": "http://schema.org",
    "@graph": [...HTMLStructuredDataDefaults, ...update],
  };

  const structuredDataJSONString = JSON.stringify(structuredData);

  let script = document.querySelector("script[type='application/ld+json']");

  if (script) {
    script.textContent = structuredDataJSONString;
  } else {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.textContent = structuredDataJSONString;
    document.head.appendChild(script);
  }
}
