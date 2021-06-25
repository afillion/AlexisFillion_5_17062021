/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _query_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query.js */ \"./src/query.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/store.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n //anonymous main function. () at the end is the call of this function.\n//aim to take return of retrieveContent() and call functions to display data get by retrieveContent()\n\n_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n  var storage, articles, _iterator, _step, article;\n\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          if ((0,_store_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)('localStorage')) {\n            // Nous pouvons utiliser localStorage\n            console.log(\"localStorage OK\");\n            storage = window.localStorage;\n            console.log(storage);\n          } else {\n            // Malheureusement, localStorage n'est pas disponible\n            alert(\"localStorage KO\");\n          }\n\n          _context.next = 3;\n          return (0,_query_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n        case 3:\n          articles = _context.sent;\n          console.log(articles);\n          _iterator = _createForOfIteratorHelper(articles);\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              article = _step.value;\n              showContent(article);\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}))();\n\nfunction showContent(article) {\n  //L'élément HTML <template> (ou Template Content ou modèle de contenu) est un mécanisme utilisé pour stocker du contenu HTML (côté client)\n  //qui ne doit pas être affiché lors du chargement de la page mais qui peut être instancié et affiché par la suite grâce à un script JavaScript.\n  var template_element = document.getElementById(\"templateArticle\"); //La méthode Document importNode() crée une nouvelle copie du Node ou DocumentFragment spécifié à partir d'un autre document\n  //afin qu'il puisse être inséré dans le document actuel.\n\n  var clone = document.importNode(template_element.content, true);\n  clone.getElementById(\"articleTitle\").textContent = article.name;\n  clone.getElementById(\"articleTxt\").textContent = article.description;\n  clone.getElementById(\"articlePrice\").textContent = article.price / 100 + \".00\";\n  clone.getElementById(\"articleImg\").setAttribute(\"src\", article.imageUrl);\n  var href = clone.getElementById(\"articleId\");\n  href.addEventListener('click', function () {\n    var articleUrl = getArticleUrl(article._id);\n    href.setAttribute(\"href\", articleUrl);\n  });\n  document.getElementById(\"list\").appendChild(clone);\n}\n\nfunction getArticleUrl(id) {\n  return \"product.html?id=\" + id;\n}\n\n//# sourceURL=webpack://rendu/./src/index.js?");

/***/ }),

/***/ "./src/query.js":
/*!**********************!*\
  !*** ./src/query.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveContent),\n/* harmony export */   \"query_item\": () => (/* binding */ query_item)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//modification de la fonction initiale pour utiliser .then() et .catch()\n//Objectif = pouvoir attraper l'erreur et en etre alerter si il y en a une\nfunction retrieveContent() {\n  return _retrieveContent.apply(this, arguments);\n}\n\nfunction _retrieveContent() {\n  _retrieveContent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var url;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = \"http://localhost:3000/api/teddies/\";\n            console.log(\"retrieveContent()\");\n            return _context.abrupt(\"return\", fetch(url, {\n              method: \"GET\"\n            }).then(function (response) {\n              return response.json();\n            }).then(function (articles) {\n              return articles;\n            })[\"catch\"](function (err) {\n              alert(err);\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _retrieveContent.apply(this, arguments);\n}\n\nfunction query_item(_x) {\n  return _query_item.apply(this, arguments);\n}\n\nfunction _query_item() {\n  _query_item = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", fetch(\"http://localhost:3000/api/teddies/\" + id, {\n              method: \"GET\"\n            }).then(function (response) {\n              return response.json();\n            }).then(function (item) {\n              return item;\n            })[\"catch\"](function (err) {\n              alert(err);\n            }));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _query_item.apply(this, arguments);\n}\n\n//# sourceURL=webpack://rendu/./src/query.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storageAvailable\": () => (/* binding */ storageAvailable)\n/* harmony export */ });\n//MDN function to test if the storage is available or not\n//some web browser don;t handle it or don;t active it\n//i.e : safari on private navigation\nfunction storageAvailable(type) {\n  try {\n    var storage = window[type],\n        x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return e instanceof DOMException && ( // everything except Firefox\n    e.code === 22 || // Firefox\n    e.code === 1014 || // test name field too, because code might not be present\n    // everything except Firefox\n    e.name === 'QuotaExceededError' || // Firefox\n    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored\n    storage.length !== 0;\n  }\n}\n\n//# sourceURL=webpack://rendu/./src/store.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;