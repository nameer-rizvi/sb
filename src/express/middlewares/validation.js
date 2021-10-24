const util = require("../util");

function validationMiddleware(req, res, next) {
  try {
    // Validate request values and check if required values exist.
    // If successful, sanitized values are returned and assigned to res locals.

    res.locals.values = validate(
      { ...req.body, ...req.query, ...req.params },
      res.locals.routeConfig.requiredValues
    );

    // Go to next middleware.

    next();
  } catch (error) {
    next("400::" + error); // Send client a 400 response code with the validation error.
  }
}

module.exports = validationMiddleware;
