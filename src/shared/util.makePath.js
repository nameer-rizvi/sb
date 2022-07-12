const path = require("path");

const pathResolve = (dir) =>
  path.resolve(__dirname, dir.filter(Boolean).join(""));

const sharedUtilMakePath = {
  client: (ext) => pathResolve(["../react", ext]),
  dist: (ext) => pathResolve(["../dist", ext]),
  public: (ext) => pathResolve(["../public", ext]),
  server: (ext) => pathResolve(["../express", ext]),
};

module.exports = sharedUtilMakePath;
