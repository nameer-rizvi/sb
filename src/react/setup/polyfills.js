import { timelog } from "simpul";
import { isEnv } from "../../shared";

// Polyfill packages are heavy so it is best to import them dynamically.

async function installPolyfills() {
  try {
    const installedPolyfills = [];

    if ("userAgent" in navigator && /MSIE|Trident/.test(navigator.userAgent)) {
      await import("react-app-polyfill/ie9");
      installedPolyfills.push("react-app-polyfill/ie9");
    }

    await import("react-app-polyfill/stable");
    installedPolyfills.push("react-app-polyfill/stable");

    if (installedPolyfills.length) {
      const packageNames = installedPolyfills.join(", ");
      timelog(`🔨 Following polyfill(s) have been applied: ${packageNames}.`);
    }
  } catch (error) {
    console.error(error);
  }
}

if (isEnv.live) installPolyfills();

// https://www.npmjs.com/package/react-app-polyfill
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
