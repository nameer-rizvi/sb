import { support } from "simpul";

// --flow-googleTagManager-5

function gtagPageView(page_path) {
  if (support.window("gtag")) {
    window.gtag("set", "page_path", page_path);
    window.gtag("event", "page_view");
  }
}

function gtagClick(element_name, element_title) {
  if (support.window("gtag")) {
    if (element_name) {
      element_name = element_name.replace(/[^\w]/g, "_");
      if (element_name.startsWith("_"))
        element_name = element_name.substring(1);
    }

    if (element_name && element_title)
      window.gtag("event", "click", {
        event_category: element_name,
        event_label: element_title,
      });
  }
}

export const gtag = { pageView: gtagPageView, click: gtagClick };
