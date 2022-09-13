module.exports = {
  extends: ["@zmrl", "@zmrl/eslint-config/lit"],
  parserOptions: {
    project: "./tsconfig.lint.json",
    sourceType: "module",
  },
};
