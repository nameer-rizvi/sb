// --flow-serviceWorker-0

/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

import { skipWaiting, clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import icon from "../icons/favicon_io/favicon-48x48.png";
import log from "../../shared/log";
import origin from "../../shared/origin";

// Core middlewares.

skipWaiting();

clientsClaim();

// Standard precacher/router for webpack bundler injection.

precacheAndRoute(self.__WB_MANIFEST);

// Push event listener.

self.addEventListener("push", (event) => {
  try {
    if (self.Notification && self.Notification.permission === "granted") {
      // If Notification permission has been granted by the user...

      // Parse event data for json, and store it as data constant.

      const data = event.data.json();

      // Initialize options constant with rich settings.

      const options = { lang: "en", vibrate: [500], icon, ...data };

      // Wait until notification has been processed.

      event.waitUntil(self.registration.showNotification(data.title, options));
    }
  } catch (error) {
    log.sw("Push Event: " + error.toString());
  }
});

// Notification click event listener.

self.addEventListener("notificationclick", (event) => {
  try {
    if (self.Notification && self.Notification.permission === "granted") {
      // If Notification permission has been granted by the user...

      // Close the notification.

      event.notification.close();

      // Async function to open notification in an active window.

      async function openInActiveWindow() {
        // Extract pathname from event notification data.

        const pathname =
          event.notification.data && event.notification.data.pathname;

        // Form target url by appending pathname into the origin.

        const url = origin + (pathname || "");

        // Fetch all client windows.

        const clientWindows = await clients.matchAll({ type: "window" });

        // Loop through client windows to find one that matches application origin.

        for (let i = 0; i < clientWindows.length; i++) {
          let clientWindow = clientWindows[i];
          if (clientWindow.url.startsWith(origin) && "focus" in clientWindow) {
            // If a client window is found, focus on it and navigate it to url.
            clientWindow.focus();
            if ("navigate" in clientWindow) clientWindow.navigate(url);
            return; // End async function here.
          }
        }

        // If no matching client window is found, if clients has an openWindow method, use it to navigate to url.

        if (clients.openWindow) clients.openWindow(url);
      }

      // Wait until notification click event (openInActiveWindow) has processed.

      event.waitUntil(openInActiveWindow());
    }
  } catch (error) {
    log.sw("Notification Click: " + error.toString());
  }
});

// https://developers.google.com/web/tools/workbox/modules/workbox-core
// https://developers.google.com/web/tools/workbox/modules/workbox-precaching
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/PushEvent
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event
