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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RldmVsb3BtZW50L3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZGQUFxQztBQUVyQyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU1RSxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFD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Q0FBQyxVQUFVLENBQUM7U0FDMUI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBS08sMkNBQXdCLEdBQWhDLFVBQWlDLE1BQXlCO1FBRXRELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDMUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFLTyw2Q0FBMEIsR0FBbEMsVUFBbUMsUUFBNkI7UUFFNUQsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUM5RixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0QsQ0FBQztJQUtPLHFDQUFrQixHQUExQjtRQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsUUFBUSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBWVlNlbGVjdCBmcm9tICdzY3JpcHRzL2luZGV4JztcblxuY29uc3QgbXVsdGlTZWxlY3RFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVsdGlTZWxlY3QnKTtcbmNvbnN0IHNpbmdsZVNlbGVjdEVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGVTZWxlY3QnKTtcblxuY29uc3QgbXVsdGlTdGF0dXNFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVsdGlTdGF0dXMnKTtcbmNvbnN0IHNpbmdsZVN0YXR1c0VsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGVTdGF0dXMnKTtcblxuY29uc3QgcmVzZXRFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQnKTtcblxuLy8gQWRkIHN0YXR1cyBjaGFuZ2UgdG8gRE9NXG5jb25zdCBhZGRTdGF0dXNDaGFuZ2U6IEZ1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nLCBzZWxlY3QsIHN0YXR1c0VsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChzZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3N0YXR1c30gLSAke3NlbGVjdC52YWx1ZS5qb2luKCcsJyl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7c3RhdHVzfSAtICR7c2VsZWN0LnZhbHVlfWA7XG4gICAgfVxuICAgIHN0YXR1c0VsLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbi8vIFRlc3QgbXVsdGkgc2VsZWN0XG5jb25zdCB0ZXN0TXVsdGlTZWxlY3Q6IEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IG5ldyBWVlNlbGVjdChtdWx0aVNlbGVjdEVsLCB7XG4gICAgICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IFwiJXMgZ2VzZWxlY3RlZXJkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdGVlciBvcHRpZXNcIixcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBzZWxlY3Qub25Jbml0aWFsaXplID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdpbml0aWFsaXplZCcsIHNlbGVjdCwgbXVsdGlTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2hhbmdlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjaGFuZ2VkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcbiAgICBzZWxlY3Qub25PcGVuID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdvcGVuZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNsb3NlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjbG9zZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuXG4gICAgc2VsZWN0LmluaXQoKTtcblxuICAgIHNlbGVjdC52YWx1ZSA9IFsnMicsICczJ107XG5cbiAgICAvLyBBZGQgb3B0aW9uXG4gICAgY29uc3QgYWRkT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGFkZE9wdGlvbi52YWx1ZSA9ICdhZGRlZF9vcHRpb24nO1xuICAgIGFkZE9wdGlvbi50ZXh0Q29udGVudCA9ICdhZGRlZCBvcHRpb24nO1xuICAgIG11bHRpU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0Z3JvdXA6bGFzdC1vZi10eXBlJykuYXBwZW5kQ2hpbGQoYWRkT3B0aW9uKTtcblxuICAgIC8vIFJlbW92ZSBvcHRpb25cbiAgICBjb25zdCByZW1vdmVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gbXVsdGlTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdvcHRpb246bnRoLWNoaWxkKDIpJylcbiAgICByZW1vdmVPcHRpb24ucmVtb3ZlKCk7XG59XG5cbi8vIFRlc3Qgc2luZ2xlIHNlbGVjdFxuY29uc3QgdGVzdFNpbmdsZVNlbGVjdDogRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gbmV3IFZWU2VsZWN0KHNpbmdsZVNlbGVjdEVsLCB7XG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJLaWVzIGVlbiBvcHRpZVwiLFxuICAgIH0sIGZhbHNlKTtcblxuICAgIHNlbGVjdC5vbkluaXRpYWxpemUgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2luaXRpYWxpemVkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2hhbmdlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjaGFuZ2VkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uT3BlbiA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnb3BlbmVkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2xvc2UgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2Nsb3NlZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuXG4gICAgc2VsZWN0LmluaXQoKTtcblxuICAgIHNlbGVjdC52YWx1ZSA9ICczJztcblxuICAgIC8vIEFkZCBvcHRpb25cbiAgICBjb25zdCBhZGRPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgYWRkT3B0aW9uLnZhbHVlID0gJ2FkZGVkX29wdGlvbic7XG4gICAgYWRkT3B0aW9uLnRleHRDb250ZW50ID0gJ2FkZGVkIG9wdGlvbic7XG4gICAgYWRkT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzaW5nbGVTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5hcHBlbmRDaGlsZChhZGRPcHRpb24pO1xuXG4gICAgLy8gUmVtb3ZlIG9wdGlvblxuICAgIGNvbnN0IHJlbW92ZU9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBzaW5nbGVTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdvcHRpb246bnRoLWNoaWxkKDIpJylcbiAgICByZW1vdmVPcHRpb24ucmVtb3ZlKCk7XG5cbiAgICBjb25zdCB1cGRhdGVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gc2luZ2xlU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgxKScpO1xuICAgIHVwZGF0ZU9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgdXBkYXRlT3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIHVwZGF0ZU9wdGlvbi5pbm5lclRleHQgPSAndGV4dCc7XG59XG5cbnRlc3RNdWx0aVNlbGVjdCgpO1xudGVzdFNpbmdsZVNlbGVjdCgpO1xuXG5yZXNldEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgbXVsdGlTZWxlY3RFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzZXQnKSk7XG4gICAgc2luZ2xlU2VsZWN0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2V0JykpO1xufSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXNNb2JpbGVcclxubW9kdWxlLmV4cG9ydHMuaXNNb2JpbGUgPSBpc01vYmlsZVxyXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNNb2JpbGVcclxuXHJcbnZhciBtb2JpbGVSRSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllc1s0Nl0wfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2lcclxuXHJcbnZhciB0YWJsZXRSRSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllc1s0Nl0wfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2lcclxuXHJcbmZ1bmN0aW9uIGlzTW9iaWxlIChvcHRzKSB7XHJcbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cclxuICB2YXIgdWEgPSBvcHRzLnVhXHJcbiAgaWYgKCF1YSAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgaWYgKHVhICYmIHVhLmhlYWRlcnMgJiYgdHlwZW9mIHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHVhID0gdWEuaGVhZGVyc1sndXNlci1hZ2VudCddXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgdWEgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgdmFyIHJlc3VsdCA9IG9wdHMudGFibGV0ID8gdGFibGV0UkUudGVzdCh1YSkgOiBtb2JpbGVSRS50ZXN0KHVhKVxyXG5cclxuICBpZiAoXHJcbiAgICAhcmVzdWx0ICYmXHJcbiAgICBvcHRzLnRhYmxldCAmJlxyXG4gICAgb3B0cy5mZWF0dXJlRGV0ZWN0ICYmXHJcbiAgICBuYXZpZ2F0b3IgJiZcclxuICAgIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEgJiZcclxuICAgIHVhLmluZGV4T2YoJ01hY2ludG9zaCcpICE9PSAtMSAmJlxyXG4gICAgdWEuaW5kZXhPZignU2FmYXJpJykgIT09IC0xXHJcbiAgKSB7XHJcbiAgICByZXN1bHQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuIiwiLyohXG4gKiBWVlNlbGVjdFxuICogKGMpIDIwMjAgVGVkIEdvZHlsYVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdpcy1tb2JpbGUnO1xuXG5pbnRlcmZhY2UgVlZTZWxlY3RTZXR0aW5ncyB7XG4gICAgZHJvcGRvd25DbGFzczogc3RyaW5nO1xuICAgIGRyb3Bkb3duT3B0aW9uQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdEdyb3VwQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWxDbGFzczogc3RyaW5nO1xuICAgIG9wZW5DbGFzczogc3RyaW5nO1xuICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IHN0cmluZztcbiAgICBtdWx0aXBsZUZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgc2luZ2xlRm9ybWF0OiBzdHJpbmc7XG4gICAgb25Jbml0aWFsaXplOiBGdW5jdGlvbjtcbiAgICBvbk9wZW46IEZ1bmN0aW9uO1xuICAgIG9uQ2xvc2U6IEZ1bmN0aW9uO1xuICAgIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbn1cblxuZW51bSBGb2N1c0RpcmVjdGlvbiB7XG4gICAgcHJldiA9IC0xLFxuICAgIG5leHQgPSAxLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWVlNlbGVjdCB7XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBWYXJpYWJsZXNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdHJpZ2dlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0T2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBBcnJheTxIVE1MT3B0aW9uRWxlbWVudD47XG4gICAgcHJpdmF0ZSBkcm9wZG93bjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkcm9wZG93bk9wdGlvbnM6IEFycmF5PEhUTUxBbmNob3JFbGVtZW50PiA9IG5ldyBBcnJheSgpO1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zTWFwOiBNYXA8SFRNTEFuY2hvckVsZW1lbnQsIEhUTUxPcHRpb25FbGVtZW50PiA9IG5ldyBNYXAoKVxuICAgIHByaXZhdGUgZHJvcGRvd25PcHRHcm91cHNNYXA6IE1hcDxIVE1MRGl2RWxlbWVudCwgSFRNTE9wdEdyb3VwRWxlbWVudD4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIHNlYXJjaFRpbWU6IG51bWJlciA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lb3V0OiBudW1iZXIgPSAyMDAwOyAvLyAyIHNlY29uZHNcbiAgICBwcml2YXRlIHNlYXJjaFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSB1c2VEcm9wZG93bjogYm9vbGVhbjtcbiAgICBwcml2YXRlIG11bHRpcGxlOiBib29sZWFuO1xuICAgIHByaXZhdGUgYXV0b2ZvY3VzOiBib29sZWFuO1xuICAgIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGtleWRvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNldHRpbmdzOiBWVlNlbGVjdFNldHRpbmdzO1xuICAgIFxuICAgIHJlYWRvbmx5IGRlZmF1bHRTZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncyA9IHtcbiAgICAgICAgZHJvcGRvd25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24nLFxuICAgICAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRpb24nLFxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duLW9wdGdyb3VwJyxcbiAgICAgICAgZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duLW9wdGdyb3VwLWxhYmVsJyxcbiAgICAgICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsXG4gICAgICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IFwiJXMgc2VsZWN0ZWRcIixcbiAgICAgICAgbXVsdGlwbGVGb3JtYXQ6IFwiU2VsZWN0IG9wdGlvbnNcIixcbiAgICAgICAgc2luZ2xlU2VsZWN0ZWRGb3JtYXQ6IFwiJXNcIixcbiAgICAgICAgc2luZ2xlRm9ybWF0OiBcIkNob29zZSBhbiBvcHRpb25cIixcbiAgICAgICAgb25Jbml0aWFsaXplOiAoKSA9PiB7fSxcbiAgICAgICAgb25PcGVuOiAoKSA9PiB7fSxcbiAgICAgICAgb25DbG9zZTogKCkgPT4ge30sXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBDb25zdHJ1Y3RvclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogb2JqZWN0ID0ge30sIGluaXRpYWxpemVPbkNvbnN0cnVjdDogYm9vbGVhbiA9IHRydWUpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdFNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXRba2V5XSkgc2V0dGluZ3Nba2V5XSA9IHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7Li4udGhpcy5kZWZhdWx0U2V0dGluZ3MsIC4uLnNldHRpbmdzIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRGb2N1c2luID0gdGhpcy5oYW5kbGVEb2N1bWVudEZvY3VzaW4uYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpO1xuXG4gICAgICAgIHRoaXMudXNlRHJvcGRvd24gPSAhaXNNb2JpbGUoeyB0YWJsZXQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSB0aGlzLnNlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgdGhpcy5hdXRvZm9jdXMgPSB0aGlzLnNlbGVjdC5hdXRvZm9jdXM7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLnNlbGVjdC5kaXNhYmxlZDtcblxuICAgICAgICBpZiAoaW5pdGlhbGl6ZU9uQ29uc3RydWN0KVxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgSW5pdGlhbGl6ZVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIHB1YmxpYyBpbml0KCkgXG4gICAge1xuICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlcyhBcnJheS5mcm9tKHRoaXMuc2VsZWN0LmNoaWxkcmVuKSwgdGhpcy5kcm9wZG93bik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFN0eWxpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25PcHRpb25zRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmFkZFRyaWdnZXJFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25FdmVudHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzICYmICF0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlci5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRSZXNldEV2ZW50KCk7XG4gICAgICAgIHRoaXMuYWRkU2VsZWN0RXZlbnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyVGV4dCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlbGVjdE9ic2VydmVyKCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uSW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEdldHRlcnMgYW5kIHNldHRlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEdldCB2YWx1ZS4gUmV0dXJucyBhcnJheSBvbiBtdWx0aXBsZSBzZWxlY3QgYW5kIGEgc3RyaW5nIG9uIHNpbmdsZSBzZWxlY3RcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogQXJyYXk8c3RyaW5nPnxzdHJpbmdcbiAgICB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm11bHRpcGxlKSA/IHZhbHVlcyA6ICh2YWx1ZXMubGVuZ3RoID09PSAxICkgPyB2YWx1ZXNbMF0gOiAnJztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCB2YWx1ZVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZXM6IEFycmF5PHN0cmluZz58c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gaW50aWFsaXplZCBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkluaXRpYWxpemUoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkluaXRpYWxpemUgPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBjaGFuZ2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25DaGFuZ2UoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIG9wZW4gZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25PcGVuKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gY2xvc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25DbG9zZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgPSBmbjtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBPcGVuL2Nsb3NlXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBPcGVuIGRyb3Bkb3duXG4gICAgICovXG4gICAgcHVibGljIG9wZW4oKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCgwKTtcblxuICAgICAgICB0aGlzLmFkZERvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbk9wZW4oKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENsb3NlIGRyb3Bkb3duIGFuZCByZW1vdmUgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzWydvcGVuQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50KCk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNsb3NlKCk7XG5cbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBVcGRhdGUgRE9NXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRHJvcGRvd25Ob2RlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25DbGFzcyddKVxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG9wdGlvbiBub2RlcyBiYXNlZCBvbiBhbGwgb3B0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlcyhlbGVtZW50czogYW55LCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0Z3JvdXBOb2RlKGVsZW1lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZShlbGVtZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0Z3JvdXBOb2RlKG9wdGdyb3VwOiBIVE1MT3B0R3JvdXBFbGVtZW50LCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTERpdkVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0R3JvdXBDbGFzcyddKVxuICAgICAgICAgICAgZHJvcGRvd25PcHRHcm91cC5jbGFzc05hbWUgPSB0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwQ2xhc3MnXTtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbC5jbGFzc05hbWUgPSB0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwTGFiZWxDbGFzcyddO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbC50ZXh0Q29udGVudCA9IG9wdGdyb3VwLmxhYmVsO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRHcm91cHNNYXAuc2V0KGRyb3Bkb3duT3B0R3JvdXAsIG9wdGdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXAuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRHcm91cExhYmVsKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0R3JvdXApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGVzKEFycmF5LmZyb20ob3B0Z3JvdXAuY2hpbGRyZW4pLCBkcm9wZG93bk9wdEdyb3VwKTtcblxuICAgICAgICByZXR1cm4gZHJvcGRvd25PcHRHcm91cDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb246IEhUTUxPcHRpb25FbGVtZW50LCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTEFuY2hvckVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmhyZWYgPSAnamF2YXNjcmlwdDo7JztcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddKVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuc2V0KGRyb3Bkb3duT3B0aW9uLCBvcHRpb24pO1xuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wZG93bk9wdGlvbik7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLnB1c2goZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBkcm9wZG93bk9wdGlvbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBkcm9wZG93biBvcHRpb24gbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb246IEhUTUxPcHRpb25FbGVtZW50KTogdm9pZCBcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5nZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5kZWxldGUoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zID0gdGhpcy5kcm9wZG93bk9wdGlvbnMuZmlsdGVyKGVsID0+IGVsICE9PSBkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgZHJvcGRvd25PcHRpb24ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0Z3JvdXAgbm9kZSBiYXNlZCBvbiBnaXZlbiBvcHRncm91cFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRHJvcGRvd25PcHRHcm91cE5vZGUob3B0R3JvdXA6IEhUTUxPcHRHcm91cEVsZW1lbnQpOiB2b2lkIFxuICAgIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cCA9IHRoaXMuZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0R3JvdXApO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRHcm91cHNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0R3JvdXApO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXAucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGVTZWxlY3RTdHlsaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RTdHlsaW5nKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgdGhpcy5zZWxlY3QudGFiSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSB0cmlnZ2VyIHRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJUZXh0KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gU3RyaW5nKGVsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAoYW1vdW50KSA/ICdtdWx0aXBsZVNlbGVjdGVkRm9ybWF0JyA6ICdtdWx0aXBsZUZvcm1hdCc7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIuaW5uZXJUZXh0ID0gdGhpcy5zZXR0aW5nc1tmb3JtYXRdLnJlcGxhY2UoLyVzL2csIGFtb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gKGVsZW1lbnRzWzBdKSA/IGVsZW1lbnRzWzBdLmlubmVySFRNTCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKHRleHQpID8gJ3NpbmdsZVNlbGVjdGVkRm9ybWF0JyA6ICdzaW5nbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGFsbCBkcm9wZG93biBvcHRpb24gbm9kZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9ucygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBnaXZlbiBkcm9wZG93biBvcHRpb24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgcHJvcHNUb0RhdGFzZXQgPSBbJ2Rpc2FibGVkJywgJ3NlbGVjdGVkJywgJ3ZhbHVlJ107XG4gICAgICAgIHByb3BzVG9EYXRhc2V0LmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbltwcm9wXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbltwcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSA9ICcnO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdICE9PSBvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSBvcHRpb25bcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCAhPT0gb3B0aW9uLnRleHRDb250ZW50KVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgZ2l2ZW4gZHJvcGRvd24gb3B0aW9uIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0R3JvdXAoZHJvcGRvd25PcHRHcm91cDogSFRNTERpdkVsZW1lbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBFdmVudCBsaXN0ZW5lcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEFkZCBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNlbGVjdEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclRleHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbnMoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCByZXNldCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkUmVzZXRFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyAtIFVuc2VsZWN0IG9wdGlvbnNcbiAgICAgICAgLy8gLSBUcmlnZ2VyIHNlbGVjdCBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAhKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gb3B0aW9ucyBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd25PcHRpb25zRXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmZvckVhY2goZHJvcGRvd25PcHRpb24gPT4gdGhpcy5hZGREcm9wZG93bk9wdGlvbkV2ZW50cyhkcm9wZG93bk9wdGlvbikpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIG9wdGlvbnMgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duT3B0aW9uRXZlbnRzKGRyb3Bkb3duT3B0aW9uOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIC0gU2VsZWN0IGRyb3Bkb3duIG9wdGlvbiBvbiBjbGlja1xuICAgICAgICAvLyAtIElnbm9yZSBmb3IgZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgIC8vIC0gVHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAgICAgICAgLy8gLSBDbG9zZSBkcm9wZG93biBhZnRlcndhcmRzIGZvciBzaW5nbGUgc2VsZWN0XG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gIW9wdGlvbi5zZWxlY3RlZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiAhb3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSlcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0gRm9jdXMgZHJvcGRvd24gb3B0aW9uIG9uIG1vdXNlb3ZlclxuICAgICAgICAvLyAtIElnbm9yZSBmb3IgZGlzYWJsZWQgb3B0aW9uIG9yIHdoZW4gdHlwaW5nXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWRvd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihkcm9wZG93bk9wdGlvbikpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtIFByZXZlbnQgZHJvcGRvd24gb3B0aW9uIGZvY3VzIG9uIGRpc2FibGVkIG9wdGlvblxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSBcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCB0cmlnZ2VyIGV2ZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkVHJpZ2dlckV2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyAtIE9wZW4vY2xvc2UgZHJvcGRvd24gb24gbW91c2Vkb3duXG4gICAgICAgIC8vIC0gSWdub3JlIHdoZW4gc2VsZWN0IGlzIGRpc2FibGVkXG4gICAgICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSBcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAodGhpcy5pc09wZW4pID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG5cbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0gT3Blbi9jbG9zZSBkcm9wZG93biBvbiB1cCBhbmQgZG93biBrZXlzIHdoZW4gdHJpZ2dlciBpcyBmb2N1c2VkXG4gICAgICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXYgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlICE9PSAzOCAmJiBldi5rZXlDb2RlICE9PSA0MCkgeyAvLyB1cCBhbmQgZG93blxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICh0aGlzLmlzT3BlbikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcblxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bkV2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyAtIEZvY3VzIG5leHQgZHJvcGRvd24gb3B0aW9uIG9uIGRvd24ga2V5XG4gICAgICAgIC8vIC0gRm9jdXMgcHJldmlvdXMgZHJvcGRvd24gb3B0aW9uIG9uIHVwIGtleVxuICAgICAgICAvLyAtIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiB0aGF0IG1hdGNoZWQgc2VhcmNoIHN0cmluZyB3aGVuIHR5cGluZ1xuICAgICAgICAvLyAtIENsb3NlIGRyb3Bkb3duIG9uIGVzYyBrZXkgZG93blxuICAgICAgICB0aGlzLmRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldiA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleWRvd24gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMzgpIHsgLy8gdXBcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKEZvY3VzRGlyZWN0aW9uLnByZXYpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihGb2N1c0RpcmVjdGlvbi5uZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMjcpIHsgLy8gZXNjXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDgpIHsgLy8gYmFja3NwYWNlXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0cmluZyA9IHRoaXMuc2VhcmNoU3RyaW5nLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeVNlYXJjaGVkU3RyaW5nKCcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldi5rZXlDb2RlKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChjaGFyICYmIGNoYXIubWF0Y2goL15bYS16MC05IF0rJC9pKSkgJiZcbiAgICAgICAgICAgICAgICAhKGV2LmN0cmxLZXkgfHwgZXYuYWx0S2V5IHx8IGV2Lm1ldGFLZXkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoY2hhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldiA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleWRvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERvY3VtZW50RXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuaGFuZGxlRG9jdW1lbnRGb2N1c2luLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRG9jdW1lbnRFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmhhbmRsZURvY3VtZW50Rm9jdXNpbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgZG9jdW1lbnQgY2xpY2tcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZURvY3VtZW50Q2xpY2soZXY6IEV2ZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbGVtZW50LCB0YXJnZXQpKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSGFuZGxlIGRvY3VtZW50IGNsaWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVEb2N1bWVudEZvY3VzaW4oZXY6IEV2ZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxlbWVudCwgdGFyZ2V0KSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBGb2N1cyBvcHRpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gYnkgaW5kZXhcbiAgICAgKiBJZ25vcmUgZGlzYWJsZWQgb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbaW5kZXhdKTtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgbmV4dCBkcm9wZG93biBvcHRpb24gYmFzZWQgb24gY3VycmVudCBmb2N1c2VkIG9wdGlvbiBhbmQgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICogU2tpcCBkaXNhYmxlZCBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihmb2N1c0RpcmVjdGlvbjogRm9jdXNEaXJlY3Rpb24pOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKChkcm9wZG93bk9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIGZvY3VzRGlyZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiB0aGlzLmRyb3Bkb3duT3B0aW9uc1tuZXh0SW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dE9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldCh0aGlzLmRyb3Bkb3duT3B0aW9uc1tuZXh0SW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0T3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXgrPSBmb2N1c0RpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBjbG9zZXN0IHRvIGluZGV4LiBGaXJzdCBjaGVja3MgY3VycmVudCBpbmRleCwgXG4gICAgICogdGhlbiBuZXh0IGluZGV4LCB0aGVuIHByZXYgaW5kZXgsIHRoZSAybmQgbmV4dCBpbmRleCwgdGhlbiAybmQgcHJldiBpbmRleCBldGMuXG4gICAgICogU2tpcHMgZGlzYWJsZWQgb3B0aW9uLlxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJyZWFrTG9vcCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA+PSAtMTsgai09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gaW5kZXggKyAoaSAqIGopO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duT3B0aW9uc1t4XSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW3hdKTtcblxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgoeCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh4ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJyZWFrTG9vcClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGJhc2VkIG9uIHNlYXJjaFxuICAgICAqIElmIGFsbCBtYXRjaCAoZW1wdHkgc3RyaW5nKTogRm9jdXMgY2xvc2VzdCBmb2N1c2FibGUgdG8gaW5kZXggMFxuICAgICAqIEVsc2UgaWYgbWF0Y2hlcyBmb3VuZDogRm9jdXMgZmlyc3QgbWF0Y2hcbiAgICAgKiBFbHNlIGlmIHNlYXJjaGluZyAxIGNoYXI6IEZvY3VzIG9wdGlvbiB0aGF0IGlzIGFscGhhYmV0aWNseSBjbG9zZXN0IHRvIHRoZSBjaGFyXG4gICAgICogRWxzZTogRG9uJ3QgY2hhbmdlIGZvY3VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlTZWFyY2hlZFN0cmluZyhjaGFyOiBzdHJpbmcpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0aW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAodGltZSA+IHRoaXMuc2VhcmNoVGltZSArIHRoaXMuc2VhcmNoVGltZW91dClcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nID0gJyc7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5zZWFyY2hTdHJpbmcrPSBjaGFyLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hTdHJpbmcpKTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IHRoaXMuZHJvcGRvd25PcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YobWF0Y2hlc1swXSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU3RyaW5nLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlGaXJzdExldHRlcih0aGlzLnNlYXJjaFN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiB3aGVyZSBmaXJzdCBsZXR0ZXIgaXMgYWxwaGFiZXRpY2FsbHkgY2xvc2VzdCB0byBnaXZlbiBjaGFyXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlGaXJzdExldHRlcihjaGFyOiBzdHJpbmcpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBzZWFyY2hMZXR0ZXJJbmRleCA9IHBhcnNlSW50KGNoYXIsIDM2KSAtIDk7XG4gICAgICAgIGxldCBsb3dlc3REaWZmID0gMjY7XG4gICAgICAgIGxldCBjbG9zZXN0RHJvcGRvd25PcHRpb24gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmZvckVhY2goZHJvcGRvd25PcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdExldHRlciA9IGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldHRlckluZGV4ID0gcGFyc2VJbnQoZmlyc3RMZXR0ZXIsIDM2KSAtIDk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHNlYXJjaExldHRlckluZGV4IC0gbGV0dGVySW5kZXgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkaWZmIDw9IGxvd2VzdERpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0RGlmZiA9IGRpZmY7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REcm9wZG93bk9wdGlvbiA9IGRyb3Bkb3duT3B0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNsb3Nlc3REcm9wZG93bk9wdGlvbilcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihjbG9zZXN0RHJvcGRvd25PcHRpb24pKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBPYnNlcnZlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBzZWxlY3Qgb2JzZXJ2ZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNlbGVjdE9ic2VydmVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYWRkZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUSU9OJykuZm9yRWFjaChvcHRpb25Ob2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbk5vZGUgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHRoaXMuZHJvcGRvd247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24ucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB0aGlzLmdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdGlvbi5wYXJlbnROb2RlIGFzIEhUTUxPcHRHcm91cEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb24sIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudHMoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHJlbW92ZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRJT04nKS5mb3JFYWNoKG9wdGlvbk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uTm9kZSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZSA9IHRoaXMudmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gb3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbiBhcyBIVE1MT3B0aW9uRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHJlbW92ZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpLmZvckVhY2gob3B0R3JvdXBOb2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdEdyb3VwID0gb3B0R3JvdXBOb2RlIGFzIEhUTUxPcHRHcm91cEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURyb3Bkb3duT3B0R3JvdXBOb2RlKG9wdEdyb3VwIGFzIEhUTUxPcHRpb25FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi50YXJnZXQubm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSB0aGlzLmdldERyb3Bkb3duT3B0aW9uRnJvbU1hcChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLnRhcmdldC5ub2RlTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRHcm91cCA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MT3B0R3JvdXBFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdEdyb3VwID0gdGhpcy5nZXREcm9wZG93bk9wdEdyb3VwRnJvbU1hcChvcHRHcm91cCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRHcm91cChkcm9wZG93bk9wdEdyb3VwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbGVjdE9ic2VydmVyLm9ic2VydmUodGhpcy5zZWxlY3QsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgSGVscGVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogSXMgZGVzY2VuZGFudCBoZWxwZXIgY2xhc3NcbiAgICAgKiBUaGlzIGNvdWxkIG1heWJlIGJlIG1vdmVkIHRvIGEgaGVscGVyIHBhY2thZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRGVzY2VuZGFudChwYXJlbnQ6IE5vZGUsIGNoaWxkOiBIVE1MRWxlbWVudCk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGxldCBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBkcm9wZG93biBvcHRpb24gZnJvbSBtYXAgYnkgZ2l2ZW4gdmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldERyb3Bkb3duT3B0aW9uRnJvbU1hcChvcHRpb246IEhUTUxPcHRpb25FbGVtZW50KTogbnVsbHxIVE1MQW5jaG9yRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd25PcHRpb25zTWFwKS5maWx0ZXIodmFsdWUgPT4gdmFsdWVbMV0gPT09IG9wdGlvbik7XG4gICAgICAgIHJldHVybiAoZmlsdGVyZWQubGVuZ3RoID09PSAxKSA/IGZpbHRlcmVkWzBdWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBkcm9wZG93biBvcHRpb24gZnJvbSBtYXAgYnkgZ2l2ZW4gdmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdEdyb3VwOiBIVE1MT3B0R3JvdXBFbGVtZW50KTogbnVsbHxIVE1MRGl2RWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd25PcHRHcm91cHNNYXApLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZVsxXSA9PT0gb3B0R3JvdXApO1xuICAgICAgICByZXR1cm4gKGZpbHRlcmVkLmxlbmd0aCA9PT0gMSkgPyBmaWx0ZXJlZFswXVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgc2VsZWN0ZWQgb3B0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPcHRpb25zKCk6IEFycmF5PEhUTUxPcHRpb25FbGVtZW50PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=