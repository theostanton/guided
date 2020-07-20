webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ \"./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js\");\n/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ \"./node_modules/react-native-web/dist/cjs/exports/View/index.js\");\n/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styles_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/text */ \"./src/styles/text.ts\");\n/* harmony import */ var styles_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/dimensions */ \"./src/styles/dimensions.ts\");\n/* harmony import */ var styles_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/colors */ \"./src/styles/colors.ts\");\n/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Link */ \"./src/components/Link/index.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/theo/Code/guided/frontend/site/src/components/Layout/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar Layout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Layout, _React$Component);\n\n  var _super = _createSuper(Layout);\n\n  function Layout() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Layout);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Layout, [{\n    key: \"renderHeader\",\n    value: function renderHeader() {\n      var _this = this;\n\n      var items = [{\n        text: 'Home',\n        link: '/'\n      }, {\n        text: 'Account',\n        link: '/account'\n      }];\n      return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        style: styles.headerRoot,\n        accessibilityRole: \"header\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 7\n        }\n      }, items.map(function (item) {\n        return __jsx(components_Link__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          key: item.text,\n          viewStyle: styles.headerItem,\n          textStyle: styles_text__WEBPACK_IMPORTED_MODULE_8__[\"h4\"],\n          href: item.link,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }\n        }, item.text);\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        style: styles.root,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 7\n        }\n      }, this.renderHeader(), __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        style: styles.content,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }\n      }, this.props.children));\n    }\n  }]);\n\n  return Layout;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\nvar styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_6___default.a.create({\n  root: {\n    flexDirection: 'column',\n    width: 800,\n    alignSelf: 'center',\n    height: '100%'\n  },\n  headerRoot: {\n    flexDirection: 'row',\n    flexGrow: 0,\n    borderBottomColor: styles_colors__WEBPACK_IMPORTED_MODULE_10__[\"border\"],\n    borderBottomWidth: styles_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"hairline\"]\n  },\n  headerItem: {\n    paddingTop: styles_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"whole\"],\n    paddingBottom: styles_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"whole\"],\n    paddingLeft: styles_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"half\"],\n    paddingRight: styles_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"half\"]\n  },\n  content: {\n    flexGrow: 1,\n    marginTop: styles_dimensions__WEBPACK_IMPORTED_MODULE_9__[\"half\"]\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4PzU1NzAiXSwibmFtZXMiOlsiTGF5b3V0IiwiaXRlbXMiLCJ0ZXh0IiwibGluayIsInN0eWxlcyIsImhlYWRlclJvb3QiLCJtYXAiLCJpdGVtIiwiaGVhZGVySXRlbSIsImg0Iiwicm9vdCIsInJlbmRlckhlYWRlciIsImNvbnRlbnQiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiYWxpZ25TZWxmIiwiaGVpZ2h0IiwiZmxleEdyb3ciLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlciIsImJvcmRlckJvdHRvbVdpZHRoIiwiaGFpcmxpbmUiLCJwYWRkaW5nVG9wIiwid2hvbGUiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJoYWxmIiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7SUFLcUJBLE07Ozs7Ozs7Ozs7Ozs7bUNBQ0o7QUFBQTs7QUFLYixVQUFNQyxLQUFhLEdBQUcsQ0FDcEI7QUFDRUMsWUFBSSxFQUFFLE1BRFI7QUFFRUMsWUFBSSxFQUFFO0FBRlIsT0FEb0IsRUFLcEI7QUFDRUQsWUFBSSxFQUFFLFNBRFI7QUFFRUMsWUFBSSxFQUFFO0FBRlIsT0FMb0IsQ0FBdEI7QUFXQSxhQUNFLE1BQUMsNkVBQUQ7QUFBTSxhQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsVUFBcEI7QUFBZ0MseUJBQWlCLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsZUFDRSxNQUFDLHdEQUFEO0FBQ0UsYUFBRyxFQUFFQSxJQUFJLENBQUNMLElBRFo7QUFFRSxtQkFBUyxFQUFFRSxNQUFNLENBQUNJLFVBRnBCO0FBR0UsbUJBQVMsRUFBRUMsOENBSGI7QUFJRSxjQUFJLEVBQUVGLElBQUksQ0FBQ0osSUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0dJLElBQUksQ0FBQ0wsSUFMUixDQURGO0FBU0QsT0FWQSxDQURILENBREY7QUFlRDs7OzZCQUVRO0FBQ1AsYUFDRSxNQUFDLDZFQUFEO0FBQU0sYUFBSyxFQUFFRSxNQUFNLENBQUNNLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLQyxZQUFMLEVBREgsRUFFRSxNQUFDLDZFQUFEO0FBQU0sYUFBSyxFQUFFUCxNQUFNLENBQUNRLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEIsS0FBS0MsS0FBTCxDQUFXQyxRQUF6QyxDQUZGLENBREY7QUFNRDs7OztFQXpDaUNDLDRDQUFLLENBQUNDLFM7OztBQTRDMUMsSUFBTVosTUFBTSxHQUFHYSxtRkFBVSxDQUFDQyxNQUFYLENBQWtCO0FBQy9CUixNQUFJLEVBQUU7QUFDSlMsaUJBQWEsRUFBRSxRQURYO0FBRUpDLFNBQUssRUFBRSxHQUZIO0FBR0pDLGFBQVMsRUFBRSxRQUhQO0FBSUpDLFVBQU0sRUFBRTtBQUpKLEdBRHlCO0FBTy9CakIsWUFBVSxFQUFFO0FBQ1ZjLGlCQUFhLEVBQUUsS0FETDtBQUVWSSxZQUFRLEVBQUUsQ0FGQTtBQUdWQyxxQkFBaUIsRUFBRUMscURBSFQ7QUFJVkMscUJBQWlCLEVBQUVDLDBEQUFRQTtBQUpqQixHQVBtQjtBQWEvQm5CLFlBQVUsRUFBRTtBQUNWb0IsY0FBVSxFQUFFQyx1REFERjtBQUVWQyxpQkFBYSxFQUFFRCx1REFGTDtBQUdWRSxlQUFXLEVBQUVDLHNEQUhIO0FBSVZDLGdCQUFZLEVBQUVELHNEQUFJQTtBQUpSLEdBYm1CO0FBbUIvQnBCLFNBQU8sRUFBRTtBQUNQVyxZQUFRLEVBQUUsQ0FESDtBQUVQVyxhQUFTLEVBQUVGLHNEQUFJQTtBQUZSO0FBbkJzQixDQUFsQixDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N0eWxlU2hlZXQsIFRleHQsIFZpZXd9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge2g0fSBmcm9tICdzdHlsZXMvdGV4dCc7XG5pbXBvcnQge2hhaXJsaW5lLCBoYWxmLCB3aG9sZX0gZnJvbSAnc3R5bGVzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHtib3JkZXJ9IGZyb20gJ3N0eWxlcy9jb2xvcnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rJztcblxudHlwZSBQcm9wcyA9IHt9O1xudHlwZSBTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHJlbmRlckhlYWRlcigpIHtcbiAgICB0eXBlIEl0ZW0gPSB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBsaW5rOiBzdHJpbmc7XG4gICAgfTtcbiAgICBjb25zdCBpdGVtczogSXRlbVtdID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnSG9tZScsXG4gICAgICAgIGxpbms6ICcvJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdBY2NvdW50JyxcbiAgICAgICAgbGluazogJy9hY2NvdW50JyxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmhlYWRlclJvb3R9IGFjY2Vzc2liaWxpdHlSb2xlPVwiaGVhZGVyXCI+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAgIHZpZXdTdHlsZT17c3R5bGVzLmhlYWRlckl0ZW19XG4gICAgICAgICAgICAgIHRleHRTdHlsZT17aDR9XG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua30+XG4gICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAge3RoaXMucmVuZGVySGVhZGVyKCl9XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICByb290OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgd2lkdGg6IDgwMCxcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBoZWFkZXJSb290OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgZmxleEdyb3c6IDAsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGJvcmRlcixcbiAgICBib3JkZXJCb3R0b21XaWR0aDogaGFpcmxpbmUsXG4gIH0sXG4gIGhlYWRlckl0ZW06IHtcbiAgICBwYWRkaW5nVG9wOiB3aG9sZSxcbiAgICBwYWRkaW5nQm90dG9tOiB3aG9sZSxcbiAgICBwYWRkaW5nTGVmdDogaGFsZixcbiAgICBwYWRkaW5nUmlnaHQ6IGhhbGYsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBtYXJnaW5Ub3A6IGhhbGYsXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n");

/***/ })

})