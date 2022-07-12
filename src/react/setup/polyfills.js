import { isEnv } from "simpul";
import { util } from "../../shared";

if (isEnv.live) installPolyfills();

async function installPolyfills() {
  try {
    await import("react-app-polyfill/stable");
    util.log.polyfill("installed react-app-polyfill/stable");
  } catch (error) {
    util.log.polyfill(error);
  }
}

// https://www.npmjs.com/package/react-app-polyfill
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
