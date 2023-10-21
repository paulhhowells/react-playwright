module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.husky'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      // TypeScript
      files: ['src/**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
    // {
    //   // E2E Playwright
    //   files: ['e2e/*.ts'],
    //   rules: {
    //     '@typescript-eslint/no-explicit-any': 'off', // why doesn't this work?
    //   },
    // },
		{
      // Vitest & React Testing Library
			// 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
			files: ['**/__tests__/**/*.[jt]s?(x)', 'src/**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['testing-library', 'vitest'],
			extends: [
        'plugin:testing-library/react',
        'plugin:vitest/recommended',
      ],
		},
	],
}
