const jwt = require("jsonwebtoken");
const { JWT_SECRET = "secret123" } = process.env; // Default value should be removed and defined in a

async function utilJWTVerify(token, key) {
  const data = await jwt.verify(token, JWT_SECRET);

  if (key ? data && data[key] : data) {
    return data;
  } else if (key && (!data || !data[key])) {
    throw new Error(`Corrupt token detected: "${token}"`);
  } else throw new Error("No data.");
}

module.exports = utilJWTVerify;
