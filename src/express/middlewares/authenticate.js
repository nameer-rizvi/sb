// --starterKit-flag [review authentication strategy]

const { jwt, log } = require("../util");

async function authenticateMiddleware(req, res, next) {
  try {
    if (res.locals.routeConfig.authenticate === "bearerToken") {
      // If route requires authenticating a bearer token...

      // Parse "Bearer" token from authorization header.

      const bearerToken = parseBearerToken(req);

      // Verify & fetch token data using "jsonwebtoken".

      res.locals.token = await jwt.verify(bearerToken);

      // If an error isn't thrown by the verification go to next middleware.

      next();
    } else next();
  } catch (error) {
    // Log any failed authentication errors as non-critical logs.

    log.password("Authenticate Middleware: " + error.toString());

    // Send client a 401 ("Unauthorized") status.

    res.sendStatus(401);
  }
}

function parseBearerToken(req) {
  // Initialize authorization header with default string type.

  const { authorization = "" } = req.headers;

  // Parse "Bearer" token from authorization header.

  const bearerToken = authorization.split("Bearer ")[1];

  if (!bearerToken || bearerToken === "null") {
    // Throw error if bearer token doesn't exist or is null.

    throw new Error("Request authorization header is invalid.");
  } else {
    // Else, return bearer token.

    return bearerToken;
  }
}

module.exports = authenticateMiddleware;

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
