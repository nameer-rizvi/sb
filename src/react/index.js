import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { rootElement, serviceWorker } from "./setup";
import { isEnvProduction } from "../shared";

ReactDOM.render(<App />, rootElement);

serviceWorker.register();

// Having this hosted in "/setup" does not work.
// Must settle for this line here if hmr is desired.
!isEnvProduction && module.hot && module.hot.accept();

// https://www.npmjs.com/package/react
// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react-redux
