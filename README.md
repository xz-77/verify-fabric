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

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

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
const fabric = require('verify-fabric/prettier');

module.exports = {
  ...fabric.prettier,
};
```
