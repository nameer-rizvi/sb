function authenticateMiddlewareParseBearerToken(req) {
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

module.exports = authenticateMiddlewareParseBearerToken;
