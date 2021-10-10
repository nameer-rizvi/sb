const packageJSON = require("./package.json");

const ignorePackages = [""];

const makeNPMCommand = (dependencies, save = "") =>
  ["uninstall", "install"]
    .map((command) => {
      const packages = Object.keys(dependencies)
        .filter((key) => !ignorePackages.includes(key))
        .join(" ");

      return `npm ${command} ${packages}`;
    })
    .join(" && ") +
  " " +
  save;

console.log(
  [
    makeNPMCommand(packageJSON.devDependencies, "--save-dev"),
    makeNPMCommand(packageJSON.dependencies),
  ].join(" && ")
);
