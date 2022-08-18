const packageJSON = require("./package.json");

const ignorePackages = [""];

const configs = [
  {
    action: "uninstall",
    keys: ["devDependencies", "dependencies"],
  },
  {
    action: "install",
    keys: ["devDependencies"],
    save: "--save-dev",
  },
  {
    action: "install",
    keys: ["dependencies"],
    save: "--save",
  },
];

function mapper(config) {
  const packageNames = [];
  for (let key of config.keys)
    if (packageJSON[key])
      for (let packageName of Object.keys(packageJSON[key]))
        if (!ignorePackages.includes(packageName))
          packageNames.push(packageName);
  if (packageNames.length) {
    if (config.save) packageNames.push(config.save);
    return `npm ${config.action} ${packageNames.join(" ")}`;
  }
}

const commands = configs
  .map(mapper)
  .filter(Boolean)
  .join(" && ");

console.log(`\n${commands}\n`);
