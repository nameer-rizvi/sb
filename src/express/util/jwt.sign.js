// starterKit-flag [TODO: JWT_SECRET default value should be removed and defined in a ".env" file.]

const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET = "secret123" } = process.env;

async function jwtSign(data, expiresIn = "15m") {
  // Generate token using jsonwebtoken.
  //   * Because of expiresIn, data must be an object.

  const token = await jsonwebtoken.sign(data, JWT_SECRET, { expiresIn });

  // If there's no valid token...

  if (!token) throw new Error("Failed to create token.");

  // Return token.

  return token;
}

module.exports = jwtSign;

// https://jwt.io/
// https://www.npmjs.com/package/jsonwebtoken
