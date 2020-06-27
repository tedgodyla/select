/*!
 * VVSelect
 * (c) 2020 Ted Godyla
 * Released under the ISC license
 */
interface VVSelectSettings {
    dropdownClass: string;
    dropdownOptionClass: string;
    dropdownOptGroupClass: string;
    dropdownOptGroupLabelClass: string;
    openClass: string;
    reverseClass: string;
    multipleSelectedFormat: string;
    multipleFormat: string;
    singleSelectedFormat: string;
    singleFormat: string;
    onInitialize: Function;
    onOpen: Function;
    onClose: Function;
    onChange: Function;
    onReset: Function;
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
    private dropdownOptGroupsMap;
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
    set onReset(fn: Function);
    set onOpen(fn: Function);
    set onClose(fn: Function);
    open(): void;
    close(): void;
    private createDropdownNode;
    private createDropdownOptionNodes;
    private createDropdownOptgroupNode;
    private createDropdownOptionNode;
    private removeDropdownOptionNode;
    private removeDropdownOptGroupNode;
    private updateSelectStyling;
    private updateTriggerText;
    private updateDropdownOptions;
    private updateDropdownOption;
    private updateDropdownOptGroup;
    private updateDropdownDirection;
    private addSelectEvent;
    private addResetEvent;
    private addDropdownOptionsEvents;
    private addDropdownOptionEvents;
    private addTriggerEvents;
    private addDropdownEvents;
    private addDocumentEvents;
    private removeDocumentEvent;
    private handleDocumentClick;
    private handleDocumentFocusin;
    private focusDropdownOptionByIndex;
    private focusDropdownOptionByDirection;
    private focusDropdownOptionClosestToIndex;
    private focusDropdownOptionBySearchedString;
    private focusDropdownOptionByFirstLetter;
    private createSelectObserver;
    private isDescendant;
    private getDropdownOptionFromMap;
    private getDropdownOptGroupFromMap;
    private getSelectedOptions;
}
export {};
