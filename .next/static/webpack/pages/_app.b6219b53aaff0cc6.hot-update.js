"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\n\n\n// This is the chain your dApp will work on.\n// Change this to the chain your app is built for.\n// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.\nconst activeChain = \"pulsechain\";\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ThirdwebProvider, {\n        clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID,\n        activeChain: {\n            chainId: 369,\n            // Array of RPC URLs to use\n            rpc: [\n                \" https://scan.pulsechain.com/api \"\n            ],\n            // === Information for adding the network to your wallet (how it will appear for first time users) === \\\\\n            // Information about the chain's native currency (i.e. the currency that is used to pay for gas)\n            nativeCurrency: {\n                decimals: 18,\n                name: \"PulseChain Mainet\",\n                symbol: \"PLS\"\n            },\n            shortName: \"pulsechain\",\n            slug: \"pulsechain\",\n            testnet: false,\n            chain: \"pulsechain\",\n            name: \"PulseChain Mainet\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\NOBERT\\\\source\\\\repos\\\\thirdweb\\\\nodestaking\\\\pages\\\\_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\NOBERT\\\\source\\\\repos\\\\thirdweb\\\\nodestaking\\\\pages\\\\_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\NOBERT\\\\source\\\\repos\\\\thirdweb\\\\nodestaking\\\\pages\\\\_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 6\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\NOBERT\\\\source\\\\repos\\\\thirdweb\\\\nodestaking\\\\pages\\\\_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3VEO0FBQ3hCO0FBQ21CO0FBQ1I7QUFDMUMsNENBQTRDO0FBQzVDLGtEQUFrRDtBQUNsRCw0RkFBNEY7QUFDNUYsTUFBTUcsY0FBYztBQUVwQixTQUFTQyxNQUFNLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZLEdBQWxDO0lBQ2IscUJBQ0UsOERBQUNOLGlFQUFnQkE7UUFDZk8sVUFBVUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyw4QkFBOEI7UUFDcERQLGFBQWE7WUFDWFEsU0FBUztZQUNULDJCQUEyQjtZQUMzQkMsS0FBSztnQkFBQzthQUFvQztZQUUxQyx5R0FBeUc7WUFDekcsZ0dBQWdHO1lBQ2hHQyxnQkFBZ0I7Z0JBQ2RDLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFFBQVE7WUFDVjtZQUNBQyxXQUFXO1lBQ1hDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxPQUFPO1lBQ1BMLE1BQU07UUFDZDtrQkFDSyw0RUFBQ2QsNERBQWNBOzs4QkFDZCw4REFBQ0MsMERBQU1BOzs7Ozs4QkFDUCw4REFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7S0E1QlNGO0FBOEJULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgVGhpcmR3ZWJQcm92aWRlciB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG4vLyBUaGlzIGlzIHRoZSBjaGFpbiB5b3VyIGRBcHAgd2lsbCB3b3JrIG9uLlxuLy8gQ2hhbmdlIHRoaXMgdG8gdGhlIGNoYWluIHlvdXIgYXBwIGlzIGJ1aWx0IGZvci5cbi8vIFlvdSBjYW4gYWxzbyBpbXBvcnQgYWRkaXRpb25hbCBjaGFpbnMgZnJvbSBgQHRoaXJkd2ViLWRldi9jaGFpbnNgIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkuXG5jb25zdCBhY3RpdmVDaGFpbiA9IFwicHVsc2VjaGFpblwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFRoaXJkd2ViUHJvdmlkZXJcbiAgICAgIGNsaWVudElkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URU1QTEFURV9DTElFTlRfSUR9XG4gICAgICBhY3RpdmVDaGFpbj17ey8vID09PSBSZXF1aXJlZCBpbmZvcm1hdGlvbiBmb3IgY29ubmVjdGluZyB0byB0aGUgbmV0d29yayA9PT0gXFxcXFxuICAgICAgICBjaGFpbklkOiAzNjksIC8vIENoYWluIElEIG9mIHRoZSBuZXR3b3JrXG4gICAgICAgIC8vIEFycmF5IG9mIFJQQyBVUkxzIHRvIHVzZVxuICAgICAgICBycGM6IFtcIiBodHRwczovL3NjYW4ucHVsc2VjaGFpbi5jb20vYXBpIFwiXSxcblxuICAgICAgICAvLyA9PT0gSW5mb3JtYXRpb24gZm9yIGFkZGluZyB0aGUgbmV0d29yayB0byB5b3VyIHdhbGxldCAoaG93IGl0IHdpbGwgYXBwZWFyIGZvciBmaXJzdCB0aW1lIHVzZXJzKSA9PT0gXFxcXFxuICAgICAgICAvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgY2hhaW4ncyBuYXRpdmUgY3VycmVuY3kgKGkuZS4gdGhlIGN1cnJlbmN5IHRoYXQgaXMgdXNlZCB0byBwYXkgZm9yIGdhcylcbiAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgbmFtZTogXCJQdWxzZUNoYWluIE1haW5ldFwiLFxuICAgICAgICAgIHN5bWJvbDogXCJQTFNcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcnROYW1lOiBcInB1bHNlY2hhaW5cIiwgLy8gRGlzcGxheSB2YWx1ZSBzaG93biBpbiB0aGUgd2FsbGV0IFVJXG4gICAgICAgIHNsdWc6IFwicHVsc2VjaGFpblwiLCAvLyBEaXNwbGF5IHZhbHVlIHNob3duIGluIHRoZSB3YWxsZXQgVUlcbiAgICAgICAgdGVzdG5ldDogZmFsc2UsIC8vIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjaGFpbiBpcyBhIHRlc3RuZXQgb3IgbWFpbm5ldFxuICAgICAgICBjaGFpbjogXCJwdWxzZWNoYWluXCIsIC8vIE5hbWUgb2YgdGhlIG5ldHdvcmtcbiAgICAgICAgbmFtZTogXCJQdWxzZUNoYWluIE1haW5ldFwiLCAvLyBOYW1lIG9mIHRoZSBuZXR3b3JrXG59fVxuICAgID48Q2hha3JhUHJvdmlkZXI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvVGhpcmR3ZWJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVGhpcmR3ZWJQcm92aWRlciIsIkNoYWtyYVByb3ZpZGVyIiwiTmF2YmFyIiwiYWN0aXZlQ2hhaW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RFTVBMQVRFX0NMSUVOVF9JRCIsImNoYWluSWQiLCJycGMiLCJuYXRpdmVDdXJyZW5jeSIsImRlY2ltYWxzIiwibmFtZSIsInN5bWJvbCIsInNob3J0TmFtZSIsInNsdWciLCJ0ZXN0bmV0IiwiY2hhaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});