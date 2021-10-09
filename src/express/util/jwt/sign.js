const jwt = require("jsonwebtoken");
const { JWT_SECRET = "secret123" } = process.env; // Default value should be removed and defined in a ".env" file.

async function utilJWTSign(data, expiresIn = "15m") {
  // Because of expiresIn, data must be an object.

  const token = await jwt.sign(data, JWT_SECRET, { expiresIn });

  if (!token) throw new Error("Failed to create token.");

  return token;
}

module.exports = utilJWTSign;
