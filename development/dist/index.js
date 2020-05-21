/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./development/src/js/index.ts":
/*!*************************************!*\
  !*** ./development/src/js/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(__webpack_require__(/*! scripts/index */ "./src/js/index.ts"));
var multiSelectEl = document.querySelector('#multiSelect');
var singleSelectEl = document.querySelector('#singleSelect');
var multiStatusEl = document.querySelector('#multiStatus');
var singleStatusEl = document.querySelector('#singleStatus');
var addStatusChange = function (status, select, statusEl) {
    var div = document.createElement('div');
    if (select.multiple) {
        div.innerHTML = status + " - " + select.value.join(',');
    }
    else {
        div.innerHTML = status + " - " + select.value;
    }
    statusEl.appendChild(div);
};
var testMultiSelect = function () {
    var select = new index_1.default(multiSelectEl, {
        multipleSelectedFormat: "%s geselecteerd",
        multipleFormat: "Selecteer opties",
    }, false);
    select.onInitialize = function () { return addStatusChange('initialized', select, multiStatusEl); };
    select.onChange = function () { return addStatusChange('changed', select, multiStatusEl); };
    select.onOpen = function () { return addStatusChange('opened', select, multiStatusEl); };
    select.onClose = function () { return addStatusChange('closed', select, multiStatusEl); };
    select.init();
    select.value = ['2', '3'];
    var addOption = document.createElement('option');
    addOption.value = 'added_option';
    addOption.textContent = 'added option';
    multiSelectEl.querySelector('optgroup:last-of-type').appendChild(addOption);
    var removeOption = multiSelectEl.querySelector('option:nth-child(2)');
    removeOption.remove();
};
var testSingleSelect = function () {
    var select = new index_1.default(singleSelectEl, {
        singleSelectedFormat: "%s",
        singleFormat: "Kies een optie",
    }, false);
    select.onInitialize = function () { return addStatusChange('initialized', select, singleStatusEl); };
    select.onChange = function () { return addStatusChange('changed', select, singleStatusEl); };
    select.onOpen = function () { return addStatusChange('opened', select, singleStatusEl); };
    select.onClose = function () { return addStatusChange('closed', select, singleStatusEl); };
    select.init();
    select.value = '3';
    var addOption = document.createElement('option');
    addOption.value = 'added_option';
    addOption.textContent = 'added option';
    addOption.disabled = true;
    singleSelectEl.querySelector('select').appendChild(addOption);
    var removeOption = singleSelectEl.querySelector('option:nth-child(2)');
    removeOption.remove();
    var updateOption = singleSelectEl.querySelector('option:nth-child(1)');
    updateOption.disabled = true;
    updateOption.setAttribute('disabled', 'true');
    updateOption.innerText = 'text';
};
testMultiSelect();
testSingleSelect();


/***/ }),

