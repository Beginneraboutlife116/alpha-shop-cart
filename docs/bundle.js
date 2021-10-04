/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/javascript/cartItemsControl.js":
/*!********************************************!*\
  !*** ./src/javascript/cartItemsControl.js ***!
  \********************************************/
/***/ (() => {

const cartItems = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    style: "pants",
    number: 1,
    price: 3999
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    style: "pants",
    number: 1,
    price: 1299
  }
]

const cartItemButtons = document.querySelectorAll('.cart__item-info--buttons')
const totalPrice = document.querySelector('.cart__total').lastElementChild

function countPrice () {
  let price = 0
  for (let i = 0; i < cartItems.length; i++) {
    price += cartItems[i].number * cartItems[i].price
  }
  return new Intl.NumberFormat().format(price)
}

function cartItemButtonControl (e) {
  const id = e.target.closest('.cart__item-info-container').dataset.id
  const target = e.target
  const numbers = document.querySelectorAll('.cart__item-info--number')
  if (target.classList.contains('cart__item-info--buttons-plus')) {
    cartItems[id - 1].number += 1
    numbers[id - 1].innerHTML = cartItems[id - 1].number
  } else if (target.classList.contains('cart__item-info--buttons-minus')) {
    if (cartItems[id - 1].number === 0) { return }
    cartItems[id - 1].number -= 1
    numbers[id - 1].innerHTML = cartItems[id - 1].number
  }
  totalPrice.innerHTML = `$${countPrice()}`
}

for (let i = 0; i < cartItemButtons.length; i++) {
  cartItemButtons[i].addEventListener('click', cartItemButtonControl)
}

/***/ }),

/***/ "./src/javascript/darkMode.js":
/*!************************************!*\
  !*** ./src/javascript/darkMode.js ***!
  \************************************/
/***/ (() => {

let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#darkModeToggle')

if (darkMode === "on") {
  document.body.classList.add('darkMode')
}

function clickOnDarkModeToggle () {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'on') {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'on')
  } else {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'off')
  }
}

darkModeToggle.addEventListener('click', clickOnDarkModeToggle)

/***/ }),

/***/ "./src/javascript/deliveryWayRadio.js":
/*!********************************************!*\
  !*** ./src/javascript/deliveryWayRadio.js ***!
  \********************************************/
/***/ (() => {

const inputRadios = document.querySelectorAll('input[type="radio"]')
const deliveryWayPanel = document.querySelector('.form__part-delivery')

function deliveryWayChecked (e) {
  for (let i = 0; i < inputRadios.length; i++) {
    if (inputRadios[i].checked) {
      inputRadios[i].parentElement.classList.add('checked')
    } else {
      inputRadios[i].parentElement.classList.remove('checked')
    }
  }
}

deliveryWayPanel.addEventListener('change', deliveryWayChecked)

/***/ }),

/***/ "./src/javascript/prevNextButton.js":
/*!******************************************!*\
  !*** ./src/javascript/prevNextButton.js ***!
  \******************************************/
/***/ (() => {

const btn = document.querySelector(".btn")
const forms = document.querySelectorAll('.form__part')
const btnPrev = document.querySelector('.btn__prev')
const btnNext = document.querySelector('.btn__next')
const steps = document.querySelectorAll('.stepper__step')

let stepCount = 0

function buttonClickControlForm(e) {
  e.preventDefault()
  const target = e.target.closest('button')
  let presentStepCount = stepCount
  
  if (target.innerHTML === "確認下單") { return }
  if (target.classList.contains('btn__next')) {
    stepCount += 1
    toggleFormsDisplay(presentStepCount, stepCount)
    controlStepsStyle(presentStepCount, stepCount)
    btnPrev.classList.remove('btn__prev--disabled')
    modifyBtn()
  } else if (target.classList.contains('btn__prev')) {
    stepCount -= 1
    toggleFormsDisplay(presentStepCount, stepCount)
    controlStepsStyle(presentStepCount, stepCount)
    modifyBtn()
    btnNext.innerHTML = `
      <span class="btn__next-info">下一步</span>
      <div class="btn__next-icon"></div>
    `
  }
}

function toggleFormsDisplay (presentNum, futureNum) {
  forms[presentNum].classList.toggle('d-none')
  forms[futureNum].classList.toggle('d-none')
}

function controlStepsStyle (presentNum, futureNum) {
  if (presentNum < futureNum) {
    steps[presentNum].classList.remove('stepper__step--active')
    steps[presentNum].classList.add('stepper__step--finished')
    steps[futureNum].classList.add('stepper__step--active')
  } else {
    steps[presentNum].classList.remove('stepper__step--active')
    steps[futureNum].classList.remove('stepper__step--finished')
    steps[futureNum].classList.add('stepper__step--active')
  }
}

function modifyBtn () {
  if (stepCount === 0) {
    return btnPrev.classList.add('btn__prev--disabled')
  }
  if (stepCount === 2) {
    return btnNext.innerHTML = "確認下單"
  }
}

btn.addEventListener('click', buttonClickControlForm)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _javascript_prevNextButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/prevNextButton.js */ "./src/javascript/prevNextButton.js");
/* harmony import */ var _javascript_prevNextButton_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javascript_prevNextButton_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _javascript_deliveryWayRadio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/deliveryWayRadio.js */ "./src/javascript/deliveryWayRadio.js");
/* harmony import */ var _javascript_deliveryWayRadio_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_deliveryWayRadio_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _javascript_cartItemsControl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/cartItemsControl.js */ "./src/javascript/cartItemsControl.js");
/* harmony import */ var _javascript_cartItemsControl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_javascript_cartItemsControl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _javascript_darkMode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/darkMode.js */ "./src/javascript/darkMode.js");
/* harmony import */ var _javascript_darkMode_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_javascript_darkMode_js__WEBPACK_IMPORTED_MODULE_4__);






console.log('Webpack success')
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map