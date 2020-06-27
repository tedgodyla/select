# Stylable select
Stylable select is a module that mimics the behavior of the native select as much as possible.

## Features
- single and multi select
- optgroup supported
- navigate with arrows and tabs
- navigate by typing, matching option will be focussed
- open/close dropdown with enter/esc keys
- formatting text zero and selected states for single and multi select
- reset event to reset select values
- adding/remove/updating select options in DOM will update the dropdown

## Usage

```js
import StylableSelect from 'stylable-select';

for (const selectEl of document.querySelectorAll('.select')) {
    new StylableSelect(selectEl);
}
```

```html
<div class="select">
    <a class="select__trigger" href="javascript:;">...</a>
    <select class="select__select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
    </select>
</div>
```

##### Multiselect
```html
<div class="select">
    <a class="select__trigger" href="javascript:;">...</a>
    <select class="select__select" multiple>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
    </select>
</div>
```

##### Optgroups
```html
<div class="select">
    <a class="select__trigger" href="javascript:;">...</a>
    <select class="select__select">
        <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </optgroup>
    </select>
</div>
```

##### Reset
```js
document.querySelector('#reset').addEventListener('click', (ev) => {
    document.querySelector('#select').dispatchEvent(new Event('reset'));
});
```

## Options

```js
new StylableSelect(element, {
    dropdownClass: 'select__dropdown',
    dropdownOptionClass: 'select__dropdown-option',
    dropdownOptGroupClass: 'select__dropdown-optgroup',
    dropdownOptGroupLabelClass: 'select__dropdown-optgroup-label',
    openClass: 'is-open',
    reverseClass: 'is-reverse',
    multipleSelectedFormat: "%s selected",
    multipleFormat: "Select options",
    singleSelectedFormat: "%s",
    singleFormat: "Choose an option",
    onInitialize: () => {},
    onOpen: () => {},
    onClose: () => {},
    onChange: () => {},
    onReset: () => {},
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

##### set reset callback

```js
select.onReset = () => console.log('reset');
```

## Getters

##### get value

```js
const values = select.value;
```