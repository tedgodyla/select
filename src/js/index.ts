/*!
 * VVSelect
 * (c) 2020 Ted Godyla
 * Released under the ISC license
 */

import { isMobile } from 'is-mobile';

interface VVSelectSettings {
    dropdownClass: string;
    dropdownOptionClass: string;
    openClass: string;
    multipleSelectedFormat: string;
    multipleFormat: string;
    singleSelectedFormat: string;
    singleFormat: string;
    onInitialize: Function;
    onOpen: Function;
    onClose: Function;
    onChange: Function;
}

enum FocusDirection {
    prev = -1,
    next = 1,
}

export default class VVSelect {

    /** ----------------------------------------
        Variables
    ---------------------------------------- */

    private element: HTMLElement;
    private trigger: HTMLElement;
    private select: HTMLSelectElement;
    private selectObserver: MutationObserver;
    private options: Array<HTMLOptionElement>;
    private dropdown: HTMLDivElement;
    private dropdownOptions: Array<HTMLAnchorElement>;
    private dropdownOptionsMap: Map<HTMLAnchorElement, HTMLOptionElement> = new Map()
    private searchTime: number = (new Date()).getTime();
    private searchTimeout: number = 2000; // 2 seconds
    private searchString: string = '';
    private useDropdown: boolean;
    private multiple: boolean;
    private autofocus: boolean;
    private disabled: boolean;
    private isOpen: boolean = false;
    private keydown: boolean = false;
    private initialized: boolean = false;

    private settings: VVSelectSettings;
    
    readonly defaultSettings: VVSelectSettings = {
        dropdownClass: 'select__dropdown',
        dropdownOptionClass: 'select__dropdown-option',
        openClass: 'is-open',
        multipleSelectedFormat: "%s selected",
        multipleFormat: "Select options",
        singleSelectedFormat: "%s",
        singleFormat: "Choose an option",
        onInitialize: () => {},
        onOpen: () => {},
        onClose: () => {},
        onChange: () => {},
    }

    /** ----------------------------------------
        Constructor
    ---------------------------------------- */

    constructor(element: HTMLElement, settings: object = {}, initializeOnConstruct: boolean = true)
    {
        this.element = element;

        Object.keys(this.defaultSettings).forEach(key => {
            if (this.element.dataset[key]) settings[key] = this.element.dataset[key];
        });

        this.settings = {...this.defaultSettings, ...settings };

        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        this.trigger = element.querySelector('a');
        this.select = element.querySelector('select');
        this.options = Array.from(element.querySelectorAll('option'));

        this.useDropdown = !isMobile({ tablet: true });
        this.multiple = this.select.multiple;
        this.autofocus = this.select.autofocus;
        this.disabled = this.select.disabled;

        if (initializeOnConstruct)
            this.init();
    }

    /** ----------------------------------------
        Initialize
    ---------------------------------------- */

    public init() 
    {
        if (this.useDropdown) {
            this.addDropdownNode();
            this.createDropdownOptionNodes();
            this.updateSelectStyling();
            this.addDropdownOptionEvents();
            this.addTriggerEvent();
            this.addDropdownEvent();
            
            if (this.autofocus && !this.disabled) {
                this.trigger.click();
            }
        }

        this.addSelectEvent();
        this.updateTriggerText();
        this.createSelectObserver();

        this.element.classList.add('initialized');
        this.initialized = true;
        this.settings.onInitialize();
    }

    /** ----------------------------------------
        Getters and setters
    ---------------------------------------- */

    /*
     * Get value. Returns array on multiple select and a string on single select
     */
    get value(): Array<string>|string
    {
        const values = this.getSelectedOptions().map(element => element.value);

        return (this.multiple) ? values : (values.length === 1 ) ? values[0] : '';
    }

    /*
     * Set value
     */
    set value(values: Array<string>|string)
    {
        if (typeof values === 'string')
            values = [values];

        this.options.forEach(option => {
            option.selected = values.includes(option.value);
        });
        
        this.select.dispatchEvent(new Event('change'));
    }

    /*
     * Set on intialized function
     */
    set onInitialize(fn: Function)
    {
        this.settings.onInitialize = fn;
    }

    /*
     * Set on change function
     */
    set onChange(fn: Function)
    {
        this.settings.onChange = fn;
    }

    /*
     * Set on open function
     */
    set onOpen(fn: Function)
    {
        this.settings.onOpen = fn;
    }

    /*
     * Set on close function
     */
    set onClose(fn: Function)
    {
        this.settings.onClose = fn;
    }

    /** ----------------------------------------
        Public functions
    ---------------------------------------- */

