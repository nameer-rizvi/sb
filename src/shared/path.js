const nodePath = require("path");

const pathResolve = (dir) =>
  nodePath.resolve(__dirname, dir.filter(Boolean).join("/"));

const path = {
  dist: (ext) => pathResolve(["../dist", ext]),
  express: (ext) => pathResolve(["../express", ext]),
  client: (ext) => pathResolve(["../react", ext]),
  public: (ext) => pathResolve(["../public", ext]),
};

module.exports = path;
