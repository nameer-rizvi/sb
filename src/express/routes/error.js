// Pass the react error to error handler using Express's next middleware.

const routeAppError = (req, res, next) =>
  next(new Error(res.locals.values.error.message));

module.exports = routeAppError;
