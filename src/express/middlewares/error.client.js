const { isNumber } = require("simpul");

// Example client error: next("400::Username must be at least 30 characters.")

function clientErrorHandler(err, res) {
  // Split client error using delimiter.

  const errSplit = err.split("::");

  // Check if a response code exists.

  const codeExists = isNumber(errSplit[0]);

  // Based on existing response code, determine response code.

  const code = codeExists ? +errSplit[0] : 500;

  // Based on existing response code, determine response message.

  const message = codeExists ? errSplit[1] : errSplit[0];

  if (message) {
    // If message exists, send client the response code and message.

    res.status(code).send(message);
  } else {
    // Else, send client the response code with standard http protocol message.

    res.sendStatus(code);
  }
}

module.exports = clientErrorHandler;
