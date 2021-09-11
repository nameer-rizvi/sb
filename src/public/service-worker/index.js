import { skipWaiting, clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { timelog } from "simpul";

// Core middlewares.

skipWaiting();

clientsClaim();

// Standard precacher/router for webpack bundler injection.

precacheAndRoute(self.__WB_MANIFEST);

// Push event listener.

self.addEventListener("push", async function(event) {
  try {
    const data = event.data.json();

    const title = data.title;

    const options = { lang: "en", vibrate: [500], ...data };

    event.waitUntil(self.registration.showNotification(title, options));
  } catch (error) {
    timelog("👷 Service worker " + error.toString() + ".");
  }
});
