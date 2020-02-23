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
    multiSelectEl.querySelector('select').appendChild(addOption);
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
        this.dropdownOptionsMap = new Map();
        this.searchTime = (new Date()).getTime();
        this.searchTimeout = 2000;
        this.searchString = '';
        this.isOpen = false;
        this.keydown = false;
        this.initialized = false;
        this.defaultSettings = {
            dropdownClass: 'select__dropdown',
            dropdownOptionClass: 'select__dropdown-option',
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
            this.addDropdownNode();
            this.createDropdownOptionNodes();
            this.updateSelectStyling();
            this.addDropdownOptionEvents();
            this.addTriggerEvent();
            this.addDropdownEvent();
            if (this.autofocus && !this.disabled) {
                this.trigger.click();
            }
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
            this.options.forEach(function (option) {
                option.selected = values.includes(option.value);
            });
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
    VVSelect.prototype.updateSelectStyling = function () {
        this.select.style.zIndex = '0';
        this.select.tabIndex = -1;
    };
    VVSelect.prototype.addDropdownNode = function () {
        this.dropdown = document.createElement('div');
        if (this.settings['dropdownClass'])
            this.dropdown.classList.add(this.settings['dropdownClass']);
        this.element.appendChild(this.dropdown);
    };
    VVSelect.prototype.createDropdownOptionNodes = function () {
        var _this = this;
        this.dropdownOptions = new Array();
        this.options.forEach(function (option) {
            _this.createDropdownOptionNode(option);
        });
    };
    VVSelect.prototype.createDropdownOptionNode = function (option) {
        var dropdownOption = document.createElement('a');
        dropdownOption.tabIndex = 0;
        dropdownOption.href = 'javascript:;';
        if (this.settings['dropdownOptionClass'])
            dropdownOption.className = this.settings['dropdownOptionClass'];
        this.dropdownOptionsMap.set(dropdownOption, option);
        this.dropdown.appendChild(dropdownOption);
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
    VVSelect.prototype.updateDropdownOptions = function () {
        var _this = this;
        this.dropdownOptions.forEach(function (dropdownOption) {
            _this.updateDropdownOption(dropdownOption);
        });
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
    VVSelect.prototype.addSelectEvent = function () {
        var _this = this;
        this.select.addEventListener('change', function () {
            _this.updateTriggerText();
            if (_this.useDropdown)
                _this.updateDropdownOptions();
            _this.settings.onChange();
        });
    };
    VVSelect.prototype.addDropdownOptionEvents = function () {
        var _this = this;
        this.dropdownOptions.forEach(function (dropdownOption) {
            _this.addDropdownOptionEvent(dropdownOption);
        });
    };
    VVSelect.prototype.addDropdownOptionEvent = function (dropdownOption) {
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
    VVSelect.prototype.addDropdownEvent = function () {
        var _this = this;
        this.dropdown.addEventListener('keydown', function (ev) {
            _this.keydown = true;
            console.log('keydown');
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
                            var dropdownOption = _this.createDropdownOptionNode(option);
                            _this.addDropdownOptionEvent(dropdownOption);
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
                }
                if (mutation.type === 'attributes' && mutation.target.nodeName === 'OPTION') {
                    var option = mutation.target;
                    var dropdownOption = _this.getDropdownOptionFromMap(option);
                    _this.updateDropdownOption(dropdownOption);
                }
            });
        });
        var config = { attributes: true, childList: true, characterData: true, subtree: true };
        this.selectObserver.observe(this.select, config);
    };
    VVSelect.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    VVSelect.prototype.getDropdownOptionFromMap = function (option) {
        var filtered = Array.from(this.dropdownOptionsMap).filter(function (value) { return value[1] === option; });
        return (filtered.length === 1) ? filtered[0][0] : null;
    };
    VVSelect.prototype.addDocumentEvent = function () {
        document.addEventListener('click', this.handleDocumentClick);
    };
    VVSelect.prototype.removeDocumentEvent = function () {
        document.removeEventListener('click', this.handleDocumentClick);
    };
    VVSelect.prototype.handleDocumentClick = function (ev) {
        var target = ev.target;
        if (target !== this.element && !this.isDescendant(this.element, target)) {
            this.close();
        }
    };
    VVSelect.prototype.getSelectedOptions = function () {
        return this.options.filter(function (option) { return option.selected; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RldmVsb3BtZW50L3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZGQUFxQztBQUVyQyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU1RSxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFD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QWtCLEVBQUUsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLElBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekU7YUFBTTtZQUNILElBQU0sSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4RCxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RTtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBWVlNlbGVjdCBmcm9tICdzY3JpcHRzL2luZGV4JztcblxuY29uc3QgbXVsdGlTZWxlY3RFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVsdGlTZWxlY3QnKTtcbmNvbnN0IHNpbmdsZVNlbGVjdEVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGVTZWxlY3QnKTtcblxuY29uc3QgbXVsdGlTdGF0dXNFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVsdGlTdGF0dXMnKTtcbmNvbnN0IHNpbmdsZVN0YXR1c0VsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGVTdGF0dXMnKTtcblxuLy8gQWRkIHN0YXR1cyBjaGFuZ2UgdG8gRE9NXG5jb25zdCBhZGRTdGF0dXNDaGFuZ2U6IEZ1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nLCBzZWxlY3QsIHN0YXR1c0VsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChzZWxlY3QubXVsdGlwbGUpIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3N0YXR1c30gLSAke3NlbGVjdC52YWx1ZS5qb2luKCcsJyl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7c3RhdHVzfSAtICR7c2VsZWN0LnZhbHVlfWA7XG4gICAgfVxuICAgIHN0YXR1c0VsLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbi8vIFRlc3QgbXVsdGkgc2VsZWN0XG5jb25zdCB0ZXN0TXVsdGlTZWxlY3Q6IEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IG5ldyBWVlNlbGVjdChtdWx0aVNlbGVjdEVsLCB7XG4gICAgICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IFwiJXMgZ2VzZWxlY3RlZXJkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdGVlciBvcHRpZXNcIixcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBzZWxlY3Qub25Jbml0aWFsaXplID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdpbml0aWFsaXplZCcsIHNlbGVjdCwgbXVsdGlTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2hhbmdlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjaGFuZ2VkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcbiAgICBzZWxlY3Qub25PcGVuID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdvcGVuZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNsb3NlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjbG9zZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuXG4gICAgc2VsZWN0LmluaXQoKTtcblxuICAgIHNlbGVjdC52YWx1ZSA9IFsnMicsICczJ107XG5cbiAgICAvLyBBZGQgb3B0aW9uXG4gICAgY29uc3QgYWRkT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGFkZE9wdGlvbi52YWx1ZSA9ICdhZGRlZF9vcHRpb24nO1xuICAgIGFkZE9wdGlvbi50ZXh0Q29udGVudCA9ICdhZGRlZCBvcHRpb24nO1xuICAgIG11bHRpU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuYXBwZW5kQ2hpbGQoYWRkT3B0aW9uKTtcblxuICAgIC8vIFJlbW92ZSBvcHRpb25cbiAgICBjb25zdCByZW1vdmVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gbXVsdGlTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdvcHRpb246bnRoLWNoaWxkKDIpJylcbiAgICByZW1vdmVPcHRpb24ucmVtb3ZlKCk7XG59XG5cbi8vIFRlc3Qgc2luZ2xlIHNlbGVjdFxuY29uc3QgdGVzdFNpbmdsZVNlbGVjdDogRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gbmV3IFZWU2VsZWN0KHNpbmdsZVNlbGVjdEVsLCB7XG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJLaWVzIGVlbiBvcHRpZVwiLFxuICAgIH0sIGZhbHNlKTtcblxuICAgIHNlbGVjdC5vbkluaXRpYWxpemUgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2luaXRpYWxpemVkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2hhbmdlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjaGFuZ2VkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uT3BlbiA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnb3BlbmVkJywgc2VsZWN0LCBzaW5nbGVTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uQ2xvc2UgPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ2Nsb3NlZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuXG4gICAgc2VsZWN0LmluaXQoKTtcblxuICAgIHNlbGVjdC52YWx1ZSA9ICczJztcblxuICAgIC8vIEFkZCBvcHRpb25cbiAgICBjb25zdCBhZGRPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgYWRkT3B0aW9uLnZhbHVlID0gJ2FkZGVkX29wdGlvbic7XG4gICAgYWRkT3B0aW9uLnRleHRDb250ZW50ID0gJ2FkZGVkIG9wdGlvbic7XG4gICAgYWRkT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzaW5nbGVTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5hcHBlbmRDaGlsZChhZGRPcHRpb24pO1xuXG4gICAgLy8gUmVtb3ZlIG9wdGlvblxuICAgIGNvbnN0IHJlbW92ZU9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBzaW5nbGVTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdvcHRpb246bnRoLWNoaWxkKDIpJylcbiAgICByZW1vdmVPcHRpb24ucmVtb3ZlKCk7XG5cbiAgICBjb25zdCB1cGRhdGVPcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gc2luZ2xlU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgxKScpO1xuICAgIHVwZGF0ZU9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgdXBkYXRlT3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIHVwZGF0ZU9wdGlvbi5pbm5lclRleHQgPSAndGV4dCc7XG59XG5cbnRlc3RNdWx0aVNlbGVjdCgpO1xudGVzdFNpbmdsZVNlbGVjdCgpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaXNNb2JpbGVcbm1vZHVsZS5leHBvcnRzLmlzTW9iaWxlID0gaXNNb2JpbGVcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBpc01vYmlsZVxuXG52YXIgbW9iaWxlUkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pXG5cbnZhciB0YWJsZXRSRSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllc1s0Nl0wfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2lcblxuZnVuY3Rpb24gaXNNb2JpbGUgKG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cbiAgdmFyIHVhID0gb3B0cy51YVxuICBpZiAoIXVhICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgaWYgKHVhICYmIHVhLmhlYWRlcnMgJiYgdHlwZW9mIHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA9PT0gJ3N0cmluZycpIHtcbiAgICB1YSA9IHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxuICB9XG4gIGlmICh0eXBlb2YgdWEgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2VcblxuICByZXR1cm4gb3B0cy50YWJsZXQgPyB0YWJsZXRSRS50ZXN0KHVhKSA6IG1vYmlsZVJFLnRlc3QodWEpXG59XG4iLCIvKiFcbiAqIFZWU2VsZWN0XG4gKiAoYykgMjAyMCBUZWQgR29keWxhXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ2lzLW1vYmlsZSc7XG5cbmludGVyZmFjZSBWVlNlbGVjdFNldHRpbmdzIHtcbiAgICBkcm9wZG93bkNsYXNzOiBzdHJpbmc7XG4gICAgZHJvcGRvd25PcHRpb25DbGFzczogc3RyaW5nO1xuICAgIG9wZW5DbGFzczogc3RyaW5nO1xuICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IHN0cmluZztcbiAgICBtdWx0aXBsZUZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgc2luZ2xlRm9ybWF0OiBzdHJpbmc7XG4gICAgb25Jbml0aWFsaXplOiBGdW5jdGlvbjtcbiAgICBvbk9wZW46IEZ1bmN0aW9uO1xuICAgIG9uQ2xvc2U6IEZ1bmN0aW9uO1xuICAgIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbn1cblxuZW51bSBGb2N1c0RpcmVjdGlvbiB7XG4gICAgcHJldiA9IC0xLFxuICAgIG5leHQgPSAxLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWVlNlbGVjdCB7XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBWYXJpYWJsZXNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdHJpZ2dlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0T2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBBcnJheTxIVE1MT3B0aW9uRWxlbWVudD47XG4gICAgcHJpdmF0ZSBkcm9wZG93bjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkcm9wZG93bk9wdGlvbnM6IEFycmF5PEhUTUxBbmNob3JFbGVtZW50PjtcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0aW9uc01hcDogTWFwPEhUTUxBbmNob3JFbGVtZW50LCBIVE1MT3B0aW9uRWxlbWVudD4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIHNlYXJjaFRpbWU6IG51bWJlciA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lb3V0OiBudW1iZXIgPSAyMDAwOyAvLyAyIHNlY29uZHNcbiAgICBwcml2YXRlIHNlYXJjaFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSB1c2VEcm9wZG93bjogYm9vbGVhbjtcbiAgICBwcml2YXRlIG11bHRpcGxlOiBib29sZWFuO1xuICAgIHByaXZhdGUgYXV0b2ZvY3VzOiBib29sZWFuO1xuICAgIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGtleWRvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNldHRpbmdzOiBWVlNlbGVjdFNldHRpbmdzO1xuICAgIFxuICAgIHJlYWRvbmx5IGRlZmF1bHRTZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncyA9IHtcbiAgICAgICAgZHJvcGRvd25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24nLFxuICAgICAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiAnc2VsZWN0X19kcm9wZG93bi1vcHRpb24nLFxuICAgICAgICBvcGVuQ2xhc3M6ICdpcy1vcGVuJyxcbiAgICAgICAgbXVsdGlwbGVTZWxlY3RlZEZvcm1hdDogXCIlcyBzZWxlY3RlZFwiLFxuICAgICAgICBtdWx0aXBsZUZvcm1hdDogXCJTZWxlY3Qgb3B0aW9uc1wiLFxuICAgICAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogXCIlc1wiLFxuICAgICAgICBzaW5nbGVGb3JtYXQ6IFwiQ2hvb3NlIGFuIG9wdGlvblwiLFxuICAgICAgICBvbkluaXRpYWxpemU6ICgpID0+IHt9LFxuICAgICAgICBvbk9wZW46ICgpID0+IHt9LFxuICAgICAgICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIENvbnN0cnVjdG9yXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBvYmplY3QgPSB7fSwgaW5pdGlhbGl6ZU9uQ29uc3RydWN0OiBib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0U2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldKSBzZXR0aW5nc1trZXldID0gdGhpcy5lbGVtZW50LmRhdGFzZXRba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHsuLi50aGlzLmRlZmF1bHRTZXR0aW5ncywgLi4uc2V0dGluZ3MgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpO1xuXG4gICAgICAgIHRoaXMudXNlRHJvcGRvd24gPSAhaXNNb2JpbGUoeyB0YWJsZXQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSB0aGlzLnNlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgdGhpcy5hdXRvZm9jdXMgPSB0aGlzLnNlbGVjdC5hdXRvZm9jdXM7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLnNlbGVjdC5kaXNhYmxlZDtcblxuICAgICAgICBpZiAoaW5pdGlhbGl6ZU9uQ29uc3RydWN0KVxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgSW5pdGlhbGl6ZVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIHB1YmxpYyBpbml0KCkgXG4gICAge1xuICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikge1xuICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bk5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTdHlsaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmFkZFRyaWdnZXJFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bkV2ZW50KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlci5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRTZWxlY3RFdmVudCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUZXh0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2VsZWN0T2JzZXJ2ZXIoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25Jbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgR2V0dGVycyBhbmQgc2V0dGVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogR2V0IHZhbHVlLiBSZXR1cm5zIGFycmF5IG9uIG11bHRpcGxlIHNlbGVjdCBhbmQgYSBzdHJpbmcgb24gc2luZ2xlIHNlbGVjdFxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpOiBBcnJheTxzdHJpbmc+fHN0cmluZ1xuICAgIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKS5tYXAoZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMubXVsdGlwbGUpID8gdmFsdWVzIDogKHZhbHVlcy5sZW5ndGggPT09IDEgKSA/IHZhbHVlc1swXSA6ICcnO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IHZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlczogQXJyYXk8c3RyaW5nPnxzdHJpbmcpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBpbnRpYWxpemVkIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uSW5pdGlhbGl6ZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uSW5pdGlhbGl6ZSA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGNoYW5nZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkNoYW5nZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gb3BlbiBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbk9wZW4oZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbk9wZW4gPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBjbG9zZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkNsb3NlKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DbG9zZSA9IGZuO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFB1YmxpYyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIE9wZW4gZHJvcGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkNsb3Nlc3RUb0luZGV4KDApO1xuXG4gICAgICAgIHRoaXMuYWRkRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDbG9zZSBkcm9wZG93biBhbmQgcmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DbG9zZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZVNlbGVjdFN0eWxpbmdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdFN0eWxpbmcoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3Quc3R5bGUuekluZGV4ID0gJzAnO1xuICAgICAgICB0aGlzLnNlbGVjdC50YWJJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duTm9kZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSlcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZXMgYmFzZWQgb24gYWxsIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IG51bGx8SFRNTEFuY2hvckVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnRhYkluZGV4ID0gMDtcbiAgICAgICAgZHJvcGRvd25PcHRpb24uaHJlZiA9ICdqYXZhc2NyaXB0OjsnO1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdGlvbkNsYXNzJ10pXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbi5jbGFzc05hbWUgPSB0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdGlvbkNsYXNzJ107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5zZXQoZHJvcGRvd25PcHRpb24sIG9wdGlvbik7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5wdXNoKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICByZXR1cm4gZHJvcGRvd25PcHRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IHZvaWQgXG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihlbCA9PiBlbCAhPT0gZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGFsbCBkcm9wZG93biBvcHRpb24gbm9kZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9ucygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBnaXZlbiBkcm9wZG93biBvcHRpb24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgcHJvcHNUb0RhdGFzZXQgPSBbJ2Rpc2FibGVkJywgJ3NlbGVjdGVkJywgJ3ZhbHVlJ107XG4gICAgICAgIHByb3BzVG9EYXRhc2V0LmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbltwcm9wXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbltwcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSA9ICcnO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdICE9PSBvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSBvcHRpb25bcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnRhYkluZGV4ID0gKG9wdGlvbi5kaXNhYmxlZCkgPyAtMSA6IDA7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgICAgaWYgKGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ICE9PSBvcHRpb24udGV4dENvbnRlbnQpXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNlbGVjdEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclRleHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbnMoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbkV2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudChkcm9wZG93bk9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIG9wdGlvbnMgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duT3B0aW9uRXZlbnQoZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBTZWxlY3QgZHJvcGRvd24gb3B0aW9uIG9uIGNsaWNrXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgLy8gLSBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAvLyAtIENsb3NlIGRyb3Bkb3duIGFmdGVyd2FyZHMgZm9yIHNpbmdsZSBzZWxlY3RcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAhb3B0aW9uLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlICYmICFvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLSBGb2N1cyBkcm9wZG93biBvcHRpb24gb24gbW91c2VvdmVyXG4gICAgICAgIC8vIC0gSWdub3JlIGZvciBkaXNhYmxlZCBvcHRpb24gb3Igd2hlbiB0eXBpbmdcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5ZG93bilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKGRyb3Bkb3duT3B0aW9uKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0gUHJldmVudCBkcm9wZG93biBvcHRpb24gZm9jdXMgb24gZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIHRyaWdnZXIgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFRyaWdnZXJFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyAtIE9wZW4vY2xvc2UgZHJvcGRvd25cbiAgICAgICAgLy8gLSBJZ25vcmUgd2hlbiBzZWxlY3QgaXMgZGlzYWJsZWRcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgKHRoaXMuaXNPcGVuKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBldmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duRXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gLSBGb2N1cyBuZXh0IGRyb3Bkb3duIG9wdGlvbiBvbiBrZXkgZG93blxuICAgICAgICAvLyAtIEZvY3VzIHByZXZpb3VzIGRyb3Bkb3duIG9wdGlvbiBvbiBrZXkgdXBcbiAgICAgICAgLy8gLSBGb2N1cyBkcm9wZG93biBvcHRpb24gdGhhdCBtYXRjaGVkIHNlYXJjaCBzdHJpbmcgd2hlbiB0eXBpbmdcbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXYgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlkb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleWRvd24nKTtcblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDM4KSB7IC8vIHVwXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihGb2N1c0RpcmVjdGlvbi5wcmV2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ubmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gOCkgeyAvLyBiYWNrc3BhY2VcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nID0gdGhpcy5zZWFyY2hTdHJpbmcuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5U2VhcmNoZWRTdHJpbmcoJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGNoYXIgJiYgY2hhci5tYXRjaCgvXlthLXowLTkgXSskL2kpKSAmJlxuICAgICAgICAgICAgICAgICEoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlTZWFyY2hlZFN0cmluZyhjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBieSBpbmRleFxuICAgICAqIElnbm9yZSBkaXNhYmxlZCBvcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldCh0aGlzLmRyb3Bkb3duT3B0aW9uc1tpbmRleF0pO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc1tpbmRleF0uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBuZXh0IGRyb3Bkb3duIG9wdGlvbiBiYXNlZCBvbiBjdXJyZW50IGZvY3VzZWQgb3B0aW9uIGFuZCBnaXZlbiBkaXJlY3Rpb25cbiAgICAgKiBTa2lwIGRpc2FibGVkIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKGZvY3VzRGlyZWN0aW9uOiBGb2N1c0RpcmVjdGlvbik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmZvckVhY2goKGRyb3Bkb3duT3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRyb3Bkb3duT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgZm9jdXNEaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodHlwZW9mIHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0T3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCs9IGZvY3VzRGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGNsb3Nlc3QgdG8gaW5kZXguIEZpcnN0IGNoZWNrcyBjdXJyZW50IGluZGV4LCBcbiAgICAgKiB0aGVuIG5leHQgaW5kZXgsIHRoZW4gcHJldiBpbmRleCwgdGhlIDJuZCBuZXh0IGluZGV4LCB0aGVuIDJuZCBwcmV2IGluZGV4IGV0Yy5cbiAgICAgKiBTa2lwcyBkaXNhYmxlZCBvcHRpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnJlYWtMb29wID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqID49IC0xOyBqLT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBpbmRleCArIChpICogaik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25PcHRpb25zW3hdKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbeF0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnJlYWtMb29wKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gYmFzZWQgb24gc2VhcmNoXG4gICAgICogSWYgYWxsIG1hdGNoIChlbXB0eSBzdHJpbmcpOiBGb2N1cyBjbG9zZXN0IGZvY3VzYWJsZSB0byBpbmRleCAwXG4gICAgICogRWxzZSBpZiBtYXRjaGVzIGZvdW5kOiBGb2N1cyBmaXJzdCBtYXRjaFxuICAgICAqIEVsc2UgaWYgc2VhcmNoaW5nIDEgY2hhcjogRm9jdXMgb3B0aW9uIHRoYXQgaXMgYWxwaGFiZXRpY2x5IGNsb3Nlc3QgdG8gdGhlIGNoYXJcbiAgICAgKiBFbHNlOiBEb24ndCBjaGFuZ2UgZm9jdXNcbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeVNlYXJjaGVkU3RyaW5nKGNoYXI6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmICh0aW1lID4gdGhpcy5zZWFyY2hUaW1lICsgdGhpcy5zZWFyY2hUaW1lb3V0KVxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdHJpbmcgPSAnJztcblxuICAgICAgICB0aGlzLnNlYXJjaFRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmluZys9IGNoYXIudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5kcm9wZG93bk9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFN0cmluZykpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gdGhpcy5kcm9wZG93bk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25DbG9zZXN0VG9JbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQ2xvc2VzdFRvSW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihtYXRjaGVzWzBdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTdHJpbmcubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUZpcnN0TGV0dGVyKHRoaXMuc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gd2hlcmUgZmlyc3QgbGV0dGVyIGlzIGFscGhhYmV0aWNhbGx5IGNsb3Nlc3QgdG8gZ2l2ZW4gY2hhclxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5Rmlyc3RMZXR0ZXIoY2hhcjogc3RyaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoTGV0dGVySW5kZXggPSBwYXJzZUludChjaGFyLCAzNikgLSA5O1xuICAgICAgICBsZXQgbG93ZXN0RGlmZiA9IDI2O1xuICAgICAgICBsZXQgY2xvc2VzdERyb3Bkb3duT3B0aW9uID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXJJbmRleCA9IHBhcnNlSW50KGZpcnN0TGV0dGVyLCAzNikgLSA5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhzZWFyY2hMZXR0ZXJJbmRleCAtIGxldHRlckluZGV4KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA8PSBsb3dlc3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdERpZmYgPSBkaWZmO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RHJvcGRvd25PcHRpb24gPSBkcm9wZG93bk9wdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjbG9zZXN0RHJvcGRvd25PcHRpb24pXG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YoY2xvc2VzdERyb3Bkb3duT3B0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgc2VsZWN0IG9ic2VydmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTZWxlY3RPYnNlcnZlcigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGFkZGVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVElPTicpLmZvckVhY2gob3B0aW9uTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25Ob2RlIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnQoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgcmVtb3ZlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlTmFtZSA9PT0gJ09QVElPTicpLmZvckVhY2gob3B0aW9uTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25Ob2RlIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlID0gdGhpcy52YWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBvcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VEcm9wZG93bikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uIGFzIEhUTUxPcHRpb25FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLnRhcmdldC5ub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gbXV0YXRpb24udGFyZ2V0IGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNlbGVjdCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElzIGRlc2NlbmRhbnQgaGVscGVyIGNsYXNzXG4gICAgICogVGhpcyBjb3VsZCBtYXliZSBiZSBtb3ZlZCB0byBhIGhlbHBlciBwYWNrYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBOb2RlLCBjaGlsZDogSFRNTEVsZW1lbnQpOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChub2RlID09IHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgZHJvcGRvd24gb3B0aW9uIGZyb20gbWFwIGJ5IGdpdmVuIHZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IG51bGx8SFRNTEFuY2hvckVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duT3B0aW9uc01hcCkuZmlsdGVyKHZhbHVlID0+IHZhbHVlWzFdID09PSBvcHRpb24pO1xuICAgICAgICByZXR1cm4gKGZpbHRlcmVkLmxlbmd0aCA9PT0gMSkgPyBmaWx0ZXJlZFswXVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERvY3VtZW50RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEb2N1bWVudEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBkb2N1bWVudCBjbGlja1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRG9jdW1lbnRDbGljayhldjogRXZlbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICYmICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsZW1lbnQsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IHNlbGVjdGVkIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkT3B0aW9ucygpOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50fEhUTUxPcHRpb25FbGVtZW50PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgdHJpZ2dlciB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmlnZ2VyVGV4dCgpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IFN0cmluZyhlbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKGFtb3VudCkgPyAnbXVsdGlwbGVTZWxlY3RlZEZvcm1hdCcgOiAnbXVsdGlwbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCBhbW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IChlbGVtZW50c1swXSkgPyBlbGVtZW50c1swXS5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9ICh0ZXh0KSA/ICdzaW5nbGVTZWxlY3RlZEZvcm1hdCcgOiAnc2luZ2xlRm9ybWF0JztcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5pbm5lclRleHQgPSB0aGlzLnNldHRpbmdzW2Zvcm1hdF0ucmVwbGFjZSgvJXMvZywgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==