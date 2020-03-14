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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");

var _starship = __webpack_require__(/*! ./starship/starship */ "./src/starship/starship.js");

var ship = _interopRequireWildcard(_starship);

var _person = __webpack_require__(/*! ./person/person */ "./src/person/person.js");

var person = _interopRequireWildcard(_person);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

var myShip = new ship.playerShip('SS Enterprise');

var pc = new person.player("Jean-Luc Picard");

pc.identify();

pc.assign(myShip);

pc.identify();

myShip.hail();
myShip.shields.setStatus(80);
myShip.report();

var enemyShip = new ship.starship("LXS Destroyer", 1, 1, 2);
enemyShip.hail();
enemyShip.report();
enemyShip.reportSystems();

/***/ }),

/***/ "./src/person/_player.js":
/*!*******************************!*\
  !*** ./src/person/_player.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prototype = __webpack_require__(/*! ./_prototype */ "./src/person/_prototype.js");

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var player = function (_npc) {
    _inherits(player, _npc);

    function player(name) {
        _classCallCheck(this, player);

        var _this = _possibleConstructorReturn(this, (player.__proto__ || Object.getPrototypeOf(player)).call(this, name));

        _this.rank = "Captain";
        return _this;
    }

    return player;
}(_prototype2.default);

exports.default = player;

/***/ }),

/***/ "./src/person/_prototype.js":
/*!**********************************!*\
  !*** ./src/person/_prototype.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _ui = __webpack_require__(/*! UI/ui */ "./src/ui/ui.js");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var npc = function () {
    function npc(name, rank) {
        _classCallCheck(this, npc);

        this.name = name;
        this.rank = rank;
        this.assignment = '- currently unassigned';
    }

    _createClass(npc, [{
        key: 'identify',
        value: function identify() {
            _ui2.default.log(this.rank + ' ' + this.name + ' ' + this.assignment);
        }
    }, {
        key: 'assign',
        value: function assign(ship) {
            this.ship = ship;

            this.assignment = 'of the Starship ' + this.ship.name;
        }
    }]);

    return npc;
}();

exports.default = npc;

/***/ }),

/***/ "./src/person/person.js":
/*!******************************!*\
  !*** ./src/person/person.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.player = exports.npc = undefined;

var _prototype = __webpack_require__(/*! ./_prototype */ "./src/person/_prototype.js");

var _prototype2 = _interopRequireDefault(_prototype);

var _player = __webpack_require__(/*! ./_player */ "./src/person/_player.js");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.npc = _prototype2.default;
exports.player = _player2.default;

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/starship/starship.js":
/*!**********************************!*\
  !*** ./src/starship/starship.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.playerShip = exports.starship = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _systems = __webpack_require__(/*! ./systems/systems */ "./src/starship/systems/systems.js");

var _systems2 = _interopRequireDefault(_systems);

var _ui = __webpack_require__(/*! UI/ui */ "./src/ui/ui.js");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var starship = function () {
    function starship(name) {
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

        _classCallCheck(this, starship);

        this.name = name;
        this.shields = new _systems2.default.shields(s);
        this.hull = new _systems2.default.hull(h);
        this.engines = new _systems2.default.engines(e);
    }

    _createClass(starship, [{
        key: 'hail',
        value: function hail() {
            _ui2.default.log('This is the Starship ' + this.name);
        }
    }, {
        key: 'report',
        value: function report() {
            _ui2.default.log("Our scans cannot penetrate their shields");
        }
    }, {
        key: 'reportSystems',
        value: function reportSystems() {
            this.shields.readLevel();
            this.hull.readLevel();
            this.engines.readLevel();
        }
    }]);

    return starship;
}();

var playerShip = function (_starship) {
    _inherits(playerShip, _starship);

    function playerShip() {
        _classCallCheck(this, playerShip);

        return _possibleConstructorReturn(this, (playerShip.__proto__ || Object.getPrototypeOf(playerShip)).apply(this, arguments));
    }

    _createClass(playerShip, [{
        key: 'updateUI',
        value: function updateUI() {
            _ui2.default.setShieldBar(this.shields.getStatus());
            _ui2.default.setHullBar(this.hull.getStatus());
            _ui2.default.setEngineBar(this.engines.getStatus());
        }
    }, {
        key: 'report',
        value: function report() {
            this.shields.readStatus();
            this.hull.readStatus();
            this.engines.readStatus();
            this.updateUI();
        }
    }]);

    return playerShip;
}(starship);

exports.starship = starship;
exports.playerShip = playerShip;

/***/ }),

