const packageJSON = require("./package.json");

const makeNPMCommand = (object, save = "") =>
  ["uninstall", "install"]
    .map((command) => `npm ${command} ` + Object.keys(object).join(" "))
    .join(" && ") +
  " " +
  save;

console.log(
  [
    makeNPMCommand(packageJSON.devDependencies, "--save-dev"),
    makeNPMCommand(packageJSON.dependencies),
  ].join(" && ")
);
