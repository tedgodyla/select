/*!
 * VVSelect
 * (c) 2020 Ted Godyla
 * Released under the ISC license
 */
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
export default class VVSelect {
    private element;
    private trigger;
    private select;
    private selectObserver;
    private options;
    private dropdown;
    private dropdownOptions;
    private dropdownOptionsMap;
    private searchTime;
    private searchTimeout;
    private searchString;
    private useDropdown;
    private multiple;
    private autofocus;
    private disabled;
    private isOpen;
    private keydown;
    private initialized;
    private settings;
    readonly defaultSettings: VVSelectSettings;
    constructor(element: HTMLElement, settings?: object, initializeOnConstruct?: boolean);
    init(): void;
    get value(): Array<string> | string;
    set value(values: Array<string> | string);
    set onInitialize(fn: Function);
    set onChange(fn: Function);
    set onOpen(fn: Function);
    set onClose(fn: Function);
    open(): void;
    close(): void;
    private updateSelectStyling;
    private createDropdownNode;
    private createDropdownOptionNodes;
    private createDropdownOptionNode;
    private removeDropdownOptionNode;
    private updateDropdownOptions;
    private updateDropdownOption;
    private addSelectEvent;
    private addDropdownOptionsEvents;
    private addDropdownOptionEvents;
    private addTriggerEvent;
    private addDropdownEvents;
    private focusDropdownOptionByIndex;
    private focusDropdownOptionByDirection;
    private focusDropdownOptionClosestToIndex;
    private focusDropdownOptionBySearchedString;
    private focusDropdownOptionByFirstLetter;
    private createSelectObserver;
    private isDescendant;
    private getDropdownOptionFromMap;
    private addDocumentEvent;
    private removeDocumentEvent;
    private handleDocumentClick;
    private getSelectedOptions;
    private updateTriggerText;
}
export {};
