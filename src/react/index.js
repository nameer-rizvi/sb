import { rootElement } from "./setup"; // To ensure polyfills get applied first, "./setup" must be the first import.
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { isEnv } from "simpul";

ReactDOM.render(<App />, rootElement);

// This won't work in a folder like "/setup", have to call it here...
if (!isEnv.live && module.hot) module.hot.accept();

// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react
