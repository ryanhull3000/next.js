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
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/api */ \"./util/api.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  try {\n    const users = await (0,_util_api__WEBPACK_IMPORTED_MODULE_0__.getUsers)();\n    res.json(users);\n  } catch (e) {\n    res.status(400).json({\n      error: e.message\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUFJO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLE1BQU1ILG1EQUFRLEVBQTVCO0FBQ0FFLElBQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTRCxLQUFUO0FBQ0gsR0FIRCxDQUdFLE9BQU9FLENBQVAsRUFBVTtBQUNSSCxJQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDRyxNQUFBQSxLQUFLLEVBQUVGLENBQUMsQ0FBQ0c7QUFBVixLQUFyQjtBQUNIO0FBQ0osQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2l0aC1zdHlsZWQtY29tcG9uZW50Ly4vcGFnZXMvYXBpL2luZGV4LmpzP2M1ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2dldFVzZXJzfSBmcm9tICcuLi8uLi91dGlsL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0VXNlcnMoKTtcbiAgICAgICAgcmVzLmpzb24odXNlcnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBlLm1lc3NhZ2V9KTtcbiAgICB9XG59OyJdLCJuYW1lcyI6WyJnZXRVc2VycyIsInJlcSIsInJlcyIsInVzZXJzIiwianNvbiIsImUiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "./util/api.js":
/*!*********************!*\
  !*** ./util/api.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nconst getUsers = async () => await (await fetch('https://reqres.in/api/users/')).json();\nconst getUser = async id => await (await fetch('https://reqres.in/api/users/' + id)).json();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFFBQVEsR0FBRyxZQUFZLE1BQU0sQ0FBQyxNQUFNQyxLQUFLLENBQUMsOEJBQUQsQ0FBWixFQUE4Q0MsSUFBOUMsRUFBbkM7QUFFQSxNQUFNQyxPQUFPLEdBQUcsTUFBT0MsRUFBUCxJQUFjLE1BQU0sQ0FBQyxNQUFNSCxLQUFLLENBQUMsaUNBQWlDRyxFQUFsQyxDQUFaLEVBQW1ERixJQUFuRCxFQUFwQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtd2l0aC1zdHlsZWQtY29tcG9uZW50Ly4vdXRpbC9hcGkuanM/NWJmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiBhd2FpdCAoYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8nKSkuanNvbigpO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jIChpZCkgPT4gYXdhaXQgKGF3YWl0IGZldGNoKCdodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJyArIGlkKSkuanNvbigpOyJdLCJuYW1lcyI6WyJnZXRVc2VycyIsImZldGNoIiwianNvbiIsImdldFVzZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/api.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();