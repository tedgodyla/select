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
var selectElems = Array.from(document.querySelectorAll('.select'));
var selects = [];
selectElems.forEach(function (selectEl) {
    var select = new index_1.default(selectEl);
    selects.push(select);
});
console.log(selects[0]);
selects[0].value = ["2", "3"];


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
var VVSelect = (function () {
    function VVSelect(element, settings) {
        if (settings === void 0) { settings = {}; }
        this.isOpen = false;
        this.defaultSettings = {
            dropdownClass: 'select__dropdown',
            openClass: 'is-open',
            multipleSelectedFormat: "%s geselecteerd",
            multipleFormat: "Selecteer opties",
            singleSelectedFormat: "%s",
            singleFormat: "Maak een keuze",
        };
        this.element = element;
        this.settings = __assign(__assign({}, this.defaultSettings), settings);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.label = element.querySelector('label');
        this.select = element.querySelector('select');
        this.options = Array.from(element.querySelectorAll('option'));
        this.useSelect = is_mobile_1.isMobile({ tablet: true });
        this.multiple = this.select.multiple;
        this.name = this.select.name;
        this.autofocus = this.select.autofocus;
        this.disabled = this.select.disabled;
        if (!this.useSelect) {
            this.addDropdown();
            this.addInputs();
            this.removeSelect();
            this.addInputEvents();
            this.addTriggerEvent();
            if (this.autofocus && !this.disabled) {
                this.label.click();
            }
        }
        else {
            this.addSelectEvent();
        }
        this.updateLabel();
        this.element.classList.add('initialized');
    }
    Object.defineProperty(VVSelect.prototype, "value", {
        get: function () {
            var values = this.getSelectedOptions().map(function (element) {
                return element.value;
            });
            if (this.multiple) {
                return values;
            }
            else {
                return (values[0]) ? values[0] : '';
            }
        },
        set: function (values) {
            if (typeof values === 'string') {
                values = [values];
            }
            if (this.useSelect) {
                this.options.forEach(function (option) {
                    option.selected = values.includes(option.value);
                });
                this.select.dispatchEvent(new Event('change'));
            }
            else {
                this.inputs.forEach(function (input) {
                    input.checked = values.includes(input.value);
                });
                if (this.inputs[0]) {
                    this.inputs[0].dispatchEvent(new Event('change'));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    VVSelect.prototype.open = function () {
        this.isOpen = true;
        this.element.classList.add(this.settings['openClass']);
        this.addDocumentEvent();
    };
    VVSelect.prototype.close = function () {
        this.isOpen = false;
        this.element.classList.remove(this.settings['openClass']);
        this.removeDocumentEvent();
    };
    VVSelect.prototype.addDropdown = function () {
        this.dropdown = document.createElement('div');
        this.dropdown.classList.add(this.settings['dropdownClass']);
        this.element.appendChild(this.dropdown);
    };
    VVSelect.prototype.addInputs = function () {
        var _this = this;
        if (!this.dropdown)
            return;
        this.inputs = new Array();
        this.options.forEach(function (option) {
            var input = document.createElement('input');
            var label = document.createElement('label');
            var id = _this.name + "-" + option.index;
            input.id = id;
            input.disabled = option.disabled;
            input.checked = option.selected;
            input.value = option.value;
            input.name = _this.select.name;
            input.type = (_this.multiple) ? 'checkbox' : 'radio';
            input.style.display = 'none';
            label.innerText = option.innerText;
            label.htmlFor = id;
            _this.dropdown.appendChild(input);
            _this.dropdown.appendChild(label);
            _this.inputs.push(input);
        });
    };
    VVSelect.prototype.removeSelect = function () {
        this.select.remove();
        this.select = null;
        this.options = null;
    };
    VVSelect.prototype.addSelectEvent = function () {
        var _this = this;
        this.select.addEventListener('change', function () {
            _this.updateLabel();
        });
    };
    VVSelect.prototype.addInputEvents = function () {
        var _this = this;
        this.inputs.forEach(function (input) {
            input.addEventListener('change', function () {
                _this.updateLabel();
            });
        });
    };
    VVSelect.prototype.addTriggerEvent = function () {
        var _this = this;
        this.label.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (_this.disabled)
                return;
            (_this.isOpen) ? _this.close() : _this.open();
        });
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
    VVSelect.prototype.addDocumentEvent = function () {
        document.addEventListener('click', this.handleDocumentClick);
    };
    VVSelect.prototype.removeDocumentEvent = function () {
        document.removeEventListener('click', this.handleDocumentClick);
    };
    VVSelect.prototype.handleDocumentClick = function (ev) {
        var target = ev.srcElement;
        if (target !== this.element && !this.isDescendant(this.element, target)) {
            this.close();
        }
    };
    VVSelect.prototype.getSelectedOptions = function () {
        if (this.useSelect) {
            return this.options.filter(function (option) {
                return option.selected;
            });
        }
        else {
            return this.inputs.filter(function (input) {
                return input.checked;
            });
        }
    };
    VVSelect.prototype.updateLabel = function () {
        var elements = this.getSelectedOptions();
        if (this.multiple) {
            var amount = elements.length;
            var format = (amount) ? 'multipleSelectedFormat' : 'multipleFormat';
            this.label.innerText = this.settings[format].replace(/%s/g, amount);
        }
        else {
            var text = (elements[0]) ? (this.useSelect) ? elements[0].innerHTML : elements[0].nextElementSibling.innerHTML : '';
            var format = (text) ? 'singleSelectedFormat' : 'singleFormat';
            this.label.innerText = this.settings[format].replace(/%s/g, text);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2RldmVsb3BtZW50L3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZGQUFxQztBQUVyQyxJQUFNLFdBQVcsR0FBdUIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUV6RixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFFbkIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQkFB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SUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEgsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckU7SUFDTCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgVlZTZWxlY3QgZnJvbSAnc2NyaXB0cy9pbmRleCc7XG5cbmNvbnN0IHNlbGVjdEVsZW1zOiBBcnJheTxIVE1MRWxlbWVudD4gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKSk7XG5cbmNvbnN0IHNlbGVjdHMgPSBbXTtcblxuc2VsZWN0RWxlbXMuZm9yRWFjaChzZWxlY3RFbCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gbmV3IFZWU2VsZWN0KHNlbGVjdEVsKTtcbiAgICBzZWxlY3RzLnB1c2goc2VsZWN0KTtcbn0pXG5cbmNvbnNvbGUubG9nKHNlbGVjdHNbMF0pO1xuXG5zZWxlY3RzWzBdLnZhbHVlID0gW1wiMlwiLCBcIjNcIl07IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpc01vYmlsZVxubW9kdWxlLmV4cG9ydHMuaXNNb2JpbGUgPSBpc01vYmlsZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlXG5cbnZhciBtb2JpbGVSRSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllc1s0Nl0wfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2lcblxudmFyIHRhYmxldFJFID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzWzQ2XTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaVxuXG5mdW5jdGlvbiBpc01vYmlsZSAob3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuICB2YXIgdWEgPSBvcHRzLnVhXG4gIGlmICghdWEgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxuICBpZiAodWEgJiYgdWEuaGVhZGVycyAmJiB0eXBlb2YgdWEuaGVhZGVyc1sndXNlci1hZ2VudCddID09PSAnc3RyaW5nJykge1xuICAgIHVhID0gdWEuaGVhZGVyc1sndXNlci1hZ2VudCddXG4gIH1cbiAgaWYgKHR5cGVvZiB1YSAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiBvcHRzLnRhYmxldCA/IHRhYmxldFJFLnRlc3QodWEpIDogbW9iaWxlUkUudGVzdCh1YSlcbn1cbiIsIi8qIVxuICogVlZTZWxlY3RcbiAqIChjKSAyMDIwIFRlZCBHb2R5bGFcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZVxuICovXG5cbi8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSW1wb3J0c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ2lzLW1vYmlsZSc7XG5cbi8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgRXhwb3J0IENsYXNzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZWU2VsZWN0IHtcblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFZhcmlhYmxlc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogSFRNTExhYmVsRWxlbWVudDtcbiAgICBwcml2YXRlIHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnR8bnVsbDtcbiAgICBwcml2YXRlIGRyb3Bkb3duOiBIVE1MRGl2RWxlbWVudHxudWxsO1xuICAgIHByaXZhdGUgb3B0aW9uczogQXJyYXk8SFRNTE9wdGlvbkVsZW1lbnQ+fG51bGw7XG4gICAgcHJpdmF0ZSBpbnB1dHM6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQ+fG51bGw7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB1c2VTZWxlY3Q6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNldHRpbmdzOiBvYmplY3Q7XG4gICAgcHJpdmF0ZSBkZWZhdWx0U2V0dGluZ3M6IG9iamVjdCA9IHtcbiAgICAgICAgZHJvcGRvd25DbGFzczogJ3NlbGVjdF9fZHJvcGRvd24nLCAgICAgICAgICAgICAgLy8gZHJvcGRvd24gY2xhc3NcbiAgICAgICAgb3BlbkNsYXNzOiAnaXMtb3BlbicsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3BlbiBjbGFzc1xuICAgICAgICBtdWx0aXBsZVNlbGVjdGVkRm9ybWF0OiBcIiVzIGdlc2VsZWN0ZWVyZFwiLCAgICAgIC8vIGxhYmVsIGZvcm1hdCBmb3IgbXVsdGlwbGUgc2VsZWN0IHdpdGggc2VsZWN0ZWQgdmFsdWVzXG4gICAgICAgIG11bHRpcGxlRm9ybWF0OiBcIlNlbGVjdGVlciBvcHRpZXNcIiwgICAgICAgICAgICAgLy8gbGFiZWwgZm9ybWF0IGZvciBtdWx0aXBsZSBzZWxlY3Qgd2l0aG91dCBzZWxlY3RlcyB2YWx1ZXNcbiAgICAgICAgc2luZ2xlU2VsZWN0ZWRGb3JtYXQ6IFwiJXNcIiwgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbCBmb3JtYXQgZm9yIHNpbmdsZSBzZWxlY3Qgd2l0aCBzZWxlY3RlZCB2YWx1ZVxuICAgICAgICBzaW5nbGVGb3JtYXQ6IFwiTWFhayBlZW4ga2V1emVcIiwgICAgICAgICAgICAgICAgIC8vIGxhYmVsIGZvcm1hdCBmb3Igc2luZ2xlIHNlbGVjdCB3aXRob3V0IHNlbGVjdGVkIHZhbHVlXG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgQ29uc3RydWN0b3JcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IE9iamVjdCA9IHt9KVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHsuLi50aGlzLmRlZmF1bHRTZXR0aW5ncywgLi4uc2V0dGluZ3MgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubGFiZWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcblxuICAgICAgICB0aGlzLnVzZVNlbGVjdCA9IGlzTW9iaWxlKHsgdGFibGV0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gdGhpcy5zZWxlY3QubXVsdGlwbGU7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuc2VsZWN0Lm5hbWU7XG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gdGhpcy5zZWxlY3QuYXV0b2ZvY3VzO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5zZWxlY3QuZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLnVzZVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5hZGREcm9wZG93bigpO1xuICAgICAgICAgICAgdGhpcy5hZGRJbnB1dHMoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmFkZElucHV0RXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmFkZFRyaWdnZXJFdmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvZm9jdXMgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZFNlbGVjdEV2ZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgR2V0dGVycyBhbmQgc2V0dGVyc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogR2V0IHZhbHVlLiBSZXR1cm5zIGFycmF5IG9uIG11bHRpcGxlIHNlbGVjdCBhbmQgYSBzdHJpbmcgb24gc2luZ2xlIHNlbGVjdFxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpOiBBcnJheTxzdHJpbmc+fHN0cmluZ1xuICAgIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKS5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlc1swXSkgPyB2YWx1ZXNbMF0gOiAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IHZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlczogQXJyYXk8c3RyaW5nPnxzdHJpbmcpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudXNlU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHZhbHVlcy5pbmNsdWRlcyhpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRzWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dHNbMF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFB1YmxpYyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIE9wZW4gZHJvcGRvd24gYW5kIHNldCBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydvcGVuQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5hZGREb2N1bWVudEV2ZW50KCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDbG9zZSBkcm9wZG93biBhbmQgcmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBBZGQgZHJvcGRvd24gZWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRHJvcGRvd24oKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5nc1snZHJvcGRvd25DbGFzcyddKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGlucHV0IGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRJbnB1dHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlucHV0cyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGAke3RoaXMubmFtZX0tJHtvcHRpb24uaW5kZXh9YDtcblxuICAgICAgICAgICAgaW5wdXQuaWQgPSBpZDtcbiAgICAgICAgICAgIGlucHV0LmRpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkO1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IG9wdGlvbi5zZWxlY3RlZDtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9IHRoaXMuc2VsZWN0Lm5hbWU7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gKHRoaXMubXVsdGlwbGUpID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBvcHRpb24uaW5uZXJUZXh0O1xuICAgICAgICAgICAgbGFiZWwuaHRtbEZvciA9IGlkO1xuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgICAgICB0aGlzLmlucHV0cy5wdXNoKGlucHV0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgc2VsZWN0IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZVNlbGVjdCgpOiB2b2lkIFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3QucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNlbGVjdEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgaW5wdXQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZElucHV0RXZlbnRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCB0cmlnZ2VyIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRUcmlnZ2VyRXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5sYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICAgICAgKHRoaXMuaXNPcGVuKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElzIGRlc2NlbmRhbnQgaGVscGVyIGNsYXNzXG4gICAgICogVGhpcyBjb3VsZCBtYXliZSBiZSBtb3ZlZCB0byBhIGhlbHBlciBwYWNrYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBhbnksIGNoaWxkOiBhbnkpOiBib29sZWFuXG4gICAge1xuICAgICAgICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChub2RlID09IHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERvY3VtZW50RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVEb2N1bWVudEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBkb2N1bWVudCBjbGlja1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRG9jdW1lbnRDbGljayhldjogRXZlbnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi5zcmNFbGVtZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbGVtZW50LCB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBzZWxlY3RlZCBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9wdGlvbnMoKTogQXJyYXk8SFRNTElucHV0RWxlbWVudHxIVE1MT3B0aW9uRWxlbWVudD5cbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnVzZVNlbGVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnNlbGVjdGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dHMuZmlsdGVyKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVcGRhdGUgbGFiZWxcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUxhYmVsKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKGFtb3VudCkgPyAnbXVsdGlwbGVTZWxlY3RlZEZvcm1hdCcgOiAnbXVsdGlwbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSB0aGlzLnNldHRpbmdzW2Zvcm1hdF0ucmVwbGFjZSgvJXMvZywgYW1vdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAoZWxlbWVudHNbMF0pID8gKHRoaXMudXNlU2VsZWN0KSA/IGVsZW1lbnRzWzBdLmlubmVySFRNTCA6IGVsZW1lbnRzWzBdLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9ICh0ZXh0KSA/ICdzaW5nbGVTZWxlY3RlZEZvcm1hdCcgOiAnc2luZ2xlRm9ybWF0JztcbiAgICAgICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5zZXR0aW5nc1tmb3JtYXRdLnJlcGxhY2UoLyVzL2csIHRleHQpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=