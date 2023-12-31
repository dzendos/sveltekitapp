// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'svelte3', 'prettier'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte3/svelte3',
      },
    ],
  };
  