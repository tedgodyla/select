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

  var result = opts.tablet ? tabletRE.test(ua) : mobileRE.test(ua)

  if (
    !result &&
    opts.tablet &&
    opts.featureDetect &&
    navigator &&
    navigator.maxTouchPoints > 1 &&
    ua.indexOf('Macintosh') !== -1 &&
    ua.indexOf('Safari') !== -1
  ) {
    result = true
  }

  return result
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
        this.handleDocumentFocusin = this.handleDocumentFocusin.bind(this);
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
            this.addTriggerEvents();
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
        this.addDocumentEvents();
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
        dropdownOption.tabIndex = -1;
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
    VVSelect.prototype.addTriggerEvents = function () {
        var _this = this;
        this.trigger.addEventListener('click', function (ev) {
            if (_this.disabled)
                return undefined;
            (_this.isOpen) ? _this.close() : _this.open();
            ev.preventDefault();
        });
        this.trigger.addEventListener('keydown', function (ev) {
            if (_this.disabled)
                return undefined;
            if (ev.keyCode !== 38 && ev.keyCode !== 40) {
                return undefined;
            }
            (_this.isOpen) ? _this.close() : _this.open();
            ev.preventDefault();
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
            if (ev.keyCode === 27) {
                ev.preventDefault();
                _this.close();
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
    VVSelect.prototype.addDocumentEvents = function () {
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('focusin', this.handleDocumentFocusin, true);
    };
    VVSelect.prototype.removeDocumentEvent = function () {
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('focusin', this.handleDocumentFocusin, true);
    };
    VVSelect.prototype.handleDocumentClick = function (ev) {
        var target = ev.target;
        if (target !== this.element && !this.isDescendant(this.element, target))
            this.close();
    };
    VVSelect.prototype.handleDocumentFocusin = function (ev) {
        var target = document.activeElement;
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

__webpack_require__(/*! /Users/ted/Documents/Packages/select/development/src/js/index.ts */"./development/src/js/index.ts");
module.exports = __webpack_require__(/*! /Users/ted/Documents/Packages/select/development/src/scss/index.scss */"./development/src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RldmVsb3BtZW50L3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZGQUFxQztBQUVyQyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU1RSxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUc1RSxJQUFNLGVBQWUsR0FBYSxVQUFDLE1BQWMsRUFBRSxNQUFNLEVBQUUsUUFBcUI7SUFDNUUsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDakIsR0FBRyxDQUFDLFNBQVMsR0FBTSxNQUFNLFdBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7S0FDM0Q7U0FBTTtRQUNILEdBQUcsQ0FBQyxTQUFTLEdBQU0sTUFBTSxXQUFNLE1BQU0sQ0FBQyxLQUFPLENBQUM7S0FDakQ7SUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFHRCxJQUFNLGVBQWUsR0FBYTtJQUM5QixJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQVEsQ0FBQyxhQUFhLEVBQUU7UUFDdkMsc0JBQXNCLEVBQUUsaUJBQWlCO1FBQ3pDLGNBQWMsRUFBRSxrQkFBa0I7S0FDckMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVWLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBTSxzQkFBZSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLEVBQXJELENBQXFELENBQUM7SUFDbEYsTUFBTSxDQUFDLFFBQVEsR0FBRyxjQUFNLHNCQUFlLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBakQsQ0FBaUQsQ0FBQztJQUMxRSxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQU0sc0JBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUFoRCxDQUFnRCxDQUFDO0lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBTSxzQkFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLEVBQWhELENBQWdELENBQUM7SUFFeEUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUcxQixJQUFNLFNBQVMsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztJQUNqQyxTQUFTLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxhQUFhLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRzVFLElBQU0sWUFBWSxHQUFzQixhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQzFGLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMxQixDQUFDO0FBR0QsSUFBTSxnQkFBZ0IsR0FBYTtJQUMvQixJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQVEsQ0FBQyxjQUFjLEVBQUU7UUFDeEMsb0JBQW9CLEVBQUUsSUFBSTtRQUMxQixZQUFZLEVBQUUsZ0JBQWdCO0tBQ2pDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFVixNQUFNLENBQUMsWUFBWSxHQUFHLGNBQU0sc0JBQWUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDO0lBQ25GLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBTSxzQkFBZSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLEVBQWxELENBQWtELENBQUM7SUFDM0UsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFNLHNCQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsRUFBakQsQ0FBaUQsQ0FBQztJQUN4RSxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQU0sc0JBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDO0lBRXpFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVkLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBR25CLElBQU0sU0FBUyxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO0lBQ2pDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzFCLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRzlELElBQU0sWUFBWSxHQUFzQixjQUFjLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQzNGLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUV0QixJQUFNLFlBQVksR0FBc0IsY0FBYyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVGLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzdCLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLFlBQVksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3BDLENBQUM7QUFFRCxlQUFlLEVBQUUsQ0FBQztBQUNsQixnQkFBZ0IsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUNoRm5CLHlDOzs7Ozs7Ozs7Ozs7QUNBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7QUFFSCw0RkFBcUM7QUFrQnJDLElBQUssY0FHSjtBQUhELFdBQUssY0FBYztJQUNmLG9EQUFTO0lBQ1QsbURBQVE7QUFDWixDQUFDLEVBSEksY0FBYyxLQUFkLGNBQWMsUUFHbEI7QUFFRDtJQWdESSxrQkFBWSxPQUFvQixFQUFFLFFBQXFCLEVBQUUscUJBQXFDO1FBQTlGLGlCQXdCQztRQXhCaUMsd0NBQXFCO1FBQUUsb0VBQXFDO1FBcEN0RixvQkFBZSxHQUE2QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hELHVCQUFrQixHQUE4QyxJQUFJLEdBQUcsRUFBRTtRQUN6RSx5QkFBb0IsR0FBNkMsSUFBSSxHQUFHLEVBQUU7UUFDMUUsZUFBVSxHQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBSzFCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUk1QixvQkFBZSxHQUFxQjtZQUN6QyxhQUFhLEVBQUUsa0JBQWtCO1lBQ2pDLG1CQUFtQixFQUFFLHlCQUF5QjtZQUM5QyxxQkFBcUIsRUFBRSwyQkFBMkI7WUFDbEQsMEJBQTBCLEVBQUUsaUNBQWlDO1lBQzdELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLHNCQUFzQixFQUFFLGFBQWE7WUFDckMsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyxvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLFlBQVksRUFBRSxrQkFBa0I7WUFDaEMsWUFBWSxFQUFFLGNBQU8sQ0FBQztZQUN0QixNQUFNLEVBQUUsY0FBTyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxjQUFPLENBQUM7WUFDakIsUUFBUSxFQUFFLGNBQU8sQ0FBQztTQUNyQjtRQVFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFHO1lBQ3pDLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLHlCQUFPLElBQUksQ0FBQyxlQUFlLEdBQUssUUFBUSxDQUFFLENBQUM7UUFFeEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLG9CQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVyQyxJQUFJLHFCQUFxQjtZQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQU1NLHVCQUFJLEdBQVg7UUFFSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFekIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQVNELHNCQUFJLDJCQUFLO2FBQVQ7WUFFSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQU8sSUFBSSxjQUFPLENBQUMsS0FBSyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBRXZFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RSxDQUFDO2FBS0QsVUFBVSxNQUE0QjtZQUVsQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVE7Z0JBQzFCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXRCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO1lBRWhGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BYkE7SUFrQkQsc0JBQUksa0NBQVk7YUFBaEIsVUFBaUIsRUFBWTtZQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSw4QkFBUTthQUFaLFVBQWEsRUFBWTtZQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSw0QkFBTTthQUFWLFVBQVcsRUFBWTtZQUVuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSw2QkFBTzthQUFYLFVBQVksRUFBWTtZQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFTTSx1QkFBSSxHQUFYO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBS00sd0JBQUssR0FBWjtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUU1QixDQUFDO0lBU08scUNBQWtCLEdBQTFCO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFLTyw0Q0FBeUIsR0FBakMsVUFBa0MsUUFBYSxFQUFFLE1BQW1CO1FBQXBFLGlCQVNDO1FBUEcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztZQUNwQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUNoQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ3JDLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDbEQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLTyw2Q0FBMEIsR0FBbEMsVUFBbUMsUUFBNkIsRUFBRSxNQUFtQjtRQUVqRixJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQ3pFLElBQU0scUJBQXFCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQW1CLENBQUM7UUFFOUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQ3RDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFeEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDO1lBQzNDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFFbEYscUJBQXFCLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFbkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUxRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFaEYsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBS08sMkNBQXdCLEdBQWhDLFVBQWlDLE1BQXlCLEVBQUUsTUFBbUI7UUFFM0UsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQXNCLENBQUM7UUFFeEUsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixjQUFjLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUM7WUFDcEMsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUMsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUtPLDJDQUF3QixHQUFoQyxVQUFpQyxNQUF5QjtRQUV0RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFlBQUUsSUFBSSxTQUFFLEtBQUssY0FBYyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFFaEYsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFLTyw2Q0FBMEIsR0FBbEMsVUFBbUMsUUFBNkI7UUFFNUQsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRW5ELGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFLTyxzQ0FBbUIsR0FBM0I7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFLTyxvQ0FBaUIsR0FBekI7UUFFSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLElBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekU7YUFBTTtZQUNILElBQU0sSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4RCxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RTtJQUNMLENBQUM7SUFLTyx3Q0FBcUIsR0FBN0I7UUFBQSxpQkFHQztRQURHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLHdCQUFjLElBQUksWUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUtPLHVDQUFvQixHQUE1QixVQUE2QixjQUFpQztRQUUxRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRzNELElBQU0sY0FBYyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQUk7WUFDdkIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDWixjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7b0JBRWxDLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDSCxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDN0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUdILElBQUksY0FBYyxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUMsV0FBVztZQUNqRCxjQUFjLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDeEQsQ0FBQztJQUtPLHlDQUFzQixHQUE5QixVQUErQixnQkFBZ0M7SUFHL0QsQ0FBQztJQVNPLGlDQUFjLEdBQXRCO1FBQUEsaUJBVUM7UUFSRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtZQUNuQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUV6QixJQUFJLEtBQUksQ0FBQyxXQUFXO2dCQUNoQixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUVqQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtPLDJDQUF3QixHQUFoQztRQUFBLGlCQUdDO1FBREcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsd0JBQWMsSUFBSSxZQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBS08sMENBQXVCLEdBQS9CLFVBQWdDLGNBQWlDO1FBQWpFLGlCQW1EQztRQTdDRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUzRCxJQUFJLE1BQU0sQ0FBQyxRQUFRO2dCQUNmLE9BQU87WUFFWCxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBRW5DLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7WUFFRCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRO2dCQUNkLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUlILGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxLQUFJLENBQUMsT0FBTztnQkFDWixPQUFPO1lBRVgsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUzRCxJQUFJLE1BQU0sQ0FBQyxRQUFRO2dCQUNmLE9BQU87WUFFWCxLQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsQ0FBQztRQUdILGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUzRCxJQUFJLE1BQU0sQ0FBQyxRQUFRO2dCQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLTyxtQ0FBZ0IsR0FBeEI7UUFBQSxpQkEwQkM7UUF0QkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBRTtZQUNyQyxJQUFJLEtBQUksQ0FBQyxRQUFRO2dCQUNiLE9BQU8sU0FBUyxDQUFDO1lBRXJCLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUzQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFFO1lBQ3ZDLElBQUksS0FBSSxDQUFDLFFBQVE7Z0JBQ2IsT0FBTyxTQUFTLENBQUM7WUFFckIsSUFBSSxFQUFFLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDeEMsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFM0MsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUtPLG9DQUFpQixHQUF6QjtRQUFBLGlCQWdEQztRQTFDRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFFO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLElBQUksRUFBRSxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLDhCQUE4QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekQsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO2dCQUNuQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyw4QkFBOEIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxFQUFFLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3QyxJQUNJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUMxQztnQkFDRSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsRDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBRTtZQUN0QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLTyxvQ0FBaUIsR0FBekI7UUFFSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFLTyxzQ0FBbUIsR0FBM0I7UUFFSSxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFLTyxzQ0FBbUIsR0FBM0IsVUFBNEIsRUFBUztRQUVqQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBcUIsQ0FBQztRQUV4QyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztZQUNuRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUtPLHdDQUFxQixHQUE3QixVQUE4QixFQUFTO1FBRW5DLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUE0QixDQUFDO1FBRXJELElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1lBQ25FLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBVU8sNkNBQTBCLEdBQWxDLFVBQW1DLEtBQWE7UUFBaEQsaUJBUUM7UUFORyxNQUFNLENBQUMscUJBQXFCLENBQUM7WUFDekIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUNoQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU1PLGlEQUE4QixHQUF0QyxVQUF1QyxjQUE4QjtRQUFyRSxpQkFrQkM7UUFoQkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxjQUFjLEVBQUUsS0FBSztZQUMvQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEtBQUssY0FBYyxFQUFFO2dCQUMzQyxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUV2QyxPQUFPLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ3pELElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUVoRixJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ3JCLFNBQVMsSUFBRyxjQUFjLENBQUM7cUJBQzlCO3lCQUFNO3dCQUNILEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDM0MsTUFBTTtxQkFDVDtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBT08sb0RBQWlDLEdBQXpDLFVBQTBDLEtBQWE7UUFFbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFHLENBQUMsRUFBRTtnQkFDNUIsSUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLFNBQVM7Z0JBRWIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNsQixJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ2pCLE1BQU07aUJBQ1Q7Z0JBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDUCxNQUFNO2FBQ2I7WUFFRCxJQUFJLFNBQVM7Z0JBQ1QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQVNPLHNEQUFtQyxHQUEzQyxVQUE0QyxJQUFZO1FBQXhELGlCQW1CQztRQWpCRyxJQUFNLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXZDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUE1RCxDQUE0RCxDQUFDLENBQUM7UUFFcEgsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQ2hELElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7SUFDTCxDQUFDO0lBS08sbURBQWdDLEdBQXhDLFVBQXlDLElBQVk7UUFBckQsaUJBdUJDO1FBckJHLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLHdCQUFjO1lBQ3ZDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2RSxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQztnQkFFdkQsSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO29CQUNwQixVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQixxQkFBcUIsR0FBRyxjQUFjLENBQUM7aUJBQzFDO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUkscUJBQXFCO1lBQ3JCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQVNPLHVDQUFvQixHQUE1QjtRQUFBLGlCQW1FQztRQWpFRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZ0JBQWdCLENBQUMsbUJBQVM7WUFDaEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtnQkFDdEIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtvQkFFL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBVTt3QkFDekYsSUFBTSxNQUFNLEdBQUcsVUFBK0IsQ0FBQzt3QkFFL0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBRTFCLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTs0QkFDbEIsSUFBSSxRQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUVsQixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQ0FDekMsUUFBTSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7NkJBQzFCO2lDQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO2dDQUNsRCxRQUFNLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxVQUFpQyxDQUFDLENBQUM7NkJBQ3RGOzRCQUVELElBQUksUUFBTSxFQUFFO2dDQUNSLElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsUUFBTSxDQUFDLENBQUM7Z0NBQ3JFLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzs2QkFDaEQ7eUJBQ0o7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBR0gsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBVTt3QkFDM0YsSUFBTSxNQUFNLEdBQUcsVUFBK0IsQ0FBQzt3QkFDL0MsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUV2RCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQUssSUFBSSxZQUFLLEtBQUssTUFBTSxFQUFoQixDQUFnQixDQUFDLENBQUM7d0JBRTlELElBQUksS0FBSSxDQUFDLFdBQVc7NEJBQ2hCLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUEyQixDQUFDLENBQUM7d0JBRS9ELElBQUksWUFBWTs0QkFDWixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxDQUFDLENBQUMsQ0FBQztvQkFHSCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUMsT0FBTyxDQUFDLHNCQUFZO3dCQUMvRixJQUFNLFFBQVEsR0FBRyxZQUFtQyxDQUFDO3dCQUVyRCxJQUFJLEtBQUksQ0FBQyxXQUFXOzRCQUNoQixLQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBNkIsQ0FBQyxDQUFDO29CQUN2RSxDQUFDLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssWUFBWSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtvQkFDekUsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQTJCLENBQUM7b0JBQ3BELElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0QsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUM3QztnQkFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssWUFBWSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtvQkFDM0UsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQTZCLENBQUM7b0JBQ3hELElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNuRSxLQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDakQ7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFNLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFdkYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBVU8sK0JBQVksR0FBcEIsVUFBcUIsTUFBWSxFQUFFLEtBQWtCO1FBRWpELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDNUIsT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2pCLElBQUksSUFBSSxJQUFJLE1BQU07Z0JBQ2QsT0FBTyxJQUFJLENBQUM7WUFFaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDMUI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBS08sMkNBQXdCLEdBQWhDLFVBQWlDLE1BQXlCO1FBRXRELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDMUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFLTyw2Q0FBMEIsR0FBbEMsVUFBbUMsUUFBNkI7UUFFNUQsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUM5RixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0QsQ0FBQztJQUtPLHFDQUFrQixHQUExQjtRQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsUUFBUSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBWVlNlbGVjdCBmcm9tICdzY3JpcHRzL2luZGV4JztcblxuY29uc3QgbXVsdGlTZWxlY3RFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVsdGlTZWxlY3QnKTtcbmNvbnN0IHNpbmdsZVNlbGVjdEVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGVTZWxlY3QnKTtcblxuY29uc3QgbXVsdGlTdGF0dXNFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVsdGlTdGF0dXMnKTtcbmNvbnN0IHNpbmdsZVN0YXR1c0VsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGVTdGF0dXMnKTtcblxuLy8gQWRkIHN0YXR1cyBjaGFuZ2UgdG8gRE9NXG5jb25zdCBhZGRTdGF0dXNDaGFuZ2U6IEZ1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nLCBzZWxlY3QsIHN0YXR1c0VsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChzZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3N0YXR1c30gLSAke3NlbGVjdC52YWx1ZS5qb2luKCcsJyl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7c3RhdHVzfSAtICR7c2VsZWN0LnZhbHVlfWA7XG4gICAgfVxuICAgIHN0YXR1c0VsLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbi8vIFRlc3QgbXVsdGkgc2VsZWN0XG5jb25zdCB0ZXN0TXVsdGlTZWxlY3Q6IEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IG5ldyBWVlNlbGVjdChtdWx0aVNlbGVjdEVsLCB7XG4gICAgICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IFwiJXMgZ2VzZWxlY3RlZXJkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdGVlciBvcHRpZXNcIixcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBzZWxlY3Qub25Jbml0aWFsaXplID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdpbml0aWFsaXplZCcsIHNlbGVjdCwgbXVsdGlTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2hhbmdlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjaGFuZ2VkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcbiAgICBzZWxlY3Qub25PcGVuID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdvcGVuZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNsb3NlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjbG9zZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuXG4gICAgc2VsZWN0LmluaXQoKTtcblxuICAgIHNlbGVjdC52YWx1ZSA9IFsnMicsICczJ107XG5cbiAgICAvLyBBZGQgb3B0aW9uXG4gICAgY29uc3QgYWRkT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGFkZE9wdGlvbi52YWx1ZSA9ICdhZGRlZF9vcHRpb24nO1xuICAgIGFkZE9wdGlvbi50ZXh0Q29udGVudCA9ICdhZGRlZCBvcHRpb24nO1xuICAgIG11bHRpU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0Z3JvdXA6bGFzdC1vZi10eXBlJykuYXBwZW5kQ2hpbGQoYWRkT3B0aW9uKTtcblxuICAgIC8vIFJlbW92ZSBvcHRpb25cbiAgICBjb25zdCByZW1vdmVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gbXVsdGlTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdvcHRpb246bnRoLWNoaWxkKDIpJylcbiAgICByZW1vdmVPcHRpb24ucmVtb3ZlKCk7XG59XG5cbi8vIFRlc3Qgc2luZ2xlIHNlbGVjdFxuY29uc3QgdGVzdFNpbmdsZVNlbGVjdDogRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gbmV3IFZWU2VsZWN0KHNpbmdsZVNlbGVjdEVsLCB7XG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJLaWVzIGVlbiBvcHRpZVwiLFxuICAgIH0sIGZhbHNlKTtcblxuICAgIHNlbGVjdC5vbkluaXRpYWxpemUgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2luaXRpYWxpemVkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2hhbmdlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjaGFuZ2VkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uT3BlbiA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnb3BlbmVkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2xvc2UgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2Nsb3NlZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuXG4gICAgc2VsZWN0LmluaXQoKTtcblxuICAgIHNlbGVjdC52YWx1ZSA9ICczJztcblxuICAgIC8vIEFkZCBvcHRpb25cbiAgICBjb25zdCBhZGRPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgYWRkT3B0aW9uLnZhbHVlID0gJ2FkZGVkX29wdGlvbic7XG4gICAgYWRkT3B0aW9uLnRleHRDb250ZW50ID0gJ2FkZGVkIG9wdGlvbic7XG4gICAgYWRkT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzaW5nbGVTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5hcHBlbmRDaGlsZChhZGRPcHRpb24pO1xuXG4gICAgLy8gUmVtb3ZlIG9wdGlvblxuICAgIGNvbnN0IHJlbW92ZU9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBzaW5nbGVTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdvcHRpb246bnRoLWNoaWxkKDIpJylcbiAgICByZW1vdmVPcHRpb24ucmVtb3ZlKCk7XG5cbiAgICBjb25zdCB1cGRhdGVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gc2luZ2xlU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgxKScpO1xuICAgIHVwZGF0ZU9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgdXBkYXRlT3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIHVwZGF0ZU9wdGlvbi5pbm5lclRleHQgPSAndGV4dCc7XG59XG5cbnRlc3RNdWx0aVNlbGVjdCgpO1xudGVzdFNpbmdsZVNlbGVjdCgpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlzTW9iaWxlXHJcbm1vZHVsZS5leHBvcnRzLmlzTW9iaWxlID0gaXNNb2JpbGVcclxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlXHJcblxyXG52YXIgbW9iaWxlUkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pXHJcblxyXG52YXIgdGFibGV0UkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pXHJcblxyXG5mdW5jdGlvbiBpc01vYmlsZSAob3B0cykge1xyXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XHJcbiAgdmFyIHVhID0gb3B0cy51YVxyXG4gIGlmICghdWEgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gIGlmICh1YSAmJiB1YS5oZWFkZXJzICYmIHR5cGVvZiB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICB1YSA9IHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxyXG4gIH1cclxuICBpZiAodHlwZW9mIHVhICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlXHJcblxyXG4gIHZhciByZXN1bHQgPSBvcHRzLnRhYmxldCA/IHRhYmxldFJFLnRlc3QodWEpIDogbW9iaWxlUkUudGVzdCh1YSlcclxuXHJcbiAgaWYgKFxyXG4gICAgIXJlc3VsdCAmJlxyXG4gICAgb3B0cy50YWJsZXQgJiZcclxuICAgIG9wdHMuZmVhdHVyZURldGVjdCAmJlxyXG4gICAgbmF2aWdhdG9yICYmXHJcbiAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxICYmXHJcbiAgICB1YS5pbmRleE9mKCdNYWNpbnRvc2gnKSAhPT0gLTEgJiZcclxuICAgIHVhLmluZGV4T2YoJ1NhZmFyaScpICE9PSAtMVxyXG4gICkge1xyXG4gICAgcmVzdWx0ID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcbiIsIi8qIVxuICogVlZTZWxlY3RcbiAqIChjKSAyMDIwIFRlZCBHb2R5bGFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnaXMtbW9iaWxlJztcblxuaW50ZXJmYWNlIFZWU2VsZWN0U2V0dGluZ3Mge1xuICAgIGRyb3Bkb3duQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3M6IHN0cmluZztcbiAgICBvcGVuQ2xhc3M6IHN0cmluZztcbiAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgbXVsdGlwbGVGb3JtYXQ6IHN0cmluZztcbiAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZUZvcm1hdDogc3RyaW5nO1xuICAgIG9uSW5pdGlhbGl6ZTogRnVuY3Rpb247XG4gICAgb25PcGVuOiBGdW5jdGlvbjtcbiAgICBvbkNsb3NlOiBGdW5jdGlvbjtcbiAgICBvbkNoYW5nZTogRnVuY3Rpb247XG59XG5cbmVudW0gRm9jdXNEaXJlY3Rpb24ge1xuICAgIHByZXYgPSAtMSxcbiAgICBuZXh0ID0gMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVlZTZWxlY3Qge1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVmFyaWFibGVzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRyaWdnZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHNlbGVjdE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICAgIHByaXZhdGUgb3B0aW9uczogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZHJvcGRvd246IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zOiBBcnJheTxIVE1MQW5jaG9yRWxlbWVudD4gPSBuZXcgQXJyYXkoKTtcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0aW9uc01hcDogTWFwPEhUTUxBbmNob3JFbGVtZW50LCBIVE1MT3B0aW9uRWxlbWVudD4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0R3JvdXBzTWFwOiBNYXA8SFRNTERpdkVsZW1lbnQsIEhUTUxPcHRHcm91cEVsZW1lbnQ+ID0gbmV3IE1hcCgpXG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lOiBudW1iZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIHByaXZhdGUgc2VhcmNoVGltZW91dDogbnVtYmVyID0gMjAwMDsgLy8gMiBzZWNvbmRzXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgdXNlRHJvcGRvd246IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBrZXlkb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncztcbiAgICBcbiAgICByZWFkb25seSBkZWZhdWx0U2V0dGluZ3M6IFZWU2VsZWN0U2V0dGluZ3MgPSB7XG4gICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duJyxcbiAgICAgICAgZHJvcGRvd25PcHRpb25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24tb3B0aW9uJyxcbiAgICAgICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cCcsXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cC1sYWJlbCcsXG4gICAgICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLFxuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIHNlbGVjdGVkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdCBvcHRpb25zXCIsXG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJDaG9vc2UgYW4gb3B0aW9uXCIsXG4gICAgICAgIG9uSW5pdGlhbGl6ZTogKCkgPT4ge30sXG4gICAgICAgIG9uT3BlbjogKCkgPT4ge30sXG4gICAgICAgIG9uQ2xvc2U6ICgpID0+IHt9LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgQ29uc3RydWN0b3JcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IG9iamVjdCA9IHt9LCBpbml0aWFsaXplT25Db25zdHJ1Y3Q6IGJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pIHNldHRpbmdzW2tleV0gPSB0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzID0gey4uLnRoaXMuZGVmYXVsdFNldHRpbmdzLCAuLi5zZXR0aW5ncyB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZURvY3VtZW50Rm9jdXNpbiA9IHRoaXMuaGFuZGxlRG9jdW1lbnRGb2N1c2luLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcblxuICAgICAgICB0aGlzLnVzZURyb3Bkb3duID0gIWlzTW9iaWxlKHsgdGFibGV0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gdGhpcy5zZWxlY3QubXVsdGlwbGU7XG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gdGhpcy5zZWxlY3QuYXV0b2ZvY3VzO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5zZWxlY3QuZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGluaXRpYWxpemVPbkNvbnN0cnVjdClcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEluaXRpYWxpemVcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwdWJsaWMgaW5pdCgpIFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25Ob2RlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoQXJyYXkuZnJvbSh0aGlzLnNlbGVjdC5jaGlsZHJlbiksIHRoaXMuZHJvcGRvd24pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTdHlsaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uc0V2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5hZGRUcmlnZ2VyRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duRXZlbnRzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkU2VsZWN0RXZlbnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyVGV4dCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlbGVjdE9ic2VydmVyKCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uSW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEdldHRlcnMgYW5kIHNldHRlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEdldCB2YWx1ZS4gUmV0dXJucyBhcnJheSBvbiBtdWx0aXBsZSBzZWxlY3QgYW5kIGEgc3RyaW5nIG9uIHNpbmdsZSBzZWxlY3RcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogQXJyYXk8c3RyaW5nPnxzdHJpbmdcbiAgICB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm11bHRpcGxlKSA/IHZhbHVlcyA6ICh2YWx1ZXMubGVuZ3RoID09PSAxICkgPyB2YWx1ZXNbMF0gOiAnJztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCB2YWx1ZVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZXM6IEFycmF5PHN0cmluZz58c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gaW50aWFsaXplZCBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkluaXRpYWxpemUoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkluaXRpYWxpemUgPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBjaGFuZ2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25DaGFuZ2UoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIG9wZW4gZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25PcGVuKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gY2xvc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25DbG9zZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgPSBmbjtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBPcGVuL2Nsb3NlXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBPcGVuIGRyb3Bkb3duXG4gICAgICovXG4gICAgcHVibGljIG9wZW4oKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCgwKTtcblxuICAgICAgICB0aGlzLmFkZERvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbk9wZW4oKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENsb3NlIGRyb3Bkb3duIGFuZCByZW1vdmUgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzWydvcGVuQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50KCk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNsb3NlKCk7XG5cbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBVcGRhdGUgRE9NXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRHJvcGRvd25Ob2RlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25DbGFzcyddKVxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG9wdGlvbiBub2RlcyBiYXNlZCBvbiBhbGwgb3B0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlcyhlbGVtZW50czogYW55LCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0Z3JvdXBOb2RlKGVsZW1lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZShlbGVtZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0Z3JvdXBOb2RlKG9wdGdyb3VwOiBIVE1MT3B0R3JvdXBFbGVtZW50LCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTERpdkVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0R3JvdXBDbGFzcyddKVxuICAgICAgICAgICAgZHJvcGRvd25PcHRHcm91cC5jbGFzc05hbWUgPSB0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwQ2xhc3MnXTtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbC5jbGFzc05hbWUgPSB0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwTGFiZWxDbGFzcyddO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbC50ZXh0Q29udGVudCA9IG9wdGdyb3VwLmxhYmVsO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRHcm91cHNNYXAuc2V0KGRyb3Bkb3duT3B0R3JvdXAsIG9wdGdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXAuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRHcm91cExhYmVsKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0R3JvdXApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGVzKEFycmF5LmZyb20ob3B0Z3JvdXAuY2hpbGRyZW4pLCBkcm9wZG93bk9wdEdyb3VwKTtcblxuICAgICAgICByZXR1cm4gZHJvcGRvd25PcHRHcm91cDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb246IEhUTUxPcHRpb25FbGVtZW50LCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTEFuY2hvckVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmhyZWYgPSAnamF2YXNjcmlwdDo7JztcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddKVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuc2V0KGRyb3Bkb3duT3B0aW9uLCBvcHRpb24pO1xuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wZG93bk9wdGlvbik7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLnB1c2goZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBkcm9wZG93bk9wdGlvbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBkcm9wZG93biBvcHRpb24gbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb246IEhUTUxPcHRpb25FbGVtZW50KTogdm9pZCBcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5nZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5kZWxldGUoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zID0gdGhpcy5kcm9wZG93bk9wdGlvbnMuZmlsdGVyKGVsID0+IGVsICE9PSBkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgZHJvcGRvd25PcHRpb24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0Z3JvdXAgbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRncm91cFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRHJvcGRvd25PcHRHcm91cE5vZGUob3B0R3JvdXA6IEhUTUxPcHRHcm91cEVsZW1lbnQpOiB2b2lkIFxuICAgIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cCA9IHRoaXMuZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0R3JvdXApO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRHcm91cHNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0R3JvdXApO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXAucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGVTZWxlY3RTdHlsaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RTdHlsaW5nKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgdGhpcy5zZWxlY3QudGFiSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSB0cmlnZ2VyIHRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJUZXh0KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gU3RyaW5nKGVsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAoYW1vdW50KSA/ICdtdWx0aXBsZVNlbGVjdGVkRm9ybWF0JyA6ICdtdWx0aXBsZUZvcm1hdCc7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIuaW5uZXJUZXh0ID0gdGhpcy5zZXR0aW5nc1tmb3JtYXRdLnJlcGxhY2UoLyVzL2csIGFtb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gKGVsZW1lbnRzWzBdKSA/IGVsZW1lbnRzWzBdLmlubmVySFRNTCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKHRleHQpID8gJ3NpbmdsZVNlbGVjdGVkRm9ybWF0JyA6ICdzaW5nbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGFsbCBkcm9wZG93biBvcHRpb24gbm9kZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9ucygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBnaXZlbiBkcm9wZG93biBvcHRpb24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgcHJvcHNUb0RhdGFzZXQgPSBbJ2Rpc2FibGVkJywgJ3NlbGVjdGVkJywgJ3ZhbHVlJ107XG4gICAgICAgIHByb3BzVG9EYXRhc2V0LmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbltwcm9wXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbltwcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSA9ICcnO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdICE9PSBvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSBvcHRpb25bcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCAhPT0gb3B0aW9uLnRleHRDb250ZW50KVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgZ2l2ZW4gZHJvcGRvd24gb3B0aW9uIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0R3JvdXAoZHJvcGRvd25PcHRHcm91cDogSFRNTERpdkVsZW1lbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBFdmVudCBsaXN0ZW5lcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEFkZCBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNlbGVjdEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclRleHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbnMoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbnNFdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnRzKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gb3B0aW9ucyBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd25PcHRpb25FdmVudHMoZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBTZWxlY3QgZHJvcGRvd24gb3B0aW9uIG9uIGNsaWNrXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgLy8gLSBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAvLyAtIENsb3NlIGRyb3Bkb3duIGFmdGVyd2FyZHMgZm9yIHNpbmdsZSBzZWxlY3RcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAhb3B0aW9uLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlICYmICFvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBGb2N1cyBkcm9wZG93biBvcHRpb24gb24gbW91c2VvdmVyXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb24gb3Igd2hlbiB0eXBpbmdcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5ZG93bilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0gUHJldmVudCBkcm9wZG93biBvcHRpb24gZm9jdXMgb24gZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIHRyaWdnZXIgZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRUcmlnZ2VyRXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIC0gT3Blbi9jbG9zZSBkcm9wZG93biBvbiBtb3VzZWRvd25cbiAgICAgICAgLy8gLSBJZ25vcmUgd2hlbiBzZWxlY3QgaXMgZGlzYWJsZWRcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICh0aGlzLmlzT3BlbikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcblxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBPcGVuL2Nsb3NlIGRyb3Bkb3duIG9uIHVwIGFuZCBkb3duIGtleXMgd2hlbiB0cmlnZ2VyIGlzIGZvY3VzZWRcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldiA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgIT09IDM4ICYmIGV2LmtleUNvZGUgIT09IDQwKSB7IC8vIHVwIGFuZCBkb3duXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKHRoaXMuaXNPcGVuKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBldmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duRXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIC0gRm9jdXMgbmV4dCBkcm9wZG93biBvcHRpb24gb24gZG93biBrZXlcbiAgICAgICAgLy8gLSBGb2N1cyBwcmV2aW91cyBkcm9wZG93biBvcHRpb24gb24gdXAga2V5XG4gICAgICAgIC8vIC0gRm9jdXMgZHJvcGRvd24gb3B0aW9uIHRoYXQgbWF0Y2hlZCBzZWFyY2ggc3RyaW5nIHdoZW4gdHlwaW5nXG4gICAgICAgIC8vIC0gQ2xvc2UgZHJvcGRvd24gb24gZXNjIGtleSBkb3duXG4gICAgICAgIHRoaXMuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSAzOCkgeyAvLyB1cFxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ucHJldik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKEZvY3VzRGlyZWN0aW9uLm5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSAyNykgeyAvLyBlc2NcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gOCkgeyAvLyBiYWNrc3BhY2VcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nID0gdGhpcy5zZWFyY2hTdHJpbmcuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGNoYXIgJiYgY2hhci5tYXRjaCgvXlthLXowLTkgXSskL2kpKSAmJlxuICAgICAgICAgICAgICAgICEoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlTZWFyY2hlZFN0cmluZyhjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRG9jdW1lbnRFdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5oYW5kbGVEb2N1bWVudEZvY3VzaW4sIHRydWUpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEb2N1bWVudEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuaGFuZGxlRG9jdW1lbnRGb2N1c2luLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBkb2N1bWVudCBjbGlja1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRG9jdW1lbnRDbGljayhldjogRXZlbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICYmICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsZW1lbnQsIHRhcmdldCkpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgZG9jdW1lbnQgY2xpY2tcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZURvY3VtZW50Rm9jdXNpbihldjogRXZlbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbGVtZW50LCB0YXJnZXQpKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEZvY3VzIG9wdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBieSBpbmRleFxuICAgICAqIElnbm9yZSBkaXNhYmxlZCBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldCh0aGlzLmRyb3Bkb3duT3B0aW9uc1tpbmRleF0pO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc1tpbmRleF0uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBuZXh0IGRyb3Bkb3duIG9wdGlvbiBiYXNlZCBvbiBjdXJyZW50IGZvY3VzZWQgb3B0aW9uIGFuZCBnaXZlbiBkaXJlY3Rpb25cbiAgICAgKiBTa2lwIGRpc2FibGVkIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKGZvY3VzRGlyZWN0aW9uOiBGb2N1c0RpcmVjdGlvbik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmZvckVhY2goKGRyb3Bkb3duT3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRyb3Bkb3duT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgZm9jdXNEaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodHlwZW9mIHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0T3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCs9IGZvY3VzRGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGNsb3Nlc3QgdG8gaW5kZXguIEZpcnN0IGNoZWNrcyBjdXJyZW50IGluZGV4LCBcbiAgICAgKiB0aGVuIG5leHQgaW5kZXgsIHRoZW4gcHJldiBpbmRleCwgdGhlIDJuZCBuZXh0IGluZGV4LCB0aGVuIDJuZCBwcmV2IGluZGV4IGV0Yy5cbiAgICAgKiBTa2lwcyBkaXNhYmxlZCBvcHRpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnJlYWtMb29wID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqID49IC0xOyBqLT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBpbmRleCArIChpICogaik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25PcHRpb25zW3hdKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbeF0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnJlYWtMb29wKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gYmFzZWQgb24gc2VhcmNoXG4gICAgICogSWYgYWxsIG1hdGNoIChlbXB0eSBzdHJpbmcpOiBGb2N1cyBjbG9zZXN0IGZvY3VzYWJsZSB0byBpbmRleCAwXG4gICAgICogRWxzZSBpZiBtYXRjaGVzIGZvdW5kOiBGb2N1cyBmaXJzdCBtYXRjaFxuICAgICAqIEVsc2UgaWYgc2VhcmNoaW5nIDEgY2hhcjogRm9jdXMgb3B0aW9uIHRoYXQgaXMgYWxwaGFiZXRpY2x5IGNsb3Nlc3QgdG8gdGhlIGNoYXJcbiAgICAgKiBFbHNlOiBEb24ndCBjaGFuZ2UgZm9jdXNcbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeVNlYXJjaGVkU3RyaW5nKGNoYXI6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmICh0aW1lID4gdGhpcy5zZWFyY2hUaW1lICsgdGhpcy5zZWFyY2hUaW1lb3V0KVxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdHJpbmcgPSAnJztcblxuICAgICAgICB0aGlzLnNlYXJjaFRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmluZys9IGNoYXIudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5kcm9wZG93bk9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFN0cmluZykpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gdGhpcy5kcm9wZG93bk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihtYXRjaGVzWzBdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTdHJpbmcubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUZpcnN0TGV0dGVyKHRoaXMuc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIHdoZXJlIGZpcnN0IGxldHRlciBpcyBhbHBoYWJldGljYWxseSBjbG9zZXN0IHRvIGdpdmVuIGNoYXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeUZpcnN0TGV0dGVyKGNoYXI6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHNlYXJjaExldHRlckluZGV4ID0gcGFyc2VJbnQoY2hhciwgMzYpIC0gOTtcbiAgICAgICAgbGV0IGxvd2VzdERpZmYgPSAyNjtcbiAgICAgICAgbGV0IGNsb3Nlc3REcm9wZG93bk9wdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGV0dGVySW5kZXggPSBwYXJzZUludChmaXJzdExldHRlciwgMzYpIC0gOTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMoc2VhcmNoTGV0dGVySW5kZXggLSBsZXR0ZXJJbmRleCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPD0gbG93ZXN0RGlmZikge1xuICAgICAgICAgICAgICAgICAgICBsb3dlc3REaWZmID0gZGlmZjtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERyb3Bkb3duT3B0aW9uID0gZHJvcGRvd25PcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2xvc2VzdERyb3Bkb3duT3B0aW9uKVxuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKGNsb3Nlc3REcm9wZG93bk9wdGlvbikpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE9ic2VydmVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIHNlbGVjdCBvYnNlcnZlclxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU2VsZWN0T2JzZXJ2ZXIoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhZGRlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRJT04nKS5mb3JFYWNoKG9wdGlvbk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uTm9kZSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24ucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5kcm9wZG93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbi5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0aW9uLnBhcmVudE5vZGUgYXMgSFRNTE9wdEdyb3VwRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbiwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bk9wdGlvbkV2ZW50cyhkcm9wZG93bk9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgcmVtb3ZlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVElPTicpLmZvckVhY2gob3B0aW9uTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25Ob2RlIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlID0gdGhpcy52YWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBvcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uIGFzIEhUTUxPcHRpb25FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgcmVtb3ZlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVEdST1VQJykuZm9yRWFjaChvcHRHcm91cE5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBvcHRHcm91cE5vZGUgYXMgSFRNTE9wdEdyb3VwRWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRHJvcGRvd25PcHRHcm91cE5vZGUob3B0R3JvdXAgYXMgSFRNTE9wdGlvbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLnRhcmdldC5ub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbXV0YXRpb24udGFyZ2V0IGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24udGFyZ2V0Lm5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdEdyb3VwID0gbXV0YXRpb24udGFyZ2V0IGFzIEhUTUxPcHRHcm91cEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXAgPSB0aGlzLmdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdEdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdEdyb3VwKGRyb3Bkb3duT3B0R3JvdXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNlbGVjdCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBIZWxwZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBJcyBkZXNjZW5kYW50IGhlbHBlciBjbGFzc1xuICAgICAqIFRoaXMgY291bGQgbWF5YmUgYmUgbW92ZWQgdG8gYSBoZWxwZXIgcGFja2FnZVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogTm9kZSwgY2hpbGQ6IEhUTUxFbGVtZW50KTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PSBwYXJlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IGRyb3Bkb3duIG9wdGlvbiBmcm9tIG1hcCBieSBnaXZlbiB2YWx1ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQpOiBudWxsfEhUTUxBbmNob3JFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bk9wdGlvbnNNYXApLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZVsxXSA9PT0gb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIChmaWx0ZXJlZC5sZW5ndGggPT09IDEpID8gZmlsdGVyZWRbMF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IGRyb3Bkb3duIG9wdGlvbiBmcm9tIG1hcCBieSBnaXZlbiB2YWx1ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0R3JvdXA6IEhUTUxPcHRHcm91cEVsZW1lbnQpOiBudWxsfEhUTUxEaXZFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bk9wdEdyb3Vwc01hcCkuZmlsdGVyKHZhbHVlID0+IHZhbHVlWzFdID09PSBvcHRHcm91cCk7XG4gICAgICAgIHJldHVybiAoZmlsdGVyZWQubGVuZ3RoID09PSAxKSA/IGZpbHRlcmVkWzBdWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBzZWxlY3RlZCBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9wdGlvbnMoKTogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==