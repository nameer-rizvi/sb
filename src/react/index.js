import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, serviceWorker } from "./setup";
import App from "./App";
import { browser } from "../shared";

// Tried having this be hosted in "/setup"
// but it won't work in there (if making
// another attempt, must refresh page to
// see changes take effect). Must settle
// for this line here if hmr is desired.
module.hot && module.hot.accept();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(browser.html.applicationId)
);

serviceWorker.register();

// https://www.npmjs.com/package/react
// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react-redux
