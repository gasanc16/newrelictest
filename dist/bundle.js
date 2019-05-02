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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/appClass.js":
/*!*************************!*\
  !*** ./src/appClass.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = class App {\r\n    constructor(name, contributors, version, apdex, host) {\r\n        this.name = name || '';\r\n        this.contributors = contributors || [];\r\n        this.version = version || 0;\r\n        this.apdex = apdex || 0;\r\n        this.host = host || [];\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/appClass.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let model = __webpack_require__(/*! ./model */ \"./src/model.js\");\r\nlet utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\nlet view = __webpack_require__(/*! ./view */ \"./src/view.js\");\r\n\r\n\r\n// model.loadData(model.displayData.bind(model)); // REVISAR SI DEBE LLAMAR AL VIEW EN VEZ DE AL MODEL\r\nmodel.loadData(view.displayData.bind(view)); // REVISAR SI DEBE LLAMAR AL VIEW EN VEZ DE AL MODEL\r\n\r\nutils.setWindowVariables('getTopAppsByHost', model.getTopAppsByHost, model); \r\nutils.setWindowVariables('addAppToHosts', model.addAppToHosts, model); \r\nutils.setWindowVariables('removeAppFromHosts', model.removeAppFromHosts, model); \r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\nlet view = __webpack_require__(/*! ./view */ \"./src/view.js\");\r\nlet App = __webpack_require__(/*! ./appClass */ \"./src/appClass.js\");\r\n\r\nconst DATA_FILE_NAME = './data/host-app-data.json';\r\nconst MAX_APPS_NUMBER = 25;\r\n\r\nlet model = {\r\n\tappData: [],\r\n\thostList: new Set(),\r\n\tappsByHost: {},\r\n\r\n    loadData: function(onSuccess) {\r\n        utils.loadJSON(DATA_FILE_NAME, (response) => { \r\n\t\t\tthis.appData = JSON.parse(response); \r\n\t\t\tthis.setUpData();\r\n\t\t\tonSuccess(this.appsByHost);\r\n        });\r\n\t},\r\n\t\r\n\tsetUpData: function() {\r\n\t\tthis.hostList = this.extractHostNames(this.appData);\r\n\t\tthis.appsByHost = this.extractAppsByHost(this.appData, this.hostList);\r\n\t},\r\n\r\n    getTopAppsByHost: function(hostName) {\r\n\t\tif (!hostName) {\r\n\t\t\tconsole.error('None host name has being provided');\r\n\t\t} \r\n\r\n\t\treturn this.appsByHost[hostName].slice(0, MAX_APPS_NUMBER);\r\n\t}, \r\n\r\n\taddAppToHosts:  function(name, contributors, version, apdex, host) {\r\n\t\tthis.appData.push(new App(name, contributors, version, apdex, host));\r\n\t\tthis.setUpData();\r\n\t\tthis.displayData();\r\n\t}, \r\n\r\n\tremoveAppFromHosts: function(name) {\r\n\t\tif (!name) {\r\n\t\t\tconsole.error('None host name has being provided');\r\n\t\t} \r\n\t\tthis.appData = this.appData.filter((o) => {\r\n\t\t\treturn o.name.toLowerCase() !== name.toLowerCase();\r\n\t\t});\r\n\r\n\t\tthis.setUpData();\r\n\t\tthis.displayData();\r\n\t},\r\n\r\n\textractHostNames: function(appData) {\r\n\t\tlet hostList = new Set();\r\n\t\tappData.forEach(element => {\r\n\t\t\telement.host.forEach(hosts => {\r\n\t\t\t\thostList.add(hosts);\r\n\t\t\t});\r\n\t\t});\r\n\r\n\t\treturn hostList;\r\n\t},\r\n\t\r\n\textractAppsByHost: function(appData, hostList) {\r\n\t\tlet appsByHost = {};\r\n\t\thostList.forEach(host => {\r\n\t\t\tappsByHost[host] = this.getAppsByHost(host, appData);\r\n\t\t});\r\n\r\n\t\treturn appsByHost;\r\n\t},\r\n\t\r\n\tgetAppsByHost: function(hostName, appData) {\r\n\t\treturn appData.filter((app) => {\r\n\t\t\treturn app.host.includes(hostName);\r\n\t\t}).sort(function(a, b){ \r\n\t\t\treturn utils.compareBy(a, b, 'apdex', true);\r\n\t\t});\r\n\t}\r\n};\r\n\r\nmodule.exports = model;\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let utils = {\r\n\tloadJSON: function(fileName, callback) {   \r\n\t\tvar xobj = new XMLHttpRequest();\r\n\t\txobj.overrideMimeType(\"application/json\");\r\n\t\txobj.open('GET', fileName, true); \r\n\t\txobj.setRequestHeader('Access-Control-Allow-Headers', 'http://localhost:8080');\r\n\t\txobj.onreadystatechange = function () {\r\n\t\t\t  if (xobj.readyState == 4 && xobj.status == \"200\") {\r\n\t\t\t\tcallback(xobj.responseText);\r\n\t\t\t  }\r\n\t\t};\r\n\t\txobj.send(null);  \r\n\t},\r\n\r\n\tsetWindowVariables: function(name, value, scope) {\r\n\t\twindow[name] = value.bind(scope);\r\n\t},\r\n\r\n\tcompareBy: function(a, b, key, reverse) {\r\n\t\tlet order = reverse ? -1 : 1;\r\n\t\t\r\n\t\tif (a[key] > b[key]) {\r\n\t\t\treturn 1 * order;\r\n\t\t\t} else if (a[key] < b[key]) {\r\n\t\t\treturn -1 * order;\r\n\t\t\t}\r\n\t\treturn 0;\r\n\t\t\r\n\t}\r\n};\r\n\r\nmodule.exports = utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let viewUtils = __webpack_require__(/*! ./viewUtils */ \"./src/viewUtils.js\");\r\n\r\nconst TOP_APPS_NUMBER = 5;\r\n\r\nlet view = {\r\n    displayData: function(appsByHost) {\r\n        this.addContentToDom(appsByHost);\r\n        this.addAppElementClick();\r\n        this.addCheckBoxListener();\r\n    },\r\n\r\n    cleanContainer: function() {\r\n        viewUtils.getElementById('container').innerHTML = '';\r\n    },\r\n    \r\n    createHostContainer: function(name) {\r\n        let $listContainer = viewUtils.createElement('ul');\r\n        let $hostTitle = viewUtils.createElement('div');\r\n        let $hostName = document.createTextNode(name);\r\n        let $hostContainer = viewUtils.createElement('div');\r\n    \r\n        $listContainer.setAttribute('class', 'apps-list');\r\n        $hostTitle.appendChild($hostName);\r\n        $hostTitle.setAttribute('class', 'host-title')\r\n        $hostContainer.setAttribute('id', name);\r\n        $hostContainer.setAttribute('class', 'host-container');\r\n        $hostContainer.appendChild($hostTitle);\r\n        $hostContainer.appendChild($listContainer);\r\n    \r\n        return $hostContainer;\r\n    },\r\n    \r\n    createAppItem: function(app) {\r\n        let $listElement = viewUtils.createElement('li');\r\n        let $appApdex = document.createTextNode(app.apdex);\r\n        let $appName = document.createTextNode(app.name);\r\n        let $apdex = viewUtils.createElement('div');\r\n        let $name = viewUtils.createElement('div')\r\n        \r\n        $apdex.setAttribute('class', 'app-apdex');\r\n        $apdex.appendChild($appApdex);\r\n        $name.setAttribute('class', 'app-name')\r\n        $name.appendChild($appName);\r\n        $listElement.setAttribute('class', 'list-item')\r\n        $listElement.setAttribute('data-version', app.version);\r\n        $listElement.appendChild($apdex)\r\n        $listElement.appendChild($name);\r\n    \r\n        return $listElement;\r\n    },\r\n    \r\n    addAppsToContainer: function($container, $app) {\r\n        $container.getElementsByClassName('apps-list')[0].appendChild($app);\r\n    },\r\n    \r\n    addContentToDom: function(appsByHost) {\r\n        this.cleanContainer();\r\n        let $sectionContainer = viewUtils.getElementById('container');\r\n        \r\n        Object.keys(appsByHost).forEach(appName => {\r\n            let appsList = appsByHost[appName].slice(0, TOP_APPS_NUMBER);\r\n            let $hostContainer = this.createHostContainer(appName); \r\n    \r\n            appsList.forEach(app => {\r\n                this.addAppsToContainer($hostContainer, this.createAppItem(app));\r\n            });\r\n    \r\n            $sectionContainer.append($hostContainer);\r\n        });\r\n    },\r\n    \r\n    addCheckBoxListener: function() {\r\n        let $checkBox = viewUtils.getElementById('changeDisplayType');\r\n    \r\n        $checkBox.onclick = (event) => {\r\n            this.toogleListType(event.target.checked);\r\n        };\r\n    },\r\n\r\n    toogleListType: function(toogle) {\r\n        const LIST_CLASS = 'show-as-list';\r\n        let $sectionContainer = viewUtils.getElementById('container');\r\n\r\n        if (toogle) {\r\n            viewUtils.addClassToElement($sectionContainer, LIST_CLASS);\r\n        } else {\r\n            viewUtils.removeClassFromElement($sectionContainer, LIST_CLASS);\r\n        }\r\n    },\r\n    \r\n    addAppElementClick: function() {\r\n        for (let item of viewUtils.getElementsByClass('list-item')) {\r\n            item.onclick = (event) => {\r\n                event.stopPropagation();\r\n                let appVersion = event.currentTarget.getAttribute('data-version');\r\n                alert('App release version: ' + appVersion);\r\n            };\r\n        };\r\n    }\r\n};\r\n\r\nmodule.exports = view;\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ }),

/***/ "./src/viewUtils.js":
/*!**************************!*\
  !*** ./src/viewUtils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let viewUtils = {\r\n    getElementById: function(selector) {\r\n        return document.getElementById(selector);\r\n    },\r\n\r\n    getElementsByClass: function(selector) {\r\n        return document.getElementsByClassName(selector);\r\n    },\r\n\r\n    createElement: function(element) {\r\n        return document.createElement(element);\r\n    },\r\n\r\n    addClassToElement: function(element, className) {\r\n        element.classList.add(className);\r\n    },\r\n\r\n    removeClassFromElement: function(element, className) {\r\n        element.classList.remove(className);\r\n    }\r\n};\r\n\r\nmodule.exports = viewUtils;\n\n//# sourceURL=webpack:///./src/viewUtils.js?");

/***/ })

/******/ });