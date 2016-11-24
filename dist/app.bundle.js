webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	__webpack_require__(302);
	
	document.addEventListener("DOMContentLoaded", function () {
	    __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(303), __webpack_require__(304)]; (function (WebElementModule, IndexPageModule) {
	        var WebElement = WebElementModule.WebElement;
	        var IndexPage = IndexPageModule.IndexPage;
	
	        IndexPage[WebElement.render]();
	        IndexPage.instance.loadNews().then(function () {
	            return startUpdate();
	        });
	
	        function startUpdate() {
	            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000 * 60 * 5;
	
	            setTimeout(function () {
	                return IndexPage.instance.loadNews().then(function () {
	                    return startUpdate(delay);
	                });
	            }, delay);
	        }
	    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./app.style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./app.style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  box-sizing: border-box; }\n\nabbr, section, h1, h2, h3 footer, header {\n  display: inline-block; }\n\nhtml,\nbody {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  border: none;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\nbody {\n  -ms-flex-align: center;\n  align-items: center;\n  background-color: #EEEFEA; }\n\n.page-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  max-width: 1024px;\n  background: #F0F0F0;\n  box-shadow: 0 0 20px rgba(205, 205, 205, 0.8); }\n  .page-content > .title {\n    padding-left: 10px; }\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=app.bundle.js.map