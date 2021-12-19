const { log } = require("../../shared");
const { flatten, isString } = require("simpul");
const Bowser = require("bowser");

function serverErrorHandler(err, res, req) {
  try {
    // Initialize constants from res locals.

    const { values = {}, routeConfig = {}, user = {} } = res.locals;

    // Generate server error object with relevant properties.

    const serverError = {};

    serverError.source =
      routeConfig.route && routeConfig.route.includes("/error")
        ? "client"
        : "server";

    serverError.method =
      (serverError.source === "client" && "GET") ||
      routeConfig.method ||
      req.method;

    serverError.route =
      (values.error && values.error.pathname) || routeConfig.route || req.url;

    serverError.message =
      (values.error &&
        values.error.message &&
        values.error.message.split(":\n")[0].trim()) ||
      err.sqlMessage ||
      err.message ||
      err.toString();

    serverError.stack = (values.error && values.error.stack) || err.stack;

    serverError.user_id =
      (req.session && (req.session.id || req.session.user_id)) ||
      (user && (user.id || user.user_id));

    serverError.ip = req.ip || "";

    // Log server error message.

    log.error(serverError.message, { flag: "minimal" });

    // Parse flat user agent using bowser.

    const userAgent = flatten(Bowser.parse(req.headers["user-agent"] || " "));

    // Assign user agent to server error.

    Object.assign(serverError, userAgent);

    // Split server error stack with delimiter " at ".

    const serverErrorStackSplits = isString(serverError.stack)
      ? serverError.stack.split(" at ")
      : [];

    // Loop through split server error stack.

    for (let trace of serverErrorStackSplits) {
      // Determine if trace is local to project.

      let isLocalTrace =
        trace &&
        !trace.startsWith("Error") &&
        !trace.includes("node_modules") &&
        (trace.includes("/lib") || trace.includes("/src"));

      // If trace is local, log it.

      if (isLocalTrace) log.at(trace.trim(), { flag: "minimal" });
    }

    // This is where you can save the server error in the database...

    // console.log(serverError);
  } catch (error) {
    // Log any middleware errors as error logs.

    log.error(error, { flag: "minimal" });
  } finally {
    // Send client a 500 ("Internal Server Error") status.

    res.sendStatus(500);
  }
}

module.exports = serverErrorHandler;
