// Pass the react error to error handler using Express's next middleware.

const routeAppError = (req, res, next) =>
  res.locals.values.error.message
    ? next(new Error(res.locals.values.error.message))
    : res.sendStatus(403);

module.exports = routeAppError;
