import { timelog } from "simpul";
import { isEnv } from "../../shared";

// Service Worker logger.

const log = (status) =>
  timelog("👷 Service worker " + status + (!status.endsWith(".") ? "." : ""));

// Service Worker is wrapped in an async function for use of try/catch & await.

async function serviceWorker(job = "register") {
  try {
    // Not validating for serviceWorker support (ex. !("serviceWorker" in navigator)),
    // since an error will be thrown regardless, for any other reason that may exist,
    // and be handled by the catch. Destructuring the serviceWorker here from the
    // navigator will cause this fast fail.

    const { serviceWorker } = navigator;

    if (job === "register") {
      // If the Service Worker job is to register...

      // Register Service Worker.

      const registration = await serviceWorker.register("/service-worker.js");

      // Log successful registration.

      log("registered");
    } else if (job === "unregister") {
      // If the Service Worker job is to unregister...

      // Get all Service Worker registrations.

      const registrations = await serviceWorker.getRegistrations();

      // Unregister each registration.

      registrations.forEach((registration) => registration.unregister());

      // Log completion of all unregistrations.

      log("unregistered");
    } else
      log(`job is undefined (options include: "register" || "unregister")`);
  } catch (error) {
    log(error.toString());
  }
}

// Service Worker should only be active in live environments.

if (isEnv.live) serviceWorker();
