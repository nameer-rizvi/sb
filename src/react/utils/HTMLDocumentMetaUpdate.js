import { name, description as appDescription } from "../../shared";

function HTMLDocumentMetaUpdateElement(metaName, metaValue) {
  const metaElement = document.getElementsByTagName("meta")[metaName];
  if (metaElement) metaElement.content = metaValue;
}

const HTMLDocumentMetaInitialState = {
  title: "",
  description: appDescription,
};

export function HTMLDocumentMetaUpdate(update = HTMLDocumentMetaInitialState) {
  for (let [metaName, metaValue] of Object.entries(update)) {
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
}
