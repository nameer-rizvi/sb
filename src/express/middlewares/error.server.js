const shared = require("../../shared");
const { flatten, isString } = require("simpul");
const Bowser = require("bowser");

function serverErrorHandler(err, res, req) {
  // Initialize server error constant.

  const serverError = {};

  // Initialize constants from res locals.

  const { routeConfig = {}, values = {} } = res.locals;

  try {
    // Build server error.

    serverError.source = routeConfig.path === "/error" ? "client" : "server";

    serverError.method =
      (serverError.source === "client" && "APP") ||
      routeConfig.method ||
      req.method;

    serverError.path = values.error?.pathname || routeConfig.path || req.path;

    serverError.message =
      values.error?.message?.split(":")[0].trim() ||
      err.sqlMessage ||
      err.message ||
      err.toString();

    serverError.stack = values.error?.stack || err.stack;

    serverError.user_id =
      req.session?.id ||
      req.session?.uid ||
      req.session?.user_id ||
      res.locals.user?.id ||
      res.locals.user?.uid ||
      res.locals.user?.user_id ||
      res.locals.token?.id ||
      res.locals.token?.uid ||
      res.locals.token?.user_id;

    serverError.ip = req.ip || "";

    // Log server error message.

    shared.util.log.error(serverError.message, { flag: "minimal" });

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

      if (isLocalTrace) shared.util.log.at(trace.trim(), { flag: "minimal" });
    }

    // Save server error in the database.

    // database.controller.error.create(serverError);
  } catch (error) {
    // Log any middleware errors as error logs.

    shared.util.log.error(error);
  } finally {
    if (serverError.method === "APP") {
      // If server error is by APP method, send client a 200 ("OK") status.

      res.sendStatus(200);
    } else {
      // Else, send client a 500 ("Internal Server Error")

      res.sendStatus(500);
    }
  }
}

module.exports = serverErrorHandler;
