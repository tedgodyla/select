import VVSelect from 'scripts/index';

const multiSelectEl: HTMLElement = document.querySelector('#multiSelect');
const singleSelectEl: HTMLElement = document.querySelector('#singleSelect');

const multiStatusEl: HTMLElement = document.querySelector('#multiStatus');
const singleStatusEl: HTMLElement = document.querySelector('#singleStatus');

const resetEl: HTMLElement = document.querySelector('#reset');

// Add status change to DOM
const addStatusChange: Function = (status: string, select, statusEl: HTMLElement) => {
    const div = document.createElement('div');
    if (select.multiple) {
        div.innerHTML = `${status} - ${select.value.join(',')}`;
    } else {
        div.innerHTML = `${status} - ${select.value}`;
    }
    statusEl.appendChild(div);
}

// Test multi select
const testMultiSelect: Function = () => {
    const select = new VVSelect(multiSelectEl, {
        multipleSelectedFormat: "%s geselecteerd",
        multipleFormat: "Selecteer opties",
    }, false);

    select.onInitialize = () => addStatusChange('initialized', select, multiStatusEl);
    select.onChange = () => addStatusChange('changed', select, multiStatusEl);
    select.onReset = () => addStatusChange('reset', select, multiStatusEl);
    select.onOpen = () => addStatusChange('opened', select, multiStatusEl);
    select.onClose = () => addStatusChange('closed', select, multiStatusEl);

    select.init();

    select.value = ['2', '3'];

    // Add option
    const addOption: HTMLOptionElement = document.createElement('option');
    addOption.value = 'added_option';
    addOption.textContent = 'added option';
    multiSelectEl.querySelector('optgroup:last-of-type').appendChild(addOption);

    // Remove option
    const removeOption: HTMLOptionElement = multiSelectEl.querySelector('option:nth-child(2)')
    removeOption.remove();
}

// Test single select
const testSingleSelect: Function = () => {
    const select = new VVSelect(singleSelectEl, {
        singleSelectedFormat: "%s",
        singleFormat: "Kies een optie",
    }, false);

    select.onInitialize = () => addStatusChange('initialized', select, singleStatusEl);
    select.onChange = () => addStatusChange('changed', select, singleStatusEl);
    select.onReset = () => addStatusChange('reset', select, singleStatusEl);
    select.onOpen = () => addStatusChange('opened', select, singleStatusEl);
    select.onClose = () => addStatusChange('closed', select, singleStatusEl);

    select.init();

    select.value = '3';

    // Add option
    const addOption: HTMLOptionElement = document.createElement('option');
    addOption.value = 'added_option';
    addOption.textContent = 'added option';
    addOption.disabled = true;
    singleSelectEl.querySelector('select').appendChild(addOption);

    // Remove option
    const removeOption: HTMLOptionElement = singleSelectEl.querySelector('option:nth-child(2)')
    removeOption.remove();

    const updateOption: HTMLOptionElement = singleSelectEl.querySelector('option:nth-child(1)');
    updateOption.disabled = true;
    updateOption.setAttribute('disabled', 'true');
    updateOption.innerText = 'text';
}

testMultiSelect();
testSingleSelect();

resetEl.addEventListener('click', (ev) => {
    multiSelectEl.dispatchEvent(new Event('reset'));
    singleSelectEl.dispatchEvent(new Event('reset'));
});