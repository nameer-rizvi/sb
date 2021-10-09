const { timelog } = require("simpul");

function serverErrorHandler(err, res, req) {
  // Initialize constants from res locals.

  const { values = {}, routeConfig = {} } = res.locals;

  // Initialize store to consolidate server error properties.
  // This can be useful if there's a database to store errors.

  const serverError = {};

  serverError.source =
    routeConfig.route && routeConfig.route.includes("/app/error")
      ? "client"
      : "server";

  serverError.pathname =
    (values.error && values.error.pathname) || routeConfig.route || req.url;

  serverError.method =
    (values.error && values.error.method) || routeConfig.method || req.method;

  serverError.message =
    (values.error &&
      values.error.message &&
      values.error.message.split(":")[0].trim()) ||
    err.sqlMessage ||
    err.message ||
    err.toString();

  serverError.stack = (values.error && values.error.stack) || err.stack;

  // Log server error message.

  timelog(`⚠️  ${serverError.message}`);

  // Split server error stack with delimiter "at ".

  const serverErrorStackSplits =
    serverError.stack && serverError.stack.split(" at ");

  // Loop through split server error stack.

  for (let i = 0; i < serverErrorStackSplits.length; i++) {
    // Let trace be a split server error stack item.

    let trace = serverErrorStackSplits[i];

    // If trace is from within the "/src" folder and it doesn't start with "Error", log it.

    if (trace && trace.includes("/src") && !trace.startsWith("Error")) {
      timelog(`➡️  ${trace.trim()}`);
    }
  }

  res.sendStatus(500); // Send client an ambiguous 500 response.
}

module.exports = serverErrorHandler;
