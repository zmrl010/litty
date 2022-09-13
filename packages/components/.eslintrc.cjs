/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["../../.eslintrc.cjs", "@litty/eslint-config/lit"],
  overrides: [
    {
      files: "**/*.ts(x)?",
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
      },
    },
  ],
};
