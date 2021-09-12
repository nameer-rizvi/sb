import { skipWaiting, clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import icon from "../icons/favicon_io/favicon-48x48.png";
import { timelog } from "simpul";
import origin from "../../shared/origin";

// Core middlewares.

skipWaiting();

clientsClaim();

// Standard precacher/router for webpack bundler injection.

precacheAndRoute(self.__WB_MANIFEST); // eslint-disable-line  no-restricted-globals

// Push event listener.

// eslint-disable-next-line  no-restricted-globals
self.addEventListener("push", (event) => {
  try {
    const data = event.data.json();

    const options = { lang: "en", vibrate: [500], icon, ...data };

    event.waitUntil(self.registration.showNotification(data.title, options)); // eslint-disable-line  no-restricted-globals
  } catch (error) {
    timelog("👷 Service worker " + error.toString() + ".");
  }
});

// Notification click event listener.

// eslint-disable-next-line  no-restricted-globals
self.addEventListener("notificationclick", (event) => {
  try {
    event.notification.close();

    const link =
      origin + ((event.notification.data && event.notification.data.url) || "");

    event.waitUntil(clients.openWindow(link));
  } catch (error) {
    timelog("👷 Service worker " + error.toString() + ".");
  }
});
