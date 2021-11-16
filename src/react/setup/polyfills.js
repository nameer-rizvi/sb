import { isEnv } from "simpul";
import { log } from "../../shared";

if (isEnv.live) installPolyfills();

async function installPolyfills() {
  try {
    const installed = [];

    if ("userAgent" in navigator && /MSIE|Trident/.test(navigator.userAgent)) {
      await import("react-app-polyfill/ie9");
      installed.push("react-app-polyfill/ie9");
    }

    await import("react-app-polyfill/stable");
    installed.push("react-app-polyfill/stable");

    if (installed.length) log.polyfill(`installed ${installed.join(", ")}`);
  } catch (error) {
    log.polyfill(error);
  }
}

// https://www.npmjs.com/package/react-app-polyfill
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
