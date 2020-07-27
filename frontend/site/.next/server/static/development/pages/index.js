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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"react-native-web/dist/cjs/exports/StyleSheet\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ \"react-native-web/dist/cjs/exports/View\");\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styles_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/text */ \"./src/styles/text.ts\");\n/* harmony import */ var styles_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/dimensions */ \"./src/styles/dimensions.ts\");\n/* harmony import */ var styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/colors */ \"./src/styles/colors.ts\");\n/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Link */ \"./src/components/Link/index.tsx\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_7__);\nvar _dec,\n    _class,\n    _jsxFileName = \"/Users/theo/Code/guided/frontend/site/src/components/Layout/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nlet Layout = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__[\"inject\"])('authStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__[\"observer\"])(_class = class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  renderHeader() {\n    const isLoggedin = this.props.authStore.isLoggedIn;\n    console.log('renderHeader isLoggedIn=', isLoggedin);\n    const leftItems = isLoggedin ? [{\n      text: 'Home',\n      link: '/'\n    }, {\n      text: 'Profile',\n      link: '/profile'\n    }] : [];\n    const rightItems = isLoggedin ? [{\n      text: 'Sign out',\n      onClick: async () => {\n        await this.props.authStore.logOut();\n      }\n    }, {\n      text: 'Account',\n      link: '/account'\n    }] : [{\n      text: 'Login',\n      link: '/login'\n    }, {\n      text: 'Signup',\n      link: '/signup'\n    }];\n    return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: styles.headerRoot,\n      accessibilityRole: \"header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 7\n      }\n    }, __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: styles.headerLeft,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }\n    }, leftItems.map(item => {\n      return __jsx(components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        key: item.text,\n        viewStyle: styles.headerItem,\n        textStyle: styles_text__WEBPACK_IMPORTED_MODULE_3__[\"h4\"],\n        href: item.link,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 15\n        }\n      }, item.text);\n    })), __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: styles.headerRight,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }\n    }, rightItems.map(item => {\n      return __jsx(components_Link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        key: item.text,\n        viewStyle: styles.headerItem,\n        textStyle: styles_text__WEBPACK_IMPORTED_MODULE_3__[\"h4\"],\n        onClick: item.onClick,\n        href: item.link,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 15\n        }\n      }, item.text);\n    })));\n  }\n\n  render() {\n    return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: styles.root,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 7\n      }\n    }, this.renderHeader(), __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: styles.content,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }\n    }, this.props.children));\n  }\n\n}) || _class) || _class);\n\nconst styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  root: {\n    width: '100%',\n    flexDirection: 'column',\n    maxWidth: 800,\n    alignSelf: 'center'\n  },\n  headerRoot: {\n    flexDirection: 'row',\n    width: '100%',\n    borderBottomColor: styles_colors__WEBPACK_IMPORTED_MODULE_5__[\"border\"],\n    borderBottomWidth: styles_dimensions__WEBPACK_IMPORTED_MODULE_4__[\"hairline\"]\n  },\n  headerLeft: {\n    flexDirection: 'row',\n    flexGrow: 0\n  },\n  headerRight: {\n    flexDirection: 'row-reverse',\n    flexGrow: 1\n  },\n  headerItem: {\n    paddingTop: styles_dimensions__WEBPACK_IMPORTED_MODULE_4__[\"whole\"],\n    paddingBottom: styles_dimensions__WEBPACK_IMPORTED_MODULE_4__[\"whole\"],\n    paddingLeft: styles_dimensions__WEBPACK_IMPORTED_MODULE_4__[\"half\"],\n    paddingRight: styles_dimensions__WEBPACK_IMPORTED_MODULE_4__[\"half\"]\n  },\n  content: {\n    flexGrow: 1,\n    marginTop: styles_dimensions__WEBPACK_IMPORTED_MODULE_4__[\"half\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4PzU1NzAiXSwibmFtZXMiOlsiTGF5b3V0IiwiaW5qZWN0Iiwib2JzZXJ2ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlckhlYWRlciIsImlzTG9nZ2VkaW4iLCJwcm9wcyIsImF1dGhTdG9yZSIsImlzTG9nZ2VkSW4iLCJjb25zb2xlIiwibG9nIiwibGVmdEl0ZW1zIiwidGV4dCIsImxpbmsiLCJyaWdodEl0ZW1zIiwib25DbGljayIsImxvZ091dCIsInN0eWxlcyIsImhlYWRlclJvb3QiLCJoZWFkZXJMZWZ0IiwibWFwIiwiaXRlbSIsImhlYWRlckl0ZW0iLCJoNCIsImhlYWRlclJpZ2h0IiwicmVuZGVyIiwicm9vdCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJ3aWR0aCIsImZsZXhEaXJlY3Rpb24iLCJtYXhXaWR0aCIsImFsaWduU2VsZiIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJoYWlybGluZSIsImZsZXhHcm93IiwicGFkZGluZ1RvcCIsIndob2xlIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwiaGFsZiIsInBhZGRpbmdSaWdodCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBVXFCQSxNLFdBRnBCQyx5REFBTSxDQUFDLFdBQUQsQyxnQkFDTkMsMkQsVUFERCxNQUVxQkYsTUFGckIsU0FFb0NHLDRDQUFLLENBQUNDLFNBRjFDLENBRWtFO0FBQ2hFQyxjQUFZLEdBQUc7QUFDYixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCQyxVQUF4QztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q0wsVUFBeEM7QUFPQSxVQUFNTSxT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O0FBR1ZJLHFCQUFpQixFQUFFQyxvREFIVDtBQUlWQyxxQkFBaUIsRUFBRUMsMERBQVFBO0FBSmpCLEdBUG1CO0FBYS9CbkIsWUFBVSxFQUFFO0FBQ1ZhLGlCQUFhLEVBQUUsS0FETDtBQUVWTyxZQUFRLEVBQUU7QUFGQSxHQWJtQjtBQWlCL0JmLGFBQVcsRUFBRTtBQUNYUSxpQkFBYSxFQUFFLGFBREo7QUFFWE8sWUFBUSxFQUFFO0FBRkMsR0FqQmtCO0FBcUIvQmpCLFlBQVUsRUFBRTtBQUNWa0IsY0FBVSxFQUFFQyx1REFERjtBQUVWQyxpQkFBYSxFQUFFRCx1REFGTDtBQUdWRSxlQUFXLEVBQUVDLHNEQUhIO0FBSVZDLGdCQUFZLEVBQUVELHNEQUFJQTtBQUpSLEdBckJtQjtBQTJCL0JqQixTQUFPLEVBQUU7QUFDUFksWUFBUSxFQUFFLENBREg7QUFFUE8sYUFBUyxFQUFFRixzREFBSUE7QUFGUjtBQTNCc0IsQ0FBbEIsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTdHlsZVNoZWV0LCBWaWV3fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHtoNH0gZnJvbSAnc3R5bGVzL3RleHQnO1xuaW1wb3J0IHtoYWlybGluZSwgaGFsZiwgd2hvbGV9IGZyb20gJ3N0eWxlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7Ym9yZGVyfSBmcm9tICdzdHlsZXMvY29sb3JzJztcbmltcG9ydCBMaW5rIGZyb20gJ2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQge2luamVjdCwgb2JzZXJ2ZXJ9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IEF1dGhTdG9yZSBmcm9tICdzdG9yZXMvQXV0aFN0b3JlJztcblxudHlwZSBQcm9wcyA9IHtcbiAgYXV0aFN0b3JlPzogQXV0aFN0b3JlO1xufTtcbnR5cGUgU3RhdGUgPSB7fTtcblxuQGluamVjdCgnYXV0aFN0b3JlJylcbkBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICByZW5kZXJIZWFkZXIoKSB7XG4gICAgY29uc3QgaXNMb2dnZWRpbiA9IHRoaXMucHJvcHMuYXV0aFN0b3JlLmlzTG9nZ2VkSW47XG4gICAgY29uc29sZS5sb2coJ3JlbmRlckhlYWRlciBpc0xvZ2dlZEluPScsIGlzTG9nZ2VkaW4pO1xuXG4gICAgdHlwZSBJdGVtID0ge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgbGluaz86IHN0cmluZztcbiAgICAgIG9uQ2xpY2s/OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIH07XG4gICAgY29uc3QgbGVmdEl0ZW1zOiBJdGVtW10gPSBpc0xvZ2dlZGluXG4gICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnSG9tZScsXG4gICAgICAgICAgICBsaW5rOiAnLycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnUHJvZmlsZScsXG4gICAgICAgICAgICBsaW5rOiAnL3Byb2ZpbGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIDogW107XG4gICAgY29uc3QgcmlnaHRJdGVtczogSXRlbVtdID0gaXNMb2dnZWRpblxuICAgICAgPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1NpZ24gb3V0JyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5hdXRoU3RvcmUubG9nT3V0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0FjY291bnQnLFxuICAgICAgICAgICAgbGluazogJy9hY2NvdW50JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnTG9naW4nLFxuICAgICAgICAgICAgbGluazogJy9sb2dpbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnU2lnbnVwJyxcbiAgICAgICAgICAgIGxpbms6ICcvc2lnbnVwJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaGVhZGVyUm9vdH0gYWNjZXNzaWJpbGl0eVJvbGU9XCJoZWFkZXJcIj5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5oZWFkZXJMZWZ0fT5cbiAgICAgICAgICB7bGVmdEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICB2aWV3U3R5bGU9e3N0eWxlcy5oZWFkZXJJdGVtfVxuICAgICAgICAgICAgICAgIHRleHRTdHlsZT17aDR9XG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfT5cbiAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaGVhZGVyUmlnaHR9PlxuICAgICAgICAgIHtyaWdodEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICB2aWV3U3R5bGU9e3N0eWxlcy5oZWFkZXJJdGVtfVxuICAgICAgICAgICAgICAgIHRleHRTdHlsZT17aDR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aXRlbS5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua30+XG4gICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9WaWV3PlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckhlYWRlcigpfVxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnR9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgbWF4V2lkdGg6IDgwMCxcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICB9LFxuICBoZWFkZXJSb290OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogYm9yZGVyLFxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiBoYWlybGluZSxcbiAgfSxcbiAgaGVhZGVyTGVmdDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGZsZXhHcm93OiAwLFxuICB9LFxuICBoZWFkZXJSaWdodDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGhlYWRlckl0ZW06IHtcbiAgICBwYWRkaW5nVG9wOiB3aG9sZSxcbiAgICBwYWRkaW5nQm90dG9tOiB3aG9sZSxcbiAgICBwYWRkaW5nTGVmdDogaGFsZixcbiAgICBwYWRkaW5nUmlnaHQ6IGhhbGYsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBtYXJnaW5Ub3A6IGhhbGYsXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n");

