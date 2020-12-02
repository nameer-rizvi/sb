module.exports = ({ isEnvProduction }) => ({
  minimize: isEnvProduction,
  runtimeChunk: "single",
  moduleIds: isEnvProduction ? "size" : "deterministic",
  chunkIds: isEnvProduction ? "total-size" : "named",
});

// https://webpack.js.org/configuration/optimization/
