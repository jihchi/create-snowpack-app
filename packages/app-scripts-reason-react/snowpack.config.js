const fs = require("fs");
const path = require("path");

const cwd = process.cwd();

const scripts = {
  "mount:public": "mount public --to /",
  "mount:src": "mount src --to /_dist_",
};

module.exports = {
  scripts,
  plugins: ["@snowpack/plugin-babel", "@snowpack/plugin-react-refresh"],
  devOptions: {},
  installOptions: {
    installTypes: isTS,
  },
};