/***/ }),

/***/ "./src/components/Link/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Link/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"react-native-web/dist/cjs/exports/StyleSheet\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/Text */ \"react-native-web/dist/cjs/exports/Text\");\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ \"react-native-web/dist/cjs/exports/View\");\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/theo/Code/guided/frontend/site/src/components/Link/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nclass Link extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      hover: false\n    };\n  }\n\n  render() {\n    const styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n      root: {\n        opacity: this.state.hover === true ? 0.5 : 1.0\n      }\n    });\n    const style = [styles.root, this.props.viewStyle];\n    return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      style: style,\n      onMouseEnter: () => {\n        this.setState({\n          hover: true\n        });\n      },\n      onMouseLeave: () => {\n        this.setState({\n          hover: false\n        });\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      accessibilityRole: \"link\",\n      href: this.props.href,\n      onPress: this.props.onClick && (async () => {\n        this.props.onClick();\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, this.props.children));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5rL2luZGV4LnRzeD9mMTFiIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkNvbXBvbmVudCIsInN0YXRlIiwiaG92ZXIiLCJyZW5kZXIiLCJzdHlsZXMiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwicm9vdCIsIm9wYWNpdHkiLCJzdHlsZSIsInByb3BzIiwidmlld1N0eWxlIiwic2V0U3RhdGUiLCJocmVmIiwib25DbGljayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQWNlLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQWlEO0FBQUE7QUFBQTtBQUFBLFNBQzlEQyxLQUQ4RCxHQUMvQztBQUNiQyxXQUFLLEVBQUU7QUFETSxLQUQrQztBQUFBOztBQUs5REMsUUFBTSxHQUFHO0FBQ1AsVUFBTUMsTUFBTSxHQUFHQyxtRkFBVSxDQUFDQyxNQUFYLENBQWtCO0FBQy9CQyxVQUFJLEVBQUU7QUFDSkMsZUFBTyxFQUFFLEtBQUtQLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixJQUFyQixHQUE0QixHQUE1QixHQUFrQztBQUR2QztBQUR5QixLQUFsQixDQUFmO0FBTUEsVUFBTU8sS0FBSyxHQUFHLENBQUNMLE1BQU0sQ0FBQ0csSUFBUixFQUFjLEtBQUtHLEtBQUwsQ0FBV0MsU0FBekIsQ0FBZDtBQUNBLFdBQ0UsTUFBQyw2RUFBRDtBQUNFLFdBQUssRUFBRUYsS0FEVDtBQUVFLGtCQUFZLEVBQUUsTUFBTTtBQUNsQixhQUFLRyxRQUFMLENBQWM7QUFDWlYsZUFBSyxFQUFFO0FBREssU0FBZDtBQUdELE9BTkg7QUFPRSxrQkFBWSxFQUFFLE1BQU07QUFDbEIsYUFBS1UsUUFBTCxDQUFjO0FBQ1pWLGVBQUssRUFBRTtBQURLLFNBQWQ7QUFHRCxPQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FZRSxNQUFDLDZFQUFEO0FBQ0UsdUJBQWlCLEVBQUMsTUFEcEI7QUFFRSxVQUFJLEVBQUUsS0FBS1EsS0FBTCxDQUFXRyxJQUZuQjtBQUdFLGFBQU8sRUFDTCxLQUFLSCxLQUFMLENBQVdJLE9BQVgsS0FDQyxZQUFZO0FBQ1gsYUFBS0osS0FBTCxDQUFXSSxPQUFYO0FBQ0QsT0FIRCxDQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTRyxLQUFLSixLQUFMLENBQVdLLFFBVGQsQ0FaRixDQURGO0FBMEJEOztBQXZDNkQiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaW5rL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N0eWxlU2hlZXQsIFRleHQsIFRleHRTdHlsZSwgVmlldywgVmlld1N0eWxlfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG50eXBlIFByb3BzID0ge1xuICBocmVmPzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgdmlld1N0eWxlPzogVmlld1N0eWxlO1xuICB0ZXh0U3R5bGU/OiBUZXh0U3R5bGU7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn07XG50eXBlIFN0YXRlID0ge1xuICBob3ZlcjogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBob3ZlcjogZmFsc2UsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS5ob3ZlciA9PT0gdHJ1ZSA/IDAuNSA6IDEuMCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IFtzdHlsZXMucm9vdCwgdGhpcy5wcm9wcy52aWV3U3R5bGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8Vmlld1xuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaG92ZXI6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9fT5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5Um9sZT1cImxpbmtcIlxuICAgICAgICAgIGhyZWY9e3RoaXMucHJvcHMuaHJlZn1cbiAgICAgICAgICBvblByZXNzPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayAmJlxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Link/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"react-native-web/dist/cjs/exports/StyleSheet\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/Text */ \"react-native-web/dist/cjs/exports/Text\");\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ \"react-native-web/dist/cjs/exports/View\");\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ \"./src/components/Layout/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styles_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/text */ \"./src/styles/text.ts\");\nvar _jsxFileName = \"/Users/theo/Code/guided/frontend/site/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nfunction App(props) {\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    style: styles_text__WEBPACK_IMPORTED_MODULE_5__[\"h1\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Some content\")));\n}\nconst styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_0___default.a.create({});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJoMSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQ2pDLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUFNLFNBQUssRUFBRUMsOENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLENBREY7QUFPRDtBQUVELE1BQU1DLE1BQU0sR0FBR0MsbUZBQVUsQ0FBQ0MsTUFBWCxDQUFrQixFQUFsQixDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3R5bGVTaGVldCwgVGV4dCwgVmlld30gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aDF9IGZyb20gJ3N0eWxlcy90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxWaWV3PlxuICAgICAgICA8VGV4dCBzdHlsZT17aDF9PlNvbWUgY29udGVudDwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe30pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/styles/colors.ts":
/*!******************************!*\
  !*** ./src/styles/colors.ts ***!
  \******************************/
