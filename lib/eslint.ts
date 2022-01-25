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
    'import/parsers': {
      'babel-eslint': ['.js', '.jsx'],
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 2,
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 1,
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 0,
      },
    },
  ],
  rules: {
    'no-var': 2, // 禁止使用 var
    // https://github.com/import-js/eslint-plugin-import/blob/v2.25.3/docs/rules/extensions.md
    'import/extensions': [1, 'never', { scss: 'always', json: 'always' }],
    'import/no-unresolved': 0,
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', 'js'] }],
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
        // modifiers: ['const'],
        types: ['boolean'], // 校验Boolean类型的 命名规则
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'show'],
      },
      {
        selector: 'objectLiteralProperty', // (有待考证影响范围)匹配任何对象文字属性。不匹配具有直接函数表达式或箭头函数表达式值的属性 // 因为BEM情况的存在，默认不校验，指定情况制定校验，不做默认校验处理
        format: null,
      },
      // {
      //   selector: 'variable',
      //   types: ['string'],
      //   format: ['UPPER_CASE'],
      //   custom: { regex: '^ICON_.*', match: true }, // 思考:想匹配图片的命名规则，但是目前只能匹配到名称的正则，而不能是值的正则匹配
      // },
      // {
      //   selector: 'function',
      //   format: ['camelCase'], // 没什么用
      // },
    ],
    'no-plusplus': 0,
    'compat/compat': 0,
    // https://github.com/import-js/eslint-plugin-import/blob/v2.25.3/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 0,
  },
};