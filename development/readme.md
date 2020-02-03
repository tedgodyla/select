# Development readme

## Build project

```sh
yarn build
```

or use watch

```sh
yarn watch
```

## Publish package

1. First build project
```sh
yarn build
```

2. Check if [package still works](index.html)

3. Change `package.json` version number

4. Publish package
```sh
yarn publish
```