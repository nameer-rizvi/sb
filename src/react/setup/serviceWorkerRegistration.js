// --flow-serviceWorker-1

import { isEnv, support } from "simpul";
import { util } from "../../shared";

// Service worker job.

const job = "register";

// Service Worker should only be active in a live environment.

if (isEnv.live) window.addEventListener("load", serviceWorkerRegistration);

// Async function to register/deregister service worker, depending on job.

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

      util.log.sw("registered", { flag: "minimal" });
    } else if (job === "unregister") {
      // If the Service Worker job is to unregister...

      // Get all Service Worker registrations.

      const registrations = await serviceWorker.getRegistrations();

      if (registrations.length) {
        // If there's any registrations...

        // Unregister each registration.

        for (let registration of registrations) await registration.unregister();

        // Log completion of all unregistrations.

        util.log.sw(`unregistered ${registrations.length} registration(s).`, {
          flag: "minimal",
        });
      }
    } else {
      //   const error = `job is undefined (options include: "register" || "unregister")`;
      //   throw new Error(error);
    }
  } catch (error) {
    util.log.sw("Registration: " + error.toString(), { flag: "minimal" });
  }
}
