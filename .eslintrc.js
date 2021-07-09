const { NODE_ENV } = process.env;
const NODE_ENV_PROD = 'production';

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // #region ESLint规则

    // https://eslint.org/docs/rules/
    // https://eslint.org/docs/user-guide/configuring#extending-configuration-files
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'consistent-return': 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', 200],
    'no-console': NODE_ENV === NODE_ENV_PROD ? 'warn' : 'off',
    'no-debugger': NODE_ENV === NODE_ENV_PROD ? 'warn' : 'off',
    'no-irregular-whitespace': 'off',
    'no-param-reassign': 'warn',
    'no-shadow': 'warn',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-return': 'warn',
    'prefer-destructuring': 'off',

    // #endregion
  },
};
