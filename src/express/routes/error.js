function routeAppError(req, res, next) {
  if (res.locals.values.error.message) {
    // If there's an error message in res locals values...

    // Handle error using next error middleware.

    next(new Error(res.locals.values.error.message));
  } else {
    // Else...

    // Send client a 403 ("Forbidden") status.

    res.sendStatus(403);
  }
}
module.exports = routeAppError;
