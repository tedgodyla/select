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
        if (this.dropdownOptions.length) {
            this.dropdownOptions[0].focus();
            this.focusDropdownOptionByDirection(FocusDirection.next);
        }
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
        dropdownOption.addEventListener('click', function () {
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
        });
        dropdownOption.addEventListener('mouseover', function () {
            if (_this.keydown)
                return;
            var option = _this.dropdownOptionsMap.get(dropdownOption);
            if (option.disabled)
                return;
            _this.focusDropdownOptionByIndex(_this.dropdownOptions.indexOf(dropdownOption));
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
            if (ev.keyCode === 38) {
                ev.preventDefault();
                _this.focusDropdownOptionByDirection(FocusDirection.prev);
            }
            if (ev.keyCode === 40) {
                ev.preventDefault();
                _this.focusDropdownOptionByDirection(FocusDirection.next);
            }
            var char = String.fromCharCode(ev.keyCode);
            if (char &&
                char.match(/^[a-z0-9 ]+$/i) &&
                !(ev.ctrlKey || ev.altKey || ev.metaKey || ev.repeat)) {
                ev.preventDefault();
                _this.focusSearchedDropdownOption(char);
            }
        });
        this.dropdown.addEventListener('keyup', function (ev) {
            _this.keydown = false;
        });
    };
    VVSelect.prototype.focusDropdownOptionByDirection = function (focusDirection) {
        var _this = this;
        this.dropdownOptions.forEach(function (dropdownOption, index) {
            if (document.activeElement === dropdownOption) {
                var nextIndex = index + focusDirection;
                while (typeof _this.dropdownOptions[nextIndex] !== 'undefined') {
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
    VVSelect.prototype.focusSearchedDropdownOption = function (char) {
        var _this = this;
        var time = (new Date()).getTime();
        if (time > this.searchTime + this.searchTimeout)
            this.searchString = '';
        this.searchTime = time;
        this.searchString += char.toLowerCase();
        console.log(this.searchString);
        var matches = this.dropdownOptions.filter(function (option) { return option.innerHTML.toLowerCase().startsWith(_this.searchString); });
        if (matches.length) {
            this.focusDropdownOptionByIndex(this.dropdownOptions.indexOf(matches[0]));
        }
        else if (this.searchString.length === 1) {
            this.focusDropdownOptionByIndex(0);
        }
    };
    VVSelect.prototype.focusDropdownOptionByIndex = function (index) {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.dropdownOptions[index].focus();
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RldmVsb3BtZW50L3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZGQUFxQztBQUVyQyxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU1RSxJQUFNLGFBQWEsR0FBZ0IsUUFBUSxDQUFD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QUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgVlZTZWxlY3QgZnJvbSAnc2NyaXB0cy9pbmRleCc7XG5cbmNvbnN0IG11bHRpU2VsZWN0RWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI211bHRpU2VsZWN0Jyk7XG5jb25zdCBzaW5nbGVTZWxlY3RFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2luZ2xlU2VsZWN0Jyk7XG5cbmNvbnN0IG11bHRpU3RhdHVzRWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI211bHRpU3RhdHVzJyk7XG5jb25zdCBzaW5nbGVTdGF0dXNFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2luZ2xlU3RhdHVzJyk7XG5cbi8vIEFkZCBzdGF0dXMgY2hhbmdlIHRvIERPTVxuY29uc3QgYWRkU3RhdHVzQ2hhbmdlOiBGdW5jdGlvbiA9IChzdGF0dXM6IHN0cmluZywgc2VsZWN0LCBzdGF0dXNFbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBgJHtzdGF0dXN9IC0gJHtzZWxlY3QudmFsdWUuam9pbignLCcpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3N0YXR1c30gLSAke3NlbGVjdC52YWx1ZX1gO1xuICAgIH1cbiAgICBzdGF0dXNFbC5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG4vLyBUZXN0IG11bHRpIHNlbGVjdFxuY29uc3QgdGVzdE11bHRpU2VsZWN0OiBGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3QgPSBuZXcgVlZTZWxlY3QobXVsdGlTZWxlY3RFbCwge1xuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIGdlc2VsZWN0ZWVyZFwiLFxuICAgICAgICBtdWx0aXBsZUZvcm1hdDogXCJTZWxlY3RlZXIgb3B0aWVzXCIsXG4gICAgfSwgZmFsc2UpO1xuXG4gICAgc2VsZWN0Lm9uSW5pdGlhbGl6ZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnaW5pdGlhbGl6ZWQnLCBzZWxlY3QsIG11bHRpU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNoYW5nZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2hhbmdlZCcsIHNlbGVjdCwgbXVsdGlTdGF0dXNFbCk7XG4gICAgc2VsZWN0Lm9uT3BlbiA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnb3BlbmVkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcbiAgICBzZWxlY3Qub25DbG9zZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2xvc2VkJywgc2VsZWN0LCBtdWx0aVN0YXR1c0VsKTtcblxuICAgIHNlbGVjdC5pbml0KCk7XG5cbiAgICBzZWxlY3QudmFsdWUgPSBbJzInLCAnMyddO1xuXG4gICAgLy8gQWRkIG9wdGlvblxuICAgIGNvbnN0IGFkZE9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBhZGRPcHRpb24udmFsdWUgPSAnYWRkZWRfb3B0aW9uJztcbiAgICBhZGRPcHRpb24udGV4dENvbnRlbnQgPSAnYWRkZWQgb3B0aW9uJztcbiAgICBtdWx0aVNlbGVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFwcGVuZENoaWxkKGFkZE9wdGlvbik7XG5cbiAgICAvLyBSZW1vdmUgb3B0aW9uXG4gICAgY29uc3QgcmVtb3ZlT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IG11bHRpU2VsZWN0RWwucXVlcnlTZWxlY3Rvcignb3B0aW9uOm50aC1jaGlsZCgyKScpXG4gICAgcmVtb3ZlT3B0aW9uLnJlbW92ZSgpO1xufVxuXG4vLyBUZXN0IHNpbmdsZSBzZWxlY3RcbmNvbnN0IHRlc3RTaW5nbGVTZWxlY3Q6IEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IG5ldyBWVlNlbGVjdChzaW5nbGVTZWxlY3RFbCwge1xuICAgICAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogXCIlc1wiLFxuICAgICAgICBzaW5nbGVGb3JtYXQ6IFwiS2llcyBlZW4gb3B0aWVcIixcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBzZWxlY3Qub25Jbml0aWFsaXplID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdpbml0aWFsaXplZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNoYW5nZSA9ICgpID0+IGFkZFN0YXR1c0NoYW5nZSgnY2hhbmdlZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbk9wZW4gPSAoKSA9PiBhZGRTdGF0dXNDaGFuZ2UoJ29wZW5lZCcsIHNlbGVjdCwgc2luZ2xlU3RhdHVzRWwpO1xuICAgIHNlbGVjdC5vbkNsb3NlID0gKCkgPT4gYWRkU3RhdHVzQ2hhbmdlKCdjbG9zZWQnLCBzZWxlY3QsIHNpbmdsZVN0YXR1c0VsKTtcblxuICAgIHNlbGVjdC5pbml0KCk7XG5cbiAgICBzZWxlY3QudmFsdWUgPSAnMyc7XG5cbiAgICAvLyBBZGQgb3B0aW9uXG4gICAgY29uc3QgYWRkT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGFkZE9wdGlvbi52YWx1ZSA9ICdhZGRlZF9vcHRpb24nO1xuICAgIGFkZE9wdGlvbi50ZXh0Q29udGVudCA9ICdhZGRlZCBvcHRpb24nO1xuICAgIHNpbmdsZVNlbGVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFwcGVuZENoaWxkKGFkZE9wdGlvbik7XG5cbiAgICAvLyBSZW1vdmUgb3B0aW9uXG4gICAgY29uc3QgcmVtb3ZlT3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IHNpbmdsZVNlbGVjdEVsLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpudGgtY2hpbGQoMiknKVxuICAgIHJlbW92ZU9wdGlvbi5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHVwZGF0ZU9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQgPSBzaW5nbGVTZWxlY3RFbC5xdWVyeVNlbGVjdG9yKCdvcHRpb246bnRoLWNoaWxkKDEpJyk7XG4gICAgdXBkYXRlT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB1cGRhdGVPcHRpb24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgdXBkYXRlT3B0aW9uLmlubmVyVGV4dCA9ICd0ZXh0Jztcbn1cblxudGVzdE11bHRpU2VsZWN0KCk7XG50ZXN0U2luZ2xlU2VsZWN0KCk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpc01vYmlsZVxubW9kdWxlLmV4cG9ydHMuaXNNb2JpbGUgPSBpc01vYmlsZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlXG5cbnZhciBtb2JpbGVSRSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllc1s0Nl0wfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2lcblxudmFyIHRhYmxldFJFID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzWzQ2XTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaVxuXG5mdW5jdGlvbiBpc01vYmlsZSAob3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuICB2YXIgdWEgPSBvcHRzLnVhXG4gIGlmICghdWEgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxuICBpZiAodWEgJiYgdWEuaGVhZGVycyAmJiB0eXBlb2YgdWEuaGVhZGVyc1sndXNlci1hZ2VudCddID09PSAnc3RyaW5nJykge1xuICAgIHVhID0gdWEuaGVhZGVyc1sndXNlci1hZ2VudCddXG4gIH1cbiAgaWYgKHR5cGVvZiB1YSAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiBvcHRzLnRhYmxldCA/IHRhYmxldFJFLnRlc3QodWEpIDogbW9iaWxlUkUudGVzdCh1YSlcbn1cbiIsIi8qIVxuICogVlZTZWxlY3RcbiAqIChjKSAyMDIwIFRlZCBHb2R5bGFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnaXMtbW9iaWxlJztcblxuaW50ZXJmYWNlIFZWU2VsZWN0U2V0dGluZ3Mge1xuICAgIGRyb3Bkb3duQ2xhc3M6IHN0cmluZztcbiAgICBkcm9wZG93bk9wdGlvbkNsYXNzOiBzdHJpbmc7XG4gICAgb3BlbkNsYXNzOiBzdHJpbmc7XG4gICAgbXVsdGlwbGVTZWxlY3RlZEZvcm1hdDogc3RyaW5nO1xuICAgIG11bHRpcGxlRm9ybWF0OiBzdHJpbmc7XG4gICAgc2luZ2xlU2VsZWN0ZWRGb3JtYXQ6IHN0cmluZztcbiAgICBzaW5nbGVGb3JtYXQ6IHN0cmluZztcbiAgICBvbkluaXRpYWxpemU6IEZ1bmN0aW9uO1xuICAgIG9uT3BlbjogRnVuY3Rpb247XG4gICAgb25DbG9zZTogRnVuY3Rpb247XG4gICAgb25DaGFuZ2U6IEZ1bmN0aW9uO1xufVxuXG5lbnVtIEZvY3VzRGlyZWN0aW9uIHtcbiAgICBwcmV2ID0gLTEsXG4gICAgbmV4dCA9IDEsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZWU2VsZWN0IHtcblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFZhcmlhYmxlc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0cmlnZ2VyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzZWxlY3RPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcbiAgICBwcml2YXRlIG9wdGlvbnM6IEFycmF5PEhUTUxPcHRpb25FbGVtZW50PjtcbiAgICBwcml2YXRlIGRyb3Bkb3duOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGRyb3Bkb3duT3B0aW9uczogQXJyYXk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zTWFwOiBNYXA8SFRNTEFuY2hvckVsZW1lbnQsIEhUTUxPcHRpb25FbGVtZW50PiA9IG5ldyBNYXAoKVxuICAgIHByaXZhdGUgc2VhcmNoVGltZTogbnVtYmVyID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICBwcml2YXRlIHNlYXJjaFRpbWVvdXQ6IG51bWJlciA9IDIwMDA7IC8vIDIgc2Vjb25kc1xuICAgIHByaXZhdGUgc2VhcmNoU3RyaW5nOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIHVzZURyb3Bkb3duOiBib29sZWFuO1xuICAgIHByaXZhdGUgbXVsdGlwbGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBhdXRvZm9jdXM6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUga2V5ZG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFZWU2VsZWN0U2V0dGluZ3M7XG4gICAgXG4gICAgcmVhZG9ubHkgZGVmYXVsdFNldHRpbmdzOiBWVlNlbGVjdFNldHRpbmdzID0ge1xuICAgICAgICBkcm9wZG93bkNsYXNzOiAnc2VsZWN0X19kcm9wZG93bicsXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duLW9wdGlvbicsXG4gICAgICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLFxuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIHNlbGVjdGVkXCIsXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdCBvcHRpb25zXCIsXG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJDaG9vc2UgYW4gb3B0aW9uXCIsXG4gICAgICAgIG9uSW5pdGlhbGl6ZTogKCkgPT4ge30sXG4gICAgICAgIG9uT3BlbjogKCkgPT4ge30sXG4gICAgICAgIG9uQ2xvc2U6ICgpID0+IHt9LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgQ29uc3RydWN0b3JcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IG9iamVjdCA9IHt9LCBpbml0aWFsaXplT25Db25zdHJ1Y3Q6IGJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pIHNldHRpbmdzW2tleV0gPSB0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzID0gey4uLnRoaXMuZGVmYXVsdFNldHRpbmdzLCAuLi5zZXR0aW5ncyB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG5cbiAgICAgICAgdGhpcy51c2VEcm9wZG93biA9ICFpc01vYmlsZSh7IHRhYmxldDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IHRoaXMuc2VsZWN0Lm11bHRpcGxlO1xuICAgICAgICB0aGlzLmF1dG9mb2N1cyA9IHRoaXMuc2VsZWN0LmF1dG9mb2N1cztcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuc2VsZWN0LmRpc2FibGVkO1xuXG4gICAgICAgIGlmIChpbml0aWFsaXplT25Db25zdHJ1Y3QpXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBJbml0aWFsaXplXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHVibGljIGluaXQoKSBcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGVzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFN0eWxpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVHJpZ2dlckV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duRXZlbnQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFNlbGVjdEV2ZW50KCk7XG4gICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclRleHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZWxlY3RPYnNlcnZlcigpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbml0aWFsaXplZCcpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBHZXR0ZXJzIGFuZCBzZXR0ZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBHZXQgdmFsdWUuIFJldHVybnMgYXJyYXkgb24gbXVsdGlwbGUgc2VsZWN0IGFuZCBhIHN0cmluZyBvbiBzaW5nbGUgc2VsZWN0XG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCk6IEFycmF5PHN0cmluZz58c3RyaW5nXG4gICAge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucygpLm1hcChlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5tdWx0aXBsZSkgPyB2YWx1ZXMgOiAodmFsdWVzLmxlbmd0aCA9PT0gMSApID8gdmFsdWVzWzBdIDogJyc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsdWVzOiBBcnJheTxzdHJpbmc+fHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGludGlhbGl6ZWQgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25Jbml0aWFsaXplKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25Jbml0aWFsaXplID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gaW50aWFsaXplZCBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkNoYW5nZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gaW50aWFsaXplZCBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbk9wZW4oZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbk9wZW4gPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBpbnRpYWxpemVkIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uQ2xvc2UoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNsb3NlID0gZm47XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgUHVibGljIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogT3BlbiBkcm9wZG93biBhbmQgc2V0IGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9wZW4oKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICBpZiAodGhpcy5kcm9wZG93bk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ubmV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZERvY3VtZW50RXZlbnQoKTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzLm9uT3BlbigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2xvc2UgZHJvcGRvd24gYW5kIHJlbW92ZSBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50RXZlbnQoKTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2xvc2UoKTtcblxuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBVcGRhdGVTZWxlY3RTdHlsaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RTdHlsaW5nKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgdGhpcy5zZWxlY3QudGFiSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk5vZGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5nc1snZHJvcGRvd25DbGFzcyddKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bik7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGVzIGJhc2VkIG9uIGFsbCBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGlvbk5vZGVzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGRyb3Bkb3duIG9wdGlvbiBub2RlIGJhc2VkIG9uIGdpdmVuIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQpOiBudWxsfEhUTUxBbmNob3JFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgICAgICBkcm9wZG93bk9wdGlvbi50YWJJbmRleCA9IDA7XG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmhyZWYgPSAnamF2YXNjcmlwdDo7JztcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddKVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5nc1snZHJvcGRvd25PcHRpb25DbGFzcyddO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuc2V0KGRyb3Bkb3duT3B0aW9uLCBvcHRpb24pO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMucHVzaChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGRyb3Bkb3duT3B0aW9uO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRyb3Bkb3duIG9wdGlvbiBub2RlIGJhc2VkIG9uIGdpdmVuIG9wdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQpOiB2b2lkIFxuICAgIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSB0aGlzLmdldERyb3Bkb3duT3B0aW9uRnJvbU1hcChvcHRpb24pO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmRlbGV0ZShkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMgPSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5maWx0ZXIoZWwgPT4gZWwgIT09IGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICBkcm9wZG93bk9wdGlvbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBhbGwgZHJvcGRvd24gb3B0aW9uIG5vZGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEcm9wZG93bk9wdGlvbnMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgZ2l2ZW4gZHJvcGRvd24gb3B0aW9uIG5vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZHJvcGRvd25PcHRpb25zTWFwLmdldChkcm9wZG93bk9wdGlvbik7XG5cbiAgICAgICAgLy8gVXBkYXRlIGRhdGEgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHByb3BzVG9EYXRhc2V0ID0gWydkaXNhYmxlZCcsICdzZWxlY3RlZCcsICd2YWx1ZSddO1xuICAgICAgICBwcm9wc1RvRGF0YXNldC5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25bcHJvcF0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSAnJztcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSAhPT0gb3B0aW9uW3Byb3BdKVxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdID0gb3B0aW9uW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0XG4gICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCAhPT0gb3B0aW9uLnRleHRDb250ZW50KVxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgc2VsZWN0IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTZWxlY3RFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJUZXh0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb25zKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub25DaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gb3B0aW9ucyBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd25PcHRpb25FdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaChkcm9wZG93bk9wdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duT3B0aW9uRXZlbnQoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbkV2ZW50KGRyb3Bkb3duT3B0aW9uOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICFvcHRpb24uc2VsZWN0ZWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgIW9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlkb3duKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KHRoaXMuZHJvcGRvd25PcHRpb25zLmluZGV4T2YoZHJvcGRvd25PcHRpb24pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgdHJpZ2dlciBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkVHJpZ2dlckV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICAgICAgICAgICh0aGlzLmlzT3BlbikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bkV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSAzOCkgeyAvLyB1cFxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlEaXJlY3Rpb24oRm9jdXNEaXJlY3Rpb24ucHJldik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihGb2N1c0RpcmVjdGlvbi5uZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXYua2V5Q29kZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjaGFyICYmIFxuICAgICAgICAgICAgICAgIGNoYXIubWF0Y2goL15bYS16MC05IF0rJC9pKSAmJiBcbiAgICAgICAgICAgICAgICAhKGV2LmN0cmxLZXkgfHwgZXYuYWx0S2V5IHx8IGV2Lm1ldGFLZXkgfHwgZXYucmVwZWF0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzU2VhcmNoZWREcm9wZG93bk9wdGlvbihjaGFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ZG93biA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBiYXNlZCBvbiBjdXJyZW50IGZvY3VzZWQgb3B0aW9uIGFuZCBnaXZlbiBkaXJlY3Rpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihmb2N1c0RpcmVjdGlvbjogRm9jdXNEaXJlY3Rpb24pOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKChkcm9wZG93bk9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIGZvY3VzRGlyZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiB0aGlzLmRyb3Bkb3duT3B0aW9uc1tuZXh0SW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0T3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCs9IGZvY3VzRGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGJhc2VkIG9uIHNlYXJjaFxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNTZWFyY2hlZERyb3Bkb3duT3B0aW9uKGNoYXI6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmICh0aW1lID4gdGhpcy5zZWFyY2hUaW1lICsgdGhpcy5zZWFyY2hUaW1lb3V0KVxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdHJpbmcgPSAnJztcblxuICAgICAgICB0aGlzLnNlYXJjaFRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmluZys9IGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hTdHJpbmcpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMuc2VhcmNoU3RyaW5nKSk7XG4gICAgICAgIFxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihtYXRjaGVzWzBdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTdHJpbmcubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gYnkgaW5kZXhcbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkXG4gICAge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zW2luZGV4XS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBzZWxlY3Qgb2JzZXJ2ZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNlbGVjdE9ic2VydmVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYWRkZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUSU9OJykuZm9yRWFjaChvcHRpb25Ob2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbk5vZGUgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudChkcm9wZG93bk9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSByZW1vdmVkIG9wdGlvbiBub2RlXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnT1BUSU9OJykuZm9yRWFjaChvcHRpb25Ob2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbk5vZGUgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSB0aGlzLnZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IG9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZURyb3Bkb3duKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURyb3Bkb3duT3B0aW9uTm9kZShvcHRpb24gYXMgSFRNTE9wdGlvbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24udGFyZ2V0Lm5vZGVOYW1lID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBtdXRhdGlvbi50YXJnZXQgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gdGhpcy5nZXREcm9wZG93bk9wdGlvbkZyb21NYXAob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3RPYnNlcnZlci5vYnNlcnZlKHRoaXMuc2VsZWN0LCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSXMgZGVzY2VuZGFudCBoZWxwZXIgY2xhc3NcbiAgICAgKiBUaGlzIGNvdWxkIG1heWJlIGJlIG1vdmVkIHRvIGEgaGVscGVyIHBhY2thZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRGVzY2VuZGFudChwYXJlbnQ6IE5vZGUsIGNoaWxkOiBIVE1MRWxlbWVudCk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGxldCBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBkcm9wZG93biBvcHRpb24gZnJvbSBtYXAgYnkgZ2l2ZW4gdmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldERyb3Bkb3duT3B0aW9uRnJvbU1hcChvcHRpb246IEhUTUxPcHRpb25FbGVtZW50KTogbnVsbHxIVE1MQW5jaG9yRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd25PcHRpb25zTWFwKS5maWx0ZXIodmFsdWUgPT4gdmFsdWVbMV0gPT09IG9wdGlvbik7XG4gICAgICAgIHJldHVybiAoZmlsdGVyZWQubGVuZ3RoID09PSAxKSA/IGZpbHRlcmVkWzBdWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRG9jdW1lbnRFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURvY3VtZW50RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSGFuZGxlIGRvY3VtZW50IGNsaWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVEb2N1bWVudENsaWNrKGV2OiBFdmVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxlbWVudCwgdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgc2VsZWN0ZWQgb3B0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPcHRpb25zKCk6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnR8SFRNTE9wdGlvbkVsZW1lbnQ+XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSB0cmlnZ2VyIHRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJUZXh0KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gU3RyaW5nKGVsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAoYW1vdW50KSA/ICdtdWx0aXBsZVNlbGVjdGVkRm9ybWF0JyA6ICdtdWx0aXBsZUZvcm1hdCc7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIuaW5uZXJUZXh0ID0gdGhpcy5zZXR0aW5nc1tmb3JtYXRdLnJlcGxhY2UoLyVzL2csIGFtb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gKGVsZW1lbnRzWzBdKSA/IGVsZW1lbnRzWzBdLmlubmVySFRNTCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKHRleHQpID8gJ3NpbmdsZVNlbGVjdGVkRm9ybWF0JyA6ICdzaW5nbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9