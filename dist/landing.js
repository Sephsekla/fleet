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

var enemyShip = new ship.starship("LXS Destroyer", 1, 1, 2, 4);
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
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var w = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        _classCallCheck(this, starship);

        this.name = name;
        this.shields = new _systems2.default.shields(s);
        this.hull = new _systems2.default.hull(h);
        this.engines = new _systems2.default.engines(e);
        this.weapons = new _systems2.default.weapons(w);
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
            _ui2.default.log('------Systems Report------');
            this.shields.readLevel();
            this.hull.readLevel();
            this.engines.readLevel();
            this.weapons.readLevel();
            _ui2.default.log('--------------------------');
        }
    }, {
        key: 'attack',
        value: function attack(enemyShip) {}
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
            _ui2.default.setWeaponBar(this.weapons.getStatus());
        }
    }, {
        key: 'report',
        value: function report() {
            _ui2.default.log('------Systems Status------');
            this.shields.readStatus();
            this.hull.readStatus();
            this.engines.readStatus();
            this.weapons.readStatus();
            this.updateUI();
            _ui2.default.log('--------------------------');
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

/***/ "./src/starship/systems/_weapons.js":
/*!******************************************!*\
  !*** ./src/starship/systems/_weapons.js ***!
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

var weapons = function (_system) {
    _inherits(weapons, _system);

    function weapons(level) {
        _classCallCheck(this, weapons);

        var _this = _possibleConstructorReturn(this, (weapons.__proto__ || Object.getPrototypeOf(weapons)).call(this, level));

        _this.name = 'Weapon power';
        return _this;
    }

    return weapons;
}(_prototype2.default);

exports.default = weapons;

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

var _weapons = __webpack_require__(/*! ./_weapons */ "./src/starship/systems/_weapons.js");

var _weapons2 = _interopRequireDefault(_weapons);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = { shields: _shields2.default, hull: _hull2.default, engines: _engines2.default, weapons: _weapons2.default };

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
        key: 'setWeaponBar',
        value: function setWeaponBar(percent) {
            this.setBar('weapons', percent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24vX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGVyc29uL19wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbi9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9kYjMwIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zdGFyc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fZW5naW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9faHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL19zaGllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL193ZWFwb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL3N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3VpLmpzIl0sIm5hbWVzIjpbInNoaXAiLCJwZXJzb24iLCJteVNoaXAiLCJwYyIsImVuZW15U2hpcCIsInBsYXllciIsIm5wYyIsInVpIiwic3RhcnNoaXAiLCJzIiwiaCIsImUiLCJ3Iiwic3lzdGVtcyIsInBsYXllclNoaXAiLCJlbmdpbmVzIiwic3lzdGVtIiwiaHVsbCIsInZhbHVlIiwic2hpZWxkcyIsIndlYXBvbnMiLCJpZCIsInBlcmNlbnQiLCJlbGVtIiwiZG9jdW1lbnQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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Ozs7Ozs7a0JBRWUsRUFBQ0QsbUJBQUQsU0FBVUYsYUFBVixTQUFnQkYsbUJBQWhCLFNBQXlCSyxtQkFBekIsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0xUYixLO0FBQ0Ysa0JBQWE7QUFBQTtBQUVaOzs7OytCQUVhYyxFLEVBQUdDLE8sRUFBUTtBQUNyQixnQkFBSUMsT0FBT0Msa0NBQVgsT0FBV0EsQ0FBWDtBQUNBRDtBQUNIOzs7cUNBRW1CRCxPLEVBQVE7QUFDeEI7QUFDSDs7O21DQUNpQkEsTyxFQUFRO0FBQ3RCO0FBQ0g7OztxQ0FDbUJBLE8sRUFBUTtBQUN4QjtBQUNIOzs7cUNBRW1CQSxPLEVBQVE7QUFDeEI7QUFDSDs7OzRCQUVVRyxPLEVBQVE7QUFDZkQ7QUFFSDs7Ozs7O2tCQUtVakIsRSIsImZpbGUiOiJsYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJztcblxuaW1wb3J0ICogYXMgc2hpcCBmcm9tIFwiLi9zdGFyc2hpcC9zdGFyc2hpcFwiO1xuXG5pbXBvcnQgKiBhcyBwZXJzb24gZnJvbSBcIi4vcGVyc29uL3BlcnNvblwiO1xuXG5sZXQgbXlTaGlwID0gbmV3IHNoaXAucGxheWVyU2hpcCgnU1MgRW50ZXJwcmlzZScpO1xuXG5sZXQgcGMgPSBuZXcgcGVyc29uLnBsYXllcihcIkplYW4tTHVjIFBpY2FyZFwiKTtcblxucGMuaWRlbnRpZnkoKTtcblxucGMuYXNzaWduKG15U2hpcCk7XG5cbnBjLmlkZW50aWZ5KCk7XG5cbm15U2hpcC5oYWlsKCk7XG5teVNoaXAuc2hpZWxkcy5zZXRTdGF0dXMoODApO1xubXlTaGlwLnJlcG9ydCgpO1xuXG5sZXQgZW5lbXlTaGlwID0gbmV3IHNoaXAuc3RhcnNoaXAoXCJMWFMgRGVzdHJveWVyXCIsMSwxLDIsNCk7XG5lbmVteVNoaXAuaGFpbCgpO1xuZW5lbXlTaGlwLnJlcG9ydCgpO1xuZW5lbXlTaGlwLnJlcG9ydFN5c3RlbXMoKTsiLCJpbXBvcnQgbnBjIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIHBsYXllciBleHRlbmRzIG5wY3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIHRoaXMucmFuayA9IFwiQ2FwdGFpblwiXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7IiwiaW1wb3J0IHVpIGZyb20gJ1VJL3VpJztcblxuY2xhc3MgbnBje1xuICAgIGNvbnN0cnVjdG9yKG5hbWUscmFuayl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucmFuayA9IHJhbms7XG4gICAgICAgIHRoaXMuYXNzaWdubWVudCA9ICctIGN1cnJlbnRseSB1bmFzc2lnbmVkJztcbiAgICB9XG5cbiAgICBpZGVudGlmeSgpe1xuICAgICAgICB1aS5sb2coYCR7dGhpcy5yYW5rfSAke3RoaXMubmFtZX0gJHt0aGlzLmFzc2lnbm1lbnR9YClcbiAgICB9XG5cbiAgICBhc3NpZ24oc2hpcCl7XG4gICAgICAgIHRoaXMuc2hpcCA9IHNoaXA7XG5cbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gYG9mIHRoZSBTdGFyc2hpcCAke3RoaXMuc2hpcC5uYW1lfWBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5wYzsiLCJpbXBvcnQgbnBjIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5pbXBvcnQgcGxheWVyIGZyb20gJy4vX3BsYXllcic7XG5cbmV4cG9ydCB7XG4gICAgbnBjLFxuICAgIHBsYXllclxufTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBzeXN0ZW1zIGZyb20gJy4vc3lzdGVtcy9zeXN0ZW1zJztcbmltcG9ydCB1aSBmcm9tICdVSS91aSc7XG5cblxuY2xhc3Mgc3RhcnNoaXAge1xuXG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLHMgPSAwLGggPSAxLGUgPSAxLCB3ID0gMCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNoaWVsZHMgPSBuZXcgc3lzdGVtcy5zaGllbGRzKHMpO1xuICAgICAgICB0aGlzLmh1bGwgPSBuZXcgc3lzdGVtcy5odWxsKGgpO1xuICAgICAgICB0aGlzLmVuZ2luZXMgPSBuZXcgc3lzdGVtcy5lbmdpbmVzKGUpO1xuICAgICAgICB0aGlzLndlYXBvbnMgPSBuZXcgc3lzdGVtcy53ZWFwb25zKHcpO1xuICAgIH1cblxuICAgIGhhaWwoKSB7XG4gICAgICAgIHVpLmxvZyhgVGhpcyBpcyB0aGUgU3RhcnNoaXAgJHt0aGlzLm5hbWV9YCk7XG4gICAgfVxuXG4gICAgcmVwb3J0KCl7XG4gICAgICAgIHVpLmxvZyhcIk91ciBzY2FucyBjYW5ub3QgcGVuZXRyYXRlIHRoZWlyIHNoaWVsZHNcIik7XG4gICAgfVxuXG4gICAgcmVwb3J0U3lzdGVtcygpe1xuICAgICAgICB1aS5sb2coYC0tLS0tLVN5c3RlbXMgUmVwb3J0LS0tLS0tYClcbiAgICAgICAgdGhpcy5zaGllbGRzLnJlYWRMZXZlbCgpO1xuICAgICAgICB0aGlzLmh1bGwucmVhZExldmVsKCk7XG4gICAgICAgIHRoaXMuZW5naW5lcy5yZWFkTGV2ZWwoKTtcbiAgICAgICAgdGhpcy53ZWFwb25zLnJlYWRMZXZlbCgpO1xuICAgICAgICB1aS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XG4gICAgfVxuXG4gICAgYXR0YWNrKGVuZW15U2hpcCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxufVxuXG5jbGFzcyBwbGF5ZXJTaGlwIGV4dGVuZHMgc3RhcnNoaXAge1xuXG4gICAgdXBkYXRlVUkoKSB7XG4gICAgICAgIHVpLnNldFNoaWVsZEJhcih0aGlzLnNoaWVsZHMuZ2V0U3RhdHVzKCkpO1xuICAgICAgICB1aS5zZXRIdWxsQmFyKHRoaXMuaHVsbC5nZXRTdGF0dXMoKSk7XG4gICAgICAgIHVpLnNldEVuZ2luZUJhcih0aGlzLmVuZ2luZXMuZ2V0U3RhdHVzKCkpO1xuICAgICAgICB1aS5zZXRXZWFwb25CYXIodGhpcy53ZWFwb25zLmdldFN0YXR1cygpKTtcblxuICAgIH1cblxuICAgIHJlcG9ydCgpIHtcbiAgICAgICAgdWkubG9nKGAtLS0tLS1TeXN0ZW1zIFN0YXR1cy0tLS0tLWApXG4gICAgICAgIHRoaXMuc2hpZWxkcy5yZWFkU3RhdHVzKCk7XG4gICAgICAgIHRoaXMuaHVsbC5yZWFkU3RhdHVzKCk7XG4gICAgICAgIHRoaXMuZW5naW5lcy5yZWFkU3RhdHVzKCk7XG4gICAgICAgIHRoaXMud2VhcG9ucy5yZWFkU3RhdHVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgdWkubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApO1xuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIHN0YXJzaGlwLFxuICAgIHBsYXllclNoaXBcbn07IiwiaW1wb3J0IHN5c3RlbSBmcm9tICcuL19wcm90b3R5cGUnO1xuXG5jbGFzcyBlbmdpbmVzIGV4dGVuZHMgc3lzdGVte1xuXG4gICAgY29uc3RydWN0b3IobGV2ZWwpe1xuICAgICAgICBzdXBlcihsZXZlbCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdFbmdpbmUgZWZmaWNpZW5jeSc7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5naW5lczsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIGh1bGwgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3RvcihsZXZlbCl7XG4gICAgICAgIHN1cGVyKGxldmVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0h1bGwgaW50ZWdyaXR5JztcbiAgICB9XG5cbiAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBodWxsOyIsImltcG9ydCB1aSBmcm9tICdVSS91aSc7XG5cbmNsYXNzIHN5c3RlbXtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbCl7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gMTAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnU3lzdGVtIE5hbWUnO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgICB9XG5cbiAgICByZWFkU3RhdHVzKCl7XG4gICAgICAgIHVpLmxvZyhgJHt0aGlzLm5hbWV9IGF0ICR7dGhpcy5zdGF0dXN9JSBDYXB0YWluYCk7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzKHZhbHVlKXtcblxuICAgICAgICB0aGlzLnN0YXR1cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlYWRMZXZlbCgpe1xuICAgICAgICB1aS5sb2coYCR7dGhpcy5uYW1lfSBsZXZlbCAke3RoaXMubGV2ZWx9IENhcHRhaW5gKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3lzdGVtOyIsImltcG9ydCBzeXN0ZW0gZnJvbSAnLi9fcHJvdG90eXBlJztcblxuY2xhc3Mgc2hpZWxkcyBleHRlbmRzIHN5c3RlbXtcblxuICAgIGNvbnN0cnVjdG9yKGxldmVsKXtcbiAgICAgICAgc3VwZXIobGV2ZWwpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnU2hpZWxkcyc7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpZWxkczsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIHdlYXBvbnMgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3RvcihsZXZlbCl7XG4gICAgICAgIHN1cGVyKGxldmVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dlYXBvbiBwb3dlcic7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2VhcG9uczsiLCJpbXBvcnQgc2hpZWxkcyBmcm9tICcuL19zaGllbGRzJztcbmltcG9ydCBodWxsIGZyb20gJy4vX2h1bGwnO1xuaW1wb3J0IGVuZ2luZXMgZnJvbSAnLi9fZW5naW5lcyc7XG5pbXBvcnQgd2VhcG9ucyBmcm9tICcuL193ZWFwb25zJztcblxuZXhwb3J0IGRlZmF1bHQge3NoaWVsZHMsIGh1bGwsIGVuZ2luZXMsIHdlYXBvbnN9OyIsImNsYXNzIHVpe1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0QmFyKGlkLHBlcmNlbnQpe1xuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfSBzcGFuYCk7XG4gICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRTaGllbGRCYXIocGVyY2VudCl7XG4gICAgICAgIHRoaXMuc2V0QmFyKCdzaGllbGRzJyxwZXJjZW50KVxuICAgIH1cbiAgICBzdGF0aWMgc2V0SHVsbEJhcihwZXJjZW50KXtcbiAgICAgICAgdGhpcy5zZXRCYXIoJ2h1bGwnLHBlcmNlbnQpXG4gICAgfVxuICAgIHN0YXRpYyBzZXRFbmdpbmVCYXIocGVyY2VudCl7XG4gICAgICAgIHRoaXMuc2V0QmFyKCdlbmdpbmVzJyxwZXJjZW50KVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRXZWFwb25CYXIocGVyY2VudCl7XG4gICAgICAgIHRoaXMuc2V0QmFyKCd3ZWFwb25zJyxwZXJjZW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9nKGNvbnRlbnQpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJykuaW5uZXJIVE1MICs9IGA8YnI+JHtjb250ZW50fWA7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1aTsiXSwic291cmNlUm9vdCI6IiJ9