/***/ "./src/starship/systems/_engines.js":
/*!******************************************!*\
  !*** ./src/starship/systems/_engines.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prototype = __webpack_require__(/*! ./_prototype */ "./src/starship/systems/_prototype.js");

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var engines = function (_system) {
    _inherits(engines, _system);

    function engines(level) {
        _classCallCheck(this, engines);

        var _this = _possibleConstructorReturn(this, (engines.__proto__ || Object.getPrototypeOf(engines)).call(this, level));

        _this.name = 'Engine efficiency';
        return _this;
    }

    return engines;
}(_prototype2.default);

exports.default = engines;

/***/ }),

/***/ "./src/starship/systems/_hull.js":
/*!***************************************!*\
  !*** ./src/starship/systems/_hull.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prototype = __webpack_require__(/*! ./_prototype */ "./src/starship/systems/_prototype.js");

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var hull = function (_system) {
    _inherits(hull, _system);

    function hull(level) {
        _classCallCheck(this, hull);

        var _this = _possibleConstructorReturn(this, (hull.__proto__ || Object.getPrototypeOf(hull)).call(this, level));

        _this.name = 'Hull integrity';
        return _this;
    }

    return hull;
}(_prototype2.default);

exports.default = hull;

/***/ }),

/***/ "./src/starship/systems/_prototype.js":
/*!********************************************!*\
  !*** ./src/starship/systems/_prototype.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _ui = __webpack_require__(/*! UI/ui */ "./src/ui/ui.js");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var system = function () {
    function system(level) {
        _classCallCheck(this, system);

        this.status = 100;
        this.name = 'System Name';
        this.level = level;
    }

    _createClass(system, [{
        key: 'getStatus',
        value: function getStatus() {
            return this.status;
        }
    }, {
        key: 'readStatus',
        value: function readStatus() {
            _ui2.default.log(this.name + ' at ' + this.status + '% Captain');
        }
    }, {
        key: 'setStatus',
        value: function setStatus(value) {

            this.status = value;
        }
    }, {
        key: 'readLevel',
        value: function readLevel() {
            _ui2.default.log(this.name + ' level ' + this.level + ' Captain');
        }
    }]);

    return system;
}();

exports.default = system;

/***/ }),

/***/ "./src/starship/systems/_shields.js":
/*!******************************************!*\
  !*** ./src/starship/systems/_shields.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prototype = __webpack_require__(/*! ./_prototype */ "./src/starship/systems/_prototype.js");

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var shields = function (_system) {
    _inherits(shields, _system);

    function shields(level) {
        _classCallCheck(this, shields);

        var _this = _possibleConstructorReturn(this, (shields.__proto__ || Object.getPrototypeOf(shields)).call(this, level));

        _this.name = 'Shields';
        return _this;
    }

    return shields;
}(_prototype2.default);

exports.default = shields;

/***/ }),

/***/ "./src/starship/systems/systems.js":
/*!*****************************************!*\
  !*** ./src/starship/systems/systems.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shields = __webpack_require__(/*! ./_shields */ "./src/starship/systems/_shields.js");

var _shields2 = _interopRequireDefault(_shields);

var _hull = __webpack_require__(/*! ./_hull */ "./src/starship/systems/_hull.js");

var _hull2 = _interopRequireDefault(_hull);

var _engines = __webpack_require__(/*! ./_engines */ "./src/starship/systems/_engines.js");

var _engines2 = _interopRequireDefault(_engines);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = { shields: _shields2.default, hull: _hull2.default, engines: _engines2.default };

/***/ }),

