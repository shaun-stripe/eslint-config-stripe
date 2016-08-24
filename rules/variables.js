module.exports = {
  rules: {
    // Disallow unused variables except in function parameters
    'no-unused-vars': [2, {args: 'none'}],
    // Disallow use before definition
    'no-use-before-define': [2, {functions: false, classes: false}],
  },
};
