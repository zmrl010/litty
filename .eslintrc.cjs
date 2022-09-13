/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["@litty"],
  overrides: [
    {
      files: "**/*.ts(x)?",
      parserOptions: {
        project: ["./tsconfig.lint.json"],
      },
    },
  ],
};