/***/ "./src/ui/ui.js":
/*!**********************!*\
  !*** ./src/ui/ui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var ui = function () {
    function ui() {
        _classCallCheck(this, ui);
    }

    _createClass(ui, null, [{
        key: 'setBar',
        value: function setBar(id, percent) {
            var elem = document.querySelector('#' + id + ' span');
            elem.style.width = percent + '%';
        }
    }, {
        key: 'setShieldBar',
        value: function setShieldBar(percent) {
            this.setBar('shields', percent);
        }
    }, {
        key: 'setHullBar',
        value: function setHullBar(percent) {
            this.setBar('hull', percent);
        }
    }, {
        key: 'setEngineBar',
        value: function setEngineBar(percent) {
            this.setBar('engines', percent);
        }
    }, {
        key: 'log',
        value: function log(content) {
            document.getElementById('log').innerHTML += '<br>' + content;
        }
    }]);

    return ui;
}();

exports.default = ui;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24vX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGVyc29uL19wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbi9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9kYjMwIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zdGFyc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fZW5naW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9faHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL19zaGllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL3N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3VpLmpzIl0sIm5hbWVzIjpbInNoaXAiLCJwZXJzb24iLCJteVNoaXAiLCJwYyIsImVuZW15U2hpcCIsInBsYXllciIsIm5wYyIsInVpIiwic3RhcnNoaXAiLCJzIiwiaCIsImUiLCJzeXN0ZW1zIiwicGxheWVyU2hpcCIsImVuZ2luZXMiLCJzeXN0ZW0iLCJodWxsIiwidmFsdWUiLCJzaGllbGRzIiwiaWQiLCJwZXJjZW50IiwiZWxlbSIsImRvY3VtZW50IiwiY29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCAqIGFzIHNoaXAgZnJvbSBcIi4vc3RhcnNoaXAvc3RhcnNoaXBcIjtcblxuaW1wb3J0ICogYXMgcGVyc29uIGZyb20gXCIuL3BlcnNvbi9wZXJzb25cIjtcblxubGV0IG15U2hpcCA9IG5ldyBzaGlwLnBsYXllclNoaXAoJ1NTIEVudGVycHJpc2UnKTtcblxubGV0IHBjID0gbmV3IHBlcnNvbi5wbGF5ZXIoXCJKZWFuLUx1YyBQaWNhcmRcIik7XG5cbnBjLmlkZW50aWZ5KCk7XG5cbnBjLmFzc2lnbihteVNoaXApO1xuXG5wYy5pZGVudGlmeSgpO1xuXG5teVNoaXAuaGFpbCgpO1xubXlTaGlwLnNoaWVsZHMuc2V0U3RhdHVzKDgwKTtcbm15U2hpcC5yZXBvcnQoKTtcblxubGV0IGVuZW15U2hpcCA9IG5ldyBzaGlwLnN0YXJzaGlwKFwiTFhTIERlc3Ryb3llclwiLDEsMSwyKTtcbmVuZW15U2hpcC5oYWlsKCk7XG5lbmVteVNoaXAucmVwb3J0KCk7XG5lbmVteVNoaXAucmVwb3J0U3lzdGVtcygpOyIsImltcG9ydCBucGMgZnJvbSAnLi9fcHJvdG90eXBlJztcblxuY2xhc3MgcGxheWVyIGV4dGVuZHMgbnBje1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5yYW5rID0gXCJDYXB0YWluXCJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJpbXBvcnQgdWkgZnJvbSAnVUkvdWknO1xuXG5jbGFzcyBucGN7XG4gICAgY29uc3RydWN0b3IobmFtZSxyYW5rKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5yYW5rID0gcmFuaztcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gJy0gY3VycmVudGx5IHVuYXNzaWduZWQnO1xuICAgIH1cblxuICAgIGlkZW50aWZ5KCl7XG4gICAgICAgIHVpLmxvZyhgJHt0aGlzLnJhbmt9ICR7dGhpcy5uYW1lfSAke3RoaXMuYXNzaWdubWVudH1gKVxuICAgIH1cblxuICAgIGFzc2lnbihzaGlwKXtcbiAgICAgICAgdGhpcy5zaGlwID0gc2hpcDtcblxuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSBgb2YgdGhlIFN0YXJzaGlwICR7dGhpcy5zaGlwLm5hbWV9YFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbnBjOyIsImltcG9ydCBucGMgZnJvbSAnLi9fcHJvdG90eXBlJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9fcGxheWVyJztcblxuZXhwb3J0IHtcbiAgICBucGMsXG4gICAgcGxheWVyXG59OyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHN5c3RlbXMgZnJvbSAnLi9zeXN0ZW1zL3N5c3RlbXMnO1xuaW1wb3J0IHVpIGZyb20gJ1VJL3VpJztcblxuXG5jbGFzcyBzdGFyc2hpcCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUscyA9IDEsaCA9IDEsZSA9IDEpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zaGllbGRzID0gbmV3IHN5c3RlbXMuc2hpZWxkcyhzKTtcbiAgICAgICAgdGhpcy5odWxsID0gbmV3IHN5c3RlbXMuaHVsbChoKTtcbiAgICAgICAgdGhpcy5lbmdpbmVzID0gbmV3IHN5c3RlbXMuZW5naW5lcyhlKTtcbiAgICB9XG5cbiAgICBoYWlsKCkge1xuICAgICAgICB1aS5sb2coYFRoaXMgaXMgdGhlIFN0YXJzaGlwICR7dGhpcy5uYW1lfWApO1xuICAgIH1cblxuICAgIHJlcG9ydCgpe1xuICAgICAgICB1aS5sb2coXCJPdXIgc2NhbnMgY2Fubm90IHBlbmV0cmF0ZSB0aGVpciBzaGllbGRzXCIpO1xuICAgIH1cblxuICAgIHJlcG9ydFN5c3RlbXMoKXtcbiAgICAgICAgdGhpcy5zaGllbGRzLnJlYWRMZXZlbCgpO1xuICAgICAgICB0aGlzLmh1bGwucmVhZExldmVsKCk7XG4gICAgICAgIHRoaXMuZW5naW5lcy5yZWFkTGV2ZWwoKTtcbiAgICB9XG5cbiAgICBcbn1cblxuY2xhc3MgcGxheWVyU2hpcCBleHRlbmRzIHN0YXJzaGlwIHtcblxuICAgIHVwZGF0ZVVJKCkge1xuICAgICAgICB1aS5zZXRTaGllbGRCYXIodGhpcy5zaGllbGRzLmdldFN0YXR1cygpKTtcbiAgICAgICAgdWkuc2V0SHVsbEJhcih0aGlzLmh1bGwuZ2V0U3RhdHVzKCkpO1xuICAgICAgICB1aS5zZXRFbmdpbmVCYXIodGhpcy5lbmdpbmVzLmdldFN0YXR1cygpKTtcblxuICAgIH1cblxuICAgIHJlcG9ydCgpIHtcbiAgICAgICAgdGhpcy5zaGllbGRzLnJlYWRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5odWxsLnJlYWRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5lbmdpbmVzLnJlYWRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIHN0YXJzaGlwLFxuICAgIHBsYXllclNoaXBcbn07IiwiaW1wb3J0IHN5c3RlbSBmcm9tICcuL19wcm90b3R5cGUnO1xuXG5jbGFzcyBlbmdpbmVzIGV4dGVuZHMgc3lzdGVte1xuXG4gICAgY29uc3RydWN0b3IobGV2ZWwpe1xuICAgICAgICBzdXBlcihsZXZlbCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdFbmdpbmUgZWZmaWNpZW5jeSc7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5naW5lczsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIGh1bGwgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3RvcihsZXZlbCl7XG4gICAgICAgIHN1cGVyKGxldmVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0h1bGwgaW50ZWdyaXR5JztcbiAgICB9XG5cbiAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBodWxsOyIsImltcG9ydCB1aSBmcm9tICdVSS91aSc7XG5cbmNsYXNzIHN5c3RlbXtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbCl7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gMTAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnU3lzdGVtIE5hbWUnO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgICB9XG5cbiAgICByZWFkU3RhdHVzKCl7XG4gICAgICAgIHVpLmxvZyhgJHt0aGlzLm5hbWV9IGF0ICR7dGhpcy5zdGF0dXN9JSBDYXB0YWluYCk7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzKHZhbHVlKXtcblxuICAgICAgICB0aGlzLnN0YXR1cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlYWRMZXZlbCgpe1xuICAgICAgICB1aS5sb2coYCR7dGhpcy5uYW1lfSBsZXZlbCAke3RoaXMubGV2ZWx9IENhcHRhaW5gKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3lzdGVtOyIsImltcG9ydCBzeXN0ZW0gZnJvbSAnLi9fcHJvdG90eXBlJztcblxuY2xhc3Mgc2hpZWxkcyBleHRlbmRzIHN5c3RlbXtcblxuICAgIGNvbnN0cnVjdG9yKGxldmVsKXtcbiAgICAgICAgc3VwZXIobGV2ZWwpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnU2hpZWxkcyc7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpZWxkczsiLCJpbXBvcnQgc2hpZWxkcyBmcm9tICcuL19zaGllbGRzJztcbmltcG9ydCBodWxsIGZyb20gJy4vX2h1bGwnO1xuaW1wb3J0IGVuZ2luZXMgZnJvbSAnLi9fZW5naW5lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtzaGllbGRzLCBodWxsLCBlbmdpbmVzfTsiLCJjbGFzcyB1aXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhcihpZCxwZXJjZW50KXtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gc3BhbmApO1xuICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0U2hpZWxkQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignc2hpZWxkcycscGVyY2VudClcbiAgICB9XG4gICAgc3RhdGljIHNldEh1bGxCYXIocGVyY2VudCl7XG4gICAgICAgIHRoaXMuc2V0QmFyKCdodWxsJyxwZXJjZW50KVxuICAgIH1cbiAgICBzdGF0aWMgc2V0RW5naW5lQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignZW5naW5lcycscGVyY2VudClcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9nKGNvbnRlbnQpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJykuaW5uZXJIVE1MICs9IGA8YnI+JHtjb250ZW50fWA7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1aTsiXSwic291cmNlUm9vdCI6IiJ9