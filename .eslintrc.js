module.exports = {
  extends: 'airbnb',
  rules: {
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
  },
  env: {
    browser: true,
  },
};
