module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/other/coming-soon.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/other/Container.js":
/*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Container; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/bala/Projects/shop.theuniquecreations.com/src/components/other/Container.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Container({\n  fluid,\n  children\n}) {\n  return __jsx(\"div\", {\n    className: fluid ? \"container-fluid\" : \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Db250YWluZXIuanM/ZTM5OSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJmbHVpZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUI7QUFBRUMsT0FBRjtBQUFTQztBQUFULENBQW5CLEVBQXdDO0FBQ3JELFNBQ0U7QUFBSyxhQUFTLEVBQUVELEtBQUssR0FBRyxpQkFBSCxHQUF1QixXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBEQyxRQUExRCxDQURGO0FBR0QiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vdGhlci9Db250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGZsdWlkLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ZsdWlkID8gXCJjb250YWluZXItZmx1aWRcIiA6IFwiY29udGFpbmVyXCJ9PntjaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/other/Container.js\n");

/***/ }),

/***/ "./src/components/other/SectionTitle.js":
/*!**********************************************!*\
  !*** ./src/components/other/SectionTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/bala/Projects/shop.theuniquecreations.com/src/components/other/SectionTitle.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction SectionTitle({\n  title,\n  hideDecoration,\n  className,\n  style\n}) {\n  return __jsx(\"div\", {\n    className: `section-title ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,\n    style: style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, title), !hideDecoration && __jsx(\"div\", {\n    className: \"section-title-decoration\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 27\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SectionTitle));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9TZWN0aW9uVGl0bGUuanM/MWMwNCJdLCJuYW1lcyI6WyJTZWN0aW9uVGl0bGUiLCJ0aXRsZSIsImhpZGVEZWNvcmF0aW9uIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCO0FBQUVDLE9BQUY7QUFBU0MsZ0JBQVQ7QUFBeUJDLFdBQXpCO0FBQW9DQztBQUFwQyxDQUF0QixFQUFtRTtBQUNqRSxTQUNFO0FBQUssYUFBUyxFQUFHLGlCQUFnQkMsaURBQVUsQ0FBQ0YsU0FBRCxDQUFZLEVBQXZEO0FBQTBELFNBQUssRUFBRUMsS0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0gsS0FBTCxDQURGLEVBRUcsQ0FBQ0MsY0FBRCxJQUFtQjtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnRCLENBREY7QUFNRDs7QUFFY0ksd0hBQUssQ0FBQ0MsSUFBTixDQUFXUCxZQUFYLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vdGhlci9TZWN0aW9uVGl0bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5mdW5jdGlvbiBTZWN0aW9uVGl0bGUoeyB0aXRsZSwgaGlkZURlY29yYXRpb24sIGNsYXNzTmFtZSwgc3R5bGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VjdGlvbi10aXRsZSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgeyFoaWRlRGVjb3JhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUtZGVjb3JhdGlvblwiIC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlY3Rpb25UaXRsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/other/SectionTitle.js\n");

/***/ }),

/***/ "./src/components/other/SocialIcons.js":
/*!*********************************************!*\
  !*** ./src/components/other/SocialIcons.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SocialIcons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/bala/Projects/shop.theuniquecreations.com/src/components/other/SocialIcons.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction SocialIcons({\n  className,\n  type = \"link\",\n  shape\n}) {\n  return __jsx(\"ul\", {\n    className: `social-icons ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: type,\n    shape: shape,\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-facebook-f\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: type,\n    shape: shape,\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-twitter\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: type,\n    shape: shape,\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-invision\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: type,\n    shape: shape,\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"fab fa-pinterest-p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Tb2NpYWxJY29ucy5qcz80ZTc4Il0sIm5hbWVzIjpbIlNvY2lhbEljb25zIiwiY2xhc3NOYW1lIiwidHlwZSIsInNoYXBlIiwiY2xhc3NOYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUMsV0FBRjtBQUFhQyxNQUFJLEdBQUcsTUFBcEI7QUFBNEJDO0FBQTVCLENBQXJCLEVBQTBEO0FBQ3ZFLFNBQ0U7QUFBSSxhQUFTLEVBQUcsZ0JBQWVDLGlEQUFVLENBQUNILFNBQUQsQ0FBWSxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUVDLElBQWQ7QUFBb0IsU0FBSyxFQUFFQyxLQUEzQjtBQUFrQyxRQUFJLEVBQUMsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBRUQsSUFBZDtBQUFvQixTQUFLLEVBQUVDLEtBQTNCO0FBQWtDLFFBQUksRUFBQyxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FORixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFFRCxJQUFkO0FBQW9CLFNBQUssRUFBRUMsS0FBM0I7QUFBa0MsUUFBSSxFQUFDLEdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVhGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFFRCxJQUFkO0FBQW9CLFNBQUssRUFBRUMsS0FBM0I7QUFBa0MsUUFBSSxFQUFDLEdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQWhCRixDQURGO0FBd0JEIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvb3RoZXIvU29jaWFsSWNvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29jaWFsSWNvbnMoeyBjbGFzc05hbWUsIHR5cGUgPSBcImxpbmtcIiwgc2hhcGUgfSkge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e2Bzb2NpYWwtaWNvbnMgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICA8bGk+XG4gICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0gc2hhcGU9e3NoYXBlfSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0gc2hhcGU9e3NoYXBlfSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0gc2hhcGU9e3NoYXBlfSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnZpc2lvblwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uIHR5cGU9e3R5cGV9IHNoYXBlPXtzaGFwZX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtcGludGVyZXN0LXBcIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/other/SocialIcons.js\n");

/***/ }),

/***/ "./src/pages/other/coming-soon.js":
/*!****************************************!*\
  !*** ./src/pages/other/coming-soon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return comingSoon; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ \"react-countdown\");\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/other/Container */ \"./src/components/other/Container.js\");\n/* harmony import */ var _components_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/other/SectionTitle */ \"./src/components/other/SectionTitle.js\");\n/* harmony import */ var _components_other_SocialIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/other/SocialIcons */ \"./src/components/other/SocialIcons.js\");\nvar _jsxFileName = \"/Users/bala/Projects/shop.theuniquecreations.com/src/pages/other/coming-soon.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction comingSoon() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Coming soon\")), __jsx(\"div\", {\n    className: \"coming-soon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"coming-soon-wrapper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(_components_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Coming Soon\",\n    hideDecoration: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 15\n    }\n  }), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 15\n    }\n  }, \"OUR WEBSITE IS UNDER CORPORATE.\"), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    date: Date.now() + 100000000,\n    renderer: ({\n      days,\n      hours,\n      minutes,\n      seconds\n    }) => {\n      return __jsx(\"div\", {\n        className: \"coming-soon-countdown\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        className: \"coming-soon-countdown-item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 23\n        }\n      }, __jsx(\"h6\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 25\n        }\n      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"zeroPad\"])(days)), \" \", __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 50\n        }\n      }, \"/days\")), __jsx(\"div\", {\n        className: \"coming-soon-countdown-item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 23\n        }\n      }, __jsx(\"h6\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 25\n        }\n      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"zeroPad\"])(hours)), \" \", __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 51\n        }\n      }, \"/hr\")), __jsx(\"div\", {\n        className: \"coming-soon-countdown-item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 23\n        }\n      }, __jsx(\"h6\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 25\n        }\n      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"zeroPad\"])(minutes), \" \"), __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 25\n        }\n      }, \"/min\")), __jsx(\"div\", {\n        className: \"coming-soon-countdown-item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 23\n        }\n      }, __jsx(\"h6\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 25\n        }\n      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"zeroPad\"])(seconds)), \" \", __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 53\n        }\n      }, \"/sec\")));\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 15\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, \"Follow Us For Updates\"), __jsx(_components_other_SocialIcons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    type: \"primary\",\n    shape: \"round\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }))))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvb3RoZXIvY29taW5nLXNvb24uanM/ZTJhYyJdLCJuYW1lcyI6WyJjb21pbmdTb29uIiwiRGF0ZSIsIm5vdyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiemVyb1BhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDbkMsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBYyxTQUFLLEVBQUMsYUFBcEI7QUFBa0Msa0JBQWMsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FGRixFQUdFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxLQUFhLFNBRHJCO0FBRUUsWUFBUSxFQUFFLENBQUM7QUFBRUMsVUFBRjtBQUFRQyxXQUFSO0FBQWVDLGFBQWY7QUFBd0JDO0FBQXhCLEtBQUQsS0FBdUM7QUFDL0MsYUFDRTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQywrREFBTyxDQUFDSixJQUFELENBQVosQ0FERixPQUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQzQixDQURGLEVBSUU7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtJLCtEQUFPLENBQUNILEtBQUQsQ0FBWixDQURGLE9BQzRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFENUIsQ0FKRixFQU9FO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLRywrREFBTyxDQUFDRixPQUFELENBQVosTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsQ0FQRixFQVdFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLRSwrREFBTyxDQUFDRCxPQUFELENBQVosQ0FERixPQUM4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQ5QixDQVhGLENBREY7QUFpQkQsS0FwQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBekJGLEVBMEJFLE1BQUMscUVBQUQ7QUFBYSxRQUFJLEVBQUMsU0FBbEI7QUFBNEIsU0FBSyxFQUFDLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsQ0FERixDQURGLENBREYsQ0FKRixDQURGO0FBeUNEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL290aGVyL2NvbWluZy1zb29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IENvdW50ZG93biwgeyB6ZXJvUGFkIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdGhlci9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21pbmdTb29uKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbWluZyBzb29uPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nLXNvb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmctc29vbi13cmFwcGVyXCI+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiQ29taW5nIFNvb25cIiBoaWRlRGVjb3JhdGlvbiAvPlxuICAgICAgICAgICAgICA8aDM+T1VSIFdFQlNJVEUgSVMgVU5ERVIgQ09SUE9SQVRFLjwvaDM+XG4gICAgICAgICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICAgICAgICBkYXRlPXtEYXRlLm5vdygpICsgMTAwMDAwMDAwfVxuICAgICAgICAgICAgICAgIHJlbmRlcmVyPXsoeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWluZy1zb29uLWNvdW50ZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nLXNvb24tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChkYXlzKX08L2g2PiA8c3Bhbj4vZGF5czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWluZy1zb29uLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoaG91cnMpfTwvaDY+IDxzcGFuPi9ocjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbWluZy1zb29uLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQobWludXRlcyl9IDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4vbWluPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29taW5nLXNvb24tY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChzZWNvbmRzKX08L2g2PiA8c3Bhbj4vc2VjPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHA+Rm9sbG93IFVzIEZvciBVcGRhdGVzPC9wPlxuICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/other/coming-soon.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-countdown\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudGRvd25cIj84NzhjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNvdW50ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93blwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-countdown\n");

/***/ })

/******/ });