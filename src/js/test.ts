import VVSelect from './index';

const selectElems: Array<HTMLElement> = Array.from(document.querySelectorAll('.select'));

const selects = [];

selectElems.forEach(selectEl => {
    const select = new VVSelect(selectEl);
    selects.push(select);
})

console.log(selects[0]);

selects[0].value = ["2", "3"];