module.exports = {
  // https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'babel', '@typescript-eslint', 'react-hooks', 'unicorn'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-var': 2, // 禁止使用 var
    'import/no-unresolved': 0,
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-plusplus': 0,
    // https://github.com/import-js/eslint-plugin-import/blob/v2.25.3/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 2,
    'import/extensions': 0,
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.34.0/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'default',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      { selector: 'interface', format: ['PascalCase'], custom: { regex: '^Props$', match: false } },
      {
        selector: 'variable', // 基础变量命名规则
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'variable',
        types: ['boolean'], // 校验Boolean类型的 命名规则
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'show'],
      },
    ],
  },
};
