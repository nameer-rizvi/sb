function routeError(req, res, next) {
  if (res.locals.values.error?.message) {
    // If there's an error message in res locals values, handle error using next error middleware.

    next(new Error(res.locals.values.error.message));
  } else {
    // Else, send client a 403 ("Forbidden") status.

    res.sendStatus(403);
  }
}

module.exports = routeError;
