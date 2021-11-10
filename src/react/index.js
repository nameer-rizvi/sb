import { rootElement } from "./setup"; // To ensure polyfills get applied first, "./setup" must be the first import.
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { isEnv } from "simpul";

ReactDOM.render(<App />, rootElement);

if (!isEnv.live && module.hot) module.hot.accept(); // Won't work in "/setup" so must be called here.

// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react
