module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    // Require imports before everything else
    'import/imports-first': 2,
    // Ensure named imports correspond to a named export in the remote file
    'import/named': 2,
    'import/no-restricted-paths': 0,
  },
};
