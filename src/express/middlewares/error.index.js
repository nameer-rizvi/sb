const { isString } = require("simpul");
const clientErrorHandler = require("./error.client");
const serverErrorHandler = require("./error.server");

/* 

  Since errors can sometimes contain sensitive information, only certain
  errors get exposed to the client. This is done by passing errors through
  Express's next() middleware as strings. Any Error instances get handled by
  the server error handler. Otherwise, an ambiguous 500 status code is sent.
   - Must be the last middleware in an express application.
   - "::" is the delimiter used to separate the response code and the
     error message for client-facing errors.
   - Disabling eslint for no-unused-vars (re: "next"), because even though
     "next" is not used, it's required to access the error param.

*/

// eslint-disable-next-line no-unused-vars
function errorHandlerMiddleware(error, req, res, next) {
  // Parse error string from error.

  const errorString = error.toString();

  if (errorString?.includes("::")) {
    // If error string exists and it includes the client error delimiter...

    // Clean error string, and handle it using the client error handler.

    clientErrorHandler(errorString.replace("Error:", "").trim(), res);
  } else if (error && isString(error)) {
    // Else, if error exists & it's a string, handle it using the client error handler.

    clientErrorHandler(error, res);
  } else if (error) {
    // Else, if an error exists, handle it using the server error handler.

    serverErrorHandler(error, res, req);
  } else {
    // Else, send client a 500 ("Internal Server Error") status.

    res.sendStatus(500);
  }
}

module.exports = errorHandlerMiddleware;

// https://expressjs.com/en/guide/error-handling.html
