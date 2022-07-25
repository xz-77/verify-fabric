module.exports = {
  // https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
  extends: [
    'airbnb',
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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
  rules: {
    'no-var': 2, // 禁止使用 var
    'arrow-body-style': 0,
    'import/order': 1,
    'no-shadow': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'import/extensions': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'compat/compat': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/require-default-props': 0,
    'import/no-cycle': 0,
    'react/no-unused-prop-types': 0,
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
