const util = require("../util");

function validationMiddleware(req, res, next) {
  try {
    // Create values object to store request values and required values.

    const values = {
      payload: { ...req.body, ...req.query, ...req.params },
      required: res.locals.routeConfig.requiredValues,
    };

    // Validate request values and check if required values exist.
    // If successful, sanitized values are returned and stored as a constant.

    const sanitizedValues = util.validate(values.payload, values.required);

    // Assign sanitized values to res.locals.

    res.locals.values = sanitizedValues;

    // Go to next middleware.

    next();
  } catch (error) {
    next("400::" + error); // Send client a 400 response code with the validation error.
  }
}

module.exports = validationMiddleware;
