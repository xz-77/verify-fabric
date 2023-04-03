module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true, //不允许由于同一规则中的另一个属性值而被忽略的属性值 如：a { display: inline; width: 100px; }
    'function-name-case': ['lower'], // 为函数名称指定小写或大写。
    'color-function-notation': 'legacy', //为颜色函数指定现代或传统符号。 如：legacy
    'no-descending-specificity': null,// 不允许较低特异性的选择器出现在覆盖较高特异性的选择器之后
    'function-url-quotes': 'always',// 要求url使用引号
    'selector-attribute-quotes': 'always',// 选择器属性携带引号
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*(-[a-z0-9]+)*|[a-z][a-zA-Z0-9]+)$',
      {
        message: 'Expected class selector to be kebab-case or lowerCamelCase',
      },
    ],// 限制属性命名规则
  },
  ignoreFiles: ['node_modules'],
};
