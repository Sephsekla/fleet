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

var enemyShip = new ship.starship("LXS Destroyer");
enemyShip.hail();
enemyShip.report();

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
        _classCallCheck(this, starship);

        this.name = name;
        this.shields = new _systems2.default.shields();
        this.hull = new _systems2.default.hull();
        this.engines = new _systems2.default.engines();
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

    function engines() {
        _classCallCheck(this, engines);

        var _this = _possibleConstructorReturn(this, (engines.__proto__ || Object.getPrototypeOf(engines)).call(this, status));

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

    function hull() {
        _classCallCheck(this, hull);

        var _this = _possibleConstructorReturn(this, (hull.__proto__ || Object.getPrototypeOf(hull)).call(this, status));

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
    function system() {
        _classCallCheck(this, system);

        this.status = 100;
        this.name = 'System Name';
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

    function shields() {
        _classCallCheck(this, shields);

        var _this = _possibleConstructorReturn(this, (shields.__proto__ || Object.getPrototypeOf(shields)).call(this, status));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24vX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGVyc29uL19wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbi9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9kYjMwIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zdGFyc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fZW5naW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9faHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL19zaGllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL3N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3VpLmpzIl0sIm5hbWVzIjpbInNoaXAiLCJwZXJzb24iLCJteVNoaXAiLCJwYyIsImVuZW15U2hpcCIsInBsYXllciIsIm5wYyIsInVpIiwic3RhcnNoaXAiLCJzeXN0ZW1zIiwicGxheWVyU2hpcCIsImVuZ2luZXMiLCJzeXN0ZW0iLCJodWxsIiwidmFsdWUiLCJzaGllbGRzIiwiaWQiLCJwZXJjZW50IiwiZWxlbSIsImRvY3VtZW50IiwiY29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUFBOztBQUNUO0FBQ0E7QUFDSDs7OztvQ0FFVTtBQUNQLG1CQUFPLEtBQVA7QUFDSDs7O3FDQUVXO0FBQ1JMLDZCQUFVLEtBQVZBLElBQVUsR0FBVkEsTUFBVSxHQUFnQixLQUExQkEsTUFBVSxHQUFWQTtBQUNIOzs7a0NBRVNPLEssRUFBTTs7QUFFWjtBQUNIOzs7Ozs7a0JBSVVGLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNRyxVOzs7QUFFRix1QkFBYTtBQUFBOztBQUFBOztBQUVUO0FBRlM7QUFHWjs7O0VBTGlCSCxtQjs7a0JBVVBHLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWUsRUFBQ0EsbUJBQUQsU0FBVUYsYUFBVixTQUFnQkYsbUJBQWhCLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKVEosSztBQUNGLGtCQUFhO0FBQUE7QUFFWjs7OzsrQkFFYVMsRSxFQUFHQyxPLEVBQVE7QUFDckIsZ0JBQUlDLE9BQU9DLGtDQUFYLE9BQVdBLENBQVg7QUFDQUQ7QUFDSDs7O3FDQUVtQkQsTyxFQUFRO0FBQ3hCO0FBQ0g7OzttQ0FDaUJBLE8sRUFBUTtBQUN0QjtBQUNIOzs7cUNBQ21CQSxPLEVBQVE7QUFDeEI7QUFDSDs7OzRCQUVVRyxPLEVBQVE7QUFDZkQ7QUFFSDs7Ozs7O2tCQUtVWixFIiwiZmlsZSI6ImxhbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgKiBhcyBzaGlwIGZyb20gXCIuL3N0YXJzaGlwL3N0YXJzaGlwXCI7XG5cbmltcG9ydCAqIGFzIHBlcnNvbiBmcm9tIFwiLi9wZXJzb24vcGVyc29uXCI7XG5cbmxldCBteVNoaXAgPSBuZXcgc2hpcC5wbGF5ZXJTaGlwKCdTUyBFbnRlcnByaXNlJyk7XG5cbmxldCBwYyA9IG5ldyBwZXJzb24ucGxheWVyKFwiSmVhbi1MdWMgUGljYXJkXCIpO1xuXG5wYy5pZGVudGlmeSgpO1xuXG5wYy5hc3NpZ24obXlTaGlwKTtcblxucGMuaWRlbnRpZnkoKTtcblxubXlTaGlwLmhhaWwoKTtcbm15U2hpcC5zaGllbGRzLnNldFN0YXR1cyg4MCk7XG5teVNoaXAucmVwb3J0KCk7XG5cbmxldCBlbmVteVNoaXAgPSBuZXcgc2hpcC5zdGFyc2hpcChcIkxYUyBEZXN0cm95ZXJcIik7XG5lbmVteVNoaXAuaGFpbCgpO1xuZW5lbXlTaGlwLnJlcG9ydCgpOyIsImltcG9ydCBucGMgZnJvbSAnLi9fcHJvdG90eXBlJztcblxuY2xhc3MgcGxheWVyIGV4dGVuZHMgbnBje1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5yYW5rID0gXCJDYXB0YWluXCJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJpbXBvcnQgdWkgZnJvbSAnVUkvdWknO1xuXG5jbGFzcyBucGN7XG4gICAgY29uc3RydWN0b3IobmFtZSxyYW5rKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5yYW5rID0gcmFuaztcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gJy0gY3VycmVudGx5IHVuYXNzaWduZWQnO1xuICAgIH1cblxuICAgIGlkZW50aWZ5KCl7XG4gICAgICAgIHVpLmxvZyhgJHt0aGlzLnJhbmt9ICR7dGhpcy5uYW1lfSAke3RoaXMuYXNzaWdubWVudH1gKVxuICAgIH1cblxuICAgIGFzc2lnbihzaGlwKXtcbiAgICAgICAgdGhpcy5zaGlwID0gc2hpcDtcblxuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSBgb2YgdGhlIFN0YXJzaGlwICR7dGhpcy5zaGlwLm5hbWV9YFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbnBjOyIsImltcG9ydCBucGMgZnJvbSAnLi9fcHJvdG90eXBlJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9fcGxheWVyJztcblxuZXhwb3J0IHtcbiAgICBucGMsXG4gICAgcGxheWVyXG59OyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHN5c3RlbXMgZnJvbSAnLi9zeXN0ZW1zL3N5c3RlbXMnO1xuaW1wb3J0IHVpIGZyb20gJ1VJL3VpJztcblxuXG5jbGFzcyBzdGFyc2hpcCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zaGllbGRzID0gbmV3IHN5c3RlbXMuc2hpZWxkcztcbiAgICAgICAgdGhpcy5odWxsID0gbmV3IHN5c3RlbXMuaHVsbDtcbiAgICAgICAgdGhpcy5lbmdpbmVzID0gbmV3IHN5c3RlbXMuZW5naW5lcztcbiAgICB9XG5cbiAgICBoYWlsKCkge1xuICAgICAgICB1aS5sb2coYFRoaXMgaXMgdGhlIFN0YXJzaGlwICR7dGhpcy5uYW1lfWApO1xuICAgIH1cblxuICAgIHJlcG9ydCgpe1xuICAgICAgICB1aS5sb2coXCJPdXIgc2NhbnMgY2Fubm90IHBlbmV0cmF0ZSB0aGVpciBzaGllbGRzXCIpO1xuICAgIH1cblxuICAgIFxufVxuXG5jbGFzcyBwbGF5ZXJTaGlwIGV4dGVuZHMgc3RhcnNoaXAge1xuXG4gICAgdXBkYXRlVUkoKSB7XG4gICAgICAgIHVpLnNldFNoaWVsZEJhcih0aGlzLnNoaWVsZHMuZ2V0U3RhdHVzKCkpO1xuICAgICAgICB1aS5zZXRIdWxsQmFyKHRoaXMuaHVsbC5nZXRTdGF0dXMoKSk7XG4gICAgICAgIHVpLnNldEVuZ2luZUJhcih0aGlzLmVuZ2luZXMuZ2V0U3RhdHVzKCkpO1xuXG4gICAgfVxuXG4gICAgcmVwb3J0KCkge1xuICAgICAgICB0aGlzLnNoaWVsZHMucmVhZFN0YXR1cygpO1xuICAgICAgICB0aGlzLmh1bGwucmVhZFN0YXR1cygpO1xuICAgICAgICB0aGlzLmVuZ2luZXMucmVhZFN0YXR1cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7XG4gICAgc3RhcnNoaXAsXG4gICAgcGxheWVyU2hpcFxufTsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIGVuZ2luZXMgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihzdGF0dXMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRW5naW5lIGVmZmljaWVuY3knO1xuICAgIH1cblxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuZ2luZXM7IiwiaW1wb3J0IHN5c3RlbSBmcm9tICcuL19wcm90b3R5cGUnO1xuXG5jbGFzcyBodWxsIGV4dGVuZHMgc3lzdGVte1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoc3RhdHVzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0h1bGwgaW50ZWdyaXR5JztcbiAgICB9XG5cbiAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBodWxsOyIsImltcG9ydCB1aSBmcm9tICdVSS91aSc7XG5cbmNsYXNzIHN5c3RlbXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IDEwMDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1N5c3RlbSBOYW1lJztcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHJlYWRTdGF0dXMoKXtcbiAgICAgICAgdWkubG9nKGAke3RoaXMubmFtZX0gYXQgJHt0aGlzLnN0YXR1c30lIENhcHRhaW5gKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXModmFsdWUpe1xuXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdmFsdWU7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN5c3RlbTsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIHNoaWVsZHMgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihzdGF0dXMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnU2hpZWxkcyc7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpZWxkczsiLCJpbXBvcnQgc2hpZWxkcyBmcm9tICcuL19zaGllbGRzJztcbmltcG9ydCBodWxsIGZyb20gJy4vX2h1bGwnO1xuaW1wb3J0IGVuZ2luZXMgZnJvbSAnLi9fZW5naW5lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtzaGllbGRzLCBodWxsLCBlbmdpbmVzfTsiLCJjbGFzcyB1aXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhcihpZCxwZXJjZW50KXtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gc3BhbmApO1xuICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0U2hpZWxkQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignc2hpZWxkcycscGVyY2VudClcbiAgICB9XG4gICAgc3RhdGljIHNldEh1bGxCYXIocGVyY2VudCl7XG4gICAgICAgIHRoaXMuc2V0QmFyKCdodWxsJyxwZXJjZW50KVxuICAgIH1cbiAgICBzdGF0aWMgc2V0RW5naW5lQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignZW5naW5lcycscGVyY2VudClcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9nKGNvbnRlbnQpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJykuaW5uZXJIVE1MICs9IGA8YnI+JHtjb250ZW50fWA7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1aTsiXSwic291cmNlUm9vdCI6IiJ9