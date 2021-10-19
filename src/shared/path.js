const nodePath = require("path");

const pathResolve = (dir) =>
  nodePath.resolve(__dirname, dir.filter(Boolean).join("/"));

const path = {
  client: (ext) => pathResolve(["../react", ext]),
  dist: (ext) => pathResolve(["../dist", ext]),
  public: (ext) => pathResolve(["../public", ext]),
  server: (ext) => pathResolve(["../express", ext]),
};

module.exports = path;