    /*
     * Open dropdown
     */
    public open(): void
    {
        this.isOpen = true;

        this.element.classList.add(this.settings['openClass']);

        this.focusDropdownOptionClosestToIndex(0);

        this.addDocumentEvent();

        this.settings.onOpen();
    }

    /*
     * Close dropdown and remove document event
     */
    public close(): void
    {
        this.isOpen = false;

        this.element.classList.remove(this.settings['openClass']);

        this.removeDocumentEvent();

        this.settings.onClose();

    }

    /** ----------------------------------------
        Private functions
    ---------------------------------------- */

    /*
     * UpdateSelectStyling
     */
    private updateSelectStyling(): void
    {
        this.select.style.zIndex = '0';
        this.select.tabIndex = -1;
    }

    /*
     * Add dropdown element
     */
    private addDropdownNode(): void
    {
        this.dropdown = document.createElement('div') as HTMLDivElement;

        if (this.settings['dropdownClass'])
            this.dropdown.classList.add(this.settings['dropdownClass']);

        this.element.appendChild(this.dropdown);
    }

    /*
     * Create dropdown option nodes based on all options
     */
    private createDropdownOptionNodes(): void
    {
        this.dropdownOptions = new Array();

        this.options.forEach(option => {
            this.createDropdownOptionNode(option);
        });
    }

    /*
     * Create dropdown option node based on given option
     */
    private createDropdownOptionNode(option: HTMLOptionElement): null|HTMLAnchorElement
    {
        const dropdownOption = document.createElement('a') as HTMLAnchorElement;

        dropdownOption.tabIndex = 0;
        dropdownOption.href = 'javascript:;';

        if (this.settings['dropdownOptionClass'])
            dropdownOption.className = this.settings['dropdownOptionClass'];
        
        this.dropdownOptionsMap.set(dropdownOption, option);
        this.dropdown.appendChild(dropdownOption);
        this.dropdownOptions.push(dropdownOption);

        this.updateDropdownOption(dropdownOption);

        return dropdownOption;
    }

    /*
     * Remove dropdown option node based on given option
     */
    private removeDropdownOptionNode(option: HTMLOptionElement): void 
    {
        const dropdownOption = this.getDropdownOptionFromMap(option);

        this.dropdownOptionsMap.delete(dropdownOption);

        this.dropdownOptions = this.dropdownOptions.filter(el => el !== dropdownOption);

        dropdownOption.remove();
    }

    /*
     * Update all dropdown option nodes
     */
    private updateDropdownOptions(): void
    {
        this.dropdownOptions.forEach(dropdownOption => {
            this.updateDropdownOption(dropdownOption);
        });
    }

    /*
     * Update given dropdown option node
     */
    private updateDropdownOption(dropdownOption: HTMLAnchorElement): void
    {
        const option = this.dropdownOptionsMap.get(dropdownOption);

        // Update data attribute
        const propsToDataset = ['disabled', 'selected', 'value'];
        propsToDataset.forEach(prop => {
            if (typeof option[prop] === 'boolean') {
                if (option[prop])
                    dropdownOption.dataset[prop] = '';
                else
                    delete dropdownOption.dataset[prop];
            } else {
                if (dropdownOption.dataset[prop] !== option[prop])
                    dropdownOption.dataset[prop] = option[prop];
            }
        });

        dropdownOption.tabIndex = (option.disabled) ? -1 : 0;

        // Update text
        if (dropdownOption.textContent !== option.textContent)
            dropdownOption.textContent = option.textContent;
    }

    /*
     * Add select event
     */
    private addSelectEvent(): void
    {
        this.select.addEventListener('change', () => {
            this.updateTriggerText();

            if (this.useDropdown)
                this.updateDropdownOptions();

            this.settings.onChange();
        });
    }

    /*
     * Add dropdown options event
     */
    private addDropdownOptionEvents(): void
    {
        this.dropdownOptions.forEach(dropdownOption => {
            this.addDropdownOptionEvent(dropdownOption);
        });
    }

