## Before install

1. make sure the github registry is set in the `.npmrc` file

```
@tedgodyla:registry=https://npm.pkg.github.com
```

2. Make sure you have a personal github oath token
[(link)](https://github.com/settings/tokens)

3. Login into npm
```
npm login --registry=https://npm.pkg.github.com
```

## Usage

```js
import VVSelect from 'tedgodyla@select';

const selectElems: document.querySelectorAll('.select')

[...selectElems].forEach(selectEl => {
    new VVSelect(selectEl);
});
```

## Options

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

```js
const select = new VVSelect(element);

// Open select dropdown
select.open();

// Close select dropdown
select.close();

// Set value for single select
select.value = '1'; 
// or
select.value = ['1'];

// Set value for multi select
select.value = ['1', '3'];

// Get value
const values = select.value;
```