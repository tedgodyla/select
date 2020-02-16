## Before install

1. make sure the github registry is set in the `.npmrc` file

```
@tedgodyla:registry=https://npm.pkg.github.com
```

2. Make sure you have a personal github oath token: [get it here](https://github.com/settings/tokens)

3. Login into npm
```bash
npm login --registry=https://npm.pkg.github.com
```

## Usage

```js
import VVSelect from 'tedgodyla@select';

const selectElems = document.querySelectorAll('.select')

[...selectElems].forEach(selectEl => {
    new VVSelect(selectEl);
});
```

## Options
TODO

```js
new VVSelect(element, {
    // dropdown class
    dropdownClass: 'select__dropdown',

    // open class
    openClass: 'is-open',

    // label format for multi select with selected values
    multipleSelectedFormat: "%s geselecteerd",

    // label format for multi select without selectes values
    multipleFormat: "Selecteer opties",   

    // label format for single select with selected value
    singleSelectedFormat: "%s",

    // label format for single select without selected value
    singleFormat: "Maak een keuze",                 
});
```

## Methods

##### Open dropdown

```js
select.open();
```

##### Close dropdown

```js
select.close();
```

## Setters

##### set value

```js
select.value = '1'; 
// or
select.value = ['1'];
```

##### set initialized callback

```js
select.onInitialized = () => console.log('initialized');
```

##### set change callback

```js
select.onChange = () => console.log('changed');
```

##### set open callback

```js
select.onOpen = () => console.log('opened');
```

##### set close callback

```js
select.onClose = () => console.log('closed');
```

## Getters

##### get value

```js
const values = select.value;
```