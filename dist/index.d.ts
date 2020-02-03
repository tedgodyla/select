/*!
 * VVSelect
 * (c) 2020 Ted Godyla
 * Released under the ISC license
 */
export default class VVSelect {
    private element;
    private label;
    private select;
    private dropdown;
    private options;
    private inputs;
    private name;
    private useSelect;
    private multiple;
    private autofocus;
    private disabled;
    private isOpen;
    private settings;
    private defaultSettings;
    constructor(element: HTMLElement, settings?: Object);
    get value(): Array<string> | string;
    set value(values: Array<string> | string);
    open(): void;
    close(): void;
    private addDropdown;
    private addInputs;
    private removeSelect;
    private addSelectEvent;
    private addInputEvents;
    private addTriggerEvent;
    private isDescendant;
    private addDocumentEvent;
    private removeDocumentEvent;
    private handleDocumentClick;
    private getSelectedOptions;
    private updateLabel;
}
