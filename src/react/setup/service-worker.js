import { timelog } from "simpul";
import { isEnv } from "../../shared";

// Service Worker logger.

const log = (status) =>
  timelog("👷 Service worker " + status + (!status.endsWith(".") ? "." : ""));

// Service worker job.

const job = "register";

// Service Worker is wrapped in an async function for use of try/catch & await.

async function serviceWorker() {
  try {
    // Not validating for serviceWorker support (ex. !("serviceWorker" in navigator)),
    // since an error will be thrown regardless, for any other reason that may exist,
    // and be handled by the catch. Destructuring the serviceWorker here from the
    // navigator will cause this fast fail.

    const { serviceWorker } = navigator;

    if (job === "register") {
      // If the Service Worker job is to register...

      // Register Service Worker.

      await serviceWorker.register("/service-worker.js");

      // Log successful registration.

      log("registered");
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

        log(`unregistered ${registrations.length} registration(s).`);
      }
    } else
      log(`job is undefined (options include: "register" || "unregister")`);
  } catch (error) {
    log(error.toString());
  }
}

// Service Worker should only be active in live environments.

if (isEnv.live) window.addEventListener("load", serviceWorker);
