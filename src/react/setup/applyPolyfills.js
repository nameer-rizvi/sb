import { isEnvProduction } from "../../shared";
import { logger } from "simpul";

// Polyfill packages are heavy so it is best to import them dynamically.

if (isEnvProduction) {
  /MSIE|Trident/.test(window.navigator.userAgent)
    ? import("react-app-polyfill/ie9")
        .then(() => {
          logger("🛠️ Applied polyfill: react-app-polyfill/ie9.");
          return import("react-app-polyfill/stable");
        })
        .then(() => logger("🛠️ Applied polyfill: react-app-polyfill/stable."))
    : import("react-app-polyfill/stable").then(() =>
        logger("🛠️ Applied polyfill: react-app-polyfill/stable.")
      );
}

// https://www.npmjs.com/package/react-app-polyfill
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