/*! exports provided: primary, primaryLight, secondary, darkText, lightText, border */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"primary\", function() { return primary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"primaryLight\", function() { return primaryLight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondary\", function() { return secondary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkText\", function() { return darkText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightText\", function() { return lightText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"border\", function() { return border; });\nconst primary = 'red';\nconst primaryLight = 'orangered';\nconst secondary = 'green';\nconst darkText = '#000000bb';\nconst lightText = '#ffffffbb';\nconst border = '#aaaaaaee';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbG9ycy50cz8yZWU1Il0sIm5hbWVzIjpbInByaW1hcnkiLCJwcmltYXJ5TGlnaHQiLCJzZWNvbmRhcnkiLCJkYXJrVGV4dCIsImxpZ2h0VGV4dCIsImJvcmRlciJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFjLEdBQUcsS0FBdkI7QUFDQSxNQUFNQyxZQUFtQixHQUFHLFdBQTVCO0FBQ0EsTUFBTUMsU0FBZ0IsR0FBRyxPQUF6QjtBQUVBLE1BQU1DLFFBQWUsR0FBRyxXQUF4QjtBQUNBLE1BQU1DLFNBQWdCLEdBQUcsV0FBekI7QUFFQSxNQUFNQyxNQUFhLEdBQUcsV0FBdEIiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NvbG9ycy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sb3J9IGZyb20gJ2Nzc3R5cGUnO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeTogQ29sb3IgPSAncmVkJztcbmV4cG9ydCBjb25zdCBwcmltYXJ5TGlnaHQ6IENvbG9yID0gJ29yYW5nZXJlZCc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5OiBDb2xvciA9ICdncmVlbic7XG5cbmV4cG9ydCBjb25zdCBkYXJrVGV4dDogQ29sb3IgPSAnIzAwMDAwMGJiJztcbmV4cG9ydCBjb25zdCBsaWdodFRleHQ6IENvbG9yID0gJyNmZmZmZmZiYic7XG5cbmV4cG9ydCBjb25zdCBib3JkZXI6IENvbG9yID0gJyNhYWFhYWFlZSc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/colors.ts\n");

