import { timelog } from "simpul";
import { isEnv } from "../../shared";

// Polyfill packages are heavy so it is best to import them dynamically.

async function installPolyfills() {
  try {
    const installs = [];

    if (/MSIE|Trident/.test(window.navigator.userAgent)) {
      await import("react-app-polyfill/ie9");
      installs.push("react-app-polyfill/ie9");
    }

    await import("react-app-polyfill/stable");
    installs.push("react-app-polyfill/stable");

    if (installs.length) {
      const logInstalls = installs.join(", ");
      timelog(`🔨 Following polyfill(s) have been applied: ${logInstalls}.`);
    }
  } catch (error) {
    console.error(error);
  }
}

if (isEnv.live) installPolyfills();

// https://www.npmjs.com/package/react-app-polyfill
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
