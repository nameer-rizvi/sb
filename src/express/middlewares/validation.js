const { validate } = require("../util");

function validationMiddleware(req, res, next) {
  try {
    // Initialize values config with payload and required keys for route.

    const values = {
      payload: { ...req.body, ...req.query, ...req.params },
      required: res.locals.routeConfig.requiredValues,
    };

    // If route ignores validations, then set res locals to sanitized values payload.
    // Otherwise, validate the values payload/required, and throw error if anything is invalid.

    res.locals.values = res.locals.routeConfig.ignoreValidation
      ? sanitized(values.payload)
      : validate(values.payload, values.required);

    // Go to next middleware.

    next();
  } catch (error) {
    if (error.toString().includes("Missing data dictionary config")) {
      next(error); // If error is for missing config, handle it with next middleware.
    } else next("400::" + error); // Send client a 400 response code with the validation error.
  }
}

module.exports = validationMiddleware;
