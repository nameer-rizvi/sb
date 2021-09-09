import { timelog } from "simpul";
import { isEnv } from "../../shared";

const log = (status) =>
  timelog("👷 Service worker " + status + (!status.endsWith(".") ? "." : ""));

async function serviceWorker(job) {
  try {
    if (!("serviceWorker" in navigator)) {
      log("not supported");
    } else if (job === "register") {
      window.addEventListener("load", async () => {
        await navigator.serviceWorker.register("/service-worker.js");
        log("registered");
      });
    } else if (job === "unregister") {
      const registrations = await navigator.serviceWorker.getRegistrations();
      registrations.forEach((registration) => registration.unregister());
      log("unregistered");
    } else log("job is undefined");
  } catch (error) {
    log(error.toString());
  }
}

if (isEnv.live) serviceWorker("register");
