/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["@zmrl", "@zmrl/eslint-config/lit"],
  parserOptions: {
    project: "./tsconfig.lint.json",
    sourceType: "module",
  },
  ignorePatterns: ["dist", "node_modules"],
};