/***/ "./development/src/scss/index.scss":
/*!*****************************************!*\
  !*** ./development/src/scss/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/is-mobile/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-mobile/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isMobile
module.exports.isMobile = isMobile
module.exports.default = isMobile

var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i

var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i

function isMobile (opts) {
  if (!opts) opts = {}
  var ua = opts.ua
  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent']
  }
  if (typeof ua !== 'string') return false

  return opts.tablet ? tabletRE.test(ua) : mobileRE.test(ua)
}


/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * VVSelect
 * (c) 2020 Ted Godyla
 * Released under the ISC license
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_mobile_1 = __webpack_require__(/*! is-mobile */ "./node_modules/is-mobile/index.js");
var FocusDirection;
(function (FocusDirection) {
    FocusDirection[FocusDirection["prev"] = -1] = "prev";
    FocusDirection[FocusDirection["next"] = 1] = "next";
})(FocusDirection || (FocusDirection = {}));
var VVSelect = (function () {
    function VVSelect(element, settings, initializeOnConstruct) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        if (initializeOnConstruct === void 0) { initializeOnConstruct = true; }
        this.dropdownOptions = new Array();
        this.dropdownOptionsMap = new Map();
        this.dropdownOptGroupsMap = new Map();
        this.searchTime = (new Date()).getTime();
        this.searchTimeout = 2000;
        this.searchString = '';
        this.isOpen = false;
        this.keydown = false;
        this.initialized = false;
        this.defaultSettings = {
            dropdownClass: 'select__dropdown',
            dropdownOptionClass: 'select__dropdown-option',
            dropdownOptGroupClass: 'select__dropdown-optgroup',
            dropdownOptGroupLabelClass: 'select__dropdown-optgroup-label',
            openClass: 'is-open',
            multipleSelectedFormat: "%s selected",
            multipleFormat: "Select options",
            singleSelectedFormat: "%s",
            singleFormat: "Choose an option",
            onInitialize: function () { },
            onOpen: function () { },
            onClose: function () { },
            onChange: function () { },
        };
        this.element = element;
        Object.keys(this.defaultSettings).forEach(function (key) {
            if (_this.element.dataset[key])
                settings[key] = _this.element.dataset[key];
        });
        this.settings = __assign(__assign({}, this.defaultSettings), settings);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.trigger = element.querySelector('a');
        this.select = element.querySelector('select');
        this.options = Array.from(element.querySelectorAll('option'));
        this.useDropdown = !is_mobile_1.isMobile({ tablet: true });
        this.multiple = this.select.multiple;
        this.autofocus = this.select.autofocus;
        this.disabled = this.select.disabled;
        if (initializeOnConstruct)
            this.init();
    }
    VVSelect.prototype.init = function () {
        if (this.useDropdown) {
            this.createDropdownNode();
            this.createDropdownOptionNodes(Array.from(this.select.children), this.dropdown);
            this.updateSelectStyling();
            this.addDropdownOptionsEvents();
            this.addTriggerEvent();
            this.addDropdownEvents();
            if (this.autofocus && !this.disabled)
                this.trigger.click();
        }
        this.addSelectEvent();
        this.updateTriggerText();
        this.createSelectObserver();
        this.element.classList.add('initialized');
        this.initialized = true;
        this.settings.onInitialize();
    };
    Object.defineProperty(VVSelect.prototype, "value", {
        get: function () {
            var values = this.getSelectedOptions().map(function (element) { return element.value; });
            return (this.multiple) ? values : (values.length === 1) ? values[0] : '';
        },
        set: function (values) {
            if (typeof values === 'string')
                values = [values];
            this.options.forEach(function (option) { return option.selected = values.includes(option.value); });
            this.select.dispatchEvent(new Event('change'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VVSelect.prototype, "onInitialize", {
        set: function (fn) {
            this.settings.onInitialize = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VVSelect.prototype, "onChange", {
        set: function (fn) {
            this.settings.onChange = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VVSelect.prototype, "onOpen", {
        set: function (fn) {
            this.settings.onOpen = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VVSelect.prototype, "onClose", {
        set: function (fn) {
            this.settings.onClose = fn;
        },
        enumerable: true,
        configurable: true
    });
    VVSelect.prototype.open = function () {
        this.isOpen = true;
        this.element.classList.add(this.settings['openClass']);
        this.focusDropdownOptionClosestToIndex(0);
        this.addDocumentEvent();
        this.settings.onOpen();
    };
    VVSelect.prototype.close = function () {
        this.isOpen = false;
        this.element.classList.remove(this.settings['openClass']);
        this.removeDocumentEvent();
        this.settings.onClose();
    };
    VVSelect.prototype.createDropdownNode = function () {
        this.dropdown = document.createElement('div');
        if (this.settings['dropdownClass'])
            this.dropdown.classList.add(this.settings['dropdownClass']);
        this.element.appendChild(this.dropdown);
    };
    VVSelect.prototype.createDropdownOptionNodes = function (elements, parent) {
        var _this = this;
        elements.forEach(function (element) {
            if (element.tagName === 'OPTGROUP') {
                _this.createDropdownOptgroupNode(element, parent);
            }
            else if (element.tagName === 'OPTION') {
                _this.createDropdownOptionNode(element, parent);
            }
        });
    };
    VVSelect.prototype.createDropdownOptgroupNode = function (optgroup, parent) {
        var dropdownOptGroup = document.createElement('div');
        var dropdownOptGroupLabel = document.createElement('div');
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
    };
    VVSelect.prototype.createDropdownOptionNode = function (option, parent) {
        var dropdownOption = document.createElement('a');
        dropdownOption.tabIndex = 0;
        dropdownOption.href = 'javascript:;';
        if (this.settings['dropdownOptionClass'])
            dropdownOption.className = this.settings['dropdownOptionClass'];
        this.dropdownOptionsMap.set(dropdownOption, option);
        parent.appendChild(dropdownOption);
        this.dropdownOptions.push(dropdownOption);
        this.updateDropdownOption(dropdownOption);
        return dropdownOption;
    };
    VVSelect.prototype.removeDropdownOptionNode = function (option) {
        var dropdownOption = this.getDropdownOptionFromMap(option);
        this.dropdownOptionsMap.delete(dropdownOption);
        this.dropdownOptions = this.dropdownOptions.filter(function (el) { return el !== dropdownOption; });
        dropdownOption.remove();
    };
    VVSelect.prototype.removeDropdownOptGroupNode = function (optGroup) {
        var dropdownOptGroup = this.getDropdownOptGroupFromMap(optGroup);
        this.dropdownOptGroupsMap.delete(dropdownOptGroup);
        dropdownOptGroup.remove();
    };
    VVSelect.prototype.updateSelectStyling = function () {
        this.select.style.zIndex = '0';
        this.select.tabIndex = -1;
    };
    VVSelect.prototype.updateTriggerText = function () {
        var elements = this.getSelectedOptions();
        if (this.multiple) {
            var amount = String(elements.length);
            var format = (amount) ? 'multipleSelectedFormat' : 'multipleFormat';
            this.trigger.innerText = this.settings[format].replace(/%s/g, amount);
        }
        else {
            var text = (elements[0]) ? elements[0].innerHTML : '';
            var format = (text) ? 'singleSelectedFormat' : 'singleFormat';
            this.trigger.innerText = this.settings[format].replace(/%s/g, text);
        }
    };
    VVSelect.prototype.updateDropdownOptions = function () {
        var _this = this;
        this.dropdownOptions.forEach(function (dropdownOption) { return _this.updateDropdownOption(dropdownOption); });
    };
    VVSelect.prototype.updateDropdownOption = function (dropdownOption) {
        var option = this.dropdownOptionsMap.get(dropdownOption);
        var propsToDataset = ['disabled', 'selected', 'value'];
        propsToDataset.forEach(function (prop) {
            if (typeof option[prop] === 'boolean') {
                if (option[prop])
                    dropdownOption.dataset[prop] = '';
                else
                    delete dropdownOption.dataset[prop];
            }
            else {
                if (dropdownOption.dataset[prop] !== option[prop])
                    dropdownOption.dataset[prop] = option[prop];
            }
        });
        dropdownOption.tabIndex = (option.disabled) ? -1 : 0;
        if (dropdownOption.textContent !== option.textContent)
            dropdownOption.textContent = option.textContent;
    };
    VVSelect.prototype.updateDropdownOptGroup = function (dropdownOptGroup) {
    };
    VVSelect.prototype.addSelectEvent = function () {
        var _this = this;
        this.select.addEventListener('change', function () {
            _this.updateTriggerText();
            if (_this.useDropdown)
                _this.updateDropdownOptions();
            _this.settings.onChange();
        });
    };
    VVSelect.prototype.addDropdownOptionsEvents = function () {
        var _this = this;
        this.dropdownOptions.forEach(function (dropdownOption) { return _this.addDropdownOptionEvents(dropdownOption); });
    };
    VVSelect.prototype.addDropdownOptionEvents = function (dropdownOption) {
        var _this = this;
        dropdownOption.addEventListener('click', function (e) {
            e.preventDefault();
            var option = _this.dropdownOptionsMap.get(dropdownOption);
            if (option.disabled)
                return;
            if (_this.multiple) {
                option.selected = !option.selected;
                _this.select.dispatchEvent(new Event('change'));
            }
            if (!_this.multiple && !option.selected) {
                option.selected = true;
                _this.select.dispatchEvent(new Event('change'));
            }
            if (!_this.multiple)
                _this.close();
        });
        dropdownOption.addEventListener('mouseover', function () {
            if (_this.keydown)
                return;
            var option = _this.dropdownOptionsMap.get(dropdownOption);
            if (option.disabled)
                return;
            _this.focusDropdownOptionByIndex(_this.dropdownOptions.indexOf(dropdownOption));
        });
        dropdownOption.addEventListener('mousedown', function () {
            var option = _this.dropdownOptionsMap.get(dropdownOption);
            if (option.disabled)
                event.preventDefault();
        });
    };
    VVSelect.prototype.addTriggerEvent = function () {
        var _this = this;
        this.trigger.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (_this.disabled)
                return;
            (_this.isOpen) ? _this.close() : _this.open();
        });
    };
    VVSelect.prototype.addDropdownEvents = function () {
        var _this = this;
        this.dropdown.addEventListener('keydown', function (ev) {
            _this.keydown = true;
            if (ev.keyCode === 38) {
                ev.preventDefault();
                _this.focusDropdownOptionByDirection(FocusDirection.prev);
                return undefined;
            }
            if (ev.keyCode === 40) {
                ev.preventDefault();
                _this.focusDropdownOptionByDirection(FocusDirection.next);
                return undefined;
            }
            if (ev.keyCode === 8) {
                ev.preventDefault();
                _this.searchString = _this.searchString.slice(0, -1);
                _this.focusDropdownOptionBySearchedString('');
                return undefined;
            }
            var char = String.fromCharCode(ev.keyCode);
            if ((char && char.match(/^[a-z0-9 ]+$/i)) &&
                !(ev.ctrlKey || ev.altKey || ev.metaKey)) {
                ev.preventDefault();
                _this.focusDropdownOptionBySearchedString(char);
            }
        });
        this.dropdown.addEventListener('keyup', function (ev) {
            _this.keydown = false;
        });
    };
    VVSelect.prototype.addDocumentEvent = function () {
        document.addEventListener('click', this.handleDocumentClick);
    };
    VVSelect.prototype.removeDocumentEvent = function () {
        document.removeEventListener('click', this.handleDocumentClick);
    };
    VVSelect.prototype.handleDocumentClick = function (ev) {
        var target = ev.target;
        if (target !== this.element && !this.isDescendant(this.element, target))
            this.close();
    };
    VVSelect.prototype.focusDropdownOptionByIndex = function (index) {
        var _this = this;
        window.requestAnimationFrame(function () {
            var option = _this.dropdownOptionsMap.get(_this.dropdownOptions[index]);
            if (!option.disabled)
                _this.dropdownOptions[index].focus();
        });
    };
    VVSelect.prototype.focusDropdownOptionByDirection = function (focusDirection) {
        var _this = this;
        this.dropdownOptions.forEach(function (dropdownOption, index) {
            if (document.activeElement === dropdownOption) {
                var nextIndex = index + focusDirection;
                while (typeof _this.dropdownOptions[nextIndex] !== undefined) {
                    var nextOption = _this.dropdownOptionsMap.get(_this.dropdownOptions[nextIndex]);
                    if (nextOption.disabled) {
                        nextIndex += focusDirection;
                    }
                    else {
                        _this.focusDropdownOptionByIndex(nextIndex);
                        break;
                    }
                }
            }
        });
    };
    VVSelect.prototype.focusDropdownOptionClosestToIndex = function (index) {
        for (var i = 0; i <= this.dropdownOptions.length; i++) {
            var breakLoop = false;
            for (var j = 1; j >= -1; j -= 2) {
                var x = index + (i * j);
                if (!this.dropdownOptions[x])
                    continue;
                var option = this.dropdownOptionsMap.get(this.dropdownOptions[x]);
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
    };
    VVSelect.prototype.focusDropdownOptionBySearchedString = function (char) {
        var _this = this;
        var time = (new Date()).getTime();
        if (time > this.searchTime + this.searchTimeout)
            this.searchString = '';
        this.searchTime = time;
        this.searchString += char.toLowerCase();
        var matches = this.dropdownOptions.filter(function (option) { return option.innerHTML.toLowerCase().startsWith(_this.searchString); });
        if (matches.length === this.dropdownOptions.length) {
            this.focusDropdownOptionClosestToIndex(0);
        }
        else if (matches.length) {
            this.focusDropdownOptionClosestToIndex(this.dropdownOptions.indexOf(matches[0]));
        }
        else if (this.searchString.length === 1) {
            this.focusDropdownOptionByFirstLetter(this.searchString);
        }
    };
    VVSelect.prototype.focusDropdownOptionByFirstLetter = function (char) {
        var _this = this;
        var searchLetterIndex = parseInt(char, 36) - 9;
        var lowestDiff = 26;
        var closestDropdownOption = null;
        this.dropdownOptions.forEach(function (dropdownOption) {
            var option = _this.dropdownOptionsMap.get(dropdownOption);
            if (!option.disabled) {
                var firstLetter = dropdownOption.textContent.charAt(0).toLowerCase();
                var letterIndex = parseInt(firstLetter, 36) - 9;
                var diff = Math.abs(searchLetterIndex - letterIndex);
                if (diff <= lowestDiff) {
                    lowestDiff = diff;
                    closestDropdownOption = dropdownOption;
                }
            }
        });
        if (closestDropdownOption)
            this.focusDropdownOptionByIndex(this.dropdownOptions.indexOf(closestDropdownOption));
    };
    VVSelect.prototype.createSelectObserver = function () {
        var _this = this;
        this.selectObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList') {
                    Array.from(mutation.addedNodes).filter(function (node) { return node.nodeName === 'OPTION'; }).forEach(function (optionNode) {
                        var option = optionNode;
                        _this.options.push(option);
                        if (_this.useDropdown) {
                            var parent_1 = null;
                            if (option.parentNode.nodeName === 'SELECT') {
                                parent_1 = _this.dropdown;
                            }
                            else if (option.parentNode.nodeName === 'OPTGROUP') {
                                parent_1 = _this.getDropdownOptGroupFromMap(option.parentNode);
                            }
                            if (parent_1) {
                                var dropdownOption = _this.createDropdownOptionNode(option, parent_1);
                                _this.addDropdownOptionEvents(dropdownOption);
                            }
                        }
                    });
                    Array.from(mutation.removedNodes).filter(function (node) { return node.nodeName === 'OPTION'; }).forEach(function (optionNode) {
                        var option = optionNode;
                        var updatedValue = _this.value.includes(option.value);
                        _this.options = _this.options.filter(function (value) { return value !== option; });
                        if (_this.useDropdown)
                            _this.removeDropdownOptionNode(option);
                        if (updatedValue)
                            _this.select.dispatchEvent(new Event('change'));
                    });
                    Array.from(mutation.removedNodes).filter(function (node) { return node.nodeName === 'OPTGROUP'; }).forEach(function (optGroupNode) {
                        var optGroup = optGroupNode;
                        if (_this.useDropdown)
                            _this.removeDropdownOptGroupNode(optGroup);
                    });
                }
                if (mutation.type === 'attributes' && mutation.target.nodeName === 'OPTION') {
                    var option = mutation.target;
                    var dropdownOption = _this.getDropdownOptionFromMap(option);
                    _this.updateDropdownOption(dropdownOption);
                }
                if (mutation.type === 'attributes' && mutation.target.nodeName === 'OPTGROUP') {
                    var optGroup = mutation.target;
                    var dropdownOptGroup = _this.getDropdownOptGroupFromMap(optGroup);
                    _this.updateDropdownOptGroup(dropdownOptGroup);
                }
            });
        });
        var config = { attributes: true, childList: true, characterData: true, subtree: true };
        this.selectObserver.observe(this.select, config);
    };
    VVSelect.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent)
                return true;
            node = node.parentNode;
        }
        return false;
    };
    VVSelect.prototype.getDropdownOptionFromMap = function (option) {
        var filtered = Array.from(this.dropdownOptionsMap).filter(function (value) { return value[1] === option; });
        return (filtered.length === 1) ? filtered[0][0] : null;
    };
    VVSelect.prototype.getDropdownOptGroupFromMap = function (optGroup) {
        var filtered = Array.from(this.dropdownOptGroupsMap).filter(function (value) { return value[1] === optGroup; });
        return (filtered.length === 1) ? filtered[0][0] : null;
    };
    VVSelect.prototype.getSelectedOptions = function () {
        return this.options.filter(function (option) { return option.selected; });
    };
    return VVSelect;
}());
exports.default = VVSelect;


/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi ./development/src/js/index.ts ./development/src/scss/index.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tedgodyla/Documents/Projecten/Packages/select/development/src/js/index.ts */"./development/src/js/index.ts");
module.exports = __webpack_require__(/*! /Users/tedgodyla/Documents/Projecten/Packages/select/development/src/scss/index.scss */"./development/src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RldmVsb3BtZW50L3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZGQUFxQztBQUVyQyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU1RSxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFD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QUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFLTyxxQ0FBa0IsR0FBMUI7UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLFFBQVEsRUFBZixDQUFlLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgVlZTZWxlY3QgZnJvbSAnc2NyaXB0cy9pbmRleCc7XG5cbmNvbnN0IG11bHRpU2VsZWN0RWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI211bHRpU2VsZWN0Jyk7XG5jb25zdCBzaW5nbGVTZWxlY3RFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2luZ2xlU2VsZWN0Jyk7XG5cbmNvbnN0IG11bHRpU3RhdHVzRWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI211bHRpU3RhdHVzJyk7XG5jb25zdCBzaW5nbGVTdGF0dXNFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2luZ2xlU3RhdHVzJyk7XG5cbi8vIEFkZCBzdGF0dXMgY2hhbmdlIHRvIERPTVxuY29uc3QgYWRkU3RhdHVzQ2hhbmdlOiBGdW5jdGlvbiA9IChzdGF0dXM6IHN0cmluZywgc2VsZWN0LCBzdGF0dXNFbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBgJHtzdGF0dXN9IC0gJHtzZWxlY3QudmFsdWUuam9pbignLCcpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3N0YXR1c30gLSAke3NlbGVjdC52YWx1ZX1gO1xuICAgIH1cbiAgICBzdGF0dXNFbC5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG4vLyBUZXN0IG11bHRpIHNlbGVjdFxuY29uc3QgdGVzdE11bHRpU2VsZWN0OiBGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3QgPSBuZXcgVlZTZWxlY3QobXVsdGlTZWxlY3RFbCwge1xuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIGdlc2VsZWN0ZWVyZFwiLFxuICAgICAgICBtdWx0aXBsZUZvcm1hdDogXCJTZWxlY3RlZXIgb3B0aWVzXCIsXG4gICAgfSwgZmFsc2UpO1xuXG4gICAgc2VsZWN0Lm9uSW5pdGlhbGl6ZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnaW5pdGlhbGl6ZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNoYW5nZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2hhbmdlZCcsIHNlbGVjdCwgbXVsdGlTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uT3BlbiA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnb3BlbmVkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcbiAgICBzZWxlY3Qub25DbG9zZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2xvc2VkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcblxuICAgIHNlbGVjdC5pbml0KCk7XG5cbiAgICBzZWxlY3QudmFsdWUgPSBbJzInLCAnMyddO1xuXG4gICAgLy8gQWRkIG9wdGlvblxuICAgIGNvbnN0IGFkZE9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBhZGRPcHRpb24udmFsdWUgPSAnYWRkZWRfb3B0aW9uJztcbiAgICBhZGRPcHRpb24udGV4dENvbnRlbnQgPSAnYWRkZWQgb3B0aW9uJztcbiAgICBtdWx0aVNlbGVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ29wdGdyb3VwOmxhc3Qtb2YtdHlwZScpLmFwcGVuZENoaWxkKGFkZE9wdGlvbik7XG5cbiAgICAvLyBSZW1vdmUgb3B0aW9uXG4gICAgY29uc3QgcmVtb3ZlT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IG11bHRpU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgyKScpXG4gICAgcmVtb3ZlT3B0aW9uLnJlbW92ZSgpO1xufVxuXG4vLyBUZXN0IHNpbmdsZSBzZWxlY3RcbmNvbnN0IHRlc3RTaW5nbGVTZWxlY3Q6IEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IG5ldyBWVlNlbGVjdChzaW5nbGVTZWxlY3RFbCwge1xuICAgICAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogXCIlc1wiLFxuICAgICAgICBzaW5nbGVGb3JtYXQ6IFwiS2llcyBlZW4gb3B0aWVcIixcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBzZWxlY3Qub25Jbml0aWFsaXplID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdpbml0aWFsaXplZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNoYW5nZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2hhbmdlZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbk9wZW4gPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ29wZW5lZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNsb3NlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjbG9zZWQnLCBzZWxlY3QsIHNpbmdsZVN0YXR1c0VsKTtcblxuICAgIHNlbGVjdC5pbml0KCk7XG5cbiAgICBzZWxlY3QudmFsdWUgPSAnMyc7XG5cbiAgICAvLyBBZGQgb3B0aW9uXG4gICAgY29uc3QgYWRkT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGFkZE9wdGlvbi52YWx1ZSA9ICdhZGRlZF9vcHRpb24nO1xuICAgIGFkZE9wdGlvbi50ZXh0Q29udGVudCA9ICdhZGRlZCBvcHRpb24nO1xuICAgIGFkZE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc2luZ2xlU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuYXBwZW5kQ2hpbGQoYWRkT3B0aW9uKTtcblxuICAgIC8vIFJlbW92ZSBvcHRpb25cbiAgICBjb25zdCByZW1vdmVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gc2luZ2xlU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgyKScpXG4gICAgcmVtb3ZlT3B0aW9uLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgdXBkYXRlT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IHNpbmdsZVNlbGVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpudGgtY2hpbGQoMSknKTtcbiAgICB1cGRhdGVPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHVwZGF0ZU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICB1cGRhdGVPcHRpb24uaW5uZXJUZXh0ID0gJ3RleHQnO1xufVxuXG50ZXN0TXVsdGlTZWxlY3QoKTtcbnRlc3RTaW5nbGVTZWxlY3QoKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTW9iaWxlXG5tb2R1bGUuZXhwb3J0cy5pc01vYmlsZSA9IGlzTW9iaWxlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNNb2JpbGVcblxudmFyIG1vYmlsZVJFID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzWzQ2XTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaVxuXG52YXIgdGFibGV0UkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pXG5cbmZ1bmN0aW9uIGlzTW9iaWxlIChvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG4gIHZhciB1YSA9IG9wdHMudWFcbiAgaWYgKCF1YSAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gIGlmICh1YSAmJiB1YS5oZWFkZXJzICYmIHR5cGVvZiB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J10gPT09ICdzdHJpbmcnKSB7XG4gICAgdWEgPSB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J11cbiAgfVxuICBpZiAodHlwZW9mIHVhICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlXG5cbiAgcmV0dXJuIG9wdHMudGFibGV0ID8gdGFibGV0UkUudGVzdCh1YSkgOiBtb2JpbGVSRS50ZXN0KHVhKVxufVxuIiwiLyohXG4gKiBWVlNlbGVjdFxuICogKGMpIDIwMjAgVGVkIEdvZHlsYVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdpcy1tb2JpbGUnO1xuXG5pbnRlcmZhY2UgVlZTZWxlY3RTZXR0aW5ncyB7XG4gICAgZHJvcGRvd25DbGFzczogc3RyaW5nO1xuICAgIGRyb3Bkb3duT3B0aW9uQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdEdyb3VwQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWxDbGFzczogc3RyaW5nO1xuICAgIG9wZW5DbGFzczogc3RyaW5nO1xuICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IHN0cmluZztcbiAgICBtdWx0aXBsZUZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgc2luZ2xlRm9ybWF0OiBzdHJpbmc7XG4gICAgb25Jbml0aWFsaXplOiBGdW5jdGlvbjtcbiAgICBvbk9wZW46IEZ1bmN0aW9uO1xuICAgIG9uQ2xvc2U6IEZ1bmN0aW9uO1xuICAgIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbn1cblxuZW51bSBGb2N1c0RpcmVjdGlvbiB7XG4gICAgcHJldiA9IC0xLFxuICAgIG5leHQgPSAxLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWVlNlbGVjdCB7XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBWYXJpYWJsZXNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdHJpZ2dlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0T2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBBcnJheTxIVE1MT3B0aW9uRWxlbWVudD47XG4gICAgcHJpdmF0ZSBkcm9wZG93bjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkcm9wZG93bk9wdGlvbnM6IEFycmF5PEhUTUxBbmNob3JFbGVtZW50PiA9IG5ldyBBcnJheSgpO1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zTWFwOiBNYXA8SFRNTEFuY2hvckVsZW1lbnQsIEhUTUxPcHRpb25FbGVtZW50PiA9IG5ldyBNYXAoKVxuICAgIHByaXZhdGUgZHJvcGRvd25PcHRHcm91cHNNYXA6IE1hcDxIVE1MRGl2RWxlbWVudCwgSFRNTE9wdEdyb3VwRWxlbWVudD4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIHNlYXJjaFRpbWU6IG51bWJlciA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lb3V0OiBudW1iZXIgPSAyMDAwOyAvLyAyIHNlY29uZHNcbiAgICBwcml2YXRlIHNlYXJjaFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSB1c2VEcm9wZG93bjogYm9vbGVhbjtcbiAgICBwcml2YXRlIG11bHRpcGxlOiBib29sZWFuO1xuICAgIHByaXZhdGUgYXV0b2ZvY3VzOiBib29sZWFuO1xuICAgIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGtleWRvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNldHRpbmdzOiBWVlNlbGVjdFNldHRpbmdzO1xuICAgIFxuICAgIHJlYWRvbmx5IGRlZmF1bHRTZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncyA9IHtcbiAgICAgICAgZHJvcGRvd25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24nLFxuICAgICAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRpb24nLFxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duLW9wdGdyb3VwJyxcbiAgICAgICAgZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duLW9wdGdyb3VwLWxhYmVsJyxcbiAgICAgICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsXG4gICAgICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IFwiJXMgc2VsZWN0ZWRcIixcbiAgICAgICAgbXVsdGlwbGVGb3JtYXQ6IFwiU2VsZWN0IG9wdGlvbnNcIixcbiAgICAgICAgc2luZ2xlU2VsZWN0ZWRGb3JtYXQ6IFwiJXNcIixcbiAgICAgICAgc2luZ2xlRm9ybWF0OiBcIkNob29zZSBhbiBvcHRpb25cIixcbiAgICAgICAgb25Jbml0aWFsaXplOiAoKSA9PiB7fSxcbiAgICAgICAgb25PcGVuOiAoKSA9PiB7fSxcbiAgICAgICAgb25DbG9zZTogKCkgPT4ge30sXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBDb25zdHJ1Y3RvclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogb2JqZWN0ID0ge30sIGluaXRpYWxpemVPbkNvbnN0cnVjdDogYm9vbGVhbiA9IHRydWUpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdFNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXRba2V5XSkgc2V0dGluZ3Nba2V5XSA9IHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7Li4udGhpcy5kZWZhdWx0U2V0dGluZ3MsIC4uLnNldHRpbmdzIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcblxuICAgICAgICB0aGlzLnVzZURyb3Bkb3duID0gIWlzTW9iaWxlKHsgdGFibGV0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gdGhpcy5zZWxlY3QubXVsdGlwbGU7XG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gdGhpcy5zZWxlY3QuYXV0b2ZvY3VzO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5zZWxlY3QuZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGluaXRpYWxpemVPbkNvbnN0cnVjdClcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEluaXRpYWxpemVcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwdWJsaWMgaW5pdCgpIFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25Ob2RlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoQXJyYXkuZnJvbSh0aGlzLnNlbGVjdC5jaGlsZHJlbiksIHRoaXMuZHJvcGRvd24pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTdHlsaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uc0V2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5hZGRUcmlnZ2VyRXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25FdmVudHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzICYmICF0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlci5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRTZWxlY3RFdmVudCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUZXh0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2VsZWN0T2JzZXJ2ZXIoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25Jbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgR2V0dGVycyBhbmQgc2V0dGVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogR2V0IHZhbHVlLiBSZXR1cm5zIGFycmF5IG9uIG11bHRpcGxlIHNlbGVjdCBhbmQgYSBzdHJpbmcgb24gc2luZ2xlIHNlbGVjdFxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpOiBBcnJheTxzdHJpbmc+fHN0cmluZ1xuICAgIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKS5tYXAoZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMubXVsdGlwbGUpID8gdmFsdWVzIDogKHZhbHVlcy5sZW5ndGggPT09IDEgKSA/IHZhbHVlc1swXSA6ICcnO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IHZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlczogQXJyYXk8c3RyaW5nPnxzdHJpbmcpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBpbnRpYWxpemVkIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uSW5pdGlhbGl6ZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uSW5pdGlhbGl6ZSA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGNoYW5nZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkNoYW5nZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gb3BlbiBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbk9wZW4oZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbk9wZW4gPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBjbG9zZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkNsb3NlKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DbG9zZSA9IGZuO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE9wZW4vY2xvc2VcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIE9wZW4gZHJvcGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KDApO1xuXG4gICAgICAgIHRoaXMuYWRkRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDbG9zZSBkcm9wZG93biBhbmQgcmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DbG9zZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVXBkYXRlIERPTVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duTm9kZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSlcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZXMgYmFzZWQgb24gYWxsIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoZWxlbWVudHM6IGFueSwgcGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGdyb3VwTm9kZShlbGVtZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUoZWxlbWVudCwgcGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGdyb3VwTm9kZShvcHRncm91cDogSFRNTE9wdEdyb3VwRWxlbWVudCwgcGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxEaXZFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0R3JvdXAuY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cENsYXNzJ107XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzJ10pXG4gICAgICAgICAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWwuY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3MnXTtcblxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWwudGV4dENvbnRlbnQgPSBvcHRncm91cC5sYWJlbDtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwLnNldChkcm9wZG93bk9wdEdyb3VwLCBvcHRncm91cCk7XG4gICAgICAgIFxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0R3JvdXBMYWJlbCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wZG93bk9wdEdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlcyhBcnJheS5mcm9tKG9wdGdyb3VwLmNoaWxkcmVuKSwgZHJvcGRvd25PcHRHcm91cCk7XG5cbiAgICAgICAgcmV0dXJuIGRyb3Bkb3duT3B0R3JvdXA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCwgcGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxBbmNob3JFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgICAgICBkcm9wZG93bk9wdGlvbi50YWJJbmRleCA9IDA7XG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmhyZWYgPSAnamF2YXNjcmlwdDo7JztcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddKVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuc2V0KGRyb3Bkb3duT3B0aW9uLCBvcHRpb24pO1xuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wZG93bk9wdGlvbik7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLnB1c2goZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBkcm9wZG93bk9wdGlvbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBkcm9wZG93biBvcHRpb24gbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb246IEhUTUxPcHRpb25FbGVtZW50KTogdm9pZCBcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5nZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5kZWxldGUoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zID0gdGhpcy5kcm9wZG93bk9wdGlvbnMuZmlsdGVyKGVsID0+IGVsICE9PSBkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgZHJvcGRvd25PcHRpb24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0Z3JvdXAgbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRncm91cFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRHJvcGRvd25PcHRHcm91cE5vZGUob3B0R3JvdXA6IEhUTUxPcHRHcm91cEVsZW1lbnQpOiB2b2lkIFxuICAgIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cCA9IHRoaXMuZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0R3JvdXApO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRHcm91cHNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0R3JvdXApO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXAucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGVTZWxlY3RTdHlsaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RTdHlsaW5nKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgdGhpcy5zZWxlY3QudGFiSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSB0cmlnZ2VyIHRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJUZXh0KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gU3RyaW5nKGVsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAoYW1vdW50KSA/ICdtdWx0aXBsZVNlbGVjdGVkRm9ybWF0JyA6ICdtdWx0aXBsZUZvcm1hdCc7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIuaW5uZXJUZXh0ID0gdGhpcy5zZXR0aW5nc1tmb3JtYXRdLnJlcGxhY2UoLyVzL2csIGFtb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gKGVsZW1lbnRzWzBdKSA/IGVsZW1lbnRzWzBdLmlubmVySFRNTCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKHRleHQpID8gJ3NpbmdsZVNlbGVjdGVkRm9ybWF0JyA6ICdzaW5nbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGFsbCBkcm9wZG93biBvcHRpb24gbm9kZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9ucygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBnaXZlbiBkcm9wZG93biBvcHRpb24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgcHJvcHNUb0RhdGFzZXQgPSBbJ2Rpc2FibGVkJywgJ3NlbGVjdGVkJywgJ3ZhbHVlJ107XG4gICAgICAgIHByb3BzVG9EYXRhc2V0LmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbltwcm9wXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbltwcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSA9ICcnO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdICE9PSBvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSBvcHRpb25bcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnRhYkluZGV4ID0gKG9wdGlvbi5kaXNhYmxlZCkgPyAtMSA6IDA7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgICAgaWYgKGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ICE9PSBvcHRpb24udGV4dENvbnRlbnQpXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBnaXZlbiBkcm9wZG93biBvcHRpb24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRHJvcGRvd25PcHRHcm91cChkcm9wZG93bk9wdEdyb3VwOiBIVE1MRGl2RWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEV2ZW50IGxpc3RlbmVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogQWRkIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU2VsZWN0RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyVGV4dCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bilcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9ucygpO1xuXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIG9wdGlvbnMgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duT3B0aW9uc0V2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudHMoZHJvcGRvd25PcHRpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbkV2ZW50cyhkcm9wZG93bk9wdGlvbjogSFRNTEFuY2hvckVsZW1lbnQpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyAtIFNlbGVjdCBkcm9wZG93biBvcHRpb24gb24gY2xpY2tcbiAgICAgICAgLy8gLSBJZ25vcmUgZm9yIGRpc2FibGVkIG9wdGlvblxuICAgICAgICAvLyAtIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgIC8vIC0gQ2xvc2UgZHJvcGRvd24gYWZ0ZXJ3YXJkcyBmb3Igc2luZ2xlIHNlbGVjdFxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICFvcHRpb24uc2VsZWN0ZWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgIW9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBvbiBtb3VzZW92ZXJcbiAgICAgICAgLy8gLSBJZ25vcmUgZm9yIGRpc2FibGVkIG9wdGlvbiBvciB3aGVuIHR5cGluZ1xuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlkb3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YoZHJvcGRvd25PcHRpb24pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBQcmV2ZW50IGRyb3Bkb3duIG9wdGlvbiBmb2N1cyBvbiBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgdHJpZ2dlciBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkVHJpZ2dlckV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIC0gT3Blbi9jbG9zZSBkcm9wZG93blxuICAgICAgICAvLyAtIElnbm9yZSB3aGVuIHNlbGVjdCBpcyBkaXNhYmxlZFxuICAgICAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAodGhpcy5pc09wZW4pID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIGV2ZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd25FdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBGb2N1cyBuZXh0IGRyb3Bkb3duIG9wdGlvbiBvbiBrZXkgZG93blxuICAgICAgICAvLyAtIEZvY3VzIHByZXZpb3VzIGRyb3Bkb3duIG9wdGlvbiBvbiBrZXkgdXBcbiAgICAgICAgLy8gLSBGb2N1cyBkcm9wZG93biBvcHRpb24gdGhhdCBtYXRjaGVkIHNlYXJjaCBzdHJpbmcgd2hlbiB0eXBpbmdcbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXYgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlkb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDM4KSB7IC8vIHVwXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihGb2N1c0RpcmVjdGlvbi5wcmV2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ubmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gOCkgeyAvLyBiYWNrc3BhY2VcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nID0gdGhpcy5zZWFyY2hTdHJpbmcuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGNoYXIgJiYgY2hhci5tYXRjaCgvXlthLXowLTkgXSskL2kpKSAmJlxuICAgICAgICAgICAgICAgICEoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlTZWFyY2hlZFN0cmluZyhjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRG9jdW1lbnRFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURvY3VtZW50RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSGFuZGxlIGRvY3VtZW50IGNsaWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVEb2N1bWVudENsaWNrKGV2OiBFdmVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxlbWVudCwgdGFyZ2V0KSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBGb2N1cyBvcHRpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gYnkgaW5kZXhcbiAgICAgKiBJZ25vcmUgZGlzYWJsZWQgb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbaW5kZXhdKTtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgbmV4dCBkcm9wZG93biBvcHRpb24gYmFzZWQgb24gY3VycmVudCBmb2N1c2VkIG9wdGlvbiBhbmQgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICogU2tpcCBkaXNhYmxlZCBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihmb2N1c0RpcmVjdGlvbjogRm9jdXNEaXJlY3Rpb24pOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKChkcm9wZG93bk9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIGZvY3VzRGlyZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiB0aGlzLmRyb3Bkb3duT3B0aW9uc1tuZXh0SW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dE9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldCh0aGlzLmRyb3Bkb3duT3B0aW9uc1tuZXh0SW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0T3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXgrPSBmb2N1c0RpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBjbG9zZXN0IHRvIGluZGV4LiBGaXJzdCBjaGVja3MgY3VycmVudCBpbmRleCwgXG4gICAgICogdGhlbiBuZXh0IGluZGV4LCB0aGVuIHByZXYgaW5kZXgsIHRoZSAybmQgbmV4dCBpbmRleCwgdGhlbiAybmQgcHJldiBpbmRleCBldGMuXG4gICAgICogU2tpcHMgZGlzYWJsZWQgb3B0aW9uLlxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJyZWFrTG9vcCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA+PSAtMTsgai09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gaW5kZXggKyAoaSAqIGopO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duT3B0aW9uc1t4XSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW3hdKTtcblxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgoeCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh4ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJyZWFrTG9vcClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGJhc2VkIG9uIHNlYXJjaFxuICAgICAqIElmIGFsbCBtYXRjaCAoZW1wdHkgc3RyaW5nKTogRm9jdXMgY2xvc2VzdCBmb2N1c2FibGUgdG8gaW5kZXggMFxuICAgICAqIEVsc2UgaWYgbWF0Y2hlcyBmb3VuZDogRm9jdXMgZmlyc3QgbWF0Y2hcbiAgICAgKiBFbHNlIGlmIHNlYXJjaGluZyAxIGNoYXI6IEZvY3VzIG9wdGlvbiB0aGF0IGlzIGFscGhhYmV0aWNseSBjbG9zZXN0IHRvIHRoZSBjaGFyXG4gICAgICogRWxzZTogRG9uJ3QgY2hhbmdlIGZvY3VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlTZWFyY2hlZFN0cmluZyhjaGFyOiBzdHJpbmcpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0aW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAodGltZSA+IHRoaXMuc2VhcmNoVGltZSArIHRoaXMuc2VhcmNoVGltZW91dClcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nID0gJyc7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5zZWFyY2hTdHJpbmcrPSBjaGFyLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hTdHJpbmcpKTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IHRoaXMuZHJvcGRvd25PcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YobWF0Y2hlc1swXSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU3RyaW5nLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlGaXJzdExldHRlcih0aGlzLnNlYXJjaFN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiB3aGVyZSBmaXJzdCBsZXR0ZXIgaXMgYWxwaGFiZXRpY2FsbHkgY2xvc2VzdCB0byBnaXZlbiBjaGFyXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlGaXJzdExldHRlcihjaGFyOiBzdHJpbmcpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBzZWFyY2hMZXR0ZXJJbmRleCA9IHBhcnNlSW50KGNoYXIsIDM2KSAtIDk7XG4gICAgICAgIGxldCBsb3dlc3REaWZmID0gMjY7XG4gICAgICAgIGxldCBjbG9zZXN0RHJvcGRvd25PcHRpb24gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmZvckVhY2goZHJvcGRvd25PcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdExldHRlciA9IGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldHRlckluZGV4ID0gcGFyc2VJbnQoZmlyc3RMZXR0ZXIsIDM2KSAtIDk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHNlYXJjaExldHRlckluZGV4IC0gbGV0dGVySW5kZXgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkaWZmIDw9IGxvd2VzdERpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0RGlmZiA9IGRpZmY7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REcm9wZG93bk9wdGlvbiA9IGRyb3Bkb3duT3B0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNsb3Nlc3REcm9wZG93bk9wdGlvbilcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihjbG9zZXN0RHJvcGRvd25PcHRpb24pKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBPYnNlcnZlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBzZWxlY3Qgb2JzZXJ2ZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNlbGVjdE9ic2VydmVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYWRkZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUSU9OJykuZm9yRWFjaChvcHRpb25Ob2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbk5vZGUgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuZHJvcGRvd247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24ucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB0aGlzLmdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdGlvbi5wYXJlbnROb2RlIGFzIEhUTUxPcHRHcm91cEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb24sIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudHMoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHJlbW92ZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRJT04nKS5mb3JFYWNoKG9wdGlvbk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uTm9kZSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZSA9IHRoaXMudmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gb3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbiBhcyBIVE1MT3B0aW9uRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHJlbW92ZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpLmZvckVhY2gob3B0R3JvdXBOb2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdEdyb3VwID0gb3B0R3JvdXBOb2RlIGFzIEhUTUxPcHRHcm91cEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURyb3Bkb3duT3B0R3JvdXBOb2RlKG9wdEdyb3VwIGFzIEhUTUxPcHRpb25FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi50YXJnZXQubm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSB0aGlzLmdldERyb3Bkb3duT3B0aW9uRnJvbU1hcChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLnRhcmdldC5ub2RlTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRHcm91cCA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MT3B0R3JvdXBFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdEdyb3VwID0gdGhpcy5nZXREcm9wZG93bk9wdEdyb3VwRnJvbU1hcChvcHRHcm91cCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRHcm91cChkcm9wZG93bk9wdEdyb3VwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbGVjdE9ic2VydmVyLm9ic2VydmUodGhpcy5zZWxlY3QsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgSGVscGVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogSXMgZGVzY2VuZGFudCBoZWxwZXIgY2xhc3NcbiAgICAgKiBUaGlzIGNvdWxkIG1heWJlIGJlIG1vdmVkIHRvIGEgaGVscGVyIHBhY2thZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRGVzY2VuZGFudChwYXJlbnQ6IE5vZGUsIGNoaWxkOiBIVE1MRWxlbWVudCk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGxldCBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBkcm9wZG93biBvcHRpb24gZnJvbSBtYXAgYnkgZ2l2ZW4gdmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldERyb3Bkb3duT3B0aW9uRnJvbU1hcChvcHRpb246IEhUTUxPcHRpb25FbGVtZW50KTogbnVsbHxIVE1MQW5jaG9yRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd25PcHRpb25zTWFwKS5maWx0ZXIodmFsdWUgPT4gdmFsdWVbMV0gPT09IG9wdGlvbik7XG4gICAgICAgIHJldHVybiAoZmlsdGVyZWQubGVuZ3RoID09PSAxKSA/IGZpbHRlcmVkWzBdWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBkcm9wZG93biBvcHRpb24gZnJvbSBtYXAgYnkgZ2l2ZW4gdmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdEdyb3VwOiBIVE1MT3B0R3JvdXBFbGVtZW50KTogbnVsbHxIVE1MRGl2RWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd25PcHRHcm91cHNNYXApLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZVsxXSA9PT0gb3B0R3JvdXApO1xuICAgICAgICByZXR1cm4gKGZpbHRlcmVkLmxlbmd0aCA9PT0gMSkgPyBmaWx0ZXJlZFswXVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgc2VsZWN0ZWQgb3B0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPcHRpb25zKCk6IEFycmF5PEhUTUxPcHRpb25FbGVtZW50PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=