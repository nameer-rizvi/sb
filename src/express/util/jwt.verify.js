// --starterKit-flag [set JWT_SECRET in a ".env" file located in the projects root folder]

const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET = "secret123" } = process.env;

async function jwtVerify(token, validateKey) {
  // Verify token using jsonwebtoken.

  const data = await jsonwebtoken.verify(token, JWT_SECRET);

  // If there's an expected key to validate and there's no data/data with key...

  if (validateKey && (!data || !data[validateKey]))
    throw new Error(`Corrupt token detected: "${token}"`);

  // If there's an expected key to validate and data has key or if data exists...

  if (validateKey ? data && data[validateKey] : data) return data;

  // Invalidate verification.
  //  * All tokens should contain data.

  throw new Error("No data.");
}

module.exports = jwtVerify;

// https://jwt.io/
// https://www.npmjs.com/package/jsonwebtoken
