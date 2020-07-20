webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/Text */ \"./node_modules/react-native-web/dist/cjs/exports/Text/index.js\");\n/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ \"./node_modules/react-native-web/dist/cjs/exports/View/index.js\");\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/theo/Code/guided/frontend/site/src/components/Layout/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Layout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Layout, _React$Component);\n\n  var _super = _createSuper(Layout);\n\n  function Layout() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Layout);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Layout, [{\n    key: \"renderHeader\",\n    value: function renderHeader() {\n      var _this = this;\n\n      var items = [{\n        text: 'Home',\n        link: '/'\n      }, {\n        text: 'Account',\n        link: '/account'\n      }];\n      return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        style: styles.headerRoot,\n        accessibilityRole: \"header\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 7\n        }\n      }, items.map(function (item) {\n        return __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          style: styles.headerItem,\n          accessibilityRole: \"link\",\n          href: item.link,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }\n        }, item.text);\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        style: styles.root,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 7\n        }\n      }, this.renderHeader(), __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        style: styles.content,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }\n      }, this.props.children));\n    }\n  }]);\n\n  return Layout;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\nvar styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6___default.a.create({\n  root: {\n    flexDirection: 'column',\n    width: 800,\n    alignSelf: 'center',\n    backgroundColor: '#ff0000'\n  },\n  headerRoot: {\n    flexDirection: 'row',\n    backgroundColor: '#00ff00',\n    flexGrow: 0\n  },\n  headerItem: {},\n  content: {\n    backgroundColor: '#0000ff',\n    flexGrow: 1\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4PzU1NzAiXSwibmFtZXMiOlsiTGF5b3V0IiwiaXRlbXMiLCJ0ZXh0IiwibGluayIsInN0eWxlcyIsImhlYWRlclJvb3QiLCJtYXAiLCJpdGVtIiwiaGVhZGVySXRlbSIsInJvb3QiLCJyZW5kZXJIZWFkZXIiLCJjb250ZW50IiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImFsaWduU2VsZiIsImJhY2tncm91bmRDb2xvciIsImZsZXhHcm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7SUFNcUJBLE07Ozs7Ozs7Ozs7Ozs7bUNBQ0o7QUFBQTs7QUFLYixVQUFNQyxLQUFhLEdBQUcsQ0FDcEI7QUFDRUMsWUFBSSxFQUFFLE1BRFI7QUFFRUMsWUFBSSxFQUFFO0FBRlIsT0FEb0IsRUFLcEI7QUFDRUQsWUFBSSxFQUFFLFNBRFI7QUFFRUMsWUFBSSxFQUFFO0FBRlIsT0FMb0IsQ0FBdEI7QUFXQSxhQUNFLE1BQUMsNkVBQUQ7QUFBTSxhQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsVUFBcEI7QUFBZ0MseUJBQWlCLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsZUFDRSxNQUFDLDZFQUFEO0FBQ0UsZUFBSyxFQUFFSCxNQUFNLENBQUNJLFVBRGhCO0FBRUUsMkJBQWlCLEVBQUMsTUFGcEI7QUFHRSxjQUFJLEVBQUVELElBQUksQ0FBQ0osSUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUdJLElBQUksQ0FBQ0wsSUFKUixDQURGO0FBUUQsT0FUQSxDQURILENBREY7QUFjRDs7OzZCQUVRO0FBQ1AsYUFDRSxNQUFDLDZFQUFEO0FBQU0sYUFBSyxFQUFFRSxNQUFNLENBQUNLLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLQyxZQUFMLEVBREgsRUFFRSxNQUFDLDZFQUFEO0FBQU0sYUFBSyxFQUFFTixNQUFNLENBQUNPLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEIsS0FBS0MsS0FBTCxDQUFXQyxRQUF6QyxDQUZGLENBREY7QUFNRDs7OztFQXhDaUNDLDRDQUFLLENBQUNDLFM7OztBQTJDMUMsSUFBTVgsTUFBTSxHQUFHWSxtRkFBVSxDQUFDQyxNQUFYLENBQWtCO0FBQy9CUixNQUFJLEVBQUU7QUFDSlMsaUJBQWEsRUFBRSxRQURYO0FBRUpDLFNBQUssRUFBRSxHQUZIO0FBR0pDLGFBQVMsRUFBRSxRQUhQO0FBSUpDLG1CQUFlLEVBQUU7QUFKYixHQUR5QjtBQU8vQmhCLFlBQVUsRUFBRTtBQUNWYSxpQkFBYSxFQUFFLEtBREw7QUFFVkcsbUJBQWUsRUFBRSxTQUZQO0FBR1ZDLFlBQVEsRUFBRTtBQUhBLEdBUG1CO0FBWS9CZCxZQUFVLEVBQUUsRUFabUI7QUFhL0JHLFNBQU8sRUFBRTtBQUNQVSxtQkFBZSxFQUFFLFNBRFY7QUFFUEMsWUFBUSxFQUFFO0FBRkg7QUFic0IsQ0FBbEIsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTdHlsZVNoZWV0LCBUZXh0LCBWaWV3fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG50eXBlIFByb3BzID0ge307XG50eXBlIFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgcmVuZGVySGVhZGVyKCkge1xuICAgIHR5cGUgSXRlbSA9IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGxpbms6IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0IGl0ZW1zOiBJdGVtW10gPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdIb21lJyxcbiAgICAgICAgbGluazogJy8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0FjY291bnQnLFxuICAgICAgICBsaW5rOiAnL2FjY291bnQnLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaGVhZGVyUm9vdH0gYWNjZXNzaWJpbGl0eVJvbGU9XCJoZWFkZXJcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmhlYWRlckl0ZW19XG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlSb2xlPVwibGlua1wiXG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua30+XG4gICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAge3RoaXMucmVuZGVySGVhZGVyKCl9XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICByb290OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6IDgwMCxcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZjAwMDAnLFxuICB9LFxuICBoZWFkZXJSb290OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwZmYwMCcsXG4gICAgZmxleEdyb3c6IDAsXG4gIH0sXG4gIGhlYWRlckl0ZW06IHt9LFxuICBjb250ZW50OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDBmZicsXG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n");

/***/ })

})