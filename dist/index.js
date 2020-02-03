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

/** ----------------------------------------
    Imports
---------------------------------------- */
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
/** ----------------------------------------
    Export Class
---------------------------------------- */
var VVSelect = /** @class */ (function () {
    /** ----------------------------------------
        Constructor
    ---------------------------------------- */
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
        /** ----------------------------------------
            Getters and setters
        ---------------------------------------- */
        /*
         * Get value. Returns array on multiple select and a string on single select
         */
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
        /*
         * Set value
         */
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
    /** ----------------------------------------
        Public functions
    ---------------------------------------- */
    /*
     * Open dropdown and set document event
     */
    VVSelect.prototype.open = function () {
        this.isOpen = true;
        this.element.classList.add(this.settings['openClass']);
        this.addDocumentEvent();
    };
    /*
     * Close dropdown and remove document event
     */
    VVSelect.prototype.close = function () {
        this.isOpen = false;
        this.element.classList.remove(this.settings['openClass']);
        this.removeDocumentEvent();
    };
    /** ----------------------------------------
        Private functions
    ---------------------------------------- */
    /*
     * Add dropdown element
     */
    VVSelect.prototype.addDropdown = function () {
        this.dropdown = document.createElement('div');
        this.dropdown.classList.add(this.settings['dropdownClass']);
        this.element.appendChild(this.dropdown);
    };
    /*
     * Add input elements
     */
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
    /*
     * Remove select element
     */
    VVSelect.prototype.removeSelect = function () {
        this.select.remove();
        this.select = null;
        this.options = null;
    };
    /*
     * Add select event
     */
    VVSelect.prototype.addSelectEvent = function () {
        var _this = this;
        this.select.addEventListener('change', function () {
            _this.updateLabel();
        });
    };
    /*
     * Add input event
     */
    VVSelect.prototype.addInputEvents = function () {
        var _this = this;
        this.inputs.forEach(function (input) {
            input.addEventListener('change', function () {
                _this.updateLabel();
            });
        });
    };
    /*
     * Add trigger event
     */
    VVSelect.prototype.addTriggerEvent = function () {
        var _this = this;
        this.label.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (_this.disabled)
                return;
            (_this.isOpen) ? _this.close() : _this.open();
        });
    };
    /*
     * Is descendant helper class
     * This could maybe be moved to a helper package
     */
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
    /*
     * Add document event
     */
    VVSelect.prototype.addDocumentEvent = function () {
        document.addEventListener('click', this.handleDocumentClick);
    };
    /*
     * Remove document event
     */
    VVSelect.prototype.removeDocumentEvent = function () {
        document.removeEventListener('click', this.handleDocumentClick);
    };
    /*
     * Handle document click
     */
    VVSelect.prototype.handleDocumentClick = function (ev) {
        var target = ev.srcElement;
        if (target !== this.element && !this.isDescendant(this.element, target)) {
            this.close();
        }
    };
    /*
     * Get selected options
     */
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
    /*
     * Update label
     */
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

