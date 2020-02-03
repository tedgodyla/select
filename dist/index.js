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
Object.defineProperty(exports, "__esModule", { value: true });
const is_mobile_1 = __webpack_require__(/*! is-mobile */ "./node_modules/is-mobile/index.js");
class VVSelect {
    constructor(element, settings = {}) {
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
        this.settings = Object.assign(Object.assign({}, this.defaultSettings), settings);
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
    get value() {
        const values = this.getSelectedOptions().map(element => {
            return element.value;
        });
        if (this.multiple) {
            return values;
        }
        else {
            return (values[0]) ? values[0] : '';
        }
    }
    set value(values) {
        if (typeof values === 'string') {
            values = [values];
        }
        if (this.useSelect) {
            this.options.forEach(option => {
                option.selected = values.includes(option.value);
            });
            this.select.dispatchEvent(new Event('change'));
        }
        else {
            this.inputs.forEach(input => {
                input.checked = values.includes(input.value);
            });
            if (this.inputs[0]) {
                this.inputs[0].dispatchEvent(new Event('change'));
            }
        }
    }
    open() {
        this.isOpen = true;
        this.element.classList.add(this.settings['openClass']);
        this.addDocumentEvent();
    }
    close() {
        this.isOpen = false;
        this.element.classList.remove(this.settings['openClass']);
        this.removeDocumentEvent();
    }
    addDropdown() {
        this.dropdown = document.createElement('div');
        this.dropdown.classList.add(this.settings['dropdownClass']);
        this.element.appendChild(this.dropdown);
    }
    addInputs() {
        if (!this.dropdown)
            return;
        this.inputs = new Array();
        this.options.forEach(option => {
            const input = document.createElement('input');
            const label = document.createElement('label');
            const id = `${this.name}-${option.index}`;
            input.id = id;
            input.disabled = option.disabled;
            input.checked = option.selected;
            input.value = option.value;
            input.name = this.select.name;
            input.type = (this.multiple) ? 'checkbox' : 'radio';
            input.style.display = 'none';
            label.innerText = option.innerText;
            label.htmlFor = id;
            this.dropdown.appendChild(input);
            this.dropdown.appendChild(label);
            this.inputs.push(input);
        });
    }
    removeSelect() {
        this.select.remove();
        this.select = null;
        this.options = null;
    }
    addSelectEvent() {
        this.select.addEventListener('change', () => {
            this.updateLabel();
        });
    }
    addInputEvents() {
        this.inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateLabel();
            });
        });
    }
    addTriggerEvent() {
        this.label.addEventListener('click', (ev) => {
            ev.preventDefault();
            if (this.disabled)
                return;
            (this.isOpen) ? this.close() : this.open();
        });
    }
    isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    addDocumentEvent() {
        document.addEventListener('click', this.handleDocumentClick);
    }
    removeDocumentEvent() {
        document.removeEventListener('click', this.handleDocumentClick);
    }
    handleDocumentClick(ev) {
        const target = ev.srcElement;
        if (target !== this.element && !this.isDescendant(this.element, target)) {
            this.close();
        }
    }
    getSelectedOptions() {
        if (this.useSelect) {
            return this.options.filter(option => {
                return option.selected;
            });
        }
        else {
            return this.inputs.filter(input => {
                return input.checked;
            });
        }
    }
    updateLabel() {
        const elements = this.getSelectedOptions();
        if (this.multiple) {
            const amount = elements.length;
            const format = (amount) ? 'multipleSelectedFormat' : 'multipleFormat';
            this.label.innerText = this.settings[format].replace(/%s/g, amount);
        }
        else {
            const text = (elements[0]) ? (this.useSelect) ? elements[0].innerHTML : elements[0].nextElementSibling.innerHTML : '';
            const format = (text) ? 'singleSelectedFormat' : 'singleFormat';
            this.label.innerText = this.settings[format].replace(/%s/g, text);
        }
    }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLW1vYmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOzs7O0dBSUc7O0FBTUgsOEZBQXFDO0FBTXJDLE1BQXFCLFFBQVE7SUFpQ3pCLFlBQVksT0FBb0IsRUFBRSxXQUFtQixFQUFFO1FBaEIvQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLG9CQUFlLEdB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QyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBS08sV0FBVztRQUVmLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDL0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2RTthQUFNO1lBQ0gsTUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0SCxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyRTtJQUNMLENBQUM7Q0FDSjtBQXZURCwyQkF1VEM7Ozs7Ozs7Ozs7OztBQ3ZVRCx5QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTW9iaWxlXG5tb2R1bGUuZXhwb3J0cy5pc01vYmlsZSA9IGlzTW9iaWxlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNNb2JpbGVcblxudmFyIG1vYmlsZVJFID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzWzQ2XTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaVxuXG52YXIgdGFibGV0UkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXNbNDZdMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pXG5cbmZ1bmN0aW9uIGlzTW9iaWxlIChvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG4gIHZhciB1YSA9IG9wdHMudWFcbiAgaWYgKCF1YSAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gIGlmICh1YSAmJiB1YS5oZWFkZXJzICYmIHR5cGVvZiB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J10gPT09ICdzdHJpbmcnKSB7XG4gICAgdWEgPSB1YS5oZWFkZXJzWyd1c2VyLWFnZW50J11cbiAgfVxuICBpZiAodHlwZW9mIHVhICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlXG5cbiAgcmV0dXJuIG9wdHMudGFibGV0ID8gdGFibGV0UkUudGVzdCh1YSkgOiBtb2JpbGVSRS50ZXN0KHVhKVxufVxuIiwiLyohXG4gKiBWVlNlbGVjdFxuICogKGMpIDIwMjAgVGVkIEdvZHlsYVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlXG4gKi9cblxuLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBJbXBvcnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnaXMtbW9iaWxlJztcblxuLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBFeHBvcnQgQ2xhc3Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVlZTZWxlY3Qge1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgVmFyaWFibGVzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xuICAgIHByaXZhdGUgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudHxudWxsO1xuICAgIHByaXZhdGUgZHJvcGRvd246IEhUTUxEaXZFbGVtZW50fG51bGw7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBBcnJheTxIVE1MT3B0aW9uRWxlbWVudD58bnVsbDtcbiAgICBwcml2YXRlIGlucHV0czogQXJyYXk8SFRNTElucHV0RWxlbWVudD58bnVsbDtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHVzZVNlbGVjdDogYm9vbGVhbjtcbiAgICBwcml2YXRlIG11bHRpcGxlOiBib29sZWFuO1xuICAgIHByaXZhdGUgYXV0b2ZvY3VzOiBib29sZWFuO1xuICAgIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc2V0dGluZ3M6IG9iamVjdDtcbiAgICBwcml2YXRlIGRlZmF1bHRTZXR0aW5nczogb2JqZWN0ID0ge1xuICAgICAgICBkcm9wZG93bkNsYXNzOiAnc2VsZWN0X19kcm9wZG93bicsICAgICAgICAgICAgICAvLyBkcm9wZG93biBjbGFzc1xuICAgICAgICBvcGVuQ2xhc3M6ICdpcy1vcGVuJywgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcGVuIGNsYXNzXG4gICAgICAgIG11bHRpcGxlU2VsZWN0ZWRGb3JtYXQ6IFwiJXMgZ2VzZWxlY3RlZXJkXCIsICAgICAgLy8gbGFiZWwgZm9ybWF0IGZvciBtdWx0aXBsZSBzZWxlY3Qgd2l0aCBzZWxlY3RlZCB2YWx1ZXNcbiAgICAgICAgbXVsdGlwbGVGb3JtYXQ6IFwiU2VsZWN0ZWVyIG9wdGllc1wiLCAgICAgICAgICAgICAvLyBsYWJlbCBmb3JtYXQgZm9yIG11bHRpcGxlIHNlbGVjdCB3aXRob3V0IHNlbGVjdGVzIHZhbHVlc1xuICAgICAgICBzaW5nbGVTZWxlY3RlZEZvcm1hdDogXCIlc1wiLCAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsIGZvcm1hdCBmb3Igc2luZ2xlIHNlbGVjdCB3aXRoIHNlbGVjdGVkIHZhbHVlXG4gICAgICAgIHNpbmdsZUZvcm1hdDogXCJNYWFrIGVlbiBrZXV6ZVwiLCAgICAgICAgICAgICAgICAgLy8gbGFiZWwgZm9ybWF0IGZvciBzaW5nbGUgc2VsZWN0IHdpdGhvdXQgc2VsZWN0ZWQgdmFsdWVcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBDb25zdHJ1Y3RvclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogT2JqZWN0ID0ge30pXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gey4uLnRoaXMuZGVmYXVsdFNldHRpbmdzLCAuLi5zZXR0aW5ncyB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5sYWJlbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpO1xuXG4gICAgICAgIHRoaXMudXNlU2VsZWN0ID0gaXNNb2JpbGUoeyB0YWJsZXQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSB0aGlzLnNlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5zZWxlY3QubmFtZTtcbiAgICAgICAgdGhpcy5hdXRvZm9jdXMgPSB0aGlzLnNlbGVjdC5hdXRvZm9jdXM7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLnNlbGVjdC5kaXNhYmxlZDtcblxuICAgICAgICBpZiAoIXRoaXMudXNlU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmFkZERyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLmFkZElucHV0cygpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkSW5wdXRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVHJpZ2dlckV2ZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkU2VsZWN0RXZlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG5cbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBHZXR0ZXJzIGFuZCBzZXR0ZXJzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLypcbiAgICAgKiBHZXQgdmFsdWUuIFJldHVybnMgYXJyYXkgb24gbXVsdGlwbGUgc2VsZWN0IGFuZCBhIHN0cmluZyBvbiBzaW5nbGUgc2VsZWN0XG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCk6IEFycmF5PHN0cmluZz58c3RyaW5nXG4gICAge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucygpLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWVzWzBdKSA/IHZhbHVlc1swXSA6ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsdWVzOiBBcnJheTxzdHJpbmc+fHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51c2VTZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdmFsdWVzLmluY2x1ZGVzKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dHNbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0c1swXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgUHVibGljIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qXG4gICAgICogT3BlbiBkcm9wZG93biBhbmQgc2V0IGRvY3VtZW50IGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9wZW4oKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3NbJ29wZW5DbGFzcyddKTtcblxuICAgICAgICB0aGlzLmFkZERvY3VtZW50RXZlbnQoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENsb3NlIGRyb3Bkb3duIGFuZCByZW1vdmUgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzWydvcGVuQ2xhc3MnXSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50KCk7XG4gICAgfVxuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKlxuICAgICAqIEFkZCBkcm9wZG93biBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGREcm9wZG93bigpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzWydkcm9wZG93bkNsYXNzJ10pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bik7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgaW5wdXQgZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZElucHV0cygpOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd24pIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5wdXRzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7dGhpcy5uYW1lfS0ke29wdGlvbi5pbmRleH1gO1xuXG4gICAgICAgICAgICBpbnB1dC5pZCA9IGlkO1xuICAgICAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSBvcHRpb24uZGlzYWJsZWQ7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gb3B0aW9uLnNlbGVjdGVkO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gdGhpcy5zZWxlY3QubmFtZTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAodGhpcy5tdWx0aXBsZSkgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcbiAgICAgICAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IG9wdGlvbi5pbm5lclRleHQ7XG4gICAgICAgICAgICBsYWJlbC5odG1sRm9yID0gaWQ7XG5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5wdXRzLnB1c2goaW5wdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBzZWxlY3QgZWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlU2VsZWN0KCk6IHZvaWQgXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU2VsZWN0RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBpbnB1dCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkSW5wdXRFdmVudHMoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIHRyaWdnZXIgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFRyaWdnZXJFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAodGhpcy5pc09wZW4pID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSXMgZGVzY2VuZGFudCBoZWxwZXIgY2xhc3NcbiAgICAgKiBUaGlzIGNvdWxkIG1heWJlIGJlIG1vdmVkIHRvIGEgaGVscGVyIHBhY2thZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzRGVzY2VuZGFudChwYXJlbnQ6IGFueSwgY2hpbGQ6IGFueSk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG5vZGUgPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEFkZCBkb2N1bWVudCBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkRG9jdW1lbnRFdmVudCgpOiB2b2lkXG4gICAge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgZG9jdW1lbnQgZXZlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZURvY3VtZW50RXZlbnQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSGFuZGxlIGRvY3VtZW50IGNsaWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVEb2N1bWVudENsaWNrKGV2OiBFdmVudCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICYmICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsZW1lbnQsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0IHNlbGVjdGVkIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkT3B0aW9ucygpOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50fEhUTUxPcHRpb25FbGVtZW50PlxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudXNlU2VsZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0cy5maWx0ZXIoaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVwZGF0ZSBsYWJlbFxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlTGFiZWwoKTogdm9pZFxuICAgIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucygpO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPSBlbGVtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSAoYW1vdW50KSA/ICdtdWx0aXBsZVNlbGVjdGVkRm9ybWF0JyA6ICdtdWx0aXBsZUZvcm1hdCc7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLmlubmVyVGV4dCA9IHRoaXMuc2V0dGluZ3NbZm9ybWF0XS5yZXBsYWNlKC8lcy9nLCBhbW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IChlbGVtZW50c1swXSkgPyAodGhpcy51c2VTZWxlY3QpID8gZWxlbWVudHNbMF0uaW5uZXJIVE1MIDogZWxlbWVudHNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gKHRleHQpID8gJ3NpbmdsZVNlbGVjdGVkRm9ybWF0JyA6ICdzaW5nbGVGb3JtYXQnO1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSB0aGlzLnNldHRpbmdzW2Zvcm1hdF0ucmVwbGFjZSgvJXMvZywgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9