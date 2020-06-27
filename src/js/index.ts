/*!
 * VVSelect
 * (c) 2020 Ted Godyla
 * Released under the ISC license
 */

import { isMobile } from 'is-mobile';

interface VVSelectSettings {
    dropdownClass: string;
    dropdownOptionClass: string;
    dropdownOptGroupClass: string;
    dropdownOptGroupLabelClass: string;
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
    private dropdownOptions: Array<HTMLAnchorElement> = new Array();
    private dropdownOptionsMap: Map<HTMLAnchorElement, HTMLOptionElement> = new Map()
    private dropdownOptGroupsMap: Map<HTMLDivElement, HTMLOptGroupElement> = new Map()
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
        dropdownOptGroupClass: 'select__dropdown-optgroup',
        dropdownOptGroupLabelClass: 'select__dropdown-optgroup-label',
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
        this.handleDocumentFocusin = this.handleDocumentFocusin.bind(this);

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
            this.createDropdownNode();
            this.createDropdownOptionNodes(Array.from(this.select.children), this.dropdown);
            this.updateSelectStyling();
            this.addDropdownOptionsEvents();
            this.addTriggerEvents();
            this.addDropdownEvents();
            
            if (this.autofocus && !this.disabled)
                this.trigger.click();
        }

        this.addResetEvent();
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

        this.options.forEach(option => option.selected = values.includes(option.value));
        
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
        Open/close
    ---------------------------------------- */

    /*
     * Open dropdown
     */
    public open(): void
    {
        this.isOpen = true;

        this.element.classList.add(this.settings['openClass']);

        this.focusDropdownOptionClosestToIndex(0);

        this.addDocumentEvents();

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
        Update DOM
    ---------------------------------------- */

    /*
     * Create dropdown node
     */
    private createDropdownNode(): void
    {
        this.dropdown = document.createElement('div') as HTMLDivElement;

        if (this.settings['dropdownClass'])
            this.dropdown.classList.add(this.settings['dropdownClass']);

        this.element.appendChild(this.dropdown);
    }

    /*
     * Create dropdown option nodes based on all options
     */
    private createDropdownOptionNodes(elements: any, parent: HTMLElement): void
    {
        elements.forEach(element => {
            if (element.tagName === 'OPTGROUP') {
                this.createDropdownOptgroupNode(element, parent);
            } else if (element.tagName === 'OPTION') {
                this.createDropdownOptionNode(element, parent);
            }
        });
    }

    /*
     * Create dropdown option node based on given option
     */
    private createDropdownOptgroupNode(optgroup: HTMLOptGroupElement, parent: HTMLElement): HTMLDivElement
    {
        const dropdownOptGroup = document.createElement('div') as HTMLDivElement;
        const dropdownOptGroupLabel = document.createElement('div') as HTMLDivElement;

        if (this.settings['dropdownOptGroupClass'])
            dropdownOptGroup.className = this.settings['dropdownOptGroupClass'];

        if (this.settings['dropdownOptGroupLabelClass'])
            dropdownOptGroupLabel.className = this.settings['dropdownOptGroupLabelClass'];

        dropdownOptGroupLabel.textContent = optgroup.label;

        this.dropdownOptGroupsMap.set(dropdownOptGroup, optgroup);
        
        dropdownOptGroup.appendChild(dropdownOptGroupLabel);
        parent.appendChild(dropdownOptGroup);
        
        this.createDropdownOptionNodes(Array.from(optgroup.children), dropdownOptGroup);

        return dropdownOptGroup;
    }

    /*
     * Create dropdown option node based on given option
     */
    private createDropdownOptionNode(option: HTMLOptionElement, parent: HTMLElement): HTMLAnchorElement
    {
        const dropdownOption = document.createElement('a') as HTMLAnchorElement;

        dropdownOption.tabIndex = -1;
        dropdownOption.href = 'javascript:;';

        if (this.settings['dropdownOptionClass'])
            dropdownOption.className = this.settings['dropdownOptionClass'];
        
        this.dropdownOptionsMap.set(dropdownOption, option);

        parent.appendChild(dropdownOption);
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
     * Remove dropdown optgroup node based on given optgroup
     */
    private removeDropdownOptGroupNode(optGroup: HTMLOptGroupElement): void 
    {
        const dropdownOptGroup = this.getDropdownOptGroupFromMap(optGroup);

        this.dropdownOptGroupsMap.delete(dropdownOptGroup);

        dropdownOptGroup.remove();
    }

    /*
     * UpdateSelectStyling
     */
    private updateSelectStyling(): void
    {
        this.select.style.zIndex = '0';
        this.select.tabIndex = -1;
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

    /*
     * Update all dropdown option nodes
     */
    private updateDropdownOptions(): void
    {
        this.dropdownOptions.forEach(dropdownOption => this.updateDropdownOption(dropdownOption));
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

        // Update text
        if (dropdownOption.textContent !== option.textContent)
            dropdownOption.textContent = option.textContent;
    }

    /*
     * Update given dropdown option node
     */
    private updateDropdownOptGroup(dropdownOptGroup: HTMLDivElement): void
    {
        
    }

    /** ----------------------------------------
        Event listeners
    ---------------------------------------- */

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
     * Add reset event
     */
    private addResetEvent(): void
    {
        // - Unselect options
        // - Trigger select change event
        this.element.addEventListener('reset', () => {
            this.options.forEach(option => {
                option.selected = !(option.value);
            });

            this.select.dispatchEvent(new Event('change'));
        });
    }

    /*
     * Add dropdown options event
     */
    private addDropdownOptionsEvents(): void
    {
        this.dropdownOptions.forEach(dropdownOption => this.addDropdownOptionEvents(dropdownOption));
    }

    /*
     * Add dropdown options event
     */
    private addDropdownOptionEvents(dropdownOption: HTMLAnchorElement): void
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
     * Add trigger events
     */
    private addTriggerEvents(): void
    {
        // - Open/close dropdown on mousedown
        // - Ignore when select is disabled
        this.trigger.addEventListener('click', ev => {
            if (this.disabled) 
                return undefined;
            
            (this.isOpen) ? this.close() : this.open();

            ev.preventDefault();
        });

        // - Open/close dropdown on up and down keys when trigger is focused
        this.trigger.addEventListener('keydown', ev => {
            if (this.disabled) 
                return undefined;

            if (ev.keyCode !== 38 && ev.keyCode !== 40) { // up and down
                return undefined;
            }
            
            (this.isOpen) ? this.close() : this.open();

            ev.preventDefault();
        });
    }

    /*
     * Add dropdown events
     */
    private addDropdownEvents(): void
    {
        // - Focus next dropdown option on down key
        // - Focus previous dropdown option on up key
        // - Focus dropdown option that matched search string when typing
        // - Close dropdown on esc key down
        this.dropdown.addEventListener('keydown', ev => {
            this.keydown = true;

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

            if (ev.keyCode === 27) { // esc
                ev.preventDefault();
                this.close();
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
     * Add document event
     */
    private addDocumentEvents(): void
    {
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('focusin', this.handleDocumentFocusin, true);
    }

    /*
     * Remove document event
     */
    private removeDocumentEvent(): void
    {
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('focusin', this.handleDocumentFocusin, true);
    }

    /*
     * Handle document click
     */
    private handleDocumentClick(ev: Event): void
    {
        const target = ev.target as HTMLElement;

        if (target !== this.element && !this.isDescendant(this.element, target))
            this.close();
    }

    /*
     * Handle document click
     */
    private handleDocumentFocusin(ev: Event): void
    {
        const target = document.activeElement as HTMLElement;

        if (target !== this.element && !this.isDescendant(this.element, target))
            this.close();
    }

    /** ----------------------------------------
        Focus options
    ---------------------------------------- */

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

    /** ----------------------------------------
        Observers
    ---------------------------------------- */

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
                            let parent = null;

                            if (option.parentNode.nodeName === 'SELECT') {
                                parent = this.dropdown;
                            } else if (option.parentNode.nodeName === 'OPTGROUP') {
                                parent = this.getDropdownOptGroupFromMap(option.parentNode as HTMLOptGroupElement);
                            }

                            if (parent) {
                                const dropdownOption = this.createDropdownOptionNode(option, parent);
                                this.addDropdownOptionEvents(dropdownOption);
                            }
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

                    // Handle removed option node
                    Array.from(mutation.removedNodes).filter(node => node.nodeName === 'OPTGROUP').forEach(optGroupNode => {
                        const optGroup = optGroupNode as HTMLOptGroupElement;

                        if (this.useDropdown) 
                            this.removeDropdownOptGroupNode(optGroup as HTMLOptionElement);
                    });
                }

                if (mutation.type === 'attributes' && mutation.target.nodeName === 'OPTION') {
                    const option = mutation.target as HTMLOptionElement;
                    const dropdownOption = this.getDropdownOptionFromMap(option);
                    this.updateDropdownOption(dropdownOption);
                }

                if (mutation.type === 'attributes' && mutation.target.nodeName === 'OPTGROUP') {
                    const optGroup = mutation.target as HTMLOptGroupElement;
                    const dropdownOptGroup = this.getDropdownOptGroupFromMap(optGroup);
                    this.updateDropdownOptGroup(dropdownOptGroup);
                }
            });    
        });
        
        var config = { attributes: true, childList: true, characterData: true, subtree: true };
        
        this.selectObserver.observe(this.select, config);
    }

    /** ----------------------------------------
        Helpers
    ---------------------------------------- */

    /*
     * Is descendant helper class
     * This could maybe be moved to a helper package
     */
    private isDescendant(parent: Node, child: HTMLElement): boolean
    {
        let node = child.parentNode;
        while (node != null) {
            if (node == parent)
                return true;

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
     * Get dropdown option from map by given value
     */
    private getDropdownOptGroupFromMap(optGroup: HTMLOptGroupElement): null|HTMLDivElement
    {
        const filtered = Array.from(this.dropdownOptGroupsMap).filter(value => value[1] === optGroup);
        return (filtered.length === 1) ? filtered[0][0] : null;
    }

    /*
     * Get selected options
     */
    private getSelectedOptions(): Array<HTMLOptionElement>
    {
        return this.options.filter(option => option.selected);
    }
}