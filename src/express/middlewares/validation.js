const sanitized = require("sanitized");
const util = require("../util");
const shared = require("../../shared");

function validationMiddleware(req, res, next) {
  try {
    // Initialize values config with payload and required params for route.

    const values = {
      payload: { ...req.body, ...req.query, ...req.params },
      required: res.locals.routeConfig.requiredParams,
    };

    // If route ignores validations, then set res locals to sanitized values payload.
    //  Otherwise, validate the values payload/required.

    if (res.locals.routeConfig.ignoreValidation) {
      res.locals.values = sanitized(values.payload);
    } else res.locals.values = util.validate(values.payload, values.required);

    // Go to next middleware.

    next();
  } catch (error) {
    const isUndefined = error
      .toString()
      .match(/Dictionary definition with key\b.*\bdoes not exist/);

    if (isUndefined) {
      // If error is for a missing data dictionary config, handle it with next server error middleware.

      next(error);
    } else {
      // Else...

      // Log validation error.

      shared.util.log.info("Validation Middleware: " + error.toString());

      // Send client a 400 ("Bad Request") status with the validation error.

      next("400::" + error);
    }
  }
}

module.exports = validationMiddleware;
