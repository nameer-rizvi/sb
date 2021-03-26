const isEnvProduction = Boolean(process.env.NODE_ENV === "production");

module.exports = isEnvProduction;
