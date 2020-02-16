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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7QUFFSCw0RkFBcUM7QUFnQnJDLElBQUssY0FHSjtBQUhELFdBQUssY0FBYztJQUNmLG9EQUFTO0lBQ1QsbURBQVE7QUFDWixDQUFDLEVBSEksY0FBYyxLQUFkLGNB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QUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3hELElBQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbm5CRCx5QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTW9iaWxlXG5tb2R1bGUuZXhwb3J0cy5pc01vYmlsZSA9IGlzTW9iaWxlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNNb2JpbGVcblxudmFyIG1vYmlsZVJFID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzWzQ2XTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaVxuXG52YXIgdGFibGV0UkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pXG5cbmZ1bmN0aW9uIGlzTW9iaWxlIChvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG4gIHZhciB1YSA9IG9wdHMudWFcbiAgaWYgKCF1YSAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gIGlmICh1YSAmJiB1YS5oZWFkZXJzICYmIHR5cGVvZiB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J10gPT09ICdzdHJpbmcnKSB7XG4gICAgdWEgPSB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J11cbiAgfVxuICBpZiAodHlwZW9mIHVhICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlXG5cbiAgcmV0dXJuIG9wdHMudGFibGV0ID8gdGFibGV0UkUudGVzdCh1YSkgOiBtb2JpbGVSRS50ZXN0KHVhKVxufVxuIiwiLyohXG4gKiBWVlNlbGVjdFxuICogKGMpIDIwMjAgVGVkIEdvZHlsYVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdpcy1tb2JpbGUnO1xuXG5pbnRlcmZhY2UgVlZTZWxlY3RTZXR0aW5ncyB7XG4gICAgZHJvcGRvd25DbGFzczogc3RyaW5nO1xuICAgIGRyb3Bkb3duT3B0aW9uQ2xhc3M6IHN0cmluZztcbiAgICBvcGVuQ2xhc3M6IHN0cmluZztcbiAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBzdHJpbmc7XG4gICAgbXVsdGlwbGVGb3JtYXQ6IHN0cmluZztcbiAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogc3RyaW5nO1xuICAgIHNpbmdsZUZvcm1hdDogc3RyaW5nO1xuICAgIG9uSW5pdGlhbGl6ZTogRnVuY3Rpb247XG4gICAgb25PcGVuOiBGdW5jdGlvbjtcbiAgICBvbkNsb3NlOiBGdW5jdGlvbjtcbiAgICBvbkNoYW5nZTogRnVuY3Rpb247XG59XG5cbmVudW0gRm9jdXNEaXJlY3Rpb24ge1xuICAgIHByZXYgPSAtMSxcbiAgICBuZXh0ID0gMSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVlZTZWxlY3Qge1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVmFyaWFibGVzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRyaWdnZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIHNlbGVjdE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICAgIHByaXZhdGUgb3B0aW9uczogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZHJvcGRvd246IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgZHJvcGRvd25PcHRpb25zOiBBcnJheTxIVE1MQW5jaG9yRWxlbWVudD47XG4gICAgcHJpdmF0ZSBkcm9wZG93bk9wdGlvbnNNYXA6IE1hcDxIVE1MQW5jaG9yRWxlbWVudCwgSFRNTE9wdGlvbkVsZW1lbnQ+ID0gbmV3IE1hcCgpXG4gICAgcHJpdmF0ZSBzZWFyY2hUaW1lOiBudW1iZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgIHByaXZhdGUgc2VhcmNoVGltZW91dDogbnVtYmVyID0gMjAwMDsgLy8gMiBzZWNvbmRzXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgdXNlRHJvcGRvd246IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBrZXlkb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogVlZTZWxlY3RTZXR0aW5ncztcbiAgICBcbiAgICByZWFkb25seSBkZWZhdWx0U2V0dGluZ3M6IFZWU2VsZWN0U2V0dGluZ3MgPSB7XG4gICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duJyxcbiAgICAgICAgZHJvcGRvd25PcHRpb25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24tb3B0aW9uJyxcbiAgICAgICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsXG4gICAgICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IFwiJXMgc2VsZWN0ZWRcIixcbiAgICAgICAgbXVsdGlwbGVGb3JtYXQ6IFwiU2VsZWN0IG9wdGlvbnNcIixcbiAgICAgICAgc2luZ2xlU2VsZWN0ZWRGb3JtYXQ6IFwiJXNcIixcbiAgICAgICAgc2luZ2xlRm9ybWF0OiBcIkNob29zZSBhbiBvcHRpb25cIixcbiAgICAgICAgb25Jbml0aWFsaXplOiAoKSA9PiB7fSxcbiAgICAgICAgb25PcGVuOiAoKSA9PiB7fSxcbiAgICAgICAgb25DbG9zZTogKCkgPT4ge30sXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBDb25zdHJ1Y3RvclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogb2JqZWN0ID0ge30sIGluaXRpYWxpemVPbkNvbnN0cnVjdDogYm9vbGVhbiA9IHRydWUpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdFNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXRba2V5XSkgc2V0dGluZ3Nba2V5XSA9IHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7Li4udGhpcy5kZWZhdWx0U2V0dGluZ3MsIC4uLnNldHRpbmdzIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcblxuICAgICAgICB0aGlzLnVzZURyb3Bkb3duID0gIWlzTW9iaWxlKHsgdGFibGV0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gdGhpcy5zZWxlY3QubXVsdGlwbGU7XG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gdGhpcy5zZWxlY3QuYXV0b2ZvY3VzO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5zZWxlY3QuZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGluaXRpYWxpemVPbkNvbnN0cnVjdClcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEluaXRpYWxpemVcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwdWJsaWMgaW5pdCgpIFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25Ob2RlKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U3R5bGluZygpO1xuICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bk9wdGlvbkV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5hZGRUcmlnZ2VyRXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25FdmVudCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvZm9jdXMgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkU2VsZWN0RXZlbnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyVGV4dCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlbGVjdE9ic2VydmVyKCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uSW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEdldHRlcnMgYW5kIHNldHRlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEdldCB2YWx1ZS4gUmV0dXJucyBhcnJheSBvbiBtdWx0aXBsZSBzZWxlY3QgYW5kIGEgc3RyaW5nIG9uIHNpbmdsZSBzZWxlY3RcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogQXJyYXk8c3RyaW5nPnxzdHJpbmdcbiAgICB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm11bHRpcGxlKSA/IHZhbHVlcyA6ICh2YWx1ZXMubGVuZ3RoID09PSAxICkgPyB2YWx1ZXNbMF0gOiAnJztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCB2YWx1ZVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZXM6IEFycmF5PHN0cmluZz58c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgb24gaW50aWFsaXplZCBmdW5jdGlvblxuICAgICAqL1xuICAgIHNldCBvbkluaXRpYWxpemUoZm46IEZ1bmN0aW9uKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkluaXRpYWxpemUgPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBpbnRpYWxpemVkIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uQ2hhbmdlKGZuOiBGdW5jdGlvbilcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCBvbiBpbnRpYWxpemVkIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0IG9uT3BlbihmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uT3BlbiA9IGZuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IG9uIGludGlhbGl6ZWQgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXQgb25DbG9zZShmbjogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQ2xvc2UgPSBmbjtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBQdWJsaWMgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBPcGVuIGRyb3Bkb3duIGFuZCBzZXQgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihGb2N1c0RpcmVjdGlvbi5uZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDbG9zZSBkcm9wZG93biBhbmQgcmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25DbG9zZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZVNlbGVjdFN0eWxpbmdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdFN0eWxpbmcoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3Quc3R5bGUuekluZGV4ID0gJzAnO1xuICAgICAgICB0aGlzLnNlbGVjdC50YWJJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duTm9kZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSlcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENyZWF0ZSBkcm9wZG93biBvcHRpb24gbm9kZXMgYmFzZWQgb24gYWxsIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZURyb3Bkb3duT3B0aW9uTm9kZXMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDcmVhdGUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IG51bGx8SFRNTEFuY2hvckVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnRhYkluZGV4ID0gMDtcbiAgICAgICAgZHJvcGRvd25PcHRpb24uaHJlZiA9ICdqYXZhc2NyaXB0OjsnO1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdGlvbkNsYXNzJ10pXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbi5jbGFzc05hbWUgPSB0aGlzLnNldHRpbmdzWydkcm9wZG93bk9wdGlvbkNsYXNzJ107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5zZXQoZHJvcGRvd25PcHRpb24sIG9wdGlvbik7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5wdXNoKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICByZXR1cm4gZHJvcGRvd25PcHRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZHJvcGRvd24gb3B0aW9uIG5vZGUgYmFzZWQgb24gZ2l2ZW4gb3B0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEcm9wZG93bk9wdGlvbk5vZGUob3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCk6IHZvaWQgXG4gICAge1xuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbik7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZGVsZXRlKGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihlbCA9PiBlbCAhPT0gZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGFsbCBkcm9wZG93biBvcHRpb24gbm9kZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURyb3Bkb3duT3B0aW9ucygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBnaXZlbiBkcm9wZG93biBvcHRpb24gbm9kZVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5kcm9wZG93bk9wdGlvbnNNYXAuZ2V0KGRyb3Bkb3duT3B0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgcHJvcHNUb0RhdGFzZXQgPSBbJ2Rpc2FibGVkJywgJ3NlbGVjdGVkJywgJ3ZhbHVlJ107XG4gICAgICAgIHByb3BzVG9EYXRhc2V0LmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbltwcm9wXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbltwcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25PcHRpb24uZGF0YXNldFtwcm9wXSA9ICcnO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bk9wdGlvbi5kYXRhc2V0W3Byb3BdICE9PSBvcHRpb25bcHJvcF0pXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uLmRhdGFzZXRbcHJvcF0gPSBvcHRpb25bcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVXBkYXRlIHRleHRcbiAgICAgICAgaWYgKGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ICE9PSBvcHRpb24udGV4dENvbnRlbnQpXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNlbGVjdEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclRleHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93bk9wdGlvbnMoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBvcHRpb25zIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bk9wdGlvbkV2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKGRyb3Bkb3duT3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd25PcHRpb25FdmVudChkcm9wZG93bk9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIG9wdGlvbnMgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duT3B0aW9uRXZlbnQoZHJvcGRvd25PcHRpb246IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gIW9wdGlvbi5zZWxlY3RlZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiAhb3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWRvd24pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQoZHJvcGRvd25PcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgodGhpcy5kcm9wZG93bk9wdGlvbnMuaW5kZXhPZihkcm9wZG93bk9wdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCB0cmlnZ2VyIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRUcmlnZ2VyRXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICAgICAgKHRoaXMuaXNPcGVuKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBldmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duRXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXYgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlkb3duID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDM4KSB7IC8vIHVwXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeURpcmVjdGlvbihGb2N1c0RpcmVjdGlvbi5wcmV2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKEZvY3VzRGlyZWN0aW9uLm5leHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldi5rZXlDb2RlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNoYXIgJiYgXG4gICAgICAgICAgICAgICAgY2hhci5tYXRjaCgvXlthLXowLTkgXSskL2kpICYmIFxuICAgICAgICAgICAgICAgICEoZXYuY3RybEtleSB8fCBldi5hbHRLZXkgfHwgZXYubWV0YUtleSB8fCBldi5yZXBlYXQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNTZWFyY2hlZERyb3Bkb3duT3B0aW9uKGNoYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXYgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlkb3duID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRm9jdXMgZHJvcGRvd24gb3B0aW9uIGJhc2VkIG9uIGN1cnJlbnQgZm9jdXNlZCBvcHRpb24gYW5kIGdpdmVuIGRpcmVjdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5RGlyZWN0aW9uKGZvY3VzRGlyZWN0aW9uOiBGb2N1c0RpcmVjdGlvbik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmZvckVhY2goKGRyb3Bkb3duT3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRyb3Bkb3duT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgZm9jdXNEaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodHlwZW9mIHRoaXMuZHJvcGRvd25PcHRpb25zW25leHRJbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRPcHRpb24gPSB0aGlzLmRyb3Bkb3duT3B0aW9uc01hcC5nZXQodGhpcy5kcm9wZG93bk9wdGlvbnNbbmV4dEluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dE9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4Kz0gZm9jdXNEaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRHJvcGRvd25PcHRpb25CeUluZGV4KG5leHRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGb2N1cyBkcm9wZG93biBvcHRpb24gYmFzZWQgb24gc2VhcmNoXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c1NlYXJjaGVkRHJvcGRvd25PcHRpb24oY2hhcjogc3RyaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgdGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKHRpbWUgPiB0aGlzLnNlYXJjaFRpbWUgKyB0aGlzLnNlYXJjaFRpbWVvdXQpXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0cmluZyA9ICcnO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoVGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuc2VhcmNoU3RyaW5nKz0gY2hhci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaFN0cmluZyk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hTdHJpbmcpKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duT3B0aW9uQnlJbmRleCh0aGlzLmRyb3Bkb3duT3B0aW9ucy5pbmRleE9mKG1hdGNoZXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFN0cmluZy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZvY3VzIGRyb3Bkb3duIG9wdGlvbiBieSBpbmRleFxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNEcm9wZG93bk9wdGlvbkJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIHNlbGVjdCBvYnNlcnZlclxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU2VsZWN0T2JzZXJ2ZXIoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhZGRlZCBvcHRpb24gbm9kZVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRJT04nKS5mb3JFYWNoKG9wdGlvbk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uTm9kZSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IHRoaXMuY3JlYXRlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bk9wdGlvbkV2ZW50KGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHJlbW92ZWQgb3B0aW9uIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdPUFRJT04nKS5mb3JFYWNoKG9wdGlvbk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uTm9kZSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZSA9IHRoaXMudmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gb3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlRHJvcGRvd24pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRHJvcGRvd25PcHRpb25Ob2RlKG9wdGlvbiBhcyBIVE1MT3B0aW9uRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi50YXJnZXQubm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSB0aGlzLmdldERyb3Bkb3duT3B0aW9uRnJvbU1hcChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbGVjdE9ic2VydmVyLm9ic2VydmUodGhpcy5zZWxlY3QsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJcyBkZXNjZW5kYW50IGhlbHBlciBjbGFzc1xuICAgICAqIFRoaXMgY291bGQgbWF5YmUgYmUgbW92ZWQgdG8gYSBoZWxwZXIgcGFja2FnZVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogTm9kZSwgY2hpbGQ6IEhUTUxFbGVtZW50KTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IGRyb3Bkb3duIG9wdGlvbiBmcm9tIG1hcCBieSBnaXZlbiB2YWx1ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RHJvcGRvd25PcHRpb25Gcm9tTWFwKG9wdGlvbjogSFRNTE9wdGlvbkVsZW1lbnQpOiBudWxsfEhUTUxBbmNob3JFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bk9wdGlvbnNNYXApLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZVsxXSA9PT0gb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIChmaWx0ZXJlZC5sZW5ndGggPT09IDEpID8gZmlsdGVyZWRbMF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREb2N1bWVudEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRG9jdW1lbnRFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgZG9jdW1lbnQgY2xpY2tcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZURvY3VtZW50Q2xpY2soZXY6IEV2ZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbGVtZW50LCB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBzZWxlY3RlZCBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9wdGlvbnMoKTogQXJyYXk8SFRNTElucHV0RWxlbWVudHxIVE1MT3B0aW9uRWxlbWVudD5cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIHRyaWdnZXIgdGV4dFxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlVHJpZ2dlclRleHQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucygpO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPSBTdHJpbmcoZWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IChhbW91bnQpID8gJ211bHRpcGxlU2VsZWN0ZWRGb3JtYXQnIDogJ211bHRpcGxlRm9ybWF0JztcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5pbm5lclRleHQgPSB0aGlzLnNldHRpbmdzW2Zvcm1hdF0ucmVwbGFjZSgvJXMvZywgYW1vdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAoZWxlbWVudHNbMF0pID8gZWxlbWVudHNbMF0uaW5uZXJIVE1MIDogJyc7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAodGV4dCkgPyAnc2luZ2xlU2VsZWN0ZWRGb3JtYXQnIDogJ3NpbmdsZUZvcm1hdCc7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIuaW5uZXJUZXh0ID0gdGhpcy5zZXR0aW5nc1tmb3JtYXRdLnJlcGxhY2UoLyVzL2csIHRleHQpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==