    /*
     * Add dropdown options event
     */
    private addDropdownOptionEvent(dropdownOption: HTMLAnchorElement): void
    {
        // - Select dropdown option on click
        // - Ignore for disabled option
        // - Trigger change event
        // - Close dropdown afterwards for single select
        dropdownOption.addEventListener('click', (e) => {
            e.preventDefault();

            const option = this.dropdownOptionsMap.get(dropdownOption);

            if (option.disabled)
                return;

            if (this.multiple) {
                option.selected = !option.selected;

                this.select.dispatchEvent(new Event('change'));
            }

            if (!this.multiple && !option.selected) {
                option.selected = true;

                this.select.dispatchEvent(new Event('change'));
            }

            if (!this.multiple)
                this.close();
        });

        // - Focus dropdown option on mouseover
        // - Ignore for disabled option or when typing
        dropdownOption.addEventListener('mouseover', () => {
            if (this.keydown)
                return;

            const option = this.dropdownOptionsMap.get(dropdownOption);

            if (option.disabled) 
                return;

            this.focusDropdownOptionByIndex(this.dropdownOptions.indexOf(dropdownOption));
        });

        // - Prevent dropdown option focus on disabled option
        dropdownOption.addEventListener('mousedown', () => {
            const option = this.dropdownOptionsMap.get(dropdownOption);

            if (option.disabled) 
                event.preventDefault();
        });
    }

    /*
     * Add trigger event
     */
    private addTriggerEvent(): void
    {
        // - Open/close dropdown
        // - Ignore when select is disabled
        this.trigger.addEventListener('click', ev => {
            ev.preventDefault();

            if (this.disabled) 
                return;

            (this.isOpen) ? this.close() : this.open();
        });
    }

    /*
     * Add dropdown events
     */
    private addDropdownEvent(): void
    {
        // - Focus next dropdown option on key down
        // - Focus previous dropdown option on key up
        // - Focus dropdown option that matched search string when typing
        this.dropdown.addEventListener('keydown', ev => {
            this.keydown = true;

            console.log('keydown');

            if (ev.keyCode === 38) { // up
                ev.preventDefault();
                this.focusDropdownOptionByDirection(FocusDirection.prev);
                return undefined;
            }

            if (ev.keyCode === 40) { // down
                ev.preventDefault();
                this.focusDropdownOptionByDirection(FocusDirection.next);
                return undefined;
            }


            if (ev.keyCode === 8) { // backspace
                ev.preventDefault();
                this.searchString = this.searchString.slice(0, -1);
                this.focusDropdownOptionBySearchedString('');
                return undefined;
            }

            const char = String.fromCharCode(ev.keyCode);

            if (
                (char && char.match(/^[a-z0-9 ]+$/i)) &&
                !(ev.ctrlKey || ev.altKey || ev.metaKey)
            ) {
                ev.preventDefault();
                this.focusDropdownOptionBySearchedString(char);
            }
        });

        this.dropdown.addEventListener('keyup', ev => {
            this.keydown = false;
        });
    }

    /*
     * Focus dropdown option by index
     * Ignore disabled option
     */
    private focusDropdownOptionByIndex(index: number): void
    {
        window.requestAnimationFrame(() => {
            const option = this.dropdownOptionsMap.get(this.dropdownOptions[index]);

            if (!option.disabled)
                this.dropdownOptions[index].focus();
        });
    }

    /*
     * Focus next dropdown option based on current focused option and given direction
     * Skip disabled option
     */
    private focusDropdownOptionByDirection(focusDirection: FocusDirection): void
    {
        this.dropdownOptions.forEach((dropdownOption, index) => {
            if (document.activeElement === dropdownOption) {
                let nextIndex = index + focusDirection;

                while (typeof this.dropdownOptions[nextIndex] !== undefined) {
                    const nextOption = this.dropdownOptionsMap.get(this.dropdownOptions[nextIndex]);
                    
                    if (nextOption.disabled) {
                        nextIndex+= focusDirection;
                    } else {
                        this.focusDropdownOptionByIndex(nextIndex);
                        break;
                    }
                }
            }
        });
    }

    /*
     * Focus dropdown option closest to index. First checks current index, 
     * then next index, then prev index, the 2nd next index, then 2nd prev index etc.
     * Skips disabled option.
     */
    private focusDropdownOptionClosestToIndex(index: number): void
    {
        for (let i = 0; i <= this.dropdownOptions.length; i++) {
            let breakLoop = false;

            for (let j = 1; j >= -1; j-= 2) {
                const x = index + (i * j);

                if (!this.dropdownOptions[x])
                    continue;
                
                const option = this.dropdownOptionsMap.get(this.dropdownOptions[x]);

                if (!option.disabled) {
                    this.focusDropdownOptionByIndex(x);
                    breakLoop = true;
                    break;
                }

                if (x === 0)
                    break;
            }

            if (breakLoop)
                break;
        }
    }

