# verify-fabric
## 一个包含 prettier，eslint，stylelint 的配置文件合集

### use

```npm
npm i verify-fabric --save-dev
yarn add verify-fabric -D
```

#### in .eslintrc.js

```javascript
module.exports = {
  extends: [require.resolve('verify-fabric/dist/eslint')],
  rules: {
    // your rules
  },
};
```

#### in .stylelintrc.js

```javascript
module.exports = {
  extends: [require.resolve('verify-fabric/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

#### in .prettierrc.js

```javascript
const fabric = require('verify-fabric/dist/prettier');

module.exports = {
  ...fabric,
};
```

## Q&A

* Q:微信小程序的样式检查报错`Unexpected unknown type selector "page"`
* A:规则可以添加`'selector-type-no-unknown': null`


* Q:错误提示`The "syntax" option is no longer available. You should install an appropriate syntax, e.g. postcss-scss, and use the "customSyntax" option`
* A:stylelint和postcss-less的版本兼容问题，可以给stylelint降级处理，例如在项目中安装`yarn add stylelint@12.6.1`即可
