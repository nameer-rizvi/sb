import { isEnv } from "../../shared";
import { timelog } from "simpul";

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

    if (installed.length) {
      const packageNames = installed.join(", ");
      timelog(`🔨 Following polyfill(s) have been installed: ${packageNames}.`);
    }
  } catch (error) {
    console.error(error);
  }
}

// https://www.npmjs.com/package/react-app-polyfill
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
