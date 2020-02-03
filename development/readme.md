## Build project

```sh
yarn build
```

## Build and watch project

```sh
yarn watch
```

## Publish package

### Before publish

1. Build project and make sure [development index html](development/index.html) files works without errors

1. Make sure the github registry is set in the `.npmrc` file

```
@tedgodyla:registry=https://npm.pkg.github.com
```

3. Make sure you have a personal github oath token
[(link)](https://github.com/settings/tokens)

4. Login into npm
```
npm login --registry=https://npm.pkg.github.com
```

5. Change `package.json` version number

### Publish

2. Publish package
```sh
yarn deploy
```