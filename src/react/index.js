import { rootElement } from "./setup"; // To ensure polyfills get applied first, /setup must be the first import.
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { isEnv } from "simpul";

createRoot(rootElement).render(<App />);

if (!isEnv.live) module.hot?.accept(); // Won't work in /setup so must be called here.

// https://www.npmjs.com/package/react-dom
// https://www.npmjs.com/package/react
