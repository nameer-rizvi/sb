// --starterKit-flag [review authentication strategy]

const util = require("../util");
const shared = require("../../shared");

async function authenticateMiddleware(req, res, next) {
  try {
    // Destructure required props from route config.

    const { authenticate, ignoreAuthenticationError } = res.locals.routeConfig;

    if (authenticate === "bearerToken") {
      // If route requires authenticating a bearer token...

      // Parse "Bearer" token from authorization header.

      const bearerToken = parseBearerToken(req, ignoreAuthenticationError);

      // Verify token data using jsonwebtoken and assign it to res locals.

      if (bearerToken) res.locals.token = await util.jwt.verify(bearerToken);
    }

    // Go to next middleware.

    next();
  } catch (error) {
    // Log authentication error.

    shared.util.log.info("Authenticate Middleware: " + error.toString());

    // Send client a 401 ("Unauthorized") status.

    res.sendStatus(401);
  }
}

function parseBearerToken(req, ignoreError) {
  // Initialize authorization header with default string type.

  const { authorization = "" } = req.headers;

  // Parse "Bearer" token from authorization header.

  let bearerToken = authorization.split("Bearer ")[1];

  // If bearer token is stringified null or undefined, set bearerToken to null.

  if (bearerToken === "null" || bearerToken === "undefined") bearerToken = null;

  // Throw error if bearer token doesn't exist.

  if (!bearerToken && !ignoreError)
    throw new Error("Request authorization header is invalid.");

  return bearerToken;
}

module.exports = authenticateMiddleware;

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
