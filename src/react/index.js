import { isEnvProduction } from "../shared";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, serviceWorker } from "./setup";
import App from "./App";
import _public from "../public";

// Having this hosted in "/setup" does not work.
// Must settle for this line here if hmr is desired.
!isEnvProduction && module.hot && module.hot.accept();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(_public.props.applicationId)
);

serviceWorker.register();

// https://www.npmjs.com/package/react
// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react-redux
