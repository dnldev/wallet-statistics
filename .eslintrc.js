module.exports = {
  extends: 'airbnb',
  rules: {
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/prop-types': [2, { ignore: ['children', 'theme', 'navigation'] }],
    'max-len': [1, 80, 4],
    'no-use-before-define': ['error', { variables: false }],
    'no-useless-concat': 0,
    'object-curly-newline': 0,
  },
  env: {
    browser: true,
  },
};
