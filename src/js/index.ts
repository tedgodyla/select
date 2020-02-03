/*!
 * VVSelect
 * (c) 2020 Ted Godyla
 * Released under the ISC license
 */

/** ----------------------------------------
    Imports
---------------------------------------- */

import { isMobile } from 'is-mobile';

/** ----------------------------------------
    Export Class
---------------------------------------- */

export default class VVSelect {

    /** ----------------------------------------
        Variables
    ---------------------------------------- */

    private element: HTMLElement;
    private label: HTMLLabelElement;
    private select: HTMLSelectElement|null;
    private dropdown: HTMLDivElement|null;
    private options: Array<HTMLOptionElement>|null;
    private inputs: Array<HTMLInputElement>|null;
    private name: string;
    private useSelect: boolean;
    private multiple: boolean;
    private autofocus: boolean;
    private disabled: boolean;
    private isOpen: boolean = false;

    private settings: object;
    private defaultSettings: object = {
        dropdownClass: 'select__dropdown',              // dropdown class
        openClass: 'is-open',                           // open class
        multipleSelectedFormat: "%s geselecteerd",      // label format for multiple select with selected values
        multipleFormat: "Selecteer opties",             // label format for multiple select without selectes values
        singleSelectedFormat: "%s",                     // label format for single select with selected value
        singleFormat: "Maak een keuze",                 // label format for single select without selected value
    }

    /** ----------------------------------------
        Constructor
    ---------------------------------------- */

    constructor(element: HTMLElement, settings: Object = {})
    {
        this.element = element;
        this.settings = {...this.defaultSettings, ...settings }

        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        this.label = element.querySelector('label');
        this.select = element.querySelector('select');
        this.options = Array.from(element.querySelectorAll('option'));

        this.useSelect = isMobile({ tablet: true });
        this.multiple = this.select.multiple;
        this.name = this.select.name;
        this.autofocus = this.select.autofocus;
        this.disabled = this.select.disabled;

        if (!this.useSelect) {
            this.addDropdown();
            this.addInputs();
            this.removeSelect();
            this.addInputEvents();
            this.addTriggerEvent();

            if (this.autofocus && !this.disabled) {
                this.label.click();
            }
        } else {
            this.addSelectEvent();
        }

        this.updateLabel();

        this.element.classList.add('initialized');
    }

    /** ----------------------------------------
        Getters and setters
    ---------------------------------------- */

    /*
     * Get value. Returns array on multiple select and a string on single select
     */
    get value(): Array<string>|string
    {
        const values = this.getSelectedOptions().map(element => {
            return element.value;
        });

        if (this.multiple) {
            return values;
        } else {
            return (values[0]) ? values[0] : '';
        }
    }

    /*
     * Set value
     */
    set value(values: Array<string>|string)
    {
        if (typeof values === 'string') {
            values = [values];
        }

        if (this.useSelect) {
            this.options.forEach(option => {
                option.selected = values.includes(option.value);
            });
            this.select.dispatchEvent(new Event('change'));
        } else {
            this.inputs.forEach(input => {
                input.checked = values.includes(input.value);
            });

            if (this.inputs[0]) {
                this.inputs[0].dispatchEvent(new Event('change'));
            }
        }
    }

    /** ----------------------------------------
        Public functions
    ---------------------------------------- */

    /*
     * Open dropdown and set document event
     */
    public open(): void
    {
        this.isOpen = true;

        this.element.classList.add(this.settings['openClass']);

        this.addDocumentEvent();
    }

    /*
     * Close dropdown and remove document event
     */
    public close(): void
    {
        this.isOpen = false;

        this.element.classList.remove(this.settings['openClass']);

        this.removeDocumentEvent();
    }

    /** ----------------------------------------
        Private functions
    ---------------------------------------- */

    /*
     * Add dropdown element
     */
    private addDropdown(): void
    {
        this.dropdown = document.createElement('div');
        this.dropdown.classList.add(this.settings['dropdownClass']);
        this.element.appendChild(this.dropdown);
    }

    /*
     * Add input elements
     */
    private addInputs(): void
    {
        if (!this.dropdown) return;
        
        this.inputs = new Array();

        this.options.forEach(option => {
            const input = document.createElement('input');
            const label = document.createElement('label');
            const id = `${this.name}-${option.index}`;

            input.id = id;
            input.disabled = option.disabled;
            input.checked = option.selected;
            input.value = option.value;
            input.name = this.select.name;
            input.type = (this.multiple) ? 'checkbox' : 'radio';
            input.style.display = 'none';

            label.innerText = option.innerText;
            label.htmlFor = id;

            this.dropdown.appendChild(input);
            this.dropdown.appendChild(label);

            this.inputs.push(input);
        });
    }

    /*
     * Remove select element
     */
    private removeSelect(): void 
    {
        this.select.remove();
        this.select = null;
        this.options = null;
    }

    /*
     * Add select event
     */
    private addSelectEvent(): void
    {
        this.select.addEventListener('change', () => {
            this.updateLabel();
        });
    }

    /*
     * Add input event
     */
    private addInputEvents(): void
    {
        this.inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateLabel();
            });
        });
    }

    /*
     * Add trigger event
     */
    private addTriggerEvent(): void
    {
        this.label.addEventListener('click', (ev) => {
            ev.preventDefault();

            if (this.disabled) return;

            (this.isOpen) ? this.close() : this.open();
        });
    }

    /*
     * Is descendant helper class
     * This could maybe be moved to a helper package
     */
    private isDescendant(parent: any, child: any): boolean
    {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    /*
     * Add document event
     */
    private addDocumentEvent(): void
    {
        document.addEventListener('click', this.handleDocumentClick);
    }

    /*
     * Remove document event
     */
    private removeDocumentEvent(): void
    {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    /*
     * Handle document click
     */
    private handleDocumentClick(ev: Event): void
    {
        const target = ev.srcElement;

        if (target !== this.element && !this.isDescendant(this.element, target)) {
            this.close();
        }
    }

    /*
     * Get selected options
     */
    private getSelectedOptions(): Array<HTMLInputElement|HTMLOptionElement>
    {
        if (this.useSelect) {
            return this.options.filter(option => {
                return option.selected;
            });
        } else {
            return this.inputs.filter(input => {
                return input.checked;
            });
        }
    }

    /*
     * Update label
     */
    private updateLabel(): void
    {
        const elements = this.getSelectedOptions();

        if (this.multiple) {
            const amount = elements.length;
            const format = (amount) ? 'multipleSelectedFormat' : 'multipleFormat';
            this.label.innerText = this.settings[format].replace(/%s/g, amount);
        } else {
            const text = (elements[0]) ? (this.useSelect) ? elements[0].innerHTML : elements[0].nextElementSibling.innerHTML : '';
            const format = (text) ? 'singleSelectedFormat' : 'singleFormat';
            this.label.innerText = this.settings[format].replace(/%s/g, text);
        }
    }
}