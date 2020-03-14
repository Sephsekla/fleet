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
            this.shields.readStatus();
            this.hull.readStatus();
            this.engines.readStatus();
            this.updateUI();
        }
    }, {
        key: 'updateUI',
        value: function updateUI() {
            _ui2.default.setShieldBar(this.shields.getStatus());
            _ui2.default.setHullBar(this.hull.getStatus());
            _ui2.default.setEngineBar(this.engines.getStatus());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24vX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGVyc29uL19wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbi9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9kYjMwIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zdGFyc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fZW5naW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9faHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL19zaGllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL3N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3VpLmpzIl0sIm5hbWVzIjpbInNoaXAiLCJwZXJzb24iLCJteVNoaXAiLCJwYyIsInBsYXllciIsIm5wYyIsInVpIiwic3RhcnNoaXAiLCJzeXN0ZW1zIiwicGxheWVyU2hpcCIsImVuZ2luZXMiLCJzeXN0ZW0iLCJodWxsIiwidmFsdWUiLCJzaGllbGRzIiwiaWQiLCJwZXJjZW50IiwiZWxlbSIsImRvY3VtZW50IiwiY29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdD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R0FBZ0IsS0FBMUJBLE1BQVUsR0FBVkE7QUFDSDs7O2tDQUVTTyxLLEVBQU07O0FBRVo7QUFDSDs7Ozs7O2tCQUlVRixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUcsVTs7O0FBRUYsdUJBQWE7QUFBQTs7QUFBQTs7QUFFVDtBQUZTO0FBR1o7OztFQUxpQkgsbUI7O2tCQVVQRyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlLEVBQUNBLG1CQUFELFNBQVVGLGFBQVYsU0FBZ0JGLG1CQUFoQixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSlRKLEs7QUFDRixrQkFBYTtBQUFBO0FBRVo7Ozs7K0JBRWFTLEUsRUFBR0MsTyxFQUFRO0FBQ3JCLGdCQUFJQyxPQUFPQyxrQ0FBWCxPQUFXQSxDQUFYO0FBQ0FEO0FBQ0g7OztxQ0FFbUJELE8sRUFBUTtBQUN4QjtBQUNIOzs7bUNBQ2lCQSxPLEVBQVE7QUFDdEI7QUFDSDs7O3FDQUNtQkEsTyxFQUFRO0FBQ3hCO0FBQ0g7Ozs0QkFFVUcsTyxFQUFRO0FBQ2ZEO0FBRUg7Ozs7OztrQkFLVVosRSIsImZpbGUiOiJsYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJztcblxuaW1wb3J0ICogYXMgc2hpcCBmcm9tIFwiLi9zdGFyc2hpcC9zdGFyc2hpcFwiO1xuXG5pbXBvcnQgKiBhcyBwZXJzb24gZnJvbSBcIi4vcGVyc29uL3BlcnNvblwiO1xuXG5sZXQgbXlTaGlwID0gbmV3IHNoaXAucGxheWVyU2hpcCgnU1MgRW50ZXJwcmlzZScpO1xuXG5sZXQgcGMgPSBuZXcgcGVyc29uLnBsYXllcihcIkplYW4tTHVjIFBpY2FyZFwiKTtcblxucGMuaWRlbnRpZnkoKTtcblxucGMuYXNzaWduKG15U2hpcCk7XG5cbnBjLmlkZW50aWZ5KCk7XG5cbm15U2hpcC5oYWlsKCk7XG5teVNoaXAuc2hpZWxkcy5zZXRTdGF0dXMoODApO1xubXlTaGlwLnJlcG9ydCgpOyIsImltcG9ydCBucGMgZnJvbSAnLi9fcHJvdG90eXBlJztcblxuY2xhc3MgcGxheWVyIGV4dGVuZHMgbnBje1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5yYW5rID0gXCJDYXB0YWluXCJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJpbXBvcnQgdWkgZnJvbSAnVUkvdWknO1xuXG5jbGFzcyBucGN7XG4gICAgY29uc3RydWN0b3IobmFtZSxyYW5rKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5yYW5rID0gcmFuaztcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gJy0gY3VycmVudGx5IHVuYXNzaWduZWQnO1xuICAgIH1cblxuICAgIGlkZW50aWZ5KCl7XG4gICAgICAgIHVpLmxvZyhgJHt0aGlzLnJhbmt9ICR7dGhpcy5uYW1lfSAke3RoaXMuYXNzaWdubWVudH1gKVxuICAgIH1cblxuICAgIGFzc2lnbihzaGlwKXtcbiAgICAgICAgdGhpcy5zaGlwID0gc2hpcDtcblxuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSBgb2YgdGhlIFN0YXJzaGlwICR7dGhpcy5zaGlwLm5hbWV9YFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbnBjOyIsImltcG9ydCBucGMgZnJvbSAnLi9fcHJvdG90eXBlJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9fcGxheWVyJztcblxuZXhwb3J0IHtcbiAgICBucGMsXG4gICAgcGxheWVyXG59OyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHN5c3RlbXMgZnJvbSAnLi9zeXN0ZW1zL3N5c3RlbXMnO1xuaW1wb3J0IHVpIGZyb20gJ1VJL3VpJztcblxuXG5jbGFzcyBzdGFyc2hpcCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zaGllbGRzID0gbmV3IHN5c3RlbXMuc2hpZWxkcztcbiAgICAgICAgdGhpcy5odWxsID0gbmV3IHN5c3RlbXMuaHVsbDtcbiAgICAgICAgdGhpcy5lbmdpbmVzID0gbmV3IHN5c3RlbXMuZW5naW5lcztcbiAgICB9XG5cbiAgICBoYWlsKCkge1xuICAgICAgICB1aS5sb2coYFRoaXMgaXMgdGhlIFN0YXJzaGlwICR7dGhpcy5uYW1lfWApO1xuICAgIH1cblxuICAgIHJlcG9ydCgpIHtcbiAgICAgICAgdGhpcy5zaGllbGRzLnJlYWRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5odWxsLnJlYWRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5lbmdpbmVzLnJlYWRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVVJKCkge1xuICAgICAgICB1aS5zZXRTaGllbGRCYXIodGhpcy5zaGllbGRzLmdldFN0YXR1cygpKTtcbiAgICAgICAgdWkuc2V0SHVsbEJhcih0aGlzLmh1bGwuZ2V0U3RhdHVzKCkpO1xuICAgICAgICB1aS5zZXRFbmdpbmVCYXIodGhpcy5lbmdpbmVzLmdldFN0YXR1cygpKTtcblxuICAgIH1cbn1cblxuY2xhc3MgcGxheWVyU2hpcCBleHRlbmRzIHN0YXJzaGlwIHtcblxufVxuXG5cbmV4cG9ydCB7XG4gICAgc3RhcnNoaXAsXG4gICAgcGxheWVyU2hpcFxufTsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIGVuZ2luZXMgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihzdGF0dXMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRW5naW5lIGVmZmljaWVuY3knO1xuICAgIH1cblxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuZ2luZXM7IiwiaW1wb3J0IHN5c3RlbSBmcm9tICcuL19wcm90b3R5cGUnO1xuXG5jbGFzcyBodWxsIGV4dGVuZHMgc3lzdGVte1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoc3RhdHVzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0h1bGwgaW50ZWdyaXR5JztcbiAgICB9XG5cbiAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBodWxsOyIsImltcG9ydCB1aSBmcm9tICdVSS91aSc7XG5cbmNsYXNzIHN5c3RlbXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IDEwMDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1N5c3RlbSBOYW1lJztcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHJlYWRTdGF0dXMoKXtcbiAgICAgICAgdWkubG9nKGAke3RoaXMubmFtZX0gYXQgJHt0aGlzLnN0YXR1c30lIENhcHRhaW5gKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0dXModmFsdWUpe1xuXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdmFsdWU7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN5c3RlbTsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIHNoaWVsZHMgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihzdGF0dXMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnU2hpZWxkcyc7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpZWxkczsiLCJpbXBvcnQgc2hpZWxkcyBmcm9tICcuL19zaGllbGRzJztcbmltcG9ydCBodWxsIGZyb20gJy4vX2h1bGwnO1xuaW1wb3J0IGVuZ2luZXMgZnJvbSAnLi9fZW5naW5lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtzaGllbGRzLCBodWxsLCBlbmdpbmVzfTsiLCJjbGFzcyB1aXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhcihpZCxwZXJjZW50KXtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gc3BhbmApO1xuICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0U2hpZWxkQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignc2hpZWxkcycscGVyY2VudClcbiAgICB9XG4gICAgc3RhdGljIHNldEh1bGxCYXIocGVyY2VudCl7XG4gICAgICAgIHRoaXMuc2V0QmFyKCdodWxsJyxwZXJjZW50KVxuICAgIH1cbiAgICBzdGF0aWMgc2V0RW5naW5lQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignZW5naW5lcycscGVyY2VudClcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9nKGNvbnRlbnQpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJykuaW5uZXJIVE1MICs9IGA8YnI+JHtjb250ZW50fWA7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1aTsiXSwic291cmNlUm9vdCI6IiJ9