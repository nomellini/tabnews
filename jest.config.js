const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  // Outras configurações do Jest
  setupFiles: ["<rootDir>/jest.setup.js"],
};
