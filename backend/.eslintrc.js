module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base',
    "eslint-config-prettier"
  ],
  plugins: [
    "eslint-plugin-prettier"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" } ]
  },
};
