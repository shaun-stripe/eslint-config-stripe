module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/react',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  rules: {},
};
