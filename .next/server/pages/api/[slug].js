"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/[slug]";
exports.ids = ["pages/api/[slug]"];
exports.modules = {

/***/ "(api)/./pages/api/[slug].js":
/*!*****************************!*\
  !*** ./pages/api/[slug].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/api */ \"(api)/./util/api.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    query\n  } = req;\n  const id = query.slug.match(/\\d+/)[0];\n\n  try {\n    const user = await (0,_util_api__WEBPACK_IMPORTED_MODULE_0__.getUser)(id);\n    res.json(user);\n  } catch (e) {\n    res.status(400).json({\n      error: e.message\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVlGLEdBQWxCO0FBQ0EsUUFBTUcsRUFBRSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsS0FBWCxDQUFpQixLQUFqQixFQUF3QixDQUF4QixDQUFYOztBQUNBLE1BQUk7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTVAsa0RBQU8sQ0FBQ0ksRUFBRCxDQUExQjtBQUNBRixJQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU0QsSUFBVDtBQUNILEdBSEQsQ0FHRSxPQUFPRSxDQUFQLEVBQVU7QUFDUlAsSUFBQUEsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0csTUFBQUEsS0FBSyxFQUFFRixDQUFDLENBQUNHO0FBQVYsS0FBckI7QUFDSDtBQUNKLENBVEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXdpdGgtc3R5bGVkLWNvbXBvbmVudC8uL3BhZ2VzL2FwaS9bc2x1Z10uanM/NzYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWwvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHJlcTtcbiAgICBjb25zdCBpZCA9IHF1ZXJ5LnNsdWcubWF0Y2goL1xcZCsvKVswXTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihpZCk7XG4gICAgICAgIHJlcy5qc29uKHVzZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBlLm1lc3NhZ2V9KTtcbiAgICB9XG59OyJdLCJuYW1lcyI6WyJnZXRVc2VyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsInNsdWciLCJtYXRjaCIsInVzZXIiLCJqc29uIiwiZSIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/[slug].js\n");

/***/ }),

/***/ "(api)/./util/api.js":
/*!*********************!*\
  !*** ./util/api.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nconst getUsers = async () => await (await fetch('https://reqres.in/api/users/')).json();\nconst getUser = async id => await (await fetch('https://reqres.in/api/users/' + id)).json();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFFBQVEsR0FBRyxZQUFZLE1BQU0sQ0FBQyxNQUFNQyxLQUFLLENBQUMsOEJBQUQsQ0FBWixFQUE4Q0MsSUFBOUMsRUFBbkM7QUFFQSxNQUFNQyxPQUFPLEdBQUcsTUFBT0MsRUFBUCxJQUFjLE1BQU0sQ0FBQyxNQUFNSCxLQUFLLENBQUMsaUNBQWlDRyxFQUFsQyxDQUFaLEVBQW1ERixJQUFuRCxFQUFwQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2l0aC1zdHlsZWQtY29tcG9uZW50Ly4vdXRpbC9hcGkuanM/NWJmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiBhd2FpdCAoYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8nKSkuanNvbigpO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jIChpZCkgPT4gYXdhaXQgKGF3YWl0IGZldGNoKCdodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJyArIGlkKSkuanNvbigpOyJdLCJuYW1lcyI6WyJnZXRVc2VycyIsImZldGNoIiwianNvbiIsImdldFVzZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/api.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[slug].js"));
module.exports = __webpack_exports__;

})();