const { isString } = require("simpul");
const clientErrorHandler = require("./error.client");
const serverErrorHandler = require("./error.server");

// Since errors can sometimes contain sensitive information, only certain
// errors get exposed to the client. This is done by passing errors through
// Express's next() middleware as strings. Any Error instances get handled by
// the server error handler. Otherwise, an ambiguous 500 status code is sent.

function errorHandlerMiddleware(error, req, res, next) {
  const errorString = error && error.toString();

  if (errorString && errorString.includes("::")) {
    clientErrorHandler(errorString.replace("Error: ", ""), res);
  } else if (error && isString(error)) {
    clientErrorHandler(error, res);
  } else if (error) {
    serverErrorHandler(error, res, req);
  } else res.sendStatus(500);
}

module.exports = errorHandlerMiddleware;
