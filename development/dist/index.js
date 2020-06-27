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
var resetEl = document.querySelector('#reset');
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
    select.onReset = function () { return addStatusChange('reset', select, multiStatusEl); };
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
    select.onReset = function () { return addStatusChange('reset', select, singleStatusEl); };
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
resetEl.addEventListener('click', function (ev) {
    multiSelectEl.dispatchEvent(new Event('reset'));
    singleSelectEl.dispatchEvent(new Event('reset'));
});


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
            onReset: function () { },
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
        this.addResetEvent();
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
    Object.defineProperty(VVSelect.prototype, "onReset", {
        set: function (fn) {
            this.settings.onReset = fn;
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
    VVSelect.prototype.addResetEvent = function () {
        var _this = this;
        this.element.addEventListener('reset', function () {
            _this.options.forEach(function (option) {
                option.selected = !(option.value);
            });
            _this.settings.onReset();
            _this.select.dispatchEvent(new Event('change'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RldmVsb3BtZW50L3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZGQUFxQztBQUVyQyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU1RSxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFD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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBS08scUNBQWtCLEdBQTFCO1FBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxJQUFJLGFBQU0sQ0FBQyxRQUFRLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFZWU2VsZWN0IGZyb20gJ3NjcmlwdHMvaW5kZXgnO1xuXG5jb25zdCBtdWx0aVNlbGVjdEVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdWx0aVNlbGVjdCcpO1xuY29uc3Qgc2luZ2xlU2VsZWN0RWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpbmdsZVNlbGVjdCcpO1xuXG5jb25zdCBtdWx0aVN0YXR1c0VsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdWx0aVN0YXR1cycpO1xuY29uc3Qgc2luZ2xlU3RhdHVzRWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpbmdsZVN0YXR1cycpO1xuXG5jb25zdCByZXNldEVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldCcpO1xuXG4vLyBBZGQgc3RhdHVzIGNoYW5nZSB0byBET01cbmNvbnN0IGFkZFN0YXR1c0NoYW5nZTogRnVuY3Rpb24gPSAoc3RhdHVzOiBzdHJpbmcsIHNlbGVjdCwgc3RhdHVzRWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKHNlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7c3RhdHVzfSAtICR7c2VsZWN0LnZhbHVlLmpvaW4oJywnKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBgJHtzdGF0dXN9IC0gJHtzZWxlY3QudmFsdWV9YDtcbiAgICB9XG4gICAgc3RhdHVzRWwuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuLy8gVGVzdCBtdWx0aSBzZWxlY3RcbmNvbnN0IHRlc3RNdWx0aVNlbGVjdDogRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gbmV3IFZWU2VsZWN0KG11bHRpU2VsZWN0RWwsIHtcbiAgICAgICAgbXVsdGlwbGVTZWxlY3RlZEZvcm1hdDogXCIlcyBnZXNlbGVjdGVlcmRcIixcbiAgICAgICAgbXVsdGlwbGVGb3JtYXQ6IFwiU2VsZWN0ZWVyIG9wdGllc1wiLFxuICAgIH0sIGZhbHNlKTtcblxuICAgIHNlbGVjdC5vbkluaXRpYWxpemUgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2luaXRpYWxpemVkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcbiAgICBzZWxlY3Qub25DaGFuZ2UgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2NoYW5nZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vblJlc2V0ID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdyZXNldCcsIHNlbGVjdCwgbXVsdGlTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uT3BlbiA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnb3BlbmVkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcbiAgICBzZWxlY3Qub25DbG9zZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2xvc2VkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcblxuICAgIHNlbGVjdC5pbml0KCk7XG5cbiAgICBzZWxlY3QudmFsdWUgPSBbJzInLCAnMyddO1xuXG4gICAgLy8gQWRkIG9wdGlvblxuICAgIGNvbnN0IGFkZE9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBhZGRPcHRpb24udmFsdWUgPSAnYWRkZWRfb3B0aW9uJztcbiAgICBhZGRPcHRpb24udGV4dENvbnRlbnQgPSAnYWRkZWQgb3B0aW9uJztcbiAgICBtdWx0aVNlbGVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ29wdGdyb3VwOmxhc3Qtb2YtdHlwZScpLmFwcGVuZENoaWxkKGFkZE9wdGlvbik7XG5cbiAgICAvLyBSZW1vdmUgb3B0aW9uXG4gICAgY29uc3QgcmVtb3ZlT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IG11bHRpU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgyKScpXG4gICAgcmVtb3ZlT3B0aW9uLnJlbW92ZSgpO1xufVxuXG4vLyBUZXN0IHNpbmdsZSBzZWxlY3RcbmNvbnN0IHRlc3RTaW5nbGVTZWxlY3Q6IEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IG5ldyBWVlNlbGVjdChzaW5nbGVTZWxlY3RFbCwge1xuICAgICAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogXCIlc1wiLFxuICAgICAgICBzaW5nbGVGb3JtYXQ6IFwiS2llcyBlZW4gb3B0aWVcIixcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBzZWxlY3Qub25Jbml0aWFsaXplID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdpbml0aWFsaXplZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNoYW5nZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2hhbmdlZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vblJlc2V0ID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdyZXNldCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbk9wZW4gPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ29wZW5lZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNsb3NlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjbG9zZWQnLCBzZWxlY3QsIHNpbmdsZVN0YXR1c0VsKTtcblxuICAgIHNlbGVjdC5pbml0KCk7XG5cbiAgICBzZWxlY3QudmFsdWUgPSAnMyc7XG5cbiAgICAvLyBBZGQgb3B0aW9uXG4gICAgY29uc3QgYWRkT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGFkZE9wdGlvbi52YWx1ZSA9ICdhZGRlZF9vcHRpb24nO1xuICAgIGFkZE9wdGlvbi50ZXh0Q29udGVudCA9ICdhZGRlZCBvcHRpb24nO1xuICAgIGFkZE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgc2luZ2xlU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuYXBwZW5kQ2hpbGQoYWRkT3B0aW9uKTtcblxuICAgIC8vIFJlbW92ZSBvcHRpb25cbiAgICBjb25zdCByZW1vdmVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gc2luZ2xlU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgyKScpXG4gICAgcmVtb3ZlT3B0aW9uLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgdXBkYXRlT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IHNpbmdsZVNlbGVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpudGgtY2hpbGQoMSknKTtcbiAgICB1cGRhdGVPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHVwZGF0ZU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICB1cGRhdGVPcHRpb24uaW5uZXJUZXh0ID0gJ3RleHQnO1xufVxuXG50ZXN0TXVsdGlTZWxlY3QoKTtcbnRlc3RTaW5nbGVTZWxlY3QoKTtcblxucmVzZXRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgIG11bHRpU2VsZWN0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2V0JykpO1xuICAgIHNpbmdsZVNlbGVjdEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNldCcpKTtcbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlzTW9iaWxlXHJcbm1vZHVsZS5leHBvcnRzLmlzTW9iaWxlID0gaXNNb2JpbGVcclxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlXHJcblxyXG52YXIgbW9iaWxlUkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pXHJcblxyXG52YXIgdGFibGV0UkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pXHJcblxyXG5mdW5jdGlvbiBpc01vYmlsZSAob3B0cykge1xyXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XHJcbiAgdmFyIHVhID0gb3B0cy51YVxyXG4gIGlmICghdWEgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gIGlmICh1YSAmJiB1YS5oZWFkZXJzICYmIHR5cGVvZiB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICB1YSA9IHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxyXG4gIH1cclxuICBpZiAodHlwZW9mIHVhICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlXHJcblxyXG4gIHZhciByZXN1bHQgPSBvcHRzLnRhYmxldCA/IHRhYmxldFJFLnRlc3QodWEpIDogbW9iaWxlUkUudGVzdCh1YSlcclxuXHJcbiAgaWYgKFxyXG4gICAgIXJlc3VsdCAmJlxyXG4gICAgb3B0cy50YWJsZXQgJiZcclxuICAgIG9wdHMuZmVhdHVyZURldGVjdCAmJlxyXG4gICAgbmF2aWdhdG9yICYmXHJcbiAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxICYmXHJcbiAgICB1YS5pbmRleE9mKCdNYWNpbnRvc2gnKSAhPT0gLTEgJiZcclxuICAgIHVhLmluZGV4T2YoJ1NhZmFyaScpICE9PSAtMVxyXG4gICkge1xyXG4gICAgcmVzdWx0ID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcbiIsIi8qIVxuICogVlZTZWxlY3RcbiAqIChjKSAyMDIwIFRlZCBHb2R5bGFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnaXMtbW9iaWxlJztcblxuaW50ZXJmYWNlIFZWU2VsZWN0U2V0dGluZ3Mge1xuICAgIGRyb3Bkb3duQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3M6IHN0cmluZztcbiAgICBvcGVuQ2xhc3M6IHN0cmluZztcbiAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgbXVsdGlwbGVGb3JtYXQ6IHN0cmluZztcbiAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZUZvcm1hdDogc3RyaW5nO1xuICAgIG9uSW5pdGlhbGl6ZTogRnVuY3Rpb247XG4gICAgb25PcGVuOiBGdW5jdGlvbjtcbiAgICBvbkNsb3NlOiBGdW5jdGlvbjtcbiAgICBvbkNoYW5nZTogRnVuY3Rpb247XG4gICAgb25SZXNldDogRnVuY3Rpb247XG59XG5cbmVudW0gRm9jdXNEaXJlY3Rpb24ge1xuICAgIHByZXYgPSAtMSxcbiAgICBuZXh0ID0gMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVlZTZWxlY3Qge1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVmFyaWFibGVzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRyaWdnZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHNlbGVjdE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICAgIHByaXZhdGUgb3B0aW9uczogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZHJvcGRvd246IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zOiBBcnJheTxIVE1MQW5jaG9yRWxlbWVudD4gPSBuZXcgQXJyYXkoKTtcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0aW9uc01hcDogTWFwPEhUTUxBbmNob3JFbGVtZW50LCBIVE1MT3B0aW9uRWxlbWVudD4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0R3JvdXBzTWFwOiBNYXA8SFRNTERpdkVsZW1lbnQsIEhUTUxPcHRHcm91cEVsZW1lbnQ+ID0gbmV3IE1hcCgpXG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lOiBudW1iZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIHByaXZhdGUgc2VhcmNoVGltZW91dDogbnVtYmVyID0gMjAwMDsgLy8gMiBzZWNvbmRzXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgdXNlRHJvcGRvd246IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBrZXlkb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncztcbiAgICBcbiAgICByZWFkb25seSBkZWZhdWx0U2V0dGluZ3M6IFZWU2VsZWN0U2V0dGluZ3MgPSB7XG4gICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duJyxcbiAgICAgICAgZHJvcGRvd25PcHRpb25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24tb3B0aW9uJyxcbiAgICAgICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cCcsXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cC1sYWJlbCcsXG4gICAgICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLFxuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIHNlbGVjdGVkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdCBvcHRpb25zXCIsXG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJDaG9vc2UgYW4gb3B0aW9uXCIsXG4gICAgICAgIG9uSW5pdGlhbGl6ZTogKCkgPT4ge30sXG4gICAgICAgIG9uT3BlbjogKCkgPT4ge30sXG4gICAgICAgIG9uQ2xvc2U6ICgpID0+IHt9LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgICAgIG9uUmVzZXQ6ICgpID0+IHt9LFxuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIENvbnN0cnVjdG9yXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBvYmplY3QgPSB7fSwgaW5pdGlhbGl6ZU9uQ29uc3RydWN0OiBib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0U2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldKSBzZXR0aW5nc1trZXldID0gdGhpcy5lbGVtZW50LmRhdGFzZXRba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHsuLi50aGlzLmRlZmF1bHRTZXR0aW5ncywgLi4uc2V0dGluZ3MgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVEb2N1bWVudEZvY3VzaW4gPSB0aGlzLmhhbmRsZURvY3VtZW50Rm9jdXNpbi5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG5cbiAgICAgICAgdGhpcy51c2VEcm9wZG93biA9ICFpc01vYmlsZSh7IHRhYmxldDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IHRoaXMuc2VsZWN0Lm11bHRpcGxlO1xuICAgICAgICB0aGlzLmF1dG9mb2N1cyA9IHRoaXMuc2VsZWN0LmF1dG9mb2N1cztcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuc2VsZWN0LmRpc2FibGVkO1xuXG4gICAgICAgIGlmIChpbml0aWFsaXplT25Db25zdHJ1Y3QpXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBJbml0aWFsaXplXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHVibGljIGluaXQoKSBcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGVzKEFycmF5LmZyb20odGhpcy5zZWxlY3QuY2hpbGRyZW4pLCB0aGlzLmRyb3Bkb3duKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U3R5bGluZygpO1xuICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bk9wdGlvbnNFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVHJpZ2dlckV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bkV2ZW50cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvZm9jdXMgJiYgIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFJlc2V0RXZlbnQoKTtcbiAgICAgICAgdGhpcy5hZGRTZWxlY3RFdmVudCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUZXh0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2VsZWN0T2JzZXJ2ZXIoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25Jbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgR2V0dGVycyBhbmQgc2V0dGVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogR2V0IHZhbHVlLiBSZXR1cm5zIGFycmF5IG9uIG11bHRpcGxlIHNlbGVjdCBhbmQgYSBzdHJpbmcgb24gc2luZ2xlIHNlbGVjdFxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpOiBBcnJheTxzdHJpbmc+fHN0cmluZ1xuICAgIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKS5tYXAoZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMubXVsdGlwbGUpID8gdmFsdWVzIDogKHZhbHVlcy5sZW5ndGggPT09IDEgKSA/IHZhbHVlc1swXSA6ICcnO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IHZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlczogQXJyYXk8c3RyaW5nPnxzdHJpbmcpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBpbnRpYWxpemVkIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uSW5pdGlhbGl6ZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uSW5pdGlhbGl6ZSA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGNoYW5nZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkNoYW5nZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gcmVzZXQgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25SZXNldChmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uUmVzZXQgPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBvcGVuIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uT3BlbihmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uT3BlbiA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGNsb3NlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uQ2xvc2UoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNsb3NlID0gZm47XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgT3Blbi9jbG9zZVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogT3BlbiBkcm9wZG93blxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydvcGVuQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgoMCk7XG5cbiAgICAgICAgdGhpcy5hZGREb2N1bWVudEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDbG9zZSBkcm9wZG93biBhbmQgcmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DbG9zZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVXBkYXRlIERPTVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duTm9kZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSlcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZXMgYmFzZWQgb24gYWxsIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoZWxlbWVudHM6IGFueSwgcGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGdyb3VwTm9kZShlbGVtZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUoZWxlbWVudCwgcGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGdyb3VwTm9kZShvcHRncm91cDogSFRNTE9wdEdyb3VwRWxlbWVudCwgcGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxEaXZFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0R3JvdXAuY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cENsYXNzJ107XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzJ10pXG4gICAgICAgICAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWwuY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3MnXTtcblxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWwudGV4dENvbnRlbnQgPSBvcHRncm91cC5sYWJlbDtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwLnNldChkcm9wZG93bk9wdEdyb3VwLCBvcHRncm91cCk7XG4gICAgICAgIFxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0R3JvdXBMYWJlbCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wZG93bk9wdEdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlcyhBcnJheS5mcm9tKG9wdGdyb3VwLmNoaWxkcmVuKSwgZHJvcGRvd25PcHRHcm91cCk7XG5cbiAgICAgICAgcmV0dXJuIGRyb3Bkb3duT3B0R3JvdXA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCwgcGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxBbmNob3JFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgICAgICBkcm9wZG93bk9wdGlvbi50YWJJbmRleCA9IC0xO1xuICAgICAgICBkcm9wZG93bk9wdGlvbi5ocmVmID0gJ2phdmFzY3JpcHQ6Oyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0aW9uQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTmFtZSA9IHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0aW9uQ2xhc3MnXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLnNldChkcm9wZG93bk9wdGlvbiwgb3B0aW9uKTtcblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5wdXNoKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICByZXR1cm4gZHJvcGRvd25PcHRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IHZvaWQgXG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihlbCA9PiBlbCAhPT0gZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRyb3Bkb3duIG9wdGdyb3VwIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0Z3JvdXBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURyb3Bkb3duT3B0R3JvdXBOb2RlKG9wdEdyb3VwOiBIVE1MT3B0R3JvdXBFbGVtZW50KTogdm9pZCBcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXAgPSB0aGlzLmdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdEdyb3VwKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwLmRlbGV0ZShkcm9wZG93bk9wdEdyb3VwKTtcblxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlU2VsZWN0U3R5bGluZ1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U3R5bGluZygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5zdHlsZS56SW5kZXggPSAnMCc7XG4gICAgICAgIHRoaXMuc2VsZWN0LnRhYkluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgdHJpZ2dlciB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmlnZ2VyVGV4dCgpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IFN0cmluZyhlbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKGFtb3VudCkgPyAnbXVsdGlwbGVTZWxlY3RlZEZvcm1hdCcgOiAnbXVsdGlwbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCBhbW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IChlbGVtZW50c1swXSkgPyBlbGVtZW50c1swXS5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9ICh0ZXh0KSA/ICdzaW5nbGVTZWxlY3RlZEZvcm1hdCcgOiAnc2luZ2xlRm9ybWF0JztcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5pbm5lclRleHQgPSB0aGlzLnNldHRpbmdzW2Zvcm1hdF0ucmVwbGFjZSgvJXMvZywgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBhbGwgZHJvcGRvd24gb3B0aW9uIG5vZGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEcm9wZG93bk9wdGlvbnMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgZ2l2ZW4gZHJvcGRvd24gb3B0aW9uIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgLy8gVXBkYXRlIGRhdGEgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHByb3BzVG9EYXRhc2V0ID0gWydkaXNhYmxlZCcsICdzZWxlY3RlZCcsICd2YWx1ZSddO1xuICAgICAgICBwcm9wc1RvRGF0YXNldC5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25bcHJvcF0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSAnJztcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSAhPT0gb3B0aW9uW3Byb3BdKVxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdID0gb3B0aW9uW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgdGV4dFxuICAgICAgICBpZiAoZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQgIT09IG9wdGlvbi50ZXh0Q29udGVudClcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGdpdmVuIGRyb3Bkb3duIG9wdGlvbiBub2RlXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEcm9wZG93bk9wdEdyb3VwKGRyb3Bkb3duT3B0R3JvdXA6IEhUTUxEaXZFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgRXZlbnQgbGlzdGVuZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBBZGQgc2VsZWN0IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTZWxlY3RFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUZXh0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb25zKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub25DaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgcmVzZXQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFJlc2V0RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBVbnNlbGVjdCBvcHRpb25zXG4gICAgICAgIC8vIC0gVHJpZ2dlciBzZWxlY3QgY2hhbmdlIGV2ZW50XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gIShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub25SZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbnNFdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnRzKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gb3B0aW9ucyBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd25PcHRpb25FdmVudHMoZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBTZWxlY3QgZHJvcGRvd24gb3B0aW9uIG9uIGNsaWNrXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgLy8gLSBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAvLyAtIENsb3NlIGRyb3Bkb3duIGFmdGVyd2FyZHMgZm9yIHNpbmdsZSBzZWxlY3RcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAhb3B0aW9uLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlICYmICFvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBGb2N1cyBkcm9wZG93biBvcHRpb24gb24gbW91c2VvdmVyXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb24gb3Igd2hlbiB0eXBpbmdcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5ZG93bilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0gUHJldmVudCBkcm9wZG93biBvcHRpb24gZm9jdXMgb24gZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIHRyaWdnZXIgZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRUcmlnZ2VyRXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIC0gT3Blbi9jbG9zZSBkcm9wZG93biBvbiBtb3VzZWRvd25cbiAgICAgICAgLy8gLSBJZ25vcmUgd2hlbiBzZWxlY3QgaXMgZGlzYWJsZWRcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICh0aGlzLmlzT3BlbikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcblxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBPcGVuL2Nsb3NlIGRyb3Bkb3duIG9uIHVwIGFuZCBkb3duIGtleXMgd2hlbiB0cmlnZ2VyIGlzIGZvY3VzZWRcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldiA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgIT09IDM4ICYmIGV2LmtleUNvZGUgIT09IDQwKSB7IC8vIHVwIGFuZCBkb3duXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKHRoaXMuaXNPcGVuKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBldmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duRXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIC0gRm9jdXMgbmV4dCBkcm9wZG93biBvcHRpb24gb24gZG93biBrZXlcbiAgICAgICAgLy8gLSBGb2N1cyBwcmV2aW91cyBkcm9wZG93biBvcHRpb24gb24gdXAga2V5XG4gICAgICAgIC8vIC0gRm9jdXMgZHJvcGRvd24gb3B0aW9uIHRoYXQgbWF0Y2hlZCBzZWFyY2ggc3RyaW5nIHdoZW4gdHlwaW5nXG4gICAgICAgIC8vIC0gQ2xvc2UgZHJvcGRvd24gb24gZXNjIGtleSBkb3duXG4gICAgICAgIHRoaXMuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSAzOCkgeyAvLyB1cFxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ucHJldik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKEZvY3VzRGlyZWN0aW9uLm5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSAyNykgeyAvLyBlc2NcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gOCkgeyAvLyBiYWNrc3BhY2VcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nID0gdGhpcy5zZWFyY2hTdHJpbmcuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGNoYXIgJiYgY2hhci5tYXRjaCgvXlthLXowLTkgXSskL2kpKSAmJlxuICAgICAgICAgICAgICAgICEoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlTZWFyY2hlZFN0cmluZyhjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRG9jdW1lbnRFdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5oYW5kbGVEb2N1bWVudEZvY3VzaW4sIHRydWUpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEb2N1bWVudEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuaGFuZGxlRG9jdW1lbnRGb2N1c2luLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBkb2N1bWVudCBjbGlja1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRG9jdW1lbnRDbGljayhldjogRXZlbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICYmICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsZW1lbnQsIHRhcmdldCkpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgZG9jdW1lbnQgY2xpY2tcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZURvY3VtZW50Rm9jdXNpbihldjogRXZlbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbGVtZW50LCB0YXJnZXQpKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEZvY3VzIG9wdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBieSBpbmRleFxuICAgICAqIElnbm9yZSBkaXNhYmxlZCBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldCh0aGlzLmRyb3Bkb3duT3B0aW9uc1tpbmRleF0pO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc1tpbmRleF0uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBuZXh0IGRyb3Bkb3duIG9wdGlvbiBiYXNlZCBvbiBjdXJyZW50IGZvY3VzZWQgb3B0aW9uIGFuZCBnaXZlbiBkaXJlY3Rpb25cbiAgICAgKiBTa2lwIGRpc2FibGVkIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKGZvY3VzRGlyZWN0aW9uOiBGb2N1c0RpcmVjdGlvbik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmZvckVhY2goKGRyb3Bkb3duT3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRyb3Bkb3duT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgZm9jdXNEaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodHlwZW9mIHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0T3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCs9IGZvY3VzRGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGNsb3Nlc3QgdG8gaW5kZXguIEZpcnN0IGNoZWNrcyBjdXJyZW50IGluZGV4LCBcbiAgICAgKiB0aGVuIG5leHQgaW5kZXgsIHRoZW4gcHJldiBpbmRleCwgdGhlIDJuZCBuZXh0IGluZGV4LCB0aGVuIDJuZCBwcmV2IGluZGV4IGV0Yy5cbiAgICAgKiBTa2lwcyBkaXNhYmxlZCBvcHRpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnJlYWtMb29wID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqID49IC0xOyBqLT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBpbmRleCArIChpICogaik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25PcHRpb25zW3hdKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbeF0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnJlYWtMb29wKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gYmFzZWQgb24gc2VhcmNoXG4gICAgICogSWYgYWxsIG1hdGNoIChlbXB0eSBzdHJpbmcpOiBGb2N1cyBjbG9zZXN0IGZvY3VzYWJsZSB0byBpbmRleCAwXG4gICAgICogRWxzZSBpZiBtYXRjaGVzIGZvdW5kOiBGb2N1cyBmaXJzdCBtYXRjaFxuICAgICAqIEVsc2UgaWYgc2VhcmNoaW5nIDEgY2hhcjogRm9jdXMgb3B0aW9uIHRoYXQgaXMgYWxwaGFiZXRpY2x5IGNsb3Nlc3QgdG8gdGhlIGNoYXJcbiAgICAgKiBFbHNlOiBEb24ndCBjaGFuZ2UgZm9jdXNcbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeVNlYXJjaGVkU3RyaW5nKGNoYXI6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmICh0aW1lID4gdGhpcy5zZWFyY2hUaW1lICsgdGhpcy5zZWFyY2hUaW1lb3V0KVxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdHJpbmcgPSAnJztcblxuICAgICAgICB0aGlzLnNlYXJjaFRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmluZys9IGNoYXIudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5kcm9wZG93bk9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFN0cmluZykpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gdGhpcy5kcm9wZG93bk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihtYXRjaGVzWzBdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTdHJpbmcubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUZpcnN0TGV0dGVyKHRoaXMuc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIHdoZXJlIGZpcnN0IGxldHRlciBpcyBhbHBoYWJldGljYWxseSBjbG9zZXN0IHRvIGdpdmVuIGNoYXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeUZpcnN0TGV0dGVyKGNoYXI6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHNlYXJjaExldHRlckluZGV4ID0gcGFyc2VJbnQoY2hhciwgMzYpIC0gOTtcbiAgICAgICAgbGV0IGxvd2VzdERpZmYgPSAyNjtcbiAgICAgICAgbGV0IGNsb3Nlc3REcm9wZG93bk9wdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGV0dGVySW5kZXggPSBwYXJzZUludChmaXJzdExldHRlciwgMzYpIC0gOTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMoc2VhcmNoTGV0dGVySW5kZXggLSBsZXR0ZXJJbmRleCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPD0gbG93ZXN0RGlmZikge1xuICAgICAgICAgICAgICAgICAgICBsb3dlc3REaWZmID0gZGlmZjtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERyb3Bkb3duT3B0aW9uID0gZHJvcGRvd25PcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2xvc2VzdERyb3Bkb3duT3B0aW9uKVxuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKGNsb3Nlc3REcm9wZG93bk9wdGlvbikpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE9ic2VydmVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIHNlbGVjdCBvYnNlcnZlclxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU2VsZWN0T2JzZXJ2ZXIoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhZGRlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRJT04nKS5mb3JFYWNoKG9wdGlvbk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uTm9kZSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24ucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5kcm9wZG93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbi5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0aW9uLnBhcmVudE5vZGUgYXMgSFRNTE9wdEdyb3VwRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbiwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bk9wdGlvbkV2ZW50cyhkcm9wZG93bk9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgcmVtb3ZlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVElPTicpLmZvckVhY2gob3B0aW9uTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25Ob2RlIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlID0gdGhpcy52YWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBvcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uIGFzIEhUTUxPcHRpb25FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgcmVtb3ZlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVEdST1VQJykuZm9yRWFjaChvcHRHcm91cE5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBvcHRHcm91cE5vZGUgYXMgSFRNTE9wdEdyb3VwRWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRHJvcGRvd25PcHRHcm91cE5vZGUob3B0R3JvdXAgYXMgSFRNTE9wdGlvbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLnRhcmdldC5ub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbXV0YXRpb24udGFyZ2V0IGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24udGFyZ2V0Lm5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdEdyb3VwID0gbXV0YXRpb24udGFyZ2V0IGFzIEhUTUxPcHRHcm91cEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXAgPSB0aGlzLmdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdEdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdEdyb3VwKGRyb3Bkb3duT3B0R3JvdXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNlbGVjdCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBIZWxwZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBJcyBkZXNjZW5kYW50IGhlbHBlciBjbGFzc1xuICAgICAqIFRoaXMgY291bGQgbWF5YmUgYmUgbW92ZWQgdG8gYSBoZWxwZXIgcGFja2FnZVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogTm9kZSwgY2hpbGQ6IEhUTUxFbGVtZW50KTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PSBwYXJlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IGRyb3Bkb3duIG9wdGlvbiBmcm9tIG1hcCBieSBnaXZlbiB2YWx1ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQpOiBudWxsfEhUTUxBbmNob3JFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bk9wdGlvbnNNYXApLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZVsxXSA9PT0gb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIChmaWx0ZXJlZC5sZW5ndGggPT09IDEpID8gZmlsdGVyZWRbMF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IGRyb3Bkb3duIG9wdGlvbiBmcm9tIG1hcCBieSBnaXZlbiB2YWx1ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0R3JvdXA6IEhUTUxPcHRHcm91cEVsZW1lbnQpOiBudWxsfEhUTUxEaXZFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bk9wdEdyb3Vwc01hcCkuZmlsdGVyKHZhbHVlID0+IHZhbHVlWzFdID09PSBvcHRHcm91cCk7XG4gICAgICAgIHJldHVybiAoZmlsdGVyZWQubGVuZ3RoID09PSAxKSA/IGZpbHRlcmVkWzBdWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBzZWxlY3RlZCBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9wdGlvbnMoKTogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==