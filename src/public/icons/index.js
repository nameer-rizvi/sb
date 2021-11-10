// --starterkit-flag [https://favicon.io/]

const path = require("path");

const pathResolve = (dir) => path.resolve(__dirname, "./favicon_io/" + dir);

const icons = [
  {
    src: pathResolve("android-chrome-192x192.png"),
    destination: path.join("lib", "icons", "android"),
    size: 192,
  },
  {
    src: pathResolve("android-chrome-512x512.png"),
    destination: path.join("lib", "icons", "android"),
    size: 512,
  },
  {
    src: pathResolve("apple-touch-icon.png"),
    destination: path.join("lib", "icons", "ios"),
    size: 180,
    ios: true,
  },
  {
    src: pathResolve("favicon-16x16.png"),
    destination: path.join("lib", "icons", "favicon"),
    size: 16,
  },
  {
    src: pathResolve("favicon-32x32.png"),
    destination: path.join("lib", "icons", "favicon"),
    size: 32,
  },
  {
    src: pathResolve("favicon.ico"),
    destination: path.join("lib", "icons", "favicon"),
    size: 48,
  },
];

module.exports = icons;
