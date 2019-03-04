/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/js/index.js":
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var masonry = new Masonry(document.querySelector(\".masonry\"));\ndocument.querySelector(\".navbar-toggler\").addEventListener(\"click\", function () {\n  document.querySelector(\".sidenav\").classList.toggle(\"show\");\n});\n\nvar eventsForElement = function eventsForElement(elem) {\n  elem.querySelector(\".delete-button\").addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    elem.remove();\n    masonry.layout();\n  });\n  elem.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    if (elem.classList.contains(\"snippet\")) openDialogSnippet(elem);else if (elem.classList.contains(\"tag\")) openDialogTag(elem);\n  });\n};\n\ndocument.querySelectorAll(\".element\").forEach(eventsForElement);\ndocument.querySelectorAll(\"#add-snippet-button\").forEach(function (btn) {\n  return btn.addEventListener(\"click\", function () {\n    var elem = document.createElement(\"div\");\n    elem.classList.add(\"element\", \"snippet\");\n    elem.innerHTML = '<div class=\"content\"></div><div class=\"tags\"></div>' + '<div class=\"toolbar\"><a class=\"add-tag-button tool editable-visibility\">Add tag</a><a class=\"delete-button tool danger\">Delete</a></div>' + '<div class=\"comment-bar\"><div class=\"comment\"> // Click into to edit</div><div class=\"comment editable-visibility\">// Click on a tag to remove it</div></div>';\n    var panel = document.createElement(\"div\");\n    panel.classList.add(\"masonry-panel\");\n    var content = document.createElement(\"div\");\n    content.classList.add(\"masonry-content\");\n    panel.appendChild(content);\n    content.appendChild(elem);\n    eventsForElement(elem);\n    masonry.container.appendChild(panel);\n    masonry.layout();\n    openDialogSnippet(elem);\n  });\n});\ndocument.querySelectorAll(\"#add-tag-button\").forEach(function (btn) {\n  return btn.addEventListener(\"click\", function () {\n    var elem = document.createElement(\"div\");\n    elem.classList.add(\"element\", \"tag\");\n    elem.innerHTML = '<div class=\"content\"></div>' + '<div class=\"toolbar\"><a class=\"add-tag-button tool editable-visibility\">Add tag</a><a class=\"delete-button tool danger\">Delete</a></div>' + '<div class=\"comment-bar\"><div class=\"comment\"> // Click into to edit</div><div class=\"comment editable-visibility\">// Click on a tag to remove it</div></div>';\n    var panel = document.createElement(\"div\");\n    panel.classList.add(\"masonry-panel\");\n    var content = document.createElement(\"div\");\n    content.classList.add(\"masonry-content\");\n    panel.appendChild(content);\n    content.appendChild(elem);\n    eventsForElement(elem);\n    masonry.container.appendChild(panel);\n    masonry.layout();\n    openDialogTag(elem);\n  });\n});\n\nvar openDialogSnippet = function openDialogSnippet(elem) {\n  var dialogWrapper = document.createElement(\"div\");\n  dialogWrapper.classList.add(\"dialog-wrapper\");\n  var elemClone = elem.cloneNode(true);\n  elem.style.visibility = \"hidden\";\n  elemClone.querySelector(\".content\").contentEditable = \"true\";\n  elemClone.style = \"\";\n  var newTag = false;\n  elemClone.querySelector(\".add-tag-button\").addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    if (newTag !== false) newTag.finishEditing();\n    newTag = document.createElement(\"div\");\n\n    newTag.finishEditing = function () {\n      newTag.classList.remove(\"new\");\n      newTag.contentEditable = \"false\";\n      var tag = newTag;\n      newTag = false;\n      tag.addEventListener(\"click\", function (e) {\n        tag.remove();\n      });\n    };\n\n    newTag.innerHTML = \"new tag\";\n    newTag.classList.add(\"tag\", \"new\");\n    newTag.contentEditable = \"true\";\n    newTag.addEventListener(\"keydown\", function (e) {\n      if (e.which == 13) newTag.finishEditing();\n    });\n    newTag.addEventListener(\"blur\", function (e) {\n      newTag.finishEditing();\n    });\n    elemClone.querySelector(\".tags\").appendChild(newTag);\n    newTag.focus();\n    document.execCommand('selectAll', false, null);\n  });\n  elemClone.querySelector(\".delete-button\").addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    elem.remove();\n    dialogWrapper.remove();\n    masonry.layout();\n  });\n  elemClone.querySelectorAll(\".tag\").forEach(function (tag) {\n    return tag.addEventListener(\"click\", function (e) {\n      tag.remove();\n    });\n  });\n  elemClone.addEventListener(\"mousedown\", function (e) {\n    e.stopPropagation();\n  });\n  dialogWrapper.addEventListener(\"mousedown\", function (e) {\n    if (newTag !== false) newTag.finishEditing();\n    demoApplyEditedSnippet(elem, elemClone);\n    elem.style.visibility = \"visible\";\n    dialogWrapper.remove();\n    masonry.layout();\n  });\n  dialogWrapper.appendChild(elemClone);\n  document.body.append(dialogWrapper);\n};\n\nvar demoApplyEditedSnippet = function demoApplyEditedSnippet(elem, elemClone) {\n  elem.querySelector(\".content\").innerHTML = elemClone.querySelector(\".content\").innerHTML;\n  var tags = elem.querySelector(\".tags\");\n  var tagsClone = elemClone.querySelector(\".tags\");\n  tags.innerHTML = \"\";\n  tagsClone.querySelectorAll(\".tag\").forEach(function (t) {\n    return tags.appendChild(t.cloneNode(true));\n  });\n};\n\nvar openDialogTag = function openDialogTag(elem) {\n  var dialogWrapper = document.createElement(\"div\");\n  dialogWrapper.classList.add(\"dialog-wrapper\");\n  var elemClone = elem.cloneNode(true);\n  elem.style.visibility = \"hidden\";\n  elemClone.querySelector(\".content\").contentEditable = \"true\";\n  elemClone.style = \"\";\n  elemClone.querySelector(\".delete-button\").addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    elem.remove();\n    dialogWrapper.remove();\n    masonry.layout();\n  });\n  elemClone.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n  });\n  dialogWrapper.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    demoApplyEditedTag(elem, elemClone);\n    elem.style.visibility = \"visible\";\n    dialogWrapper.remove();\n    masonry.layout();\n  });\n  dialogWrapper.appendChild(elemClone);\n  document.body.append(dialogWrapper);\n};\n\nvar demoApplyEditedTag = function demoApplyEditedTag(elem, elemClone) {\n  elem.querySelector(\".content\").innerHTML = elemClone.querySelector(\".content\").innerHTML;\n};\n\n//# sourceURL=webpack:///./static/js/index.js?");

/***/ })

/******/ });