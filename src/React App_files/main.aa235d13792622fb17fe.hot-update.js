webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Component/MainSingIn/Form-input/forminput.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/Component/MainSingIn/Form-input/forminput.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".group {\n  position: relative;\n  margin: 45px 0;\n}\n.group .form-input {\n  width: 65%;\n  background: transparent;\n  border: transparent;\n  padding: 10px;\n  border-bottom: 1px solid silver;\n  margin-bottom: 20px;\n  display: block;\n  color: gray;\n  font-size: 18px;\n}\n.group .form-input:focus {\n  outline: none;\n}\n.group .form-input:focus-visible ~ .form-input-label {\n  top: -14px;\n  color: black;\n  font-size: 12px;\n}\n.group input[type=password] {\n  letter-spacing: 0.3 em;\n}\n.group .form-input-label {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 16px;\n  transition: all 300ms ease;\n  color: gray;\n  pointer-events: none;\n}\n.group .form-input-label.shrink {\n  top: -14px;\n  color: black;\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://src/Component/MainSingIn/Form-input/forminput.scss"],"names":[],"mappings":"AAUA;EACI,kBAAA;EACA,cAAA;AATJ;AAWI;EACI,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,+BAAA;EACA,mBAAA;EACA,cAAA;EACA,WAtBK;EAuBL,eAAA;AATR;AAWQ;EACI,aAAA;AATZ;AAWQ;EAxBJ,UAAA;EACA,YAJS;EAKT,eAAA;AAgBJ;AAWI;EACI,sBAAA;AATR;AAWG;EACI,kBAAA;EACA,SAAA;EACA,SAAA;EACA,eAAA;EACA,0BAAA;EACA,WA1CM;EA2CN,oBAAA;AATP;AAWO;EAzCH,UAAA;EACA,YAJS;EAKT,eAAA;AAiCJ","sourcesContent":["$sub-color : gray;\n$main-color: black;\n\n@mixin shrinkLabel {\n    top :-14px;\n    color : $main-color;\n    font-size: 12px;\n    \n}\n \n.group{\n    position: relative;\n    margin: 45px 0;\n\n    .form-input{\n        width: 65%;\n        background: transparent;\n        border : transparent ;\n        padding: 10px;\n        border-bottom: 1px solid silver;\n        margin-bottom: 20px;\n        display: block;\n        color: $sub-color ;\n        font-size: 18px;\n\n        &:focus{\n            outline: none;\n        }\n        &:focus-visible ~ .form-input-label{\n            @include shrinkLabel();\n        }\n    }\n\n    input[type='password']{\n        letter-spacing: 0.3 em;\n    }\n   .form-input-label{\n       position: absolute;\n       top: 10px;\n       left: 5px;\n       font-size: 16px;\n       transition: all 300ms ease ;\n       color: $sub-color ;\n       pointer-events: none;\n\n       &.shrink {\n           @include shrinkLabel();\n       }\n   }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.aa235d13792622fb17fe.hot-update.js.map