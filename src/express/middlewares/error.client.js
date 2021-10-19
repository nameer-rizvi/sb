const { isNumber } = require("simpul");

function clientErrorHandler(err, res) {
  const errSplit = err.split("::");

  const codeExists = isNumber(errSplit[0]);

  const code = codeExists ? +errSplit[0] : 500;

  const message = codeExists ? errSplit[1] : errSplit[0];

  if (message) {
    res.status(code).send(message);
  } else res.sendStatus(code);
}

module.exports = clientErrorHandler;
