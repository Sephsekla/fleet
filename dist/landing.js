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

var myShip = new ship.playerShip('SS Enterprise', 1, 1, 1, 1);

var pc = new person.player("Jean-Luc Picard");

pc.identify();

pc.assign(myShip);

pc.identify();

myShip.hail();
myShip.shields.setStatus(80);
myShip.weapons.setStatus(0);
myShip.report();

var enemyShip = new ship.starship("LXS Destroyer", 1, 1, 2, 4);
enemyShip.hail();
enemyShip.report();
enemyShip.reportSystems();
myShip.attack(enemyShip);

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
        value: function attack(enemyShip) {
            if (this.weapons.getLevel() < 1) {
                _ui2.default.log("No weapons available");
            } else if (this.weapons.getStatus() < 1) {
                _ui2.default.log("Weapons Offline");
            } else {}
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
        key: 'getLevel',
        value: function getLevel() {
            return this.level;
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

            var objDiv = document.getElementById("log");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }]);

    return ui;
}();

exports.default = ui;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24vX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGVyc29uL19wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbi9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9kYjMwIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zdGFyc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fZW5naW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9faHVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnNoaXAvc3lzdGVtcy9fcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL19zaGllbGRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL193ZWFwb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyc2hpcC9zeXN0ZW1zL3N5c3RlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3VpLmpzIl0sIm5hbWVzIjpbInNoaXAiLCJwZXJzb24iLCJteVNoaXAiLCJwYyIsImVuZW15U2hpcCIsInBsYXllciIsIm5wYyIsInVpIiwic3RhcnNoaXAiLCJzIiwiaCIsImUiLCJ3Iiwic3lzdGVtcyIsInBsYXllclNoaXAiLCJlbmdpbmVzIiwic3lzdGVtIiwiaHVsbCIsInZhbHVlIiwic2hpZWxkcyIsIndlYXBvbnMiLCJpZCIsInBlcmNlbnQiLCJlbGVtIiwiZG9jdW1lbnQiLCJjb250ZW50Iiwib2JqRGl2Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Ozs7Ozs7Ozs7Ozs7SUFFTUMsVTs7O0FBRUYsNEJBQWtCO0FBQUE7O0FBQUE7O0FBRWQ7QUFGYztBQUdqQjs7O0VBTGlCSixtQjs7a0JBVVBJLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztrQkFFZSxFQUFDRCxtQkFBRCxTQUFVRixhQUFWLFNBQWdCRixtQkFBaEIsU0FBeUJLLG1CQUF6QixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTFRiLEs7QUFDRixrQkFBYTtBQUFBO0FBRVo7Ozs7K0JBRWFjLEUsRUFBR0MsTyxFQUFRO0FBQ3JCLGdCQUFJQyxPQUFPQyxrQ0FBWCxPQUFXQSxDQUFYO0FBQ0FEO0FBQ0g7OztxQ0FFbUJELE8sRUFBUTtBQUN4QjtBQUNIOzs7bUNBQ2lCQSxPLEVBQVE7QUFDdEI7QUFDSDs7O3FDQUNtQkEsTyxFQUFRO0FBQ3hCO0FBQ0g7OztxQ0FFbUJBLE8sRUFBUTtBQUN4QjtBQUNIOzs7NEJBRVVHLE8sRUFBUTtBQUNmRDs7QUFFQSxnQkFBSUUsU0FBU0Ysd0JBQWIsS0FBYUEsQ0FBYjtBQUNBRSwrQkFBbUJBLE9BQW5CQTtBQUVIOzs7Ozs7a0JBS1VuQixFIiwiZmlsZSI6ImxhbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgKiBhcyBzaGlwIGZyb20gXCIuL3N0YXJzaGlwL3N0YXJzaGlwXCI7XG5cbmltcG9ydCAqIGFzIHBlcnNvbiBmcm9tIFwiLi9wZXJzb24vcGVyc29uXCI7XG5cbmxldCBteVNoaXAgPSBuZXcgc2hpcC5wbGF5ZXJTaGlwKCdTUyBFbnRlcnByaXNlJywxLDEsMSwxKTtcblxubGV0IHBjID0gbmV3IHBlcnNvbi5wbGF5ZXIoXCJKZWFuLUx1YyBQaWNhcmRcIik7XG5cbnBjLmlkZW50aWZ5KCk7XG5cbnBjLmFzc2lnbihteVNoaXApO1xuXG5wYy5pZGVudGlmeSgpO1xuXG5teVNoaXAuaGFpbCgpO1xubXlTaGlwLnNoaWVsZHMuc2V0U3RhdHVzKDgwKTtcbm15U2hpcC53ZWFwb25zLnNldFN0YXR1cygwKTtcbm15U2hpcC5yZXBvcnQoKTtcblxubGV0IGVuZW15U2hpcCA9IG5ldyBzaGlwLnN0YXJzaGlwKFwiTFhTIERlc3Ryb3llclwiLDEsMSwyLDQpO1xuZW5lbXlTaGlwLmhhaWwoKTtcbmVuZW15U2hpcC5yZXBvcnQoKTtcbmVuZW15U2hpcC5yZXBvcnRTeXN0ZW1zKCk7XG5teVNoaXAuYXR0YWNrKGVuZW15U2hpcCk7IiwiaW1wb3J0IG5wYyBmcm9tICcuL19wcm90b3R5cGUnO1xuXG5jbGFzcyBwbGF5ZXIgZXh0ZW5kcyBucGN7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLnJhbmsgPSBcIkNhcHRhaW5cIlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCB1aSBmcm9tICdVSS91aSc7XG5cbmNsYXNzIG5wY3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lLHJhbmspe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnJhbmsgPSByYW5rO1xuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSAnLSBjdXJyZW50bHkgdW5hc3NpZ25lZCc7XG4gICAgfVxuXG4gICAgaWRlbnRpZnkoKXtcbiAgICAgICAgdWkubG9nKGAke3RoaXMucmFua30gJHt0aGlzLm5hbWV9ICR7dGhpcy5hc3NpZ25tZW50fWApXG4gICAgfVxuXG4gICAgYXNzaWduKHNoaXApe1xuICAgICAgICB0aGlzLnNoaXAgPSBzaGlwO1xuXG4gICAgICAgIHRoaXMuYXNzaWdubWVudCA9IGBvZiB0aGUgU3RhcnNoaXAgJHt0aGlzLnNoaXAubmFtZX1gXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBucGM7IiwiaW1wb3J0IG5wYyBmcm9tICcuL19wcm90b3R5cGUnO1xuaW1wb3J0IHBsYXllciBmcm9tICcuL19wbGF5ZXInO1xuXG5leHBvcnQge1xuICAgIG5wYyxcbiAgICBwbGF5ZXJcbn07IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgc3lzdGVtcyBmcm9tICcuL3N5c3RlbXMvc3lzdGVtcyc7XG5pbXBvcnQgdWkgZnJvbSAnVUkvdWknO1xuXG5cbmNsYXNzIHN0YXJzaGlwIHtcblxuXG4gICAgY29uc3RydWN0b3IobmFtZSxzID0gMCxoID0gMSxlID0gMSwgdyA9IDApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zaGllbGRzID0gbmV3IHN5c3RlbXMuc2hpZWxkcyhzKTtcbiAgICAgICAgdGhpcy5odWxsID0gbmV3IHN5c3RlbXMuaHVsbChoKTtcbiAgICAgICAgdGhpcy5lbmdpbmVzID0gbmV3IHN5c3RlbXMuZW5naW5lcyhlKTtcbiAgICAgICAgdGhpcy53ZWFwb25zID0gbmV3IHN5c3RlbXMud2VhcG9ucyh3KTtcbiAgICB9XG5cbiAgICBoYWlsKCkge1xuICAgICAgICB1aS5sb2coYFRoaXMgaXMgdGhlIFN0YXJzaGlwICR7dGhpcy5uYW1lfWApO1xuICAgIH1cblxuICAgIHJlcG9ydCgpe1xuICAgICAgICB1aS5sb2coXCJPdXIgc2NhbnMgY2Fubm90IHBlbmV0cmF0ZSB0aGVpciBzaGllbGRzXCIpO1xuICAgIH1cblxuICAgIHJlcG9ydFN5c3RlbXMoKXtcbiAgICAgICAgdWkubG9nKGAtLS0tLS1TeXN0ZW1zIFJlcG9ydC0tLS0tLWApXG4gICAgICAgIHRoaXMuc2hpZWxkcy5yZWFkTGV2ZWwoKTtcbiAgICAgICAgdGhpcy5odWxsLnJlYWRMZXZlbCgpO1xuICAgICAgICB0aGlzLmVuZ2luZXMucmVhZExldmVsKCk7XG4gICAgICAgIHRoaXMud2VhcG9ucy5yZWFkTGV2ZWwoKTtcbiAgICAgICAgdWkubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApO1xuICAgIH1cblxuICAgIGF0dGFjayhlbmVteVNoaXApe1xuICAgICAgICBpZih0aGlzLndlYXBvbnMuZ2V0TGV2ZWwoKSA8IDEpe1xuICAgICAgICAgICAgdWkubG9nKFwiTm8gd2VhcG9ucyBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLndlYXBvbnMuZ2V0U3RhdHVzKCkgPCAxKXtcbiAgICAgICAgICAgIHVpLmxvZyhcIldlYXBvbnMgT2ZmbGluZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn1cblxuY2xhc3MgcGxheWVyU2hpcCBleHRlbmRzIHN0YXJzaGlwIHtcblxuICAgIHVwZGF0ZVVJKCkge1xuICAgICAgICB1aS5zZXRTaGllbGRCYXIodGhpcy5zaGllbGRzLmdldFN0YXR1cygpKTtcbiAgICAgICAgdWkuc2V0SHVsbEJhcih0aGlzLmh1bGwuZ2V0U3RhdHVzKCkpO1xuICAgICAgICB1aS5zZXRFbmdpbmVCYXIodGhpcy5lbmdpbmVzLmdldFN0YXR1cygpKTtcbiAgICAgICAgdWkuc2V0V2VhcG9uQmFyKHRoaXMud2VhcG9ucy5nZXRTdGF0dXMoKSk7XG5cbiAgICB9XG5cbiAgICByZXBvcnQoKSB7XG4gICAgICAgIHVpLmxvZyhgLS0tLS0tU3lzdGVtcyBTdGF0dXMtLS0tLS1gKVxuICAgICAgICB0aGlzLnNoaWVsZHMucmVhZFN0YXR1cygpO1xuICAgICAgICB0aGlzLmh1bGwucmVhZFN0YXR1cygpO1xuICAgICAgICB0aGlzLmVuZ2luZXMucmVhZFN0YXR1cygpO1xuICAgICAgICB0aGlzLndlYXBvbnMucmVhZFN0YXR1cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHVpLmxvZyhgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICBzdGFyc2hpcCxcbiAgICBwbGF5ZXJTaGlwXG59OyIsImltcG9ydCBzeXN0ZW0gZnJvbSAnLi9fcHJvdG90eXBlJztcblxuY2xhc3MgZW5naW5lcyBleHRlbmRzIHN5c3RlbXtcblxuICAgIGNvbnN0cnVjdG9yKGxldmVsKXtcbiAgICAgICAgc3VwZXIobGV2ZWwpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRW5naW5lIGVmZmljaWVuY3knO1xuICAgIH1cblxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuZ2luZXM7IiwiaW1wb3J0IHN5c3RlbSBmcm9tICcuL19wcm90b3R5cGUnO1xuXG5jbGFzcyBodWxsIGV4dGVuZHMgc3lzdGVte1xuXG4gICAgY29uc3RydWN0b3IobGV2ZWwpe1xuICAgICAgICBzdXBlcihsZXZlbCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdIdWxsIGludGVncml0eSc7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHVsbDsiLCJpbXBvcnQgdWkgZnJvbSAnVUkvdWknO1xuXG5jbGFzcyBzeXN0ZW17XG4gICAgY29uc3RydWN0b3IobGV2ZWwpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IDEwMDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1N5c3RlbSBOYW1lJztcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIH1cblxuICAgIGdldFN0YXR1cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gICAgfVxuXG4gICAgcmVhZFN0YXR1cygpe1xuICAgICAgICB1aS5sb2coYCR7dGhpcy5uYW1lfSBhdCAke3RoaXMuc3RhdHVzfSUgQ2FwdGFpbmApO1xuICAgIH1cblxuICAgIHNldFN0YXR1cyh2YWx1ZSl7XG5cbiAgICAgICAgdGhpcy5zdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRMZXZlbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbDtcbiAgICB9XG5cbiAgICByZWFkTGV2ZWwoKXtcbiAgICAgICAgdWkubG9nKGAke3RoaXMubmFtZX0gbGV2ZWwgJHt0aGlzLmxldmVsfSBDYXB0YWluYCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN5c3RlbTsiLCJpbXBvcnQgc3lzdGVtIGZyb20gJy4vX3Byb3RvdHlwZSc7XG5cbmNsYXNzIHNoaWVsZHMgZXh0ZW5kcyBzeXN0ZW17XG5cbiAgICBjb25zdHJ1Y3RvcihsZXZlbCl7XG4gICAgICAgIHN1cGVyKGxldmVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1NoaWVsZHMnO1xuICAgIH1cblxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaWVsZHM7IiwiaW1wb3J0IHN5c3RlbSBmcm9tICcuL19wcm90b3R5cGUnO1xuXG5jbGFzcyB3ZWFwb25zIGV4dGVuZHMgc3lzdGVte1xuXG4gICAgY29uc3RydWN0b3IobGV2ZWwpe1xuICAgICAgICBzdXBlcihsZXZlbCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXZWFwb24gcG93ZXInO1xuICAgIH1cblxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXBvbnM7IiwiaW1wb3J0IHNoaWVsZHMgZnJvbSAnLi9fc2hpZWxkcyc7XG5pbXBvcnQgaHVsbCBmcm9tICcuL19odWxsJztcbmltcG9ydCBlbmdpbmVzIGZyb20gJy4vX2VuZ2luZXMnO1xuaW1wb3J0IHdlYXBvbnMgZnJvbSAnLi9fd2VhcG9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtzaGllbGRzLCBodWxsLCBlbmdpbmVzLCB3ZWFwb25zfTsiLCJjbGFzcyB1aXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhcihpZCxwZXJjZW50KXtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gc3BhbmApO1xuICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0U2hpZWxkQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignc2hpZWxkcycscGVyY2VudClcbiAgICB9XG4gICAgc3RhdGljIHNldEh1bGxCYXIocGVyY2VudCl7XG4gICAgICAgIHRoaXMuc2V0QmFyKCdodWxsJyxwZXJjZW50KVxuICAgIH1cbiAgICBzdGF0aWMgc2V0RW5naW5lQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignZW5naW5lcycscGVyY2VudClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0V2VhcG9uQmFyKHBlcmNlbnQpe1xuICAgICAgICB0aGlzLnNldEJhcignd2VhcG9ucycscGVyY2VudCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZyhjb250ZW50KXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZycpLmlubmVySFRNTCArPSBgPGJyPiR7Y29udGVudH1gO1xuXG4gICAgICAgIHZhciBvYmpEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKTtcbiAgICAgICAgb2JqRGl2LnNjcm9sbFRvcCA9IG9iakRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1aTsiXSwic291cmNlUm9vdCI6IiJ9