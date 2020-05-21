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

__webpack_require__(/*! /Users/tedgodyla/Documents/Projecten/Packages/select/src/js/index.ts */"./src/js/index.ts");
module.exports = __webpack_require__(/*! /Users/tedgodyla/Documents/Projecten/Packages/select/src/scss/index.scss */"./src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7QUFFSCw0RkFBcUM7QUFrQnJDLElBQUssY0FHSjtBQUhELFdBQUssY0FBYztJQUNmLG9EQUFTO0lBQ1QsbURBQVE7QUFDWixDQUFDLEVBSEksY0FBYyxLQUFkLGNB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USxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0QsQ0FBQztJQUtPLHFDQUFrQixHQUExQjtRQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsUUFBUSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzF6QkQseUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpc01vYmlsZVxubW9kdWxlLmV4cG9ydHMuaXNNb2JpbGUgPSBpc01vYmlsZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlXG5cbnZhciBtb2JpbGVSRSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllc1s0Nl0wfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2lcblxudmFyIHRhYmxldFJFID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzWzQ2XTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaVxuXG5mdW5jdGlvbiBpc01vYmlsZSAob3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuICB2YXIgdWEgPSBvcHRzLnVhXG4gIGlmICghdWEgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxuICBpZiAodWEgJiYgdWEuaGVhZGVycyAmJiB0eXBlb2YgdWEuaGVhZGVyc1sndXNlci1hZ2VudCddID09PSAnc3RyaW5nJykge1xuICAgIHVhID0gdWEuaGVhZGVyc1sndXNlci1hZ2VudCddXG4gIH1cbiAgaWYgKHR5cGVvZiB1YSAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiBvcHRzLnRhYmxldCA/IHRhYmxldFJFLnRlc3QodWEpIDogbW9iaWxlUkUudGVzdCh1YSlcbn1cbiIsIi8qIVxuICogVlZTZWxlY3RcbiAqIChjKSAyMDIwIFRlZCBHb2R5bGFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnaXMtbW9iaWxlJztcblxuaW50ZXJmYWNlIFZWU2VsZWN0U2V0dGluZ3Mge1xuICAgIGRyb3Bkb3duQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRHcm91cExhYmVsQ2xhc3M6IHN0cmluZztcbiAgICBvcGVuQ2xhc3M6IHN0cmluZztcbiAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgbXVsdGlwbGVGb3JtYXQ6IHN0cmluZztcbiAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZUZvcm1hdDogc3RyaW5nO1xuICAgIG9uSW5pdGlhbGl6ZTogRnVuY3Rpb247XG4gICAgb25PcGVuOiBGdW5jdGlvbjtcbiAgICBvbkNsb3NlOiBGdW5jdGlvbjtcbiAgICBvbkNoYW5nZTogRnVuY3Rpb247XG59XG5cbmVudW0gRm9jdXNEaXJlY3Rpb24ge1xuICAgIHByZXYgPSAtMSxcbiAgICBuZXh0ID0gMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVlZTZWxlY3Qge1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVmFyaWFibGVzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRyaWdnZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHNlbGVjdE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICAgIHByaXZhdGUgb3B0aW9uczogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZHJvcGRvd246IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zOiBBcnJheTxIVE1MQW5jaG9yRWxlbWVudD4gPSBuZXcgQXJyYXkoKTtcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0aW9uc01hcDogTWFwPEhUTUxBbmNob3JFbGVtZW50LCBIVE1MT3B0aW9uRWxlbWVudD4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0R3JvdXBzTWFwOiBNYXA8SFRNTERpdkVsZW1lbnQsIEhUTUxPcHRHcm91cEVsZW1lbnQ+ID0gbmV3IE1hcCgpXG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lOiBudW1iZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIHByaXZhdGUgc2VhcmNoVGltZW91dDogbnVtYmVyID0gMjAwMDsgLy8gMiBzZWNvbmRzXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgdXNlRHJvcGRvd246IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBrZXlkb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncztcbiAgICBcbiAgICByZWFkb25seSBkZWZhdWx0U2V0dGluZ3M6IFZWU2VsZWN0U2V0dGluZ3MgPSB7XG4gICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duJyxcbiAgICAgICAgZHJvcGRvd25PcHRpb25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24tb3B0aW9uJyxcbiAgICAgICAgZHJvcGRvd25PcHRHcm91cENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cCcsXG4gICAgICAgIGRyb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRncm91cC1sYWJlbCcsXG4gICAgICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLFxuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIHNlbGVjdGVkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdCBvcHRpb25zXCIsXG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJDaG9vc2UgYW4gb3B0aW9uXCIsXG4gICAgICAgIG9uSW5pdGlhbGl6ZTogKCkgPT4ge30sXG4gICAgICAgIG9uT3BlbjogKCkgPT4ge30sXG4gICAgICAgIG9uQ2xvc2U6ICgpID0+IHt9LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgQ29uc3RydWN0b3JcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IG9iamVjdCA9IHt9LCBpbml0aWFsaXplT25Db25zdHJ1Y3Q6IGJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pIHNldHRpbmdzW2tleV0gPSB0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzID0gey4uLnRoaXMuZGVmYXVsdFNldHRpbmdzLCAuLi5zZXR0aW5ncyB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG5cbiAgICAgICAgdGhpcy51c2VEcm9wZG93biA9ICFpc01vYmlsZSh7IHRhYmxldDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IHRoaXMuc2VsZWN0Lm11bHRpcGxlO1xuICAgICAgICB0aGlzLmF1dG9mb2N1cyA9IHRoaXMuc2VsZWN0LmF1dG9mb2N1cztcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuc2VsZWN0LmRpc2FibGVkO1xuXG4gICAgICAgIGlmIChpbml0aWFsaXplT25Db25zdHJ1Y3QpXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBJbml0aWFsaXplXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHVibGljIGluaXQoKSBcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGVzKEFycmF5LmZyb20odGhpcy5zZWxlY3QuY2hpbGRyZW4pLCB0aGlzLmRyb3Bkb3duKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U3R5bGluZygpO1xuICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bk9wdGlvbnNFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVHJpZ2dlckV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duRXZlbnRzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkU2VsZWN0RXZlbnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyVGV4dCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlbGVjdE9ic2VydmVyKCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uSW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEdldHRlcnMgYW5kIHNldHRlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEdldCB2YWx1ZS4gUmV0dXJucyBhcnJheSBvbiBtdWx0aXBsZSBzZWxlY3QgYW5kIGEgc3RyaW5nIG9uIHNpbmdsZSBzZWxlY3RcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogQXJyYXk8c3RyaW5nPnxzdHJpbmdcbiAgICB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm11bHRpcGxlKSA/IHZhbHVlcyA6ICh2YWx1ZXMubGVuZ3RoID09PSAxICkgPyB2YWx1ZXNbMF0gOiAnJztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCB2YWx1ZVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZXM6IEFycmF5PHN0cmluZz58c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gaW50aWFsaXplZCBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkluaXRpYWxpemUoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkluaXRpYWxpemUgPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBjaGFuZ2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25DaGFuZ2UoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIG9wZW4gZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25PcGVuKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gY2xvc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25DbG9zZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgPSBmbjtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBPcGVuL2Nsb3NlXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBPcGVuIGRyb3Bkb3duXG4gICAgICovXG4gICAgcHVibGljIG9wZW4oKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCgwKTtcblxuICAgICAgICB0aGlzLmFkZERvY3VtZW50RXZlbnQoKTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzLm9uT3BlbigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2xvc2UgZHJvcGRvd24gYW5kIHJlbW92ZSBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50RXZlbnQoKTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2xvc2UoKTtcblxuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFVwZGF0ZSBET01cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBub2RlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk5vZGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5nc1snZHJvcGRvd25DbGFzcyddKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bik7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGVzIGJhc2VkIG9uIGFsbCBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGlvbk5vZGVzKGVsZW1lbnRzOiBhbnksIHBhcmVudDogSFRNTEVsZW1lbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRncm91cE5vZGUoZWxlbWVudCwgcGFyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlKGVsZW1lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG9wdGlvbiBub2RlIGJhc2VkIG9uIGdpdmVuIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRHJvcGRvd25PcHRncm91cE5vZGUob3B0Z3JvdXA6IEhUTUxPcHRHcm91cEVsZW1lbnQsIHBhcmVudDogSFRNTEVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdEdyb3VwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRHcm91cENsYXNzJ10pXG4gICAgICAgICAgICBkcm9wZG93bk9wdEdyb3VwLmNsYXNzTmFtZSA9IHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0R3JvdXBDbGFzcyddO1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdEdyb3VwTGFiZWxDbGFzcyddKVxuICAgICAgICAgICAgZHJvcGRvd25PcHRHcm91cExhYmVsLmNsYXNzTmFtZSA9IHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0R3JvdXBMYWJlbENsYXNzJ107XG5cbiAgICAgICAgZHJvcGRvd25PcHRHcm91cExhYmVsLnRleHRDb250ZW50ID0gb3B0Z3JvdXAubGFiZWw7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdEdyb3Vwc01hcC5zZXQoZHJvcGRvd25PcHRHcm91cCwgb3B0Z3JvdXApO1xuICAgICAgICBcbiAgICAgICAgZHJvcGRvd25PcHRHcm91cC5hcHBlbmRDaGlsZChkcm9wZG93bk9wdEdyb3VwTGFiZWwpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRHcm91cCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoQXJyYXkuZnJvbShvcHRncm91cC5jaGlsZHJlbiksIGRyb3Bkb3duT3B0R3JvdXApO1xuXG4gICAgICAgIHJldHVybiBkcm9wZG93bk9wdEdyb3VwO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG9wdGlvbiBub2RlIGJhc2VkIG9uIGdpdmVuIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQsIHBhcmVudDogSFRNTEVsZW1lbnQpOiBIVE1MQW5jaG9yRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cbiAgICAgICAgZHJvcGRvd25PcHRpb24udGFiSW5kZXggPSAwO1xuICAgICAgICBkcm9wZG93bk9wdGlvbi5ocmVmID0gJ2phdmFzY3JpcHQ6Oyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0aW9uQ2xhc3MnXSlcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTmFtZSA9IHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duT3B0aW9uQ2xhc3MnXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLnNldChkcm9wZG93bk9wdGlvbiwgb3B0aW9uKTtcblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5wdXNoKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICByZXR1cm4gZHJvcGRvd25PcHRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IHZvaWQgXG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihlbCA9PiBlbCAhPT0gZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRyb3Bkb3duIG9wdGdyb3VwIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0Z3JvdXBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURyb3Bkb3duT3B0R3JvdXBOb2RlKG9wdEdyb3VwOiBIVE1MT3B0R3JvdXBFbGVtZW50KTogdm9pZCBcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0R3JvdXAgPSB0aGlzLmdldERyb3Bkb3duT3B0R3JvdXBGcm9tTWFwKG9wdEdyb3VwKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwLmRlbGV0ZShkcm9wZG93bk9wdEdyb3VwKTtcblxuICAgICAgICBkcm9wZG93bk9wdEdyb3VwLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlU2VsZWN0U3R5bGluZ1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U3R5bGluZygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5zdHlsZS56SW5kZXggPSAnMCc7XG4gICAgICAgIHRoaXMuc2VsZWN0LnRhYkluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgdHJpZ2dlciB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmlnZ2VyVGV4dCgpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IFN0cmluZyhlbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKGFtb3VudCkgPyAnbXVsdGlwbGVTZWxlY3RlZEZvcm1hdCcgOiAnbXVsdGlwbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCBhbW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IChlbGVtZW50c1swXSkgPyBlbGVtZW50c1swXS5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9ICh0ZXh0KSA/ICdzaW5nbGVTZWxlY3RlZEZvcm1hdCcgOiAnc2luZ2xlRm9ybWF0JztcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5pbm5lclRleHQgPSB0aGlzLnNldHRpbmdzW2Zvcm1hdF0ucmVwbGFjZSgvJXMvZywgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBhbGwgZHJvcGRvd24gb3B0aW9uIG5vZGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEcm9wZG93bk9wdGlvbnMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgZ2l2ZW4gZHJvcGRvd24gb3B0aW9uIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgLy8gVXBkYXRlIGRhdGEgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHByb3BzVG9EYXRhc2V0ID0gWydkaXNhYmxlZCcsICdzZWxlY3RlZCcsICd2YWx1ZSddO1xuICAgICAgICBwcm9wc1RvRGF0YXNldC5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25bcHJvcF0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSAnJztcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSAhPT0gb3B0aW9uW3Byb3BdKVxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdID0gb3B0aW9uW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkcm9wZG93bk9wdGlvbi50YWJJbmRleCA9IChvcHRpb24uZGlzYWJsZWQpID8gLTEgOiAwO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCAhPT0gb3B0aW9uLnRleHRDb250ZW50KVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgZ2l2ZW4gZHJvcGRvd24gb3B0aW9uIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0R3JvdXAoZHJvcGRvd25PcHRHcm91cDogSFRNTERpdkVsZW1lbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBFdmVudCBsaXN0ZW5lcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEFkZCBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNlbGVjdEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclRleHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbnMoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbnNFdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnRzKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gb3B0aW9ucyBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd25PcHRpb25FdmVudHMoZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBTZWxlY3QgZHJvcGRvd24gb3B0aW9uIG9uIGNsaWNrXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgLy8gLSBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAvLyAtIENsb3NlIGRyb3Bkb3duIGFmdGVyd2FyZHMgZm9yIHNpbmdsZSBzZWxlY3RcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAhb3B0aW9uLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlICYmICFvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBGb2N1cyBkcm9wZG93biBvcHRpb24gb24gbW91c2VvdmVyXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb24gb3Igd2hlbiB0eXBpbmdcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5ZG93bilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0gUHJldmVudCBkcm9wZG93biBvcHRpb24gZm9jdXMgb24gZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIHRyaWdnZXIgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFRyaWdnZXJFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyAtIE9wZW4vY2xvc2UgZHJvcGRvd25cbiAgICAgICAgLy8gLSBJZ25vcmUgd2hlbiBzZWxlY3QgaXMgZGlzYWJsZWRcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgKHRoaXMuaXNPcGVuKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBldmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duRXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIC0gRm9jdXMgbmV4dCBkcm9wZG93biBvcHRpb24gb24ga2V5IGRvd25cbiAgICAgICAgLy8gLSBGb2N1cyBwcmV2aW91cyBkcm9wZG93biBvcHRpb24gb24ga2V5IHVwXG4gICAgICAgIC8vIC0gRm9jdXMgZHJvcGRvd24gb3B0aW9uIHRoYXQgbWF0Y2hlZCBzZWFyY2ggc3RyaW5nIHdoZW4gdHlwaW5nXG4gICAgICAgIHRoaXMuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSAzOCkgeyAvLyB1cFxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ucHJldik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKEZvY3VzRGlyZWN0aW9uLm5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDgpIHsgLy8gYmFja3NwYWNlXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0cmluZyA9IHRoaXMuc2VhcmNoU3RyaW5nLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeVNlYXJjaGVkU3RyaW5nKCcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldi5rZXlDb2RlKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChjaGFyICYmIGNoYXIubWF0Y2goL15bYS16MC05IF0rJC9pKSkgJiZcbiAgICAgICAgICAgICAgICAhKGV2LmN0cmxLZXkgfHwgZXYuYWx0S2V5IHx8IGV2Lm1ldGFLZXkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoY2hhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldiA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleWRvd24gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERvY3VtZW50RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEb2N1bWVudEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBkb2N1bWVudCBjbGlja1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRG9jdW1lbnRDbGljayhldjogRXZlbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICYmICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsZW1lbnQsIHRhcmdldCkpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgRm9jdXMgb3B0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGJ5IGluZGV4XG4gICAgICogSWdub3JlIGRpc2FibGVkIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW2luZGV4XSk7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zW2luZGV4XS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIG5leHQgZHJvcGRvd24gb3B0aW9uIGJhc2VkIG9uIGN1cnJlbnQgZm9jdXNlZCBvcHRpb24gYW5kIGdpdmVuIGRpcmVjdGlvblxuICAgICAqIFNraXAgZGlzYWJsZWQgb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oZm9jdXNEaXJlY3Rpb246IEZvY3VzRGlyZWN0aW9uKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaCgoZHJvcGRvd25PcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZHJvcGRvd25PcHRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dEluZGV4ID0gaW5kZXggKyBmb2N1c0RpcmVjdGlvbjtcblxuICAgICAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgdGhpcy5kcm9wZG93bk9wdGlvbnNbbmV4dEluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRPcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbbmV4dEluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4Kz0gZm9jdXNEaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KG5leHRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gY2xvc2VzdCB0byBpbmRleC4gRmlyc3QgY2hlY2tzIGN1cnJlbnQgaW5kZXgsIFxuICAgICAqIHRoZW4gbmV4dCBpbmRleCwgdGhlbiBwcmV2IGluZGV4LCB0aGUgMm5kIG5leHQgaW5kZXgsIHRoZW4gMm5kIHByZXYgaW5kZXggZXRjLlxuICAgICAqIFNraXBzIGRpc2FibGVkIG9wdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleChpbmRleDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5kcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBicmVha0xvb3AgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPj0gLTE7IGotPSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGluZGV4ICsgKGkgKiBqKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93bk9wdGlvbnNbeF0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldCh0aGlzLmRyb3Bkb3duT3B0aW9uc1t4XSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoeCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChicmVha0xvb3ApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBiYXNlZCBvbiBzZWFyY2hcbiAgICAgKiBJZiBhbGwgbWF0Y2ggKGVtcHR5IHN0cmluZyk6IEZvY3VzIGNsb3Nlc3QgZm9jdXNhYmxlIHRvIGluZGV4IDBcbiAgICAgKiBFbHNlIGlmIG1hdGNoZXMgZm91bmQ6IEZvY3VzIGZpcnN0IG1hdGNoXG4gICAgICogRWxzZSBpZiBzZWFyY2hpbmcgMSBjaGFyOiBGb2N1cyBvcHRpb24gdGhhdCBpcyBhbHBoYWJldGljbHkgY2xvc2VzdCB0byB0aGUgY2hhclxuICAgICAqIEVsc2U6IERvbid0IGNoYW5nZSBmb2N1c1xuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoY2hhcjogc3RyaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgdGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKHRpbWUgPiB0aGlzLnNlYXJjaFRpbWUgKyB0aGlzLnNlYXJjaFRpbWVvdXQpXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0cmluZyA9ICcnO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoVGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nKz0gY2hhci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMuc2VhcmNoU3RyaW5nKSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KDApO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKG1hdGNoZXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFN0cmluZy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5Rmlyc3RMZXR0ZXIodGhpcy5zZWFyY2hTdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gd2hlcmUgZmlyc3QgbGV0dGVyIGlzIGFscGhhYmV0aWNhbGx5IGNsb3Nlc3QgdG8gZ2l2ZW4gY2hhclxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5Rmlyc3RMZXR0ZXIoY2hhcjogc3RyaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoTGV0dGVySW5kZXggPSBwYXJzZUludChjaGFyLCAzNikgLSA5O1xuICAgICAgICBsZXQgbG93ZXN0RGlmZiA9IDI2O1xuICAgICAgICBsZXQgY2xvc2VzdERyb3Bkb3duT3B0aW9uID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXJJbmRleCA9IHBhcnNlSW50KGZpcnN0TGV0dGVyLCAzNikgLSA5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhzZWFyY2hMZXR0ZXJJbmRleCAtIGxldHRlckluZGV4KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA8PSBsb3dlc3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdERpZmYgPSBkaWZmO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RHJvcGRvd25PcHRpb24gPSBkcm9wZG93bk9wdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjbG9zZXN0RHJvcGRvd25PcHRpb24pXG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YoY2xvc2VzdERyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgT2JzZXJ2ZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgc2VsZWN0IG9ic2VydmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTZWxlY3RPYnNlcnZlcigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGFkZGVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVElPTicpLmZvckVhY2gob3B0aW9uTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25Ob2RlIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB0aGlzLmRyb3Bkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5nZXREcm9wZG93bk9wdEdyb3VwRnJvbU1hcChvcHRpb24ucGFyZW50Tm9kZSBhcyBIVE1MT3B0R3JvdXBFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uLCBwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnRzKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSByZW1vdmVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUSU9OJykuZm9yRWFjaChvcHRpb25Ob2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbk5vZGUgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSB0aGlzLnZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IG9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb24gYXMgSFRNTE9wdGlvbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSByZW1vdmVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUR1JPVVAnKS5mb3JFYWNoKG9wdEdyb3VwTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRHcm91cCA9IG9wdEdyb3VwTm9kZSBhcyBIVE1MT3B0R3JvdXBFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEcm9wZG93bk9wdEdyb3VwTm9kZShvcHRHcm91cCBhcyBIVE1MT3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24udGFyZ2V0Lm5vZGVOYW1lID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBtdXRhdGlvbi50YXJnZXQgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5nZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi50YXJnZXQubm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0R3JvdXAgPSBtdXRhdGlvbi50YXJnZXQgYXMgSFRNTE9wdEdyb3VwRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRHcm91cCA9IHRoaXMuZ2V0RHJvcGRvd25PcHRHcm91cEZyb21NYXAob3B0R3JvdXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0R3JvdXAoZHJvcGRvd25PcHRHcm91cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3RPYnNlcnZlci5vYnNlcnZlKHRoaXMuc2VsZWN0LCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEhlbHBlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIElzIGRlc2NlbmRhbnQgaGVscGVyIGNsYXNzXG4gICAgICogVGhpcyBjb3VsZCBtYXliZSBiZSBtb3ZlZCB0byBhIGhlbHBlciBwYWNrYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBOb2RlLCBjaGlsZDogSFRNTEVsZW1lbnQpOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChub2RlID09IHBhcmVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgZHJvcGRvd24gb3B0aW9uIGZyb20gbWFwIGJ5IGdpdmVuIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IG51bGx8SFRNTEFuY2hvckVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duT3B0aW9uc01hcCkuZmlsdGVyKHZhbHVlID0+IHZhbHVlWzFdID09PSBvcHRpb24pO1xuICAgICAgICByZXR1cm4gKGZpbHRlcmVkLmxlbmd0aCA9PT0gMSkgPyBmaWx0ZXJlZFswXVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgZHJvcGRvd24gb3B0aW9uIGZyb20gbWFwIGJ5IGdpdmVuIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXREcm9wZG93bk9wdEdyb3VwRnJvbU1hcChvcHRHcm91cDogSFRNTE9wdEdyb3VwRWxlbWVudCk6IG51bGx8SFRNTERpdkVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duT3B0R3JvdXBzTWFwKS5maWx0ZXIodmFsdWUgPT4gdmFsdWVbMV0gPT09IG9wdEdyb3VwKTtcbiAgICAgICAgcmV0dXJuIChmaWx0ZXJlZC5sZW5ndGggPT09IDEpID8gZmlsdGVyZWRbMF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IHNlbGVjdGVkIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkT3B0aW9ucygpOiBBcnJheTxIVE1MT3B0aW9uRWxlbWVudD5cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgIH1cbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=