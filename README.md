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
