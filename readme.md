## Install

1. make sure the github registry is set in the `.npmrc` file

```
@tedgodyla:registry=https://npm.pkg.github.com
```

2. Install dependency

```sh
npm i @tedgodyla/select
```

## Use package

```js
import Test from 'tedgodyla@select';

const test = new Test();

console.log(test.foo('test'));
```