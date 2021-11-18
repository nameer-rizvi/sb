import { name, description as appDescription } from "../../shared";

const HTMLDocumentMetaInitialState = {
  title: "",
  description: appDescription,
  canonical: "",
  robots: "",
};

export function HTMLDocumentMetaUpdate(update = {}) {
  update = { ...HTMLDocumentMetaInitialState, ...update };
  for (let [metaName, metaValue] of Object.entries(update))
    if (metaName === "title") {
      let title = [metaValue, name.short].filter(Boolean).join(" - ");
      document.title = title;
      HTMLDocumentMetaUpdateElement("og:title", title);
      HTMLDocumentMetaUpdateElement("twitter:title", title);
    } else if (metaName === "description") {
      let description = metaValue;
      HTMLDocumentMetaUpdateElement("description", description);
      HTMLDocumentMetaUpdateElement("og:description", description);
    } else HTMLDocumentMetaUpdateElement(metaName, metaValue);
}

function HTMLDocumentMetaUpdateElement(metaName, metaValue) {
  let metaElement = document.getElementsByTagName("meta")[metaName];
  if (metaElement && metaValue) {
    metaElement.content = metaValue;
  } else if (metaElement && !metaValue) {
    metaElement.remove();
  } else if (!metaElement && metaValue) {
    let newMetaElement = document.createElement("meta");
    newMetaElement.name = metaName;
    newMetaElement.content = metaValue;
    document.head.appendChild(newMetaElement);
  }
}
