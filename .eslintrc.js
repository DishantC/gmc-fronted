module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 1,
    'eslint-comments/no-unlimited-disable': 0,
    'react-native/no-inline-styles': 0,
    'eslint-comments/no-unused-disable': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
