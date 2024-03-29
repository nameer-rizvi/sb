// --flow-serviceWorker-0

/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

import { skipWaiting, clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import icon from "../icons/favicon_io/apple-touch-icon.png";
import log from "../../shared/util.log";
import ORIGIN from "../../shared/constant.ORIGIN";

// Core middlewares.

skipWaiting();

clientsClaim();

// Standard precacher/router for webpack bundler injection.

precacheAndRoute(self.__WB_MANIFEST);

// Push event listener.

self.addEventListener("push", (event) => {
  try {
    if (self.Notification?.permission === "granted") {
      // If Notification permission has been granted by the user...

      // Parse event data for json, and store it as data constant.

      const data = event.data.json() || {};

      // Initialize options constant with rich settings.

      const options = { lang: "en", vibrate: [500], icon, ...data };

      // Wait until notification has been shown.

      event.waitUntil(self.registration.showNotification(data.title, options));
    }
  } catch (error) {
    log.sw(`Push Event: ${error.toString()}`, { flag: "minimal" });
  }
});

// Notification click event listener.

self.addEventListener("notificationclick", (event) => {
  try {
    if (self.Notification?.permission === "granted") {
      // If Notification permission has been granted by the user...

      // Close the notification.

      event.notification.close();

      // Async function to open notification in an active window.

      async function openInActiveWindow() {
        // Form target url by appending pathname into the origin, if it exists.

        const URL = ORIGIN + (event.notification.data?.pathname || "");

        // Fetch all client windows.

        const clientWindows = await clients.matchAll({ type: "window" });

        // Loop through client windows to find one that matches application origin.

        for (let clientWindow of clientWindows)
          if (clientWindow.url.startsWith(ORIGIN) && "focus" in clientWindow) {
            // If a client window with a focus method is found...

            // Focus on client window.

            clientWindow.focus();

            // Navigate to url.

            if ("navigate" in clientWindow) clientWindow.navigate(URL);

            // End async function.

            return;
          }

        // If no matching client window is found, if clients has an openWindow method, use it to navigate to url.

        if (clients.openWindow) clients.openWindow(URL);
      }

      // Wait until notification click event (openInActiveWindow) has processed.

      event.waitUntil(openInActiveWindow());
    }
  } catch (error) {
    log.sw(`Notification Click: ${error.toString()}`, { flag: "minimal" });
  }
});

// https://developers.google.com/web/tools/workbox/modules/workbox-core
// https://developers.google.com/web/tools/workbox/modules/workbox-precaching
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/PushEvent
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event
