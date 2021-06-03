import { isEnvProduction } from "../../shared";
import { timelog } from "simpul";

// Polyfill packages are heavy so it is best to import them dynamically.

if (isEnvProduction) {
  const ApplyIE9Polyfill = (prev = []) =>
    new Promise((resolve, reject) =>
      /MSIE|Trident/.test(window.navigator.userAgent)
        ? import("react-app-polyfill/ie9")
            .then(() => resolve([...prev, "react-app-polyfill/ie9"]))
            .catch(reject)
        : resolve()
    );

  const ApplyStablePolyfill = (prev = []) =>
    new Promise((resolve, reject) =>
      import("react-app-polyfill/stable")
        .then(() => resolve([...prev, "react-app-polyfill/stable"]))
        .catch(reject)
    );

  function LogPolyfills(appliedPolyfills) {
    const polyfills = appliedPolyfills.join(", ");
    timelog(`🔨 Following polyfill(s) have been applied: ${polyfills}.`);
  }

  ApplyIE9Polyfill()
    .then(ApplyStablePolyfill)
    .then(LogPolyfills)
    .catch(timelog);
}

// https://www.npmjs.com/package/react-app-polyfill
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
