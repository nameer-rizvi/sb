const isEnvDevelopment = process.env.NODE_ENV === "development";

const isEnvStaging = process.env.NODE_ENV === "staging";

const isEnvProduction = process.env.NODE_ENV === "production";

const isEnvLive = isEnvStaging || isEnvProduction;

const isEnv = {
  development: isEnvDevelopment,
  staging: isEnvStaging,
  production: isEnvProduction,
  live: isEnvLive,
};

module.exports = isEnv;
