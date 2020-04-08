module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
}