    /*
     * Focus dropdown option based on search
     * If all match (empty string): Focus closest focusable to index 0
     * Else if matches found: Focus first match
     * Else if searching 1 char: Focus option that is alphabeticly closest to the char
     * Else: Don't change focus
     */
    private focusDropdownOptionBySearchedString(char: string): void
    {
        const time = (new Date()).getTime();

        if (time > this.searchTime + this.searchTimeout)
            this.searchString = '';

        this.searchTime = time;
        this.searchString+= char.toLowerCase();

        const matches = this.dropdownOptions.filter(option => option.innerHTML.toLowerCase().startsWith(this.searchString));

        if (matches.length === this.dropdownOptions.length) {
            this.focusDropdownOptionClosestToIndex(0);
        } else if (matches.length) {
            this.focusDropdownOptionClosestToIndex(this.dropdownOptions.indexOf(matches[0]));
        } else if (this.searchString.length === 1) {
            this.focusDropdownOptionByFirstLetter(this.searchString);
            
        }
    }

    /*
     * Focus dropdown option where first letter is alphabetically closest to given char
     */
    private focusDropdownOptionByFirstLetter(char: string): void
    {
        const searchLetterIndex = parseInt(char, 36) - 9;
        let lowestDiff = 26;
        let closestDropdownOption = null;

        this.dropdownOptions.forEach(dropdownOption => {
            const option = this.dropdownOptionsMap.get(dropdownOption);

            if (!option.disabled) {
                const firstLetter = dropdownOption.textContent.charAt(0).toLowerCase();
                const letterIndex = parseInt(firstLetter, 36) - 9;
                const diff = Math.abs(searchLetterIndex - letterIndex);
                
                if (diff <= lowestDiff) {
                    lowestDiff = diff;
                    closestDropdownOption = dropdownOption;
                }
            }
        });

        if (closestDropdownOption)
            this.focusDropdownOptionByIndex(this.dropdownOptions.indexOf(closestDropdownOption));
    }

    /*
     * Create select observer
     */
    private createSelectObserver(): void
    {
        this.selectObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    // Handle added option node
                    Array.from(mutation.addedNodes).filter(node => node.nodeName === 'OPTION').forEach(optionNode => {
                        const option = optionNode as HTMLOptionElement;

                        this.options.push(option);

                        if (this.useDropdown) {
                            const dropdownOption = this.createDropdownOptionNode(option);
                            this.addDropdownOptionEvent(dropdownOption);
                        }
                    });

                    // Handle removed option node
                    Array.from(mutation.removedNodes).filter(node => node.nodeName === 'OPTION').forEach(optionNode => {
                        const option = optionNode as HTMLOptionElement;
                        const updatedValue = this.value.includes(option.value);

                        this.options = this.options.filter(value => value !== option);

                        if (this.useDropdown) 
                            this.removeDropdownOptionNode(option as HTMLOptionElement);

                        if (updatedValue)
                            this.select.dispatchEvent(new Event('change'));
                    });
                }

                if (mutation.type === 'attributes' && mutation.target.nodeName === 'OPTION') {
                    const option = mutation.target as HTMLOptionElement;
                    const dropdownOption = this.getDropdownOptionFromMap(option);
                    this.updateDropdownOption(dropdownOption);
                }
            });    
        });
        
        var config = { attributes: true, childList: true, characterData: true, subtree: true };
        
        this.selectObserver.observe(this.select, config);
    }

    /*
     * Is descendant helper class
     * This could maybe be moved to a helper package
     */
    private isDescendant(parent: Node, child: HTMLElement): boolean
    {
        let node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    /*
     * Get dropdown option from map by given value
     */
    private getDropdownOptionFromMap(option: HTMLOptionElement): null|HTMLAnchorElement
    {
        const filtered = Array.from(this.dropdownOptionsMap).filter(value => value[1] === option);
        return (filtered.length === 1) ? filtered[0][0] : null;
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
        const target = ev.target as HTMLElement;

        if (target !== this.element && !this.isDescendant(this.element, target)) {
            this.close();
        }
    }

    /*
     * Get selected options
     */
    private getSelectedOptions(): Array<HTMLInputElement|HTMLOptionElement>
    {
        return this.options.filter(option => option.selected);
    }

    /*
     * Update trigger text
     */
    private updateTriggerText(): void
    {
        const elements = this.getSelectedOptions();

        if (this.multiple) {
            const amount = String(elements.length);
            const format = (amount) ? 'multipleSelectedFormat' : 'multipleFormat';
            this.trigger.innerText = this.settings[format].replace(/%s/g, amount);
        } else {
            const text = (elements[0]) ? elements[0].innerHTML : '';
            const format = (text) ? 'singleSelectedFormat' : 'singleFormat';
            this.trigger.innerText = this.settings[format].replace(/%s/g, text);
        }
    }
}