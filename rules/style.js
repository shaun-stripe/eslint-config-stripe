module.exports = {
  rules: {
    // Require camelCase variable names
    camelcase: [2, {properties: 'always'}],
    // Allow function expressions to not have names
    'func-names': 0,
    // Require two spaces for indent
    'indent': [2, 2, {SwitchCase: 1}],
    // Maximum line length
    'max-len': [2, 150],
    // Don't require a capital letter for constructors
    'new-cap': 0,
    // Allow chains up to five deep
    'newline-per-chained-call': [2, {ignoreChainWithDepth: 5}],
    // Disallow multiple empty lines
    'no-multiple-empty-lines': 2,
    // Allow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // Disallow padding inside curly braces
    'object-curly-spacing': [2, 'never'],
    // Don't check quotes around property names
    'quote-props': 0,
    // Use single quotes
    'quotes': [2, 'single'],
    // Disallow spaces before function parens
    'space-before-function-paren': [2, 'never'],
    // Allow any spacing around infix operators
    'space-infix-ops': 0,
    // Allow any spacing around unary operators
    'space-unary-ops': 0,
    // Require spaces immediately following a comment
    'spaced-comment': [2, 'always'],
    // Disallow spacing in template strings
    'template-curly-spacing': [2, 'never'],
  },
};
