import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, serviceWorker } from "./setup";
import App from "./App";
import { browser } from "../shared";

if (module.hot) module.hot.accept();

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
