/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["@zmrl", "@zmrl/eslint-config/lit"],
  parserOptions: {
    project: ["./tsconfig.lint.json", "./packages/*/tsconfig.json"],
    sourceType: "module",
  },
  ignorePatterns: ["dist", "node_modules"],
};
