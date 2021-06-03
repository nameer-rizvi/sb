import { timelog } from "simpul";
import { isEnvProduction } from "../../shared";

const logStatus = (status) => timelog("👷 Service worker " + status + ".");

const inNavigator = "serviceWorker" in navigator;

const register = () =>
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
    ? logStatus("not enabled for localhost")
    : !isEnvProduction
    ? logStatus("only enabled for production")
    : !inNavigator
    ? logStatus("not in navigator")
    : window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(() => logStatus("registered"))
          .catch(() => logStatus("registration failed"));
      });

const unregister = () =>
  inNavigator &&
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister();
    logStatus("successfully unregistered");
  });

const job = { register, unregister };

job.register();