/***/ }),

/***/ "./src/styles/dimensions.ts":
/*!**********************************!*\
  !*** ./src/styles/dimensions.ts ***!
  \**********************************/
/*! exports provided: eighth, quarter, half, whole, two, four, eight, hairline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eighth\", function() { return eighth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quarter\", function() { return quarter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"half\", function() { return half; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whole\", function() { return whole; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"two\", function() { return two; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"four\", function() { return four; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eight\", function() { return eight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hairline\", function() { return hairline; });\n/* harmony import */ var react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/PixelRatio */ \"react-native-web/dist/cjs/exports/PixelRatio\");\n/* harmony import */ var react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"react-native-web/dist/cjs/exports/StyleSheet\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst eighth = react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default.a.roundToNearestPixel(2);\nconst quarter = react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default.a.roundToNearestPixel(4);\nconst half = react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default.a.roundToNearestPixel(8);\nconst whole = react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default.a.roundToNearestPixel(16);\nconst two = react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default.a.roundToNearestPixel(32);\nconst four = react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default.a.roundToNearestPixel(64);\nconst eight = react_native_web_dist_cjs_exports_PixelRatio__WEBPACK_IMPORTED_MODULE_0___default.a.roundToNearestPixel(128);\nconst hairline = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.hairlineWidth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RpbWVuc2lvbnMudHM/ZmIwYSJdLCJuYW1lcyI6WyJlaWdodGgiLCJQaXhlbFJhdGlvIiwicm91bmRUb05lYXJlc3RQaXhlbCIsInF1YXJ0ZXIiLCJoYWxmIiwid2hvbGUiLCJ0d28iLCJmb3VyIiwiZWlnaHQiLCJoYWlybGluZSIsIlN0eWxlU2hlZXQiLCJoYWlybGluZVdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFTyxNQUFNQSxNQUFNLEdBQUdDLG1GQUFVLENBQUNDLG1CQUFYLENBQStCLENBQS9CLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLG1GQUFVLENBQUNDLG1CQUFYLENBQStCLENBQS9CLENBQWhCO0FBQ0EsTUFBTUUsSUFBSSxHQUFHSCxtRkFBVSxDQUFDQyxtQkFBWCxDQUErQixDQUEvQixDQUFiO0FBQ0EsTUFBTUcsS0FBSyxHQUFHSixtRkFBVSxDQUFDQyxtQkFBWCxDQUErQixFQUEvQixDQUFkO0FBQ0EsTUFBTUksR0FBRyxHQUFHTCxtRkFBVSxDQUFDQyxtQkFBWCxDQUErQixFQUEvQixDQUFaO0FBQ0EsTUFBTUssSUFBSSxHQUFHTixtRkFBVSxDQUFDQyxtQkFBWCxDQUErQixFQUEvQixDQUFiO0FBQ0EsTUFBTU0sS0FBSyxHQUFHUCxtRkFBVSxDQUFDQyxtQkFBWCxDQUErQixHQUEvQixDQUFkO0FBRUEsTUFBTU8sUUFBUSxHQUFHQyxtRkFBVSxDQUFDQyxhQUE1QiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZGltZW5zaW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGl4ZWxSYXRpbywgU3R5bGVTaGVldH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGNvbnN0IGVpZ2h0aCA9IFBpeGVsUmF0aW8ucm91bmRUb05lYXJlc3RQaXhlbCgyKTtcbmV4cG9ydCBjb25zdCBxdWFydGVyID0gUGl4ZWxSYXRpby5yb3VuZFRvTmVhcmVzdFBpeGVsKDQpO1xuZXhwb3J0IGNvbnN0IGhhbGYgPSBQaXhlbFJhdGlvLnJvdW5kVG9OZWFyZXN0UGl4ZWwoOCk7XG5leHBvcnQgY29uc3Qgd2hvbGUgPSBQaXhlbFJhdGlvLnJvdW5kVG9OZWFyZXN0UGl4ZWwoMTYpO1xuZXhwb3J0IGNvbnN0IHR3byA9IFBpeGVsUmF0aW8ucm91bmRUb05lYXJlc3RQaXhlbCgzMik7XG5leHBvcnQgY29uc3QgZm91ciA9IFBpeGVsUmF0aW8ucm91bmRUb05lYXJlc3RQaXhlbCg2NCk7XG5leHBvcnQgY29uc3QgZWlnaHQgPSBQaXhlbFJhdGlvLnJvdW5kVG9OZWFyZXN0UGl4ZWwoMTI4KTtcblxuZXhwb3J0IGNvbnN0IGhhaXJsaW5lID0gU3R5bGVTaGVldC5oYWlybGluZVdpZHRoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/dimensions.ts\n");

