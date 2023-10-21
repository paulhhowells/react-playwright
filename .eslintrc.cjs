// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [ 'dist', '.husky' ],
  parser: '@typescript-eslint/parser',
  plugins: [ 'react-refresh' ],
  settings: {
    react: { version: '18.2' }
  },
  rules: {
    'arrow-parens': [ 'warn', 'as-needed' ],
    'brace-style': [ 'error', '1tbs' ],
    'comma-dangle': [ 'error', 'only-multiline' ],
    'comma-style': [ 'error', 'last' ],
    'eqeqeq': 'warn', // because == can very occasionally be useful (as long as you comment why)
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'linebreak-style': 'off', // git checks out LF as CRLF on windows
    'quotes': [ 'error', 'single', { 'allowTemplateLiterals': true } ],
    'semi': [ 'error', 'always' ],
    'vars-on-top': 'error',

    // Spacing
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'func-call-spacing': [ 'error', 'never' ], // no space before parentheses when a function is called
    'keyword-spacing': [ 'error', { 'before': true, 'after': true } ], // avoid `if(foo){`
    'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
    'lines-between-class-members': [ 'warn', 'always' ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxBOF': 1,
        'maxEOF': 0 // actually allows one blank line at end of file
      }
    ],
    'no-multi-spaces': [ 'error', { ignoreEOLComments: true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'padded-blocks': [ 'error', 'never' ], // blanklines padding inside blocks
    'padding-line-between-statements': [
      'error',

      // blankline before return (replaces newline-before-return)
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },

      // blankline after one or more of [const, var, let] (allows multiline blocks of variables)
      { 'blankLine': 'always', 'prev': [ 'const', 'let', 'var' ], 'next': '*' },
      { 'blankLine': 'any', 'prev': [ 'const', 'let', 'var' ], 'next': [ 'const', 'let', 'var' ] },

      // blankline before if blocks
      { 'blankLine': 'always', 'prev': [ '*' ], 'next': 'if' },
      { 'blankLine': 'always', 'prev': [ 'if' ], 'next': '*' },

      // blankline after IIFE
      { 'blankLine': 'always', 'prev': 'iife', 'next': '*' }
    ],
    'space-before-blocks': 'error', // before block curly brace
    'space-before-function-paren': [ 'error', 'always' ],
    'space-infix-ops': [ 'error', { 'int32Hint': false } ],
    'space-in-parens': [ 'error', 'never' ],
    'space-unary-ops': [
      'error',
      {
        'words': true,    // new Foo  [new, delete, typeof, void, yield]
        'nonwords': false // bar++    [-, +, --, ++, !, !!]
      }
    ],

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      // TypeScript
      files: [ 'src/**/*.ts?(x)' ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
    {
      // E2E Playwright
      files: [ 'e2e/*.ts' ],
      'extends': [ 'plugin:playwright/recommended' ],
      // rules: {
      //   '@typescript-eslint/no-explicit-any': 'off', // why doesn't this work?
      // },
    },
    {
      // Vitest & React Testing Library
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: [ '**/__tests__/**/*.[jt]s?(x)', 'src/**/?(*.)+(spec|test).[jt]s?(x)' ],
      plugins: [ 'testing-library', 'vitest' ],
      extends: [
        'plugin:testing-library/react',
        'plugin:vitest/recommended',
      ],
    },
  ],
};
