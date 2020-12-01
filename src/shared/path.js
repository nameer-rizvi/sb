const path = require("path");

const pathResolve = (dir) =>
  path.resolve(__dirname, dir.filter(Boolean).join("/"));

module.exports = {
  dist: (ext) => pathResolve(["../../dist", ext]),
  client: (ext) => pathResolve(["../../react", ext]),
  html: pathResolve(["../../dist/index.html"]),
};
