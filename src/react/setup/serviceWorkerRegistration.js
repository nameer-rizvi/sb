// --flow-serviceWorker-1

import { isEnv } from "../../shared";
import { support, timelog } from "simpul";

// Service worker job.

const job = "register";

// Service Worker should only be active in live environments.

if (isEnv.live) window.addEventListener("load", serviceWorkerRegistration);

// Service Worker is wrapped in an async function for use of try/catch & await.

async function serviceWorkerRegistration() {
  try {
    // Check for support for service worker in browser context.

    if (!support.serviceWorker())
      throw new Error("Browser doesn't support service worker.");

    // Initialize serviceWorker from navigator.

    const { serviceWorker } = navigator;

    // ...

    if (job === "register") {
      // If the Service Worker job is to register...

      // Register Service Worker.

      await serviceWorker.register("/service-worker.js");

      // Log successful registration.

      logSW("registered");
    } else if (job === "unregister") {
      // If the Service Worker job is to unregister...

      // Get all Service Worker registrations.

      const registrations = await serviceWorker.getRegistrations();

      if (registrations.length) {
        // If there's any registrations...

        // Unregister each registration.

        for (let i = 0; i < registrations.length; i++) {
          await registrations[i].unregister();
        }

        // Log completion of all unregistrations.

        logSW(`unregistered ${registrations.length} registration(s).`);
      }
    } else {
      const error = `job is undefined (options include: "register" || "unregister")`;
      throw new Error(error);
    }
  } catch (error) {
    logSW("Registration: " + error.toString());
  }
}

// Service Worker logger.

function logSW(status) {
  timelog("👷 Service worker " + status + (!status.endsWith(".") ? "." : ""));
}