__webpack_require__(/*! ./src/js/index.ts */"./src/js/index.ts");
module.exports = __webpack_require__(/*! ./src/scss/index.scss */"./src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOzsyQ0FFMkM7Ozs7Ozs7Ozs7Ozs7QUFFM0MsNEZBQXFDO0FBRXJDOzsyQ0FFMkM7QUFFM0M7SUE2Qkk7OytDQUUyQztJQUUzQyxrQkFBWSxPQUFvQixFQUFFLFFBQXFCO1FBQXJCLHdDQUFxQjtRQWhC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SSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JFO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDalVELHlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaXNNb2JpbGVcbm1vZHVsZS5leHBvcnRzLmlzTW9iaWxlID0gaXNNb2JpbGVcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBpc01vYmlsZVxuXG52YXIgbW9iaWxlUkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pXG5cbnZhciB0YWJsZXRSRSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllc1s0Nl0wfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2lcblxuZnVuY3Rpb24gaXNNb2JpbGUgKG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cbiAgdmFyIHVhID0gb3B0cy51YVxuICBpZiAoIXVhICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgaWYgKHVhICYmIHVhLmhlYWRlcnMgJiYgdHlwZW9mIHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA9PT0gJ3N0cmluZycpIHtcbiAgICB1YSA9IHVhLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxuICB9XG4gIGlmICh0eXBlb2YgdWEgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2VcblxuICByZXR1cm4gb3B0cy50YWJsZXQgPyB0YWJsZXRSRS50ZXN0KHVhKSA6IG1vYmlsZVJFLnRlc3QodWEpXG59XG4iLCIvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEltcG9ydHNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdpcy1tb2JpbGUnO1xuXG4vKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEV4cG9ydCBDbGFzc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWVlNlbGVjdCB7XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBWYXJpYWJsZXNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50fG51bGw7XG4gICAgcHJpdmF0ZSBkcm9wZG93bjogSFRNTERpdkVsZW1lbnR8bnVsbDtcbiAgICBwcml2YXRlIG9wdGlvbnM6IEFycmF5PEhUTUxPcHRpb25FbGVtZW50PnxudWxsO1xuICAgIHByaXZhdGUgaW5wdXRzOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50PnxudWxsO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgdXNlU2VsZWN0OiBib29sZWFuO1xuICAgIHByaXZhdGUgbXVsdGlwbGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBhdXRvZm9jdXM6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogb2JqZWN0O1xuICAgIHByaXZhdGUgZGVmYXVsdFNldHRpbmdzOiBvYmplY3QgPSB7XG4gICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RfX2Ryb3Bkb3duJywgICAgICAgICAgICAgIC8vIGRyb3Bkb3duIGNsYXNzXG4gICAgICAgIG9wZW5DbGFzczogJ2lzLW9wZW4nLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wZW4gY2xhc3NcbiAgICAgICAgbXVsdGlwbGVTZWxlY3RlZEZvcm1hdDogXCIlcyBnZXNlbGVjdGVlcmRcIiwgICAgICAvLyBsYWJlbCBmb3JtYXQgZm9yIG11bHRpcGxlIHNlbGVjdCB3aXRoIHNlbGVjdGVkIHZhbHVlc1xuICAgICAgICBtdWx0aXBsZUZvcm1hdDogXCJTZWxlY3RlZXIgb3B0aWVzXCIsICAgICAgICAgICAgIC8vIGxhYmVsIGZvcm1hdCBmb3IgbXVsdGlwbGUgc2VsZWN0IHdpdGhvdXQgc2VsZWN0ZXMgdmFsdWVzXG4gICAgICAgIHNpbmdsZVNlbGVjdGVkRm9ybWF0OiBcIiVzXCIsICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWwgZm9ybWF0IGZvciBzaW5nbGUgc2VsZWN0IHdpdGggc2VsZWN0ZWQgdmFsdWVcbiAgICAgICAgc2luZ2xlRm9ybWF0OiBcIk1hYWsgZWVuIGtldXplXCIsICAgICAgICAgICAgICAgICAvLyBsYWJlbCBmb3JtYXQgZm9yIHNpbmdsZSBzZWxlY3Qgd2l0aG91dCBzZWxlY3RlZCB2YWx1ZVxuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIENvbnN0cnVjdG9yXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBPYmplY3QgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7Li4udGhpcy5kZWZhdWx0U2V0dGluZ3MsIC4uLnNldHRpbmdzIH1cblxuICAgICAgICB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmxhYmVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG5cbiAgICAgICAgdGhpcy51c2VTZWxlY3QgPSBpc01vYmlsZSh7IHRhYmxldDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IHRoaXMuc2VsZWN0Lm11bHRpcGxlO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnNlbGVjdC5uYW1lO1xuICAgICAgICB0aGlzLmF1dG9mb2N1cyA9IHRoaXMuc2VsZWN0LmF1dG9mb2N1cztcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuc2VsZWN0LmRpc2FibGVkO1xuXG4gICAgICAgIGlmICghdGhpcy51c2VTZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRHJvcGRvd24oKTtcbiAgICAgICAgICAgIHRoaXMuYWRkSW5wdXRzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRJbnB1dEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5hZGRUcmlnZ2VyRXZlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRTZWxlY3RFdmVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbml0aWFsaXplZCcpO1xuICAgIH1cblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEdldHRlcnMgYW5kIHNldHRlcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEdldCB2YWx1ZS4gUmV0dXJucyBhcnJheSBvbiBtdWx0aXBsZSBzZWxlY3QgYW5kIGEgc3RyaW5nIG9uIHNpbmdsZSBzZWxlY3RcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogQXJyYXk8c3RyaW5nPnxzdHJpbmdcbiAgICB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCkubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZXNbMF0pID8gdmFsdWVzWzBdIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCB2YWx1ZVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZXM6IEFycmF5PHN0cmluZz58c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVzZVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB2YWx1ZXMuaW5jbHVkZXMoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0c1swXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRzWzBdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBQdWJsaWMgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBPcGVuIGRyb3Bkb3duIGFuZCBzZXQgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5nc1snb3BlbkNsYXNzJ10pO1xuXG4gICAgICAgIHRoaXMuYWRkRG9jdW1lbnRFdmVudCgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2xvc2UgZHJvcGRvd24gYW5kIHJlbW92ZSBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50RXZlbnQoKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogQWRkIGRyb3Bkb3duIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZERyb3Bkb3duKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ2Ryb3Bkb3duQ2xhc3MnXSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBpbnB1dCBlbGVtZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgYWRkSW5wdXRzKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5kcm9wZG93bikgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbnB1dHMgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt0aGlzLm5hbWV9LSR7b3B0aW9uLmluZGV4fWA7XG5cbiAgICAgICAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZDtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSB0aGlzLnNlbGVjdC5uYW1lO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICh0aGlzLm11bHRpcGxlKSA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xuICAgICAgICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gb3B0aW9uLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGxhYmVsLmh0bWxGb3IgPSBpZDtcblxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICAgICAgdGhpcy5pbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIHNlbGVjdCBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVTZWxlY3QoKTogdm9pZCBcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgc2VsZWN0IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTZWxlY3RFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGlucHV0IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRJbnB1dEV2ZW50cygpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgdHJpZ2dlciBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkVHJpZ2dlckV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICAgICAgICAgICh0aGlzLmlzT3BlbikgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJcyBkZXNjZW5kYW50IGhlbHBlciBjbGFzc1xuICAgICAqIFRoaXMgY291bGQgbWF5YmUgYmUgbW92ZWQgdG8gYSBoZWxwZXIgcGFja2FnZVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogYW55LCBjaGlsZDogYW55KTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgdmFyIG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm9kZSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREb2N1bWVudEV2ZW50KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlRG9jdW1lbnRFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgZG9jdW1lbnQgY2xpY2tcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZURvY3VtZW50Q2xpY2soZXY6IEV2ZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYuc3JjRWxlbWVudDtcblxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxlbWVudCwgdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXQgc2VsZWN0ZWQgb3B0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPcHRpb25zKCk6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnR8SFRNTE9wdGlvbkVsZW1lbnQ+XG4gICAge1xuICAgICAgICBpZiAodGhpcy51c2VTZWxlY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRzLmZpbHRlcihpbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogVXBkYXRlIGxhYmVsXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVMYWJlbCgpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IChhbW91bnQpID8gJ211bHRpcGxlU2VsZWN0ZWRGb3JtYXQnIDogJ211bHRpcGxlRm9ybWF0JztcbiAgICAgICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5zZXR0aW5nc1tmb3JtYXRdLnJlcGxhY2UoLyVzL2csIGFtb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gKGVsZW1lbnRzWzBdKSA/ICh0aGlzLnVzZVNlbGVjdCkgPyBlbGVtZW50c1swXS5pbm5lckhUTUwgOiBlbGVtZW50c1swXS5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAodGV4dCkgPyAnc2luZ2xlU2VsZWN0ZWRGb3JtYXQnIDogJ3NpbmdsZUZvcm1hdCc7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=