/***/ }),

/***/ "./src/styles/text.ts":
/*!****************************!*\
  !*** ./src/styles/text.ts ***!
  \****************************/
/*! exports provided: h1, h2, h3, h4, h5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h1\", function() { return h1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h2\", function() { return h2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h3\", function() { return h3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h4\", function() { return h4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h5\", function() { return h5; });\n/* harmony import */ var styles_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/colors */ \"./src/styles/colors.ts\");\n\nconst h1 = {\n  fontSize: 28,\n  fontWeight: 'bold',\n  color: styles_colors__WEBPACK_IMPORTED_MODULE_0__[\"darkText\"]\n};\nconst h2 = {\n  fontSize: 24,\n  fontWeight: 'bold',\n  color: styles_colors__WEBPACK_IMPORTED_MODULE_0__[\"darkText\"]\n};\nconst h3 = {\n  fontSize: 20,\n  fontWeight: 'normal',\n  color: styles_colors__WEBPACK_IMPORTED_MODULE_0__[\"darkText\"]\n};\nconst h4 = {\n  fontSize: 16,\n  fontWeight: '200',\n  color: styles_colors__WEBPACK_IMPORTED_MODULE_0__[\"darkText\"]\n};\nconst h5 = {\n  fontSize: 14,\n  fontWeight: '200',\n  color: styles_colors__WEBPACK_IMPORTED_MODULE_0__[\"darkText\"]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RleHQudHM/ZDI4ZCJdLCJuYW1lcyI6WyJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZGFya1RleHQiLCJoMiIsImgzIiwiaDQiLCJoNSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLEVBQWEsR0FBRztBQUMzQkMsVUFBUSxFQUFFLEVBRGlCO0FBRTNCQyxZQUFVLEVBQUUsTUFGZTtBQUczQkMsT0FBSyxFQUFFQyxzREFBUUE7QUFIWSxDQUF0QjtBQU1BLE1BQU1DLEVBQWEsR0FBRztBQUMzQkosVUFBUSxFQUFFLEVBRGlCO0FBRTNCQyxZQUFVLEVBQUUsTUFGZTtBQUczQkMsT0FBSyxFQUFFQyxzREFBUUE7QUFIWSxDQUF0QjtBQU1BLE1BQU1FLEVBQWEsR0FBRztBQUMzQkwsVUFBUSxFQUFFLEVBRGlCO0FBRTNCQyxZQUFVLEVBQUUsUUFGZTtBQUczQkMsT0FBSyxFQUFFQyxzREFBUUE7QUFIWSxDQUF0QjtBQU1BLE1BQU1HLEVBQWEsR0FBRztBQUMzQk4sVUFBUSxFQUFFLEVBRGlCO0FBRTNCQyxZQUFVLEVBQUUsS0FGZTtBQUczQkMsT0FBSyxFQUFFQyxzREFBUUE7QUFIWSxDQUF0QjtBQU1BLE1BQU1JLEVBQWEsR0FBRztBQUMzQlAsVUFBUSxFQUFFLEVBRGlCO0FBRTNCQyxZQUFVLEVBQUUsS0FGZTtBQUczQkMsT0FBSyxFQUFFQyxzREFBUUE7QUFIWSxDQUF0QiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGV4dC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dFN0eWxlfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHtkYXJrVGV4dH0gZnJvbSAnc3R5bGVzL2NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBoMTogVGV4dFN0eWxlID0ge1xuICBmb250U2l6ZTogMjgsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgY29sb3I6IGRhcmtUZXh0LFxufTtcblxuZXhwb3J0IGNvbnN0IGgyOiBUZXh0U3R5bGUgPSB7XG4gIGZvbnRTaXplOiAyNCxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICBjb2xvcjogZGFya1RleHQsXG59O1xuXG5leHBvcnQgY29uc3QgaDM6IFRleHRTdHlsZSA9IHtcbiAgZm9udFNpemU6IDIwLFxuICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgY29sb3I6IGRhcmtUZXh0LFxufTtcblxuZXhwb3J0IGNvbnN0IGg0OiBUZXh0U3R5bGUgPSB7XG4gIGZvbnRTaXplOiAxNixcbiAgZm9udFdlaWdodDogJzIwMCcsXG4gIGNvbG9yOiBkYXJrVGV4dCxcbn07XG5cbmV4cG9ydCBjb25zdCBoNTogVGV4dFN0eWxlID0ge1xuICBmb250U2l6ZTogMTQsXG4gIGZvbnRXZWlnaHQ6ICcyMDAnLFxuICBjb2xvcjogZGFya1RleHQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/text.ts\n");

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/theo/Code/guided/frontend/site/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4LXJlYWN0XCI/NWJjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb2J4LXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mobx-react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-native-web/dist/cjs/exports/PixelRatio":
/*!***************************************************************!*\
  !*** external "react-native-web/dist/cjs/exports/PixelRatio" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native-web/dist/cjs/exports/PixelRatio\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvUGl4ZWxSYXRpb1wiPzUwMjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbmF0aXZlLXdlYi9kaXN0L2Nqcy9leHBvcnRzL1BpeGVsUmF0aW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1uYXRpdmUtd2ViL2Rpc3QvY2pzL2V4cG9ydHMvUGl4ZWxSYXRpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-native-web/dist/cjs/exports/PixelRatio\n");

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