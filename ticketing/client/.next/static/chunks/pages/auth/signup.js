/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/auth/signup"],{

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var onEmailChange = function(e) {\n        setEmail(e.target.value);\n    };\n    var onPasswordChange = function(e) {\n        setPassword(e.target.value);\n    };\n    var onSubmit = function(e) {\n        e.preventDefault();\n        console.log(email, password);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        onSubmit: onSubmit,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Sign Up\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"form-group\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Email Address\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        className: \"form-control\",\n                        value: email,\n                        onChange: onEmailChange,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"form-group\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Password\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"password\",\n                        className: \"form-control\",\n                        value: password,\n                        onChange: onPasswordChange,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"btn btn-primary\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Pudjo S\\\\Development\\\\Microservices Development\\\\Study\\\\Microservices with Node JS and React\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Sign Up\"\n            })\n        ]\n    }));\n}, \"RbrO7EvaECjsVDQyExqmmCjcan0=\"));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDOzs7QUFFaEMsK0RBQWUsV0FBUSxHQUFGLENBQUM7O0lBQ3BCLEdBQUssQ0FBcUJBLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCQyxLQUFLLEdBQWNELEdBQVksS0FBeEJFLFFBQVEsR0FBSUYsR0FBWTtJQUN0QyxHQUFLLENBQTJCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFwQ0csUUFBUSxHQUFpQkgsSUFBWSxLQUEzQkksV0FBVyxHQUFJSixJQUFZO0lBRTVDLEdBQUssQ0FBQ0ssYUFBYSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDNUJKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDekIsQ0FBQztJQUVELEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsUUFBUSxDQUFQSCxDQUFDLEVBQUssQ0FBQztRQUMvQkYsV0FBVyxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QixDQUFDO0lBRUQsR0FBSyxDQUFDRSxRQUFRLEdBQUcsUUFBUSxDQUFQSixDQUFDLEVBQUssQ0FBQztRQUN2QkEsQ0FBQyxDQUFDSyxjQUFjO1FBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osS0FBSyxFQUFFRSxRQUFRO0lBQzdCLENBQUM7SUFFRCxNQUFNLHVFQUNIVyxDQUFJO1FBQUNKLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7aUZBQ3JCSyxDQUFFOzs7Ozs7OzBCQUFDLENBQU87O2tGQUNWQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7eUZBQ3hCQyxDQUFLOzs7Ozs7O2tDQUFDLENBQWE7O3lGQUNuQkMsQ0FBSzt3QkFDSkMsSUFBSSxFQUFDLENBQU07d0JBQ1hILFNBQVMsRUFBQyxDQUFjO3dCQUN4QlQsS0FBSyxFQUFFUCxLQUFLO3dCQUNab0IsUUFBUSxFQUFFaEIsYUFBYTs7Ozs7Ozs7OztrRkFHMUJXLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7Ozt5RkFDeEJDLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBUTs7eUZBQ2RDLENBQUs7d0JBQ0pDLElBQUksRUFBQyxDQUFVO3dCQUNmSCxTQUFTLEVBQUMsQ0FBYzt3QkFDeEJULEtBQUssRUFBRUwsUUFBUTt3QkFDZmtCLFFBQVEsRUFBRVosZ0JBQWdCOzs7Ozs7Ozs7O2lGQUc3QmEsQ0FBTTtnQkFBQ0wsU0FBUyxFQUFDLENBQWlCOzs7Ozs7OzBCQUFDLENBQU87Ozs7QUFHakQsQ0FBQyxtQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3NpZ251cC5qcz81NmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvbkVtYWlsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICA8aDE+U2lnbiBVcDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25FbWFpbENoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uUGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25FbWFpbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uUGFzc3dvcmRDaGFuZ2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJoMSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignup&absolutePagePath=C%3A%5CUsers%5CPudjo%20S%5CDevelopment%5CMicroservices%20Development%5CStudy%5CMicroservices%20with%20Node%20JS%20and%20React%5Cticketing%5Cclient%5Cpages%5Cauth%5Csignup.js!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignup&absolutePagePath=C%3A%5CUsers%5CPudjo%20S%5CDevelopment%5CMicroservices%20Development%5CStudy%5CMicroservices%20with%20Node%20JS%20and%20React%5Cticketing%5Cclient%5Cpages%5Cauth%5Csignup.js! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/auth/signup\",\n      function () {\n        return __webpack_require__(/*! ./pages/auth/signup.js */ \"./pages/auth/signup.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/auth/signup\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZhdXRoJTJGc2lnbnVwJmFic29sdXRlUGFnZVBhdGg9QyUzQSU1Q1VzZXJzJTVDUHVkam8lMjBTJTVDRGV2ZWxvcG1lbnQlNUNNaWNyb3NlcnZpY2VzJTIwRGV2ZWxvcG1lbnQlNUNTdHVkeSU1Q01pY3Jvc2VydmljZXMlMjB3aXRoJTIwTm9kZSUyMEpTJTIwYW5kJTIwUmVhY3QlNUN0aWNrZXRpbmclNUNjbGllbnQlNUNwYWdlcyU1Q2F1dGglNUNzaWdudXAuanMhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsc0RBQXdCO0FBQy9DO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9kZGEyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvYXV0aC9zaWdudXBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2F1dGgvc2lnbnVwLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9hdXRoL3NpZ251cFwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignup&absolutePagePath=C%3A%5CUsers%5CPudjo%20S%5CDevelopment%5CMicroservices%20Development%5CStudy%5CMicroservices%20with%20Node%20JS%20and%20React%5Cticketing%5Cclient%5Cpages%5Cauth%5Csignup.js!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth%2Fsignup&absolutePagePath=C%3A%5CUsers%5CPudjo%20S%5CDevelopment%5CMicroservices%20Development%5CStudy%5CMicroservices%20with%20Node%20JS%20and%20React%5Cticketing%5Cclient%5Cpages%5Cauth%5Csignup.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);