const sanitized = require("sanitized");
const { validate } = require("../util");

function validationMiddleware(req, res, next) {
  try {
    // Initialize values config with payload and required params for route.

    const values = {
      payload: { ...req.body, ...req.query, ...req.params },
      required: res.locals.routeConfig.requiredParams,
    };

    // If route ignores validations, then set res locals to sanitized values payload.
    //  Otherwise, validate the values payload/required.

    res.locals.values = res.locals.routeConfig.ignoreValidation
      ? sanitized(values.payload)
      : validate(values.payload, values.required);

    // Go to next middleware.

    next();
  } catch (error) {
    if (error.toString().includes("Missing data dictionary config")) {
      // If error is for a missing data dictionary config...

      // Handle it with next server error middleware.

      next(error);
    } else {
      // Else...

      // Send client a 400 ("Bad Request") status with the validation error.

      next("400::" + error);
    }
  }
}

module.exports = validationMiddleware;
