const { isString } = require("simpul");
const clientErrorHandler = require("./error.client");
const serverErrorHandler = require("./error.server");

// Since errors can sometimes contain sensitive information, only certain
// errors get exposed to the client. This is done by passing errors through
// Express's next() middleware as strings. Any Error instances get handled by
// the server error handler. Otherwise, an ambiguous 500 status code is sent.
//   * Must be the last middleware in an express application.
//   * "::" is the delimiter used to separate the response code and the
//     error message for client-facing errors.

function errorHandlerMiddleware(error, req, res, next) {
  const errorString = error && error.toString();

  if (errorString && errorString.includes("::")) {
    clientErrorHandler(errorString.replace("Error:", "").trim(), res);
  } else if (error && isString(error)) {
    clientErrorHandler(error, res);
  } else if (error) {
    serverErrorHandler(error, res, req);
  } else res.sendStatus(500);
}

module.exports = errorHandlerMiddleware;
