// --starterKit-flag [review authentication strategy]

const { jwt } = require("../util");

async function authenticateMiddleware(req, res, next) {
  try {
    if (res.locals.routeConfig.authenticate === "bearerToken") {
      // If route requires authenticating a bearer token...

      // Initialize authorization header with default string type.

      const { authorization = "" } = req.headers;

      // Parse "Bearer" token from authorization header.

      const bearerToken = authorization.split("Bearer ")[1];

      // If a bearer token exists, it is verified using "jsonwebtoken"
      // and if any data is found, validate if it contains a user_id,
      // before we assign it to the res locals store.
      //  * Will throw error if token is corrupt or invalid.

      if (bearerToken && bearerToken !== "null")
        res.locals.user = await jwt.verify(bearerToken, "user_id");

      // If an error isn't thrown by the verification and a user exists,
      // go to next middleware, otherwise send client a 401 ("Unauthorized") status.

      if (res.locals.user) {
        next();
      } else res.sendStatus(401);
    } else next();
  } catch (error) {
    next(error);
  }
}

module.exports = authenticateMiddleware;

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
