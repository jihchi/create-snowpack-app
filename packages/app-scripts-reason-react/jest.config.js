const fs = require("fs");
const path = require("path");

// Use this instead of `paths.testsSetup` to avoid putting
// an absolute filename into configuration after ejecting.
// const setupTestsFile = fs.existsSync(paths.testsSetup)
//   ? `<rootDir>/src/setupTests.js`
//   : undefined;
const setupTestsFile = true;

module.exports = function () {
  return {
    verbose: true,

    setupFiles: [require.resolve("react-app-polyfill/jsdom")],
    setupFilesAfterEnv: setupTestsFile ? ["<rootDir>/jest.setup.js"] : [],
    testMatch: [
      "<rootDir>/src/**/__tests__/**/*.js",
      "<rootDir>/src/**/*.{spec,test}.js",
    ],
    transform: {
      "^.+\\.js": path.resolve(
        __dirname,
        "jest/babelTransform.js"
      ),
      "^.+\\.css$": path.resolve(__dirname, "jest/cssTransform.js"),
      "^(?!.*\\.(js|css|json)$)": path.resolve(
        __dirname,
        "jest/fileTransform.js"
      ),
    },
    transformIgnorePatterns: ["node_modules"],
    // transformIgnorePatterns: [
    //   "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    //   "^.+\\.module\\.(css|sass|scss)$",
    // ],
  };
};
