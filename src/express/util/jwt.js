const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET = "secret123" } = process.env; // Default value should be removed and defined in a ".env" file.

async function jwtSign(data, expiresIn = "15m") {
  // Because of expiresIn, data must be an object.

  const token = await jsonwebtoken.sign(data, JWT_SECRET, { expiresIn });

  // If there's no valid token...

  if (!token) throw new Error("Failed to create token.");

  // Return token.

  return token;
}

async function jwtVerify(token, validateKey) {
  const data = await jsonwebtoken.verify(token, JWT_SECRET);

  // If there's an expected key to validate and there's no data/data with key...

  if (validateKey && (!data || !data[validateKey]))
    throw new Error(`Corrupt token detected: "${token}"`);

  // If there's an expected key to validate and data has key or if data exists...

  if (validateKey ? data && data[validateKey] : data) return data;

  // Invalidate verification. * All tokens should contain data *

  throw new Error("No data.");
}

const jwt = { sign: jwtSign, verify: jwtVerify };

module.exports = jwt;

// https://jwt.io/
// https://www.npmjs.com/package/jsonwebtoken
