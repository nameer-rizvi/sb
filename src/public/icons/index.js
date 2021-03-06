const path = require("path");

const pathResolve = (dir) => path.resolve(__dirname, "favicon_io/" + dir);

const icons = [
  {
    src: pathResolve("favicon-16x16.png"),
    sizes: "16x16",
    type: "image/png",
    destination: path.join("lib", "icons", "favicon"),
  },
  {
    src: pathResolve("favicon-32x32.png"),
    sizes: "32x32",
    type: "image/png",
    destination: path.join("lib", "icons", "favicon"),
  },
  {
    src: pathResolve("favicon.ico"),
    sizes: "48x48",
    type: "image/x-icon",
    destination: path.join("lib", "icons", "favicon"),
  },
  {
    src: pathResolve("android-chrome-192x192.png"),
    sizes: "192x192",
    type: "image/png",
    destination: path.join("lib", "icons", "android"),
  },
  {
    src: pathResolve("android-chrome-512x512.png"),
    sizes: "512x512",
    type: "image/png",
    destination: path.join("lib", "icons", "android"),
  },
  {
    src: pathResolve("apple-touch-icon.png"),
    sizes: "180x180",
    type: "image/png",
    ios: "startup",
    destination: path.join("lib", "icons", "ios"),
  },
];

module.exports = icons;

// Favicon generator: https://favicon.io/
