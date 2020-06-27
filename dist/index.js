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

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.ts ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ted/Documents/Packages/select/src/js/index.ts */"./src/js/index.ts");
module.exports = __webpack_require__(/*! /Users/ted/Documents/Packages/select/src/scss/index.scss */"./src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7Ozs7R0FJRzs7Ozs7Ozs7Ozs7OztBQUVILDRGQUFxQztBQWtCckMsSUFBSyxjQUdKO0FB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bUIsQ0FBQyxDQUFDO1FBQzFGLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBS08sNkNBQTBCLEdBQWxDLFVBQW1DLFFBQTZCO1FBRTVELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDOUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFLTyxxQ0FBa0IsR0FBMUI7UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLFFBQVEsRUFBZixDQUFlLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzMkJELHlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlzTW9iaWxlXHJcbm1vZHVsZS5leHBvcnRzLmlzTW9iaWxlID0gaXNNb2JpbGVcclxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlXHJcblxyXG52YXIgbW9iaWxlUkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pXHJcblxyXG52YXIgdGFibGV0UkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pXHJcblxyXG5mdW5jdGlvbiBpc01vYmlsZSAob3B0cykge1xyXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XHJcbiAgdmFyIHVhID0gb3B0cy51YVxyXG4gIGlmICghdWEgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gIGlmICh1YSAmJiB1YS5oZWFkZXJzICYmIHR5cGVvZiB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICB1YSA9IHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxyXG4gIH1cclxuICBpZiAodHlwZW9mIHVhICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlXHJcblxyXG4gIHZhciByZXN1bHQgPSBvcHRzLnRhYmxldCA/IHRhYmxldFJFLnRlc3QodWEpIDogbW9iaWxlUkUudGVzdCh1YSlcclxuXHJcbiAgaWYgKFxyXG4gICAgIXJlc3VsdCAmJlxyXG4gICAgb3B0cy50YWJsZXQgJiZcclxuICAgIG9wdHMuZmVhdHVyZURldGVjdCAmJlxyXG4gICAgbmF2aWdhdG9yICYmXHJcbiAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxICYmXHJcbiAgICB1YS5pbmRleE9mKCdNYWNpbnRvc2gnKSAhPT0gLTEgJiZcclxuICAgIHVhLmluZGV4T2YoJ1NhZmFyaScpICE9PSAtMVxyXG4gICkge1xyXG4gICAgcmVzdWx0ID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcbiIsIi8qIVxuICogVlZTZWxlY3RcbiAqIChjKSAyMDIwIFRlZCBHb2R5bGFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnaXMtbW9iaWxlJztcblxuaW50ZXJmYWNlIFZWU2VsZWN0U2V0dGluZ3Mge1xuICAgIGRyb3Bkb3duQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3M6IHN0cmluZztcbiAgICBvcGVuQ2xhc3M6IHN0cmluZztcbiAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgbXVsdGlwbGVGb3JtYXQ6IHN0cmluZztcbiAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZUZvcm1hdDogc3RyaW5nO1xuICAgIG9uSW5pdGlhbGl6ZTogRnVuY3Rpb247XG4gICAgb25PcGVuOiBGdW5jdGlvbjtcbiAgICBvbkNsb3NlOiBGdW5jdGlvbjtcbiAgICBvbkNoYW5nZTogRnVuY3Rpb247XG59XG5cbmVudW0gRm9jdXNEaXJlY3Rpb24ge1xuICAgIHByZXYgPSAtMSxcbiAgICBuZXh0ID0gMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVlZTZWxlY3Qge1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVmFyaWFibGVzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRyaWdnZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHNlbGVjdE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICAgIHByaXZhdGUgb3B0aW9uczogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZHJvcGRvd246IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zOiBBcnJheTxIVE1MQW5jaG9yRWxlbWVudD4gPSBuZXcgQXJyYXkoKTtcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0aW9uc01hcDogTWFwPEhUTUxBbmNob3JFbGVtZW50LCBIVE1MT3B0aW9uRWxlbWVudD4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0R3JvdXBzTWFwOiBNYXA8SFRNTERpdkVsZW1lbnQsIEhUTUxPcHRHcm91cEVsZW1lbnQ+ID0gbmV3IE1hcCgpXG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lOiBudW1iZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIHByaXZhdGUgc2VhcmNoVGltZW91dDogbnVtYmVyID0gMjAwMDsgLy8gMiBzZWNvbmRzXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgdXNlRHJvcGRvd246IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBrZXlkb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncztcbiAgICBcbiAgICByZWFkb25seSBkZWZhdWx0U2V0dGluZ3M6IFZWU2VsZWN0U2V0dGluZ3MgPSB7XG4gICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duJyxcbiAgICAgICAgZHJvcGRvd25PcHRpb25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24tb3B0aW9uJyxcbiAgICAgICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cCcsXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cC1sYWJlbCcsXG4gICAgICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLFxuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIHNlbGVjdGVkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdCBvcHRpb25zXCIsXG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJDaG9vc2UgYW4gb3B0aW9uXCIsXG4gICAgICAgIG9uSW5pdGlhbGl6ZTogKCkgPT4ge30sXG4gICAgICAgIG9uT3BlbjogKCkgPT4ge30sXG4gICAgICAgIG9uQ2xvc2U6ICgpID0+IHt9LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgQ29uc3RydWN0b3JcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IG9iamVjdCA9IHt9LCBpbml0aWFsaXplT25Db25zdHJ1Y3Q6IGJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pIHNldHRpbmdzW2tleV0gPSB0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzID0gey4uLnRoaXMuZGVmYXVsdFNldHRpbmdzLCAuLi5zZXR0aW5ncyB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZURvY3VtZW50Rm9jdXNpbiA9IHRoaXMuaGFuZGxlRG9jdW1lbnRGb2N1c2luLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcblxuICAgICAgICB0aGlzLnVzZURyb3Bkb3duID0gIWlzTW9iaWxlKHsgdGFibGV0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gdGhpcy5zZWxlY3QubXVsdGlwbGU7XG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gdGhpcy5zZWxlY3QuYXV0b2ZvY3VzO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5zZWxlY3QuZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGluaXRpYWxpemVPbkNvbnN0cnVjdClcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEluaXRpYWxpemVcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwdWJsaWMgaW5pdCgpIFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25Ob2RlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoQXJyYXkuZnJvbSh0aGlzLnNlbGVjdC5jaGlsZHJlbiksIHRoaXMuZHJvcGRvd24pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTdHlsaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uc0V2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5hZGRUcmlnZ2VyRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duRXZlbnRzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkUmVzZXRFdmVudCgpO1xuICAgICAgICB0aGlzLmFkZFNlbGVjdEV2ZW50KCk7XG4gICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclRleHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZWxlY3RPYnNlcnZlcigpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbml0aWFsaXplZCcpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBHZXR0ZXJzIGFuZCBzZXR0ZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBHZXQgdmFsdWUuIFJldHVybnMgYXJyYXkgb24gbXVsdGlwbGUgc2VsZWN0IGFuZCBhIHN0cmluZyBvbiBzaW5nbGUgc2VsZWN0XG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCk6IEFycmF5PHN0cmluZz58c3RyaW5nXG4gICAge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucygpLm1hcChlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5tdWx0aXBsZSkgPyB2YWx1ZXMgOiAodmFsdWVzLmxlbmd0aCA9PT0gMSApID8gdmFsdWVzWzBdIDogJyc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsdWVzOiBBcnJheTxzdHJpbmc+fHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGludGlhbGl6ZWQgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25Jbml0aWFsaXplKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25Jbml0aWFsaXplID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gY2hhbmdlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uQ2hhbmdlKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBvcGVuIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uT3BlbihmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uT3BlbiA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGNsb3NlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uQ2xvc2UoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNsb3NlID0gZm47XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgT3Blbi9jbG9zZVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogT3BlbiBkcm9wZG93blxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydvcGVuQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgoMCk7XG5cbiAgICAgICAgdGhpcy5hZGREb2N1bWVudEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDbG9zZSBkcm9wZG93biBhbmQgcmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DbG9zZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVXBkYXRlIERPTVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duTm9kZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSlcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZXMgYmFzZWQgb24gYWxsIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoZWxlbWVudHM6IGFueSwgcGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGdyb3VwTm9kZShlbGVtZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUoZWxlbWVudCwgcGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGdyb3VwTm9kZShvcHRncm91cDogSFRNTE9wdEdyb3VwRWxlbWVudCwgcGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxEaXZFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0R3JvdXAuY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cENsYXNzJ107XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzJ10pXG4gICAgICAgICAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWwuY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3MnXTtcblxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwTGFiZWwudGV4dENvbnRlbnQgPSBvcHRncm91cC5sYWJlbDtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwLnNldChkcm9wZG93bk9wdEdyb3VwLCBvcHRncm91cCk7XG4gICAgICAgIFxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0R3JvdXBMYWJlbCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wZG93bk9wdEdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlcyhBcnJheS5mcm9tKG9wdGdyb3VwLmNoaWxkcmVuKSwgZHJvcGRvd25PcHRHcm91cCk7XG5cbiAgICAgICAgcmV0dXJuIGRyb3Bkb3duT3B0R3JvdXA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCwgcGFyZW50OiBIVE1MRWxlbWVudCk6IEhUTUxBbmNob3JFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgICAgICBkcm9wZG93bk9wdGlvbi50YWJJbmRleCA9IC0xO1xuICAgICAgICBkcm9wZG93bk9wdGlvbi5ocmVmID0gJ2phdmFzY3JpcHQ6Oyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0aW9uQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTmFtZSA9IHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0aW9uQ2xhc3MnXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLnNldChkcm9wZG93bk9wdGlvbiwgb3B0aW9uKTtcblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5wdXNoKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICByZXR1cm4gZHJvcGRvd25PcHRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IHZvaWQgXG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihlbCA9PiBlbCAhPT0gZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRyb3Bkb3duIG9wdGdyb3VwIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0Z3JvdXBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURyb3Bkb3duT3B0R3JvdXBOb2RlKG9wdEdyb3VwOiBIVE1MT3B0R3JvdXBFbGVtZW50KTogdm9pZCBcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXAgPSB0aGlzLmdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdEdyb3VwKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwLmRlbGV0ZShkcm9wZG93bk9wdEdyb3VwKTtcblxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlU2VsZWN0U3R5bGluZ1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U3R5bGluZygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5zdHlsZS56SW5kZXggPSAnMCc7XG4gICAgICAgIHRoaXMuc2VsZWN0LnRhYkluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgdHJpZ2dlciB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmlnZ2VyVGV4dCgpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IFN0cmluZyhlbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKGFtb3VudCkgPyAnbXVsdGlwbGVTZWxlY3RlZEZvcm1hdCcgOiAnbXVsdGlwbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCBhbW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IChlbGVtZW50c1swXSkgPyBlbGVtZW50c1swXS5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9ICh0ZXh0KSA/ICdzaW5nbGVTZWxlY3RlZEZvcm1hdCcgOiAnc2luZ2xlRm9ybWF0JztcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5pbm5lclRleHQgPSB0aGlzLnNldHRpbmdzW2Zvcm1hdF0ucmVwbGFjZSgvJXMvZywgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBhbGwgZHJvcGRvd24gb3B0aW9uIG5vZGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEcm9wZG93bk9wdGlvbnMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgZ2l2ZW4gZHJvcGRvd24gb3B0aW9uIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgLy8gVXBkYXRlIGRhdGEgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHByb3BzVG9EYXRhc2V0ID0gWydkaXNhYmxlZCcsICdzZWxlY3RlZCcsICd2YWx1ZSddO1xuICAgICAgICBwcm9wc1RvRGF0YXNldC5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25bcHJvcF0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSAnJztcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSAhPT0gb3B0aW9uW3Byb3BdKVxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdID0gb3B0aW9uW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgdGV4dFxuICAgICAgICBpZiAoZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQgIT09IG9wdGlvbi50ZXh0Q29udGVudClcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGdpdmVuIGRyb3Bkb3duIG9wdGlvbiBub2RlXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEcm9wZG93bk9wdEdyb3VwKGRyb3Bkb3duT3B0R3JvdXA6IEhUTUxEaXZFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgRXZlbnQgbGlzdGVuZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBBZGQgc2VsZWN0IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTZWxlY3RFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUZXh0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb25zKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub25DaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgcmVzZXQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFJlc2V0RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBVbnNlbGVjdCBvcHRpb25zXG4gICAgICAgIC8vIC0gVHJpZ2dlciBzZWxlY3QgY2hhbmdlIGV2ZW50XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gIShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIG9wdGlvbnMgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duT3B0aW9uc0V2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudHMoZHJvcGRvd25PcHRpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbkV2ZW50cyhkcm9wZG93bk9wdGlvbjogSFRNTEFuY2hvckVsZW1lbnQpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyAtIFNlbGVjdCBkcm9wZG93biBvcHRpb24gb24gY2xpY2tcbiAgICAgICAgLy8gLSBJZ25vcmUgZm9yIGRpc2FibGVkIG9wdGlvblxuICAgICAgICAvLyAtIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgIC8vIC0gQ2xvc2UgZHJvcGRvd24gYWZ0ZXJ3YXJkcyBmb3Igc2luZ2xlIHNlbGVjdFxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICFvcHRpb24uc2VsZWN0ZWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgIW9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBvbiBtb3VzZW92ZXJcbiAgICAgICAgLy8gLSBJZ25vcmUgZm9yIGRpc2FibGVkIG9wdGlvbiBvciB3aGVuIHR5cGluZ1xuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlkb3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YoZHJvcGRvd25PcHRpb24pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBQcmV2ZW50IGRyb3Bkb3duIG9wdGlvbiBmb2N1cyBvbiBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgdHJpZ2dlciBldmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFRyaWdnZXJFdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBPcGVuL2Nsb3NlIGRyb3Bkb3duIG9uIG1vdXNlZG93blxuICAgICAgICAvLyAtIElnbm9yZSB3aGVuIHNlbGVjdCBpcyBkaXNhYmxlZFxuICAgICAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldiA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKHRoaXMuaXNPcGVuKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtIE9wZW4vY2xvc2UgZHJvcGRvd24gb24gdXAgYW5kIGRvd24ga2V5cyB3aGVuIHRyaWdnZXIgaXMgZm9jdXNlZFxuICAgICAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSBcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSAhPT0gMzggJiYgZXYua2V5Q29kZSAhPT0gNDApIHsgLy8gdXAgYW5kIGRvd25cbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAodGhpcy5pc09wZW4pID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG5cbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIGV2ZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd25FdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBGb2N1cyBuZXh0IGRyb3Bkb3duIG9wdGlvbiBvbiBkb3duIGtleVxuICAgICAgICAvLyAtIEZvY3VzIHByZXZpb3VzIGRyb3Bkb3duIG9wdGlvbiBvbiB1cCBrZXlcbiAgICAgICAgLy8gLSBGb2N1cyBkcm9wZG93biBvcHRpb24gdGhhdCBtYXRjaGVkIHNlYXJjaCBzdHJpbmcgd2hlbiB0eXBpbmdcbiAgICAgICAgLy8gLSBDbG9zZSBkcm9wZG93biBvbiBlc2Mga2V5IGRvd25cbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXYgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlkb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDM4KSB7IC8vIHVwXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihGb2N1c0RpcmVjdGlvbi5wcmV2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ubmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDI3KSB7IC8vIGVzY1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSA4KSB7IC8vIGJhY2tzcGFjZVxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdHJpbmcgPSB0aGlzLnNlYXJjaFN0cmluZy5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlTZWFyY2hlZFN0cmluZygnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXYua2V5Q29kZSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoY2hhciAmJiBjaGFyLm1hdGNoKC9eW2EtejAtOSBdKyQvaSkpICYmXG4gICAgICAgICAgICAgICAgIShldi5jdHJsS2V5IHx8IGV2LmFsdEtleSB8fCBldi5tZXRhS2V5KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeVNlYXJjaGVkU3RyaW5nKGNoYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXYgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlkb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREb2N1bWVudEV2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmhhbmRsZURvY3VtZW50Rm9jdXNpbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURvY3VtZW50RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5oYW5kbGVEb2N1bWVudEZvY3VzaW4sIHRydWUpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSGFuZGxlIGRvY3VtZW50IGNsaWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVEb2N1bWVudENsaWNrKGV2OiBFdmVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxlbWVudCwgdGFyZ2V0KSlcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBkb2N1bWVudCBjbGlja1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRG9jdW1lbnRGb2N1c2luKGV2OiBFdmVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICYmICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsZW1lbnQsIHRhcmdldCkpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgRm9jdXMgb3B0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGJ5IGluZGV4XG4gICAgICogSWdub3JlIGRpc2FibGVkIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW2luZGV4XSk7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zW2luZGV4XS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIG5leHQgZHJvcGRvd24gb3B0aW9uIGJhc2VkIG9uIGN1cnJlbnQgZm9jdXNlZCBvcHRpb24gYW5kIGdpdmVuIGRpcmVjdGlvblxuICAgICAqIFNraXAgZGlzYWJsZWQgb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oZm9jdXNEaXJlY3Rpb246IEZvY3VzRGlyZWN0aW9uKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaCgoZHJvcGRvd25PcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZHJvcGRvd25PcHRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dEluZGV4ID0gaW5kZXggKyBmb2N1c0RpcmVjdGlvbjtcblxuICAgICAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgdGhpcy5kcm9wZG93bk9wdGlvbnNbbmV4dEluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRPcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbbmV4dEluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4Kz0gZm9jdXNEaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KG5leHRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gY2xvc2VzdCB0byBpbmRleC4gRmlyc3QgY2hlY2tzIGN1cnJlbnQgaW5kZXgsIFxuICAgICAqIHRoZW4gbmV4dCBpbmRleCwgdGhlbiBwcmV2IGluZGV4LCB0aGUgMm5kIG5leHQgaW5kZXgsIHRoZW4gMm5kIHByZXYgaW5kZXggZXRjLlxuICAgICAqIFNraXBzIGRpc2FibGVkIG9wdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleChpbmRleDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5kcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBicmVha0xvb3AgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPj0gLTE7IGotPSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGluZGV4ICsgKGkgKiBqKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93bk9wdGlvbnNbeF0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldCh0aGlzLmRyb3Bkb3duT3B0aW9uc1t4XSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoeCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChicmVha0xvb3ApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBiYXNlZCBvbiBzZWFyY2hcbiAgICAgKiBJZiBhbGwgbWF0Y2ggKGVtcHR5IHN0cmluZyk6IEZvY3VzIGNsb3Nlc3QgZm9jdXNhYmxlIHRvIGluZGV4IDBcbiAgICAgKiBFbHNlIGlmIG1hdGNoZXMgZm91bmQ6IEZvY3VzIGZpcnN0IG1hdGNoXG4gICAgICogRWxzZSBpZiBzZWFyY2hpbmcgMSBjaGFyOiBGb2N1cyBvcHRpb24gdGhhdCBpcyBhbHBoYWJldGljbHkgY2xvc2VzdCB0byB0aGUgY2hhclxuICAgICAqIEVsc2U6IERvbid0IGNoYW5nZSBmb2N1c1xuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoY2hhcjogc3RyaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgdGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKHRpbWUgPiB0aGlzLnNlYXJjaFRpbWUgKyB0aGlzLnNlYXJjaFRpbWVvdXQpXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0cmluZyA9ICcnO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoVGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nKz0gY2hhci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMuc2VhcmNoU3RyaW5nKSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KDApO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKG1hdGNoZXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFN0cmluZy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5Rmlyc3RMZXR0ZXIodGhpcy5zZWFyY2hTdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gd2hlcmUgZmlyc3QgbGV0dGVyIGlzIGFscGhhYmV0aWNhbGx5IGNsb3Nlc3QgdG8gZ2l2ZW4gY2hhclxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5Rmlyc3RMZXR0ZXIoY2hhcjogc3RyaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoTGV0dGVySW5kZXggPSBwYXJzZUludChjaGFyLCAzNikgLSA5O1xuICAgICAgICBsZXQgbG93ZXN0RGlmZiA9IDI2O1xuICAgICAgICBsZXQgY2xvc2VzdERyb3Bkb3duT3B0aW9uID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXJJbmRleCA9IHBhcnNlSW50KGZpcnN0TGV0dGVyLCAzNikgLSA5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhzZWFyY2hMZXR0ZXJJbmRleCAtIGxldHRlckluZGV4KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA8PSBsb3dlc3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdERpZmYgPSBkaWZmO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RHJvcGRvd25PcHRpb24gPSBkcm9wZG93bk9wdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjbG9zZXN0RHJvcGRvd25PcHRpb24pXG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YoY2xvc2VzdERyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgT2JzZXJ2ZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgc2VsZWN0IG9ic2VydmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTZWxlY3RPYnNlcnZlcigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGFkZGVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVElPTicpLmZvckVhY2gob3B0aW9uTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25Ob2RlIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB0aGlzLmRyb3Bkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5nZXREcm9wZG93bk9wdEdyb3VwRnJvbU1hcChvcHRpb24ucGFyZW50Tm9kZSBhcyBIVE1MT3B0R3JvdXBFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uLCBwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnRzKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSByZW1vdmVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUSU9OJykuZm9yRWFjaChvcHRpb25Ob2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbk5vZGUgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSB0aGlzLnZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IG9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb24gYXMgSFRNTE9wdGlvbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSByZW1vdmVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUR1JPVVAnKS5mb3JFYWNoKG9wdEdyb3VwTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRHcm91cCA9IG9wdEdyb3VwTm9kZSBhcyBIVE1MT3B0R3JvdXBFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEcm9wZG93bk9wdEdyb3VwTm9kZShvcHRHcm91cCBhcyBIVE1MT3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24udGFyZ2V0Lm5vZGVOYW1lID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBtdXRhdGlvbi50YXJnZXQgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5nZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi50YXJnZXQubm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBtdXRhdGlvbi50YXJnZXQgYXMgSFRNTE9wdEdyb3VwRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cCA9IHRoaXMuZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0R3JvdXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0R3JvdXAoZHJvcGRvd25PcHRHcm91cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3RPYnNlcnZlci5vYnNlcnZlKHRoaXMuc2VsZWN0LCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEhlbHBlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIElzIGRlc2NlbmRhbnQgaGVscGVyIGNsYXNzXG4gICAgICogVGhpcyBjb3VsZCBtYXliZSBiZSBtb3ZlZCB0byBhIGhlbHBlciBwYWNrYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBOb2RlLCBjaGlsZDogSFRNTEVsZW1lbnQpOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChub2RlID09IHBhcmVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgZHJvcGRvd24gb3B0aW9uIGZyb20gbWFwIGJ5IGdpdmVuIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IG51bGx8SFRNTEFuY2hvckVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duT3B0aW9uc01hcCkuZmlsdGVyKHZhbHVlID0+IHZhbHVlWzFdID09PSBvcHRpb24pO1xuICAgICAgICByZXR1cm4gKGZpbHRlcmVkLmxlbmd0aCA9PT0gMSkgPyBmaWx0ZXJlZFswXVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgZHJvcGRvd24gb3B0aW9uIGZyb20gbWFwIGJ5IGdpdmVuIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXREcm9wZG93bk9wdEdyb3VwRnJvbU1hcChvcHRHcm91cDogSFRNTE9wdEdyb3VwRWxlbWVudCk6IG51bGx8SFRNTERpdkVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwKS5maWx0ZXIodmFsdWUgPT4gdmFsdWVbMV0gPT09IG9wdEdyb3VwKTtcbiAgICAgICAgcmV0dXJuIChmaWx0ZXJlZC5sZW5ndGggPT09IDEpID8gZmlsdGVyZWRbMF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IHNlbGVjdGVkIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkT3B0aW9ucygpOiBBcnJheTxIVE1MT3B0aW9uRWxlbWVudD5cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgIH1cbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=