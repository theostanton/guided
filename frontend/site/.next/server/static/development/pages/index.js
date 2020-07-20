module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/SomeComponent.tsx":
/*!******************************************!*\
  !*** ./src/components/SomeComponent.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SomeComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"react-native-web/dist/cjs/exports/StyleSheet\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/Text */ \"react-native-web/dist/cjs/exports/Text\");\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ \"react-native-web/dist/cjs/exports/View\");\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/theo/Code/guided/frontend/site/src/components/SomeComponent.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nclass SomeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      style: styles.root,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }\n    }, __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }\n    }, \"Some Component!\"));\n  }\n\n}\nconst styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  root: {\n    padding: 10\n  },\n  text: {\n    fontWeight: 'bold'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb21lQ29tcG9uZW50LnRzeD8zMDAyIl0sIm5hbWVzIjpbIlNvbWVDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInN0eWxlcyIsInJvb3QiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwicGFkZGluZyIsInRleHQiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQU1lLE1BQU1BLGFBQU4sU0FBNEJDLDRDQUFLLENBQUNDLFNBQWxDLENBQTBEO0FBQ3ZFQyxRQUFNLEdBQUc7QUFDUCxXQUNFLE1BQUMsNkVBQUQ7QUFBTSxXQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGO0FBS0Q7O0FBUHNFO0FBVXpFLE1BQU1ELE1BQU0sR0FBR0UsbUZBQVUsQ0FBQ0MsTUFBWCxDQUFrQjtBQUMvQkYsTUFBSSxFQUFFO0FBQUNHLFdBQU8sRUFBRTtBQUFWLEdBRHlCO0FBRS9CQyxNQUFJLEVBQUU7QUFBQ0MsY0FBVSxFQUFFO0FBQWI7QUFGeUIsQ0FBbEIsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NvbWVDb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3R5bGVTaGVldCwgVGV4dCwgVmlld30gZnJvbSAncmVhY3QtbmF0aXZlJztcblxudHlwZSBQcm9wcyA9IHt9O1xudHlwZSBTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb21lQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgIDxUZXh0PlNvbWUgQ29tcG9uZW50ITwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgcm9vdDoge3BhZGRpbmc6IDEwfSxcbiAgdGV4dDoge2ZvbnRXZWlnaHQ6ICdib2xkJ30sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SomeComponent.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"react-native-web/dist/cjs/exports/StyleSheet\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/Text */ \"react-native-web/dist/cjs/exports/Text\");\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ \"react-native-web/dist/cjs/exports/View\");\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_SomeComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SomeComponent */ \"./src/components/SomeComponent.tsx\");\nvar _jsxFileName = \"/Users/theo/Code/guided/frontend/site/src/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction App(props) {\n  return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    style: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    accessibilityRole: \"header\",\n    style: styles.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"React Native for Web & Next.js\"), __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: styles.link,\n    accessibilityRole: \"link\",\n    href: `/alternate`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"A universal link\"), __jsx(_components_SomeComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    style: styles.textContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    accessibilityRole: \"header\",\n    \"aria-level\": \"2\",\n    style: styles.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Subheader\")));\n}\nconst styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  container: {\n    alignItems: 'center',\n    flexGrow: 1,\n    justifyContent: 'center'\n  },\n  link: {\n    color: 'blue'\n  },\n  textContainer: {\n    alignItems: 'center',\n    marginTop: 16\n  },\n  text: {\n    alignItems: 'center',\n    fontSize: 24,\n    marginBottom: 24\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0ZXh0IiwibGluayIsInRleHRDb250YWluZXIiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRWUsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQ2pDLFNBQ0UsTUFBQyw2RUFBRDtBQUFNLFNBQUssRUFBRUMsTUFBTSxDQUFDQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUFNLHFCQUFpQixFQUFDLFFBQXhCO0FBQWlDLFNBQUssRUFBRUQsTUFBTSxDQUFDRSxJQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBS0UsTUFBQyw2RUFBRDtBQUFNLFNBQUssRUFBRUYsTUFBTSxDQUFDRyxJQUFwQjtBQUEwQixxQkFBaUIsRUFBQyxNQUE1QztBQUFtRCxRQUFJLEVBQUcsWUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRixFQVNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBV0UsTUFBQyw2RUFBRDtBQUFNLFNBQUssRUFBRUgsTUFBTSxDQUFDSSxhQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUFNLHFCQUFpQixFQUFDLFFBQXhCO0FBQWlDLGtCQUFXLEdBQTVDO0FBQWdELFNBQUssRUFBRUosTUFBTSxDQUFDRSxJQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBWEYsQ0FERjtBQW1CRDtBQUVELE1BQU1GLE1BQU0sR0FBR0ssbUZBQVUsQ0FBQ0MsTUFBWCxDQUFrQjtBQUMvQkwsV0FBUyxFQUFFO0FBQ1RNLGNBQVUsRUFBRSxRQURIO0FBRVRDLFlBQVEsRUFBRSxDQUZEO0FBR1RDLGtCQUFjLEVBQUU7QUFIUCxHQURvQjtBQU0vQk4sTUFBSSxFQUFFO0FBQ0pPLFNBQUssRUFBRTtBQURILEdBTnlCO0FBUy9CTixlQUFhLEVBQUU7QUFDYkcsY0FBVSxFQUFFLFFBREM7QUFFYkksYUFBUyxFQUFFO0FBRkUsR0FUZ0I7QUFhL0JULE1BQUksRUFBRTtBQUNKSyxjQUFVLEVBQUUsUUFEUjtBQUVKSyxZQUFRLEVBQUUsRUFGTjtBQUdKQyxnQkFBWSxFQUFFO0FBSFY7QUFieUIsQ0FBbEIsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0eWxlU2hlZXQsIFRleHQsIFZpZXd9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgU29tZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1NvbWVDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8VGV4dCBhY2Nlc3NpYmlsaXR5Um9sZT1cImhlYWRlclwiIHN0eWxlPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIFJlYWN0IE5hdGl2ZSBmb3IgV2ViICYgTmV4dC5qc1xuICAgICAgPC9UZXh0PlxuXG4gICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmxpbmt9IGFjY2Vzc2liaWxpdHlSb2xlPVwibGlua1wiIGhyZWY9e2AvYWx0ZXJuYXRlYH0+XG4gICAgICAgIEEgdW5pdmVyc2FsIGxpbmtcbiAgICAgIDwvVGV4dD5cblxuICAgICAgPFNvbWVDb21wb25lbnQgLz5cblxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy50ZXh0Q29udGFpbmVyfT5cbiAgICAgICAgPFRleHQgYWNjZXNzaWJpbGl0eVJvbGU9XCJoZWFkZXJcIiBhcmlhLWxldmVsPVwiMlwiIHN0eWxlPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgU3ViaGVhZGVyXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICA8L1ZpZXc+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleEdyb3c6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBsaW5rOiB7XG4gICAgY29sb3I6ICdibHVlJyxcbiAgfSxcbiAgdGV4dENvbnRhaW5lcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogMTYsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogMjQsXG4gICAgbWFyZ2luQm90dG9tOiAyNCxcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/theo/Code/guided/frontend/site/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-native-web/dist/cjs/exports/StyleSheet":
/*!***************************************************************!*\
  !*** external "react-native-web/dist/cjs/exports/StyleSheet" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native-web/dist/cjs/exports/StyleSheet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvU3R5bGVTaGVldFwiPzAxZjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2Nqcy9leHBvcnRzL1N0eWxlU2hlZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvU3R5bGVTaGVldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-native-web/dist/cjs/exports/StyleSheet\n");

/***/ }),

/***/ "react-native-web/dist/cjs/exports/Text":
/*!*********************************************************!*\
  !*** external "react-native-web/dist/cjs/exports/Text" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native-web/dist/cjs/exports/Text\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvVGV4dFwiPzg4ZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2Nqcy9leHBvcnRzL1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvVGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-native-web/dist/cjs/exports/Text\n");

/***/ }),

/***/ "react-native-web/dist/cjs/exports/View":
/*!*********************************************************!*\
  !*** external "react-native-web/dist/cjs/exports/View" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native-web/dist/cjs/exports/View\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvVmlld1wiPzNhMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2Nqcy9leHBvcnRzL1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvVmlld1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-native-web/dist/cjs/exports/View\n");

/***/ })

/******/ });