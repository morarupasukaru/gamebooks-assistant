webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
	 *
	 * ESTA WebJS: Angular-Modul der Hauptkomponente
	 *
	 * @author u220374 (Reto Lehmann)
	 * @version: 0.0.1
	 * @since 23.10.2015, 2015.
	 */
	
	// Vendor-Imports
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _angularResource = __webpack_require__(4);
	
	var _angularResource2 = _interopRequireDefault(_angularResource);
	
	var _angularCookies = __webpack_require__(6);
	
	var _angularCookies2 = _interopRequireDefault(_angularCookies);
	
	var _angularTranslate = __webpack_require__(8);
	
	var _angularTranslate2 = _interopRequireDefault(_angularTranslate);
	
	var _angularTranslateLoaderStaticFiles = __webpack_require__(9);
	
	var _angularTranslateLoaderStaticFiles2 = _interopRequireDefault(_angularTranslateLoaderStaticFiles);
	
	var _angularUiBootstrap = __webpack_require__(10);
	
	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);
	
	// Interne Modul-Imports
	
	var _componentsComponents = __webpack_require__(12);
	
	var _componentsComponents2 = _interopRequireDefault(_componentsComponents);
	
	var _appComponent = __webpack_require__(115);
	
	var _appComponent2 = _interopRequireDefault(_appComponent);
	
	// Language file import
	
	var _languagesLangEnJson = __webpack_require__(119);
	
	var _languagesLangEnJson2 = _interopRequireDefault(_languagesLangEnJson);
	
	var _languagesLangFrJson = __webpack_require__(120);
	
	var _languagesLangFrJson2 = _interopRequireDefault(_languagesLangFrJson);
	
	_angular2['default'].module('app', [_angularUiRouter2['default'], _angularTranslate2['default'], _angularTranslateLoaderStaticFiles2['default'], _angularCookies2['default'], _angularResource2['default'], _angularUiBootstrap2['default'], _componentsComponents2['default'].name]).config( /*@ngInject*/function ($translateProvider, $httpProvider) {
	
	    // Translation settings
	    $translateProvider.translations('en', _languagesLangEnJson2['default']);
	    $translateProvider.translations('fr', _languagesLangFrJson2['default']);
	    $translateProvider.preferredLanguage('en').useSanitizeValueStrategy('escape');
	}).constant('config', {})
	// Die App als Direktive exportieren
	.directive('app', _appComponent2['default']);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	module.exports = 'ngCookies';


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.8
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';
	
	/**
	 * @ngdoc module
	 * @name ngCookies
	 * @description
	 *
	 * # ngCookies
	 *
	 * The `ngCookies` module provides a convenient wrapper for reading and writing browser cookies.
	 *
	 *
	 * <div doc-module-components="ngCookies"></div>
	 *
	 * See {@link ngCookies.$cookies `$cookies`} for usage.
	 */
	
	
	angular.module('ngCookies', ['ng']).
	  /**
	   * @ngdoc provider
	   * @name $cookiesProvider
	   * @description
	   * Use `$cookiesProvider` to change the default behavior of the {@link ngCookies.$cookies $cookies} service.
	   * */
	   provider('$cookies', [function $CookiesProvider() {
	    /**
	     * @ngdoc property
	     * @name $cookiesProvider#defaults
	     * @description
	     *
	     * Object containing default options to pass when setting cookies.
	     *
	     * The object may have following properties:
	     *
	     * - **path** - `{string}` - The cookie will be available only for this path and its
	     *   sub-paths. By default, this is the URL that appears in your `<base>` tag.
	     * - **domain** - `{string}` - The cookie will be available only for this domain and
	     *   its sub-domains. For security reasons the user agent will not accept the cookie
	     *   if the current domain is not a sub-domain of this domain or equal to it.
	     * - **expires** - `{string|Date}` - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT"
	     *   or a Date object indicating the exact date/time this cookie will expire.
	     * - **secure** - `{boolean}` - If `true`, then the cookie will only be available through a
	     *   secured connection.
	     *
	     * Note: By default, the address that appears in your `<base>` tag will be used as the path.
	     * This is important so that cookies will be visible for all routes when html5mode is enabled.
	     *
	     **/
	    var defaults = this.defaults = {};
	
	    function calcOptions(options) {
	      return options ? angular.extend({}, defaults, options) : defaults;
	    }
	
	    /**
	     * @ngdoc service
	     * @name $cookies
	     *
	     * @description
	     * Provides read/write access to browser's cookies.
	     *
	     * <div class="alert alert-info">
	     * Up until Angular 1.3, `$cookies` exposed properties that represented the
	     * current browser cookie values. In version 1.4, this behavior has changed, and
	     * `$cookies` now provides a standard api of getters, setters etc.
	     * </div>
	     *
	     * Requires the {@link ngCookies `ngCookies`} module to be installed.
	     *
	     * @example
	     *
	     * ```js
	     * angular.module('cookiesExample', ['ngCookies'])
	     *   .controller('ExampleController', ['$cookies', function($cookies) {
	     *     // Retrieving a cookie
	     *     var favoriteCookie = $cookies.get('myFavorite');
	     *     // Setting a cookie
	     *     $cookies.put('myFavorite', 'oatmeal');
	     *   }]);
	     * ```
	     */
	    this.$get = ['$$cookieReader', '$$cookieWriter', function($$cookieReader, $$cookieWriter) {
	      return {
	        /**
	         * @ngdoc method
	         * @name $cookies#get
	         *
	         * @description
	         * Returns the value of given cookie key
	         *
	         * @param {string} key Id to use for lookup.
	         * @returns {string} Raw cookie value.
	         */
	        get: function(key) {
	          return $$cookieReader()[key];
	        },
	
	        /**
	         * @ngdoc method
	         * @name $cookies#getObject
	         *
	         * @description
	         * Returns the deserialized value of given cookie key
	         *
	         * @param {string} key Id to use for lookup.
	         * @returns {Object} Deserialized cookie value.
	         */
	        getObject: function(key) {
	          var value = this.get(key);
	          return value ? angular.fromJson(value) : value;
	        },
	
	        /**
	         * @ngdoc method
	         * @name $cookies#getAll
	         *
	         * @description
	         * Returns a key value object with all the cookies
	         *
	         * @returns {Object} All cookies
	         */
	        getAll: function() {
	          return $$cookieReader();
	        },
	
	        /**
	         * @ngdoc method
	         * @name $cookies#put
	         *
	         * @description
	         * Sets a value for given cookie key
	         *
	         * @param {string} key Id for the `value`.
	         * @param {string} value Raw value to be stored.
	         * @param {Object=} options Options object.
	         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
	         */
	        put: function(key, value, options) {
	          $$cookieWriter(key, value, calcOptions(options));
	        },
	
	        /**
	         * @ngdoc method
	         * @name $cookies#putObject
	         *
	         * @description
	         * Serializes and sets a value for given cookie key
	         *
	         * @param {string} key Id for the `value`.
	         * @param {Object} value Value to be stored.
	         * @param {Object=} options Options object.
	         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
	         */
	        putObject: function(key, value, options) {
	          this.put(key, angular.toJson(value), options);
	        },
	
	        /**
	         * @ngdoc method
	         * @name $cookies#remove
	         *
	         * @description
	         * Remove given cookie
	         *
	         * @param {string} key Id of the key-value pair to delete.
	         * @param {Object=} options Options object.
	         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
	         */
	        remove: function(key, options) {
	          $$cookieWriter(key, undefined, calcOptions(options));
	        }
	      };
	    }];
	  }]);
	
	angular.module('ngCookies').
	/**
	 * @ngdoc service
	 * @name $cookieStore
	 * @deprecated
	 * @requires $cookies
	 *
	 * @description
	 * Provides a key-value (string-object) storage, that is backed by session cookies.
	 * Objects put or retrieved from this storage are automatically serialized or
	 * deserialized by angular's toJson/fromJson.
	 *
	 * Requires the {@link ngCookies `ngCookies`} module to be installed.
	 *
	 * <div class="alert alert-danger">
	 * **Note:** The $cookieStore service is **deprecated**.
	 * Please use the {@link ngCookies.$cookies `$cookies`} service instead.
	 * </div>
	 *
	 * @example
	 *
	 * ```js
	 * angular.module('cookieStoreExample', ['ngCookies'])
	 *   .controller('ExampleController', ['$cookieStore', function($cookieStore) {
	 *     // Put cookie
	 *     $cookieStore.put('myFavorite','oatmeal');
	 *     // Get cookie
	 *     var favoriteCookie = $cookieStore.get('myFavorite');
	 *     // Removing a cookie
	 *     $cookieStore.remove('myFavorite');
	 *   }]);
	 * ```
	 */
	 factory('$cookieStore', ['$cookies', function($cookies) {
	
	    return {
	      /**
	       * @ngdoc method
	       * @name $cookieStore#get
	       *
	       * @description
	       * Returns the value of given cookie key
	       *
	       * @param {string} key Id to use for lookup.
	       * @returns {Object} Deserialized cookie value, undefined if the cookie does not exist.
	       */
	      get: function(key) {
	        return $cookies.getObject(key);
	      },
	
	      /**
	       * @ngdoc method
	       * @name $cookieStore#put
	       *
	       * @description
	       * Sets a value for given cookie key
	       *
	       * @param {string} key Id for the `value`.
	       * @param {Object} value Value to be stored.
	       */
	      put: function(key, value) {
	        $cookies.putObject(key, value);
	      },
	
	      /**
	       * @ngdoc method
	       * @name $cookieStore#remove
	       *
	       * @description
	       * Remove given cookie
	       *
	       * @param {string} key Id of the key-value pair to delete.
	       */
	      remove: function(key) {
	        $cookies.remove(key);
	      }
	    };
	
	  }]);
	
	/**
	 * @name $$cookieWriter
	 * @requires $document
	 *
	 * @description
	 * This is a private service for writing cookies
	 *
	 * @param {string} name Cookie name
	 * @param {string=} value Cookie value (if undefined, cookie will be deleted)
	 * @param {Object=} options Object with options that need to be stored for the cookie.
	 */
	function $$CookieWriter($document, $log, $browser) {
	  var cookiePath = $browser.baseHref();
	  var rawDocument = $document[0];
	
	  function buildCookieString(name, value, options) {
	    var path, expires;
	    options = options || {};
	    expires = options.expires;
	    path = angular.isDefined(options.path) ? options.path : cookiePath;
	    if (angular.isUndefined(value)) {
	      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
	      value = '';
	    }
	    if (angular.isString(expires)) {
	      expires = new Date(expires);
	    }
	
	    var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	    str += path ? ';path=' + path : '';
	    str += options.domain ? ';domain=' + options.domain : '';
	    str += expires ? ';expires=' + expires.toUTCString() : '';
	    str += options.secure ? ';secure' : '';
	
	    // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
	    // - 300 cookies
	    // - 20 cookies per unique domain
	    // - 4096 bytes per cookie
	    var cookieLength = str.length + 1;
	    if (cookieLength > 4096) {
	      $log.warn("Cookie '" + name +
	        "' possibly not set or overflowed because it was too large (" +
	        cookieLength + " > 4096 bytes)!");
	    }
	
	    return str;
	  }
	
	  return function(name, value, options) {
	    rawDocument.cookie = buildCookieString(name, value, options);
	  };
	}
	
	$$CookieWriter.$inject = ['$document', '$log', '$browser'];
	
	angular.module('ngCookies').provider('$$cookieWriter', function $$CookieWriterProvider() {
	  this.$get = $$CookieWriter;
	});
	
	
	})(window, window.angular);


/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
	 *
	 * ESTA WebJS: Angular-Modul der Komponenten
	 * - Hier werden alle Komponenten als einheitliches Modul exportiert
	 *
	 * @author u220374 (Reto Lehmann)
	 * @version: 0.0.1
	 * @since 04.12.2015, 2015.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _guiGui = __webpack_require__(13);
	
	var _guiGui2 = _interopRequireDefault(_guiGui);
	
	var _servicesServices = __webpack_require__(95);
	
	var _servicesServices2 = _interopRequireDefault(_servicesServices);
	
	var _constantsConstants = __webpack_require__(114);
	
	var _constantsConstants2 = _interopRequireDefault(_constantsConstants);
	
	var componentModule = _angular2['default'].module('app.components', [_constantsConstants2['default'].name, _servicesServices2['default'].name, _guiGui2['default'].name]);
	
	exports['default'] = componentModule;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _componentsComponents = __webpack_require__(14);
	
	var _componentsComponents2 = _interopRequireDefault(_componentsComponents);
	
	var _screensScreens = __webpack_require__(60);
	
	var _screensScreens2 = _interopRequireDefault(_screensScreens);
	
	var guiModule = _angular2['default'].module('app.components.gui', [_componentsComponents2['default'].name, _screensScreens2['default'].name]);
	
	exports['default'] = guiModule;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dicesDices = __webpack_require__(15);
	
	var _dicesDices2 = _interopRequireDefault(_dicesDices);
	
	var _messagesMessages = __webpack_require__(18);
	
	var _messagesMessages2 = _interopRequireDefault(_messagesMessages);
	
	var _navbarNavbar = __webpack_require__(22);
	
	var _navbarNavbar2 = _interopRequireDefault(_navbarNavbar);
	
	var _languagePickerLanguagePicker = __webpack_require__(25);
	
	var _languagePickerLanguagePicker2 = _interopRequireDefault(_languagePickerLanguagePicker);
	
	var _savedDataAdminSavedDataAdmin = __webpack_require__(28);
	
	var _savedDataAdminSavedDataAdmin2 = _interopRequireDefault(_savedDataAdminSavedDataAdmin);
	
	var _popupPopup = __webpack_require__(31);
	
	var _popupPopup2 = _interopRequireDefault(_popupPopup);
	
	var _itemsItems = __webpack_require__(39);
	
	var _itemsItems2 = _interopRequireDefault(_itemsItems);
	
	var _notesNotes = __webpack_require__(42);
	
	var _notesNotes2 = _interopRequireDefault(_notesNotes);
	
	var _statsStats = __webpack_require__(45);
	
	var _statsStats2 = _interopRequireDefault(_statsStats);
	
	var _paragraphParagraph = __webpack_require__(48);
	
	var _paragraphParagraph2 = _interopRequireDefault(_paragraphParagraph);
	
	var _backButtonBackButton = __webpack_require__(51);
	
	var _backButtonBackButton2 = _interopRequireDefault(_backButtonBackButton);
	
	var _endGamePopupEndGamePopup = __webpack_require__(54);
	
	var _endGamePopupEndGamePopup2 = _interopRequireDefault(_endGamePopupEndGamePopup);
	
	var guiComponentsModule = _angular2['default'].module('app.components.gui.components', [_dicesDices2['default'].name, _messagesMessages2['default'].name, _navbarNavbar2['default'].name, _languagePickerLanguagePicker2['default'].name, _savedDataAdminSavedDataAdmin2['default'].name, _popupPopup2['default'].name, _itemsItems2['default'].name, _notesNotes2['default'].name, _statsStats2['default'].name, _paragraphParagraph2['default'].name, _backButtonBackButton2['default'].name, _endGamePopupEndGamePopup2['default'].name]);
	
	exports['default'] = guiComponentsModule;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dicesHtml = __webpack_require__(16);
	
	var _dicesHtml2 = _interopRequireDefault(_dicesHtml);
	
	var _dicesController = __webpack_require__(17);
	
	var _dicesController2 = _interopRequireDefault(_dicesController);
	
	var dicesModule = _angular2['default'].module('app.components.gui.components.dices', []).component('dices', { template: _dicesHtml2['default'], controller: _dicesController2['default'] });
	
	exports['default'] = dicesModule;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<form>\n    <table class=\"table table-striped\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <col style=\"width:85%\">\n        <col style=\"width:5%\">\n        <thead>\n        <tr>\n            <th>\n                <!-- TODO how to map correctly image with webpack & angularjs? -->\n                <!-- image come from http://opengameart.org/content/dice-4 -->\n                <img src=\"http://morarupasukaru.github.io/gamebooks-assistant/dice.png\" width=\"32\" height=\"32\"\n                     aria-label=\"{{ 'Roll dices' | translate }}\"\n                     title=\"{{ 'Roll dices' | translate }}\"/>\n            </th>\n            <th></th>\n            <th>{{ 'Sum of dices value' | translate }}</th>\n            <th></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>\n                <button class=\"btn btn-default\"\n                        ng-click=\"$ctrl.roll1d6()\"\n                        aria-label=\"{{ 'Roll one dice 6 faces' | translate }}\"\n                        title=\"{{ 'Roll one dice 6 faces' | translate }}\">\n                    {{ 'x1' | translate }}\n                </button>\n            </td>\n            <td>\n                <button class=\"btn btn-default\"\n                        ng-click=\"$ctrl.roll2d6()\"\n                        aria-label=\"{{ 'Roll two dices 6 faces' | translate }}\"\n                        title=\"{{ 'Roll two dices 6 faces' | translate }}\">\n                    {{ 'x2' | translate }}\n                </button>\n            </td>\n            <td>\n                {{ $ctrl.dicesValue }}\n            </td>\n            <td>\n                <button class=\"btn btn-default glyphicon glyphicon-erase\"\n                        title=\"{{ 'Clear values' | translate }}\"\n                        aria-label=\"{{ 'Clear values' | translate }}\"\n                        ng-click=\"$ctrl.clear()\">\n\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</form>\n\n"

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var DicesController = (function () {
	    /*@ngInject*/
	
	    function DicesController(dicesService) {
	        _classCallCheck(this, DicesController);
	
	        self = this;
	        self.dicesService = dicesService;
	        self.clear();
	    }
	
	    _createClass(DicesController, [{
	        key: 'roll2d6',
	        value: function roll2d6() {
	            self.appendToResult(self.dicesService.rollDices(2, 6));
	        }
	    }, {
	        key: 'roll1d6',
	        value: function roll1d6() {
	            self.appendToResult(self.dicesService.rollDices(1, 6));
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            self.dicesValue = '';
	        }
	    }, {
	        key: 'appendToResult',
	        value: function appendToResult(value) {
	            if (self.dicesValue !== '') {
	                self.dicesValue = self.dicesValue + ',';
	            }
	            self.dicesValue = self.dicesValue + value;
	        }
	    }]);
	
	    return DicesController;
	})();
	
	exports['default'] = DicesController;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
	 *
	 * ESTA WebJS: Definition der Messages-Komponente
	 *
	 * @author u220374 (Reto Lehmann)
	 * @version: 0.0.2
	 * @since 06.11.2015, 2015.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _messagesService = __webpack_require__(19);
	
	var _messagesService2 = _interopRequireDefault(_messagesService);
	
	var _messagesHtml = __webpack_require__(20);
	
	var _messagesHtml2 = _interopRequireDefault(_messagesHtml);
	
	var _messagesController = __webpack_require__(21);
	
	var _messagesController2 = _interopRequireDefault(_messagesController);
	
	var messagesModule = _angular2['default'].module('app.components.gui.components.messages', []).service('messagesService', _messagesService2['default']).component('messages', { template: _messagesHtml2['default'], controller: _messagesController2['default'] });
	
	exports['default'] = messagesModule;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	/*
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var MessagesService = (function () {
	    /*@ngInject*/
	
	    function MessagesService($rootScope, $translate) {
	        _classCallCheck(this, MessagesService);
	
	        self = this;
	        self.$rootScope = $rootScope;
	        self.$translate = $translate;
	
	        if (!self.$rootScope.messages) {
	            self.$rootScope.messages = [];
	        }
	    }
	
	    _createClass(MessagesService, [{
	        key: 'getMessages',
	        value: function getMessages() {
	            return self.$rootScope.messages || [];
	        }
	    }, {
	        key: 'clearMessages',
	        value: function clearMessages() {
	            self.$rootScope.messages.forEach(function (msg, index, arr) {
	                if (!msg.keepAfterLocationChange) {
	                    arr.splice(index, 1);
	                }
	            });
	        }
	    }, {
	        key: 'removeMessage',
	        value: function removeMessage(index) {
	            self.$rootScope.messages.splice(index, 1);
	        }
	    }, {
	        key: 'successMessage',
	        value: function successMessage(msg, keepAfterLocationChange) {
	            self._addMessage(msg, 'success', keepAfterLocationChange);
	        }
	    }, {
	        key: 'errorMessage',
	        value: function errorMessage(msg, keepAfterLocationChange) {
	            self._addMessage(msg, 'error', keepAfterLocationChange);
	        }
	    }, {
	        key: 'infoMessage',
	        value: function infoMessage(msg, keepAfterLocationChange) {
	            self._addMessage(msg, 'info', keepAfterLocationChange);
	        }
	    }, {
	        key: '_addMessage',
	        value: function _addMessage(msg, type, keepAfterLocationChange) {
	            var translatedMsg = self.$translate.instant(msg);
	            if (!self._hasMessage(translatedMsg, type)) {
	                self.$rootScope.messages.push({
	                    message: translatedMsg,
	                    type: type,
	                    keepAfterLocationChange: keepAfterLocationChange
	                });
	            }
	        }
	    }, {
	        key: '_hasMessage',
	        value: function _hasMessage(msg, type) {
	            var hasMessage = false;
	            var i = undefined;
	            for (i = 0; i < self.$rootScope.messages.length; i++) {
	                if (self.$rootScope.messages[i].message === msg && self.$rootScope.messages[i].type === type) {
	                    hasMessage = true;
	                    break;
	                }
	            }
	            return hasMessage;
	        }
	    }]);
	
	    return MessagesService;
	})();
	
	exports['default'] = MessagesService;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div ng-repeat=\"msg in $ctrl.messages\">\n    <div class=\"alert alert-{{ msg.type === 'error' ? 'danger' : msg.type }}\">\n        {{ msg.message }}\n        <a class=\"close\" ng-click=\"$ctrl.removeMessage($index)\">&times;</a>\n    </div>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

	/*
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var MessagesController = (function () {
	    /*@ngInject*/
	
	    function MessagesController(messagesService, $rootScope) {
	        _classCallCheck(this, MessagesController);
	
	        self = this;
	        self.messagesService = messagesService;
	
	        $rootScope.$on('$locationChangeStart', function () {
	            return self.messagesService.clearMessages();
	        });
	
	        self.messages = messagesService.getMessages();
	    }
	
	    _createClass(MessagesController, [{
	        key: 'removeMessage',
	        value: function removeMessage(index) {
	            self.messagesService.removeMessage(index);
	        }
	    }]);
	
	    return MessagesController;
	})();
	
	exports['default'] = MessagesController;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
	 *
	 * ESTA WebJS: Definition der Navbar-Komponente
	 *
	 * @author u220374 (Reto Lehmann)
	 * @version: 0.0.1
	 * @since 23.10.2015, 2015.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _navbarHtml = __webpack_require__(23);
	
	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);
	
	var _navbarController = __webpack_require__(24);
	
	var _navbarController2 = _interopRequireDefault(_navbarController);
	
	var navbarModule = _angular2['default'].module('app.components.gui.components.navbar', [_angularUiRouter2['default']]).component('navbar', { template: _navbarHtml2['default'], controller: _navbarController2['default'] });
	
	exports['default'] = navbarModule;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li><a ui-sref=\"games\">{{ 'Games' | translate }}</a></li>\n                <li><a ui-sref=\"about\">{{ 'About' | translate }}</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ },
/* 24 */
/***/ function(module, exports) {

	/*
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var NavbarController =
	/*@ngInject*/
	function NavbarController(preScreenLoadingInterceptorsCallerService) {
	    _classCallCheck(this, NavbarController);
	
	    self = this;
	    preScreenLoadingInterceptorsCallerService.intercept();
	    this.name = 'navbar';
	};
	
	exports['default'] = NavbarController;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _languagePickerHtml = __webpack_require__(26);
	
	var _languagePickerHtml2 = _interopRequireDefault(_languagePickerHtml);
	
	var _languagePickerController = __webpack_require__(27);
	
	var _languagePickerController2 = _interopRequireDefault(_languagePickerController);
	
	var languagePickerModule = _angular2['default'].module('app.components.gui.components.language-picker', []).component('languagePicker', { template: _languagePickerHtml2['default'], controller: _languagePickerController2['default'] });
	
	exports['default'] = languagePickerModule;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12\">\n    <form>\n        <div>\n            <div class=\"form-group\">\n                <label for=\"language\">{{ 'Choose language' | translate }}</label>\n                <ul class=\"nav nav-pills\" role=\"tablist\" id=\"language\">\n                    <li ng-repeat=\"language in $ctrl.supportedLanguages\" role=\"button\" ng-class=\"{ 'active' : language.selected }\" title=\"{{ 'Choice' | translate }} {{ language.code | translate }}\">\n                        <a href=\"\" ng-click=\"$ctrl.changeLanguage(language.code)\">{{ language.code | translate }}</a></li>\n                </ul>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var LanguagePickerController = (function () {
	    /*@ngInject*/
	
	    function LanguagePickerController($translate, constants, persistenceService) {
	        _classCallCheck(this, LanguagePickerController);
	
	        self = this;
	        self.$translate = $translate;
	        self.persistenceService = persistenceService;
	        self.constants = constants;
	        self.initData(constants.supportedLanguages);
	    }
	
	    _createClass(LanguagePickerController, [{
	        key: "initData",
	        value: function initData(languages) {
	            self.supportedLanguages = [];
	            var i = undefined;
	            var selectedLanguage = self.getSelectedLanguage(languages);
	            for (i = 0; i < languages.length; i++) {
	                self.supportedLanguages.push({
	                    code: languages[i]
	                });
	            }
	            self.changeLanguage(selectedLanguage);
	        }
	    }, {
	        key: "getSelectedLanguage",
	        value: function getSelectedLanguage(languages) {
	            var selectedLanguage = self.persistenceService.getSelectedLanguage();
	            if (!!selectedLanguage) {
	                return selectedLanguage;
	            } else if (!!navigator.language) {
	                var i = undefined;
	                for (i = 0; i < languages.length; i++) {
	                    if (languages[i] === navigator.language) {
	                        return languages[i];
	                    }
	                }
	
	                for (i = 0; i < languages.length; i++) {
	                    if (navigator.language.startsWith(languages[i])) {
	                        return languages[i];
	                    }
	                }
	            }
	            return language[0];
	        }
	    }, {
	        key: "changeLanguage",
	        value: function changeLanguage(selectedLanguage) {
	            self.$translate.use(selectedLanguage);
	            self.persistenceService.setSelectedLanguage(selectedLanguage);
	
	            var i = undefined;
	            for (i = 0; i < self.supportedLanguages.length; i++) {
	                self.supportedLanguages[i].selected = self.supportedLanguages[i].code === selectedLanguage;
	            }
	        }
	    }]);
	
	    return LanguagePickerController;
	})();
	
	exports["default"] = LanguagePickerController;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _savedDataAdminHtml = __webpack_require__(29);
	
	var _savedDataAdminHtml2 = _interopRequireDefault(_savedDataAdminHtml);
	
	var _savedDataAdminController = __webpack_require__(30);
	
	var _savedDataAdminController2 = _interopRequireDefault(_savedDataAdminController);
	
	var savedDataAdminModule = _angular2['default'].module('app.components.gui.components.saved-data-admin', []).component('savedDataAdmin', { template: _savedDataAdminHtml2['default'], controller: _savedDataAdminController2['default'] });
	
	exports['default'] = savedDataAdminModule;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12\">\n    <form>\n        <div>\n            <div class=\"form-group\">\n                <label for=\"editedParagraphs\">{{ \"Edited paragraphs\" | translate }}</label>\n                <input type=\"text\" class=\"form-control\" id=\"editedParagraphs\" ng-model=\"$ctrl.editedParagraphsData\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"applicationData\">{{ \"Application's data\" | translate }}</label>\n                <input type=\"text\" class=\"form-control\" id=\"applicationData\" ng-model=\"$ctrl.applicationData\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"importData\">{{ \"Paste the application's data copied from another browser\" | translate }}</label>\n                <input type=\"text\" class=\"form-control\" ng-model=\"$ctrl.importData\" id=\"importData\" placeholder=\"{{ 'Imported data' | translate }}\">\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-danger\" ng-click=\"$ctrl.showPopupConfirmImportData()\" aria-label=\"{{ 'Import' | translate }}\">{{ 'Import' | translate }}</button>\n            </div>\n        </div>\n    </form>\n\n    <popup config=\"{{ $ctrl.popupConfirmDeleteApplicationDataConfig }}\"></popup>\n\n    <popup config=\"{{ $ctrl.popupConfirmImportApplicationDataConfig }}\"></popup>\n</div>\n"

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var SavedDataAdminController = (function () {
	    /*@ngInject*/
	
	    function SavedDataAdminController(persistenceService, constants, popupService, $window) {
	        _classCallCheck(this, SavedDataAdminController);
	
	        self = this;
	        self.persistenceService = persistenceService;
	        self.constants = constants;
	        self.popupService = popupService;
	        self.initData();
	        self.$window = $window;
	
	        self.popupConfirmImportApplicationDataConfig = {
	            id: 'popupConfirmImportApplicationData',
	            text: "All existing application's data will be erased during the import. Are you sure to import the application data?",
	            choices: [constants.choices.yes, constants.choices.no],
	            withCloseButton: false,
	            closeOnClickOutsideModal: false
	        };
	    }
	
	    _createClass(SavedDataAdminController, [{
	        key: "initData",
	        value: function initData() {
	            self.applicationData = JSON.stringify(self.persistenceService["export"]());
	            self.editedParagraphsData = self.persistenceService.getEditedParagraphs();
	        }
	    }, {
	        key: "showPopupConfirmImportData",
	        value: function showPopupConfirmImportData() {
	            self.popupService.show(self.popupConfirmImportApplicationDataConfig.id, self.callbackPopupConfirmImportData);
	        }
	    }, {
	        key: "callbackPopupConfirmImportData",
	        value: function callbackPopupConfirmImportData(popupDomElementId, choice) {
	            if (choice === self.constants.choices.yes) {
	                self.persistenceService["import"](self.importData);
	                self.$window.location.reload();
	            }
	        }
	    }]);
	
	    return SavedDataAdminController;
	})();
	
	exports["default"] = SavedDataAdminController;
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _popupHtml = __webpack_require__(32);
	
	var _popupHtml2 = _interopRequireDefault(_popupHtml);
	
	var _popupController = __webpack_require__(33);
	
	var _popupController2 = _interopRequireDefault(_popupController);
	
	var _popupService = __webpack_require__(34);
	
	var _popupService2 = _interopRequireDefault(_popupService);
	
	__webpack_require__(35);
	
	var popupModule = _angular2['default'].module('app.components.gui.components.popup', []).component('popup', {
	    template: _popupHtml2['default'],
	    controller: _popupController2['default'],
	    bindings: {
	        config: '@'
	    }
	}).service('popupService', _popupService2['default']);
	
	exports['default'] = popupModule;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{$ctrl.cfg.id}}\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close glyphicon glyphicon-remove-circle\" ng-click=\"$ctrl.close()\" ng-show=\"$ctrl.cfg.withCloseButton\"></span>\n        <p>{{ $ctrl.cfg.text | translate }}</p>\n        <span ng-repeat=\"choice in $ctrl.cfg.choices\">\n            <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.select(choice)\">{{ choice | translate }}</button>&nbsp;\n        </span>\n    </div>\n</div>\n"

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PopupController = (function () {
	    /*@ngInject*/
	
	    function PopupController(preScreenLoadingInterceptorsCallerService, popupService) {
	        _classCallCheck(this, PopupController);
	
	        this.cfg = JSON.parse(this.config);
	        this.popupService = popupService;
	        if (this.cfg.closeOnClickOutsideModal) {
	            this.close();
	        }
	    }
	
	    _createClass(PopupController, [{
	        key: "select",
	        value: function select(choice) {
	            this.close(choice);
	        }
	    }, {
	        key: "close",
	        value: function close(choice) {
	            this.popupService.close(this.cfg.id, choice);
	        }
	    }]);
	
	    return PopupController;
	})();
	
	exports["default"] = PopupController;
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var PopupService = (function () {
	
	    /*@ngInject*/
	
	    function PopupService() {
	        _classCallCheck(this, PopupService);
	
	        self = this;
	        self.popups = {};
	    }
	
	    _createClass(PopupService, [{
	        key: "show",
	        value: function show(popupDomElementId, callback) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "block";
	
	            self.popups[popupDomElementId] = callback;
	        }
	    }, {
	        key: "close",
	        value: function close(popupDomElementId, choice) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "none";
	
	            var callback = self.popups[popupDomElementId];
	            if (!!callback) {
	                callback(popupDomElementId, choice);
	            }
	            delete self.popups[popupDomElementId];
	        }
	    }]);
	
	    return PopupService;
	})();
	
	exports["default"] = PopupService;
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./popup.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./popup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, " /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 30%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n    float: right;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _itemsHtml = __webpack_require__(40);
	
	var _itemsHtml2 = _interopRequireDefault(_itemsHtml);
	
	var _itemsController = __webpack_require__(41);
	
	var _itemsController2 = _interopRequireDefault(_itemsController);
	
	var itemsModule = _angular2['default'].module('app.components.gui.screen.items', []).component('items', {
	    template: _itemsHtml2['default'],
	    controller: _itemsController2['default'],
	    bindings: {
	        gameId: '@?',
	        items: '='
	    }
	});
	
	exports['default'] = itemsModule;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<form name=\"itemsTableForm\" novalidate=\"novalidate\">\n    <table class=\"table table-striped\">\n        <col style=\"width:10%\">\n        <col style=\"width:75%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <thead>\n        <tr>\n            <th>{{ 'Quantity' | translate }}</th>\n            <th>{{ 'Item' | translate }}</th>\n            <th></th>\n            <th></th>\n            <th>\n                <button type=\"button\"\n                        class=\"btn btn-default\"\n                        aria-label=\"{{ 'Add item' | translate}}\"\n                        title=\"{{ 'Add item' | translate}}\"\n                        ng-show=\"!$ctrl.hasEditedRow()\"\n                        ng-click=\"$ctrl.addRow()\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                </button>\n            </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"row in $ctrl.rows\">\n            <td ng-if=\"!$ctrl.isRowEdited(row)\">\n                {{ row.quantity }}\n            </td>\n            <td ng-if=\"$ctrl.isRowEdited(row)\">\n                <input required name=\"quantity\" type=\"number\" class=\"form-control\" ng-model=\"row.quantity\">\n                <div class=\"error\" ng-show=\"!row.quantity\">\n                    <!-- check error only on field -->\n                    {{ 'Please fill the quantity' | translate }}\n                </div>\n            </td>\n\n            <td ng-if=\"!$ctrl.isRowEdited(row)\">\n                {{ row.description }}\n            </td>\n            <td ng-if=\"$ctrl.isRowEdited(row)\">\n                <input required name=\"description\" type=\"text\" class=\"form-control description\" ng-model=\"row.description\">\n                <div class=\"error\" ng-show=\"!row.description\">\n                    <!-- check error only on field -->\n                    {{ 'Please fill the description' | translate }}\n                </div>\n            </td>\n\n            <td>\n                <button type=\"button\" class=\"btn btn-success\"\n                        aria-label=\"{{ 'Save item changes' | translate}}\"\n                        title=\"{{ 'Save item changes' | translate}}\"\n                        ng-click=\"$ctrl.saveRowChanges(notesTableForm.$invalid)\"\n                        ng-show=\"$ctrl.isRowEdited(row)\">\n                    <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n                </button>\n            </td>\n\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\"\n                        aria-label=\"{{ 'Abort item changes' | translate}}\"\n                        title=\"{{ 'Abort item changes' | translate}}\"\n                        ng-click=\"$ctrl.abortRowChanges()\"\n                        ng-show=\"$ctrl.isRowEdited(row)\">\n                    <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n                </button>\n            </td>\n\n            <td>\n                <button type=\"button\" class=\"btn btn-default\"\n                        aria-label=\"{{ 'Edit item' | translate }} '{{ row.description | translate }}'\"\n                        title=\"{{ 'Edit item' | translate }} '{{ row.description | translate }}'\"\n                        ng-click=\"$ctrl.editRow(row)\"\n                        ng-show=\"!$ctrl.hasEditedRow()\">\n                    <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n                </button>\n                <button type=\"button\" class=\"btn btn-danger\"\n                        aria-label=\"{{ 'Remove item' | translate }} '{{ row.description | translate }}'\"\n                        title=\"{{ 'Remove item' | translate }} '{{ row.description | translate }}'\"\n                        ng-click=\"$ctrl.displayRemovePopup(row)\"\n                        ng-disabled=\"$ctrl.addedRow\"\n                        ng-show=\"$ctrl.isRowEdited(row)\">\n                    <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</form>\n\n<popup config=\"{{ $ctrl.popupDeleteItemConfig }}\"></popup>\n"

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var ItemsController = (function () {
	    /*@ngInject*/
	
	    function ItemsController(preScreenLoadingInterceptorsCallerService, popupService, constants, persistenceService) {
	        _classCallCheck(this, ItemsController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        this.rows = this.items;
	        self.popupService = popupService;
	        self.constants = constants;
	        self.persistenceService = persistenceService;
	
	        self.popupDeleteItemConfig = {
	            id: 'popupDeleteItem',
	            text: 'Are you sure to remove the item?',
	            choices: [constants.choices.yes, constants.choices.no],
	            withCloseButton: false,
	            closeOnClickOutsideModal: false
	        };
	    }
	
	    _createClass(ItemsController, [{
	        key: 'addRow',
	        value: function addRow() {
	            var row = { quantity: 1 };
	            self.rows.push(row);
	            self.addedRow = row;
	        }
	    }, {
	        key: 'displayRemovePopup',
	        value: function displayRemovePopup(removedRow) {
	            self.rowToBeRemoved = removedRow;
	            self.popupService.show(self.popupDeleteItemConfig.id, self.callbackRemovePopup);
	        }
	    }, {
	        key: 'callbackRemovePopup',
	        value: function callbackRemovePopup(popupDomElementId, choice) {
	            if (choice === self.constants.choices.yes) {
	                self.removeRow(self.rowToBeRemoved);
	            }
	            self.rowToBeRemoved = null;
	        }
	    }, {
	        key: 'removeRow',
	        value: function removeRow(removedRow) {
	            var index = self.rows.indexOf(removedRow);
	            self.rows.splice(index, 1);
	            self.clearEditedRow();
	            self.saveInPersistence();
	        }
	    }, {
	        key: 'editRow',
	        value: function editRow(row) {
	            self.editedRow = row;
	            self.originalRow = { quantity: row.quantity, description: row.description };
	        }
	    }, {
	        key: 'isRowEdited',
	        value: function isRowEdited(row) {
	            return row === self.editedRow || row === self.addedRow;
	        }
	    }, {
	        key: 'hasEditedRow',
	        value: function hasEditedRow() {
	            return !!self.editedRow || !!self.addedRow;
	        }
	    }, {
	        key: 'saveRowChanges',
	        value: function saveRowChanges($invalid) {
	            if ($invalid) {
	                return;
	            }
	            self.clearEditedRow();
	            self.saveInPersistence();
	        }
	    }, {
	        key: 'abortRowChanges',
	        value: function abortRowChanges() {
	            if (!!self.addedRow) {
	                self.removeRow(self.addedRow);
	            }
	            if (!!self.editedRow) {
	                self.editedRow.quantity = self.originalRow.quantity;
	                self.editedRow.description = self.originalRow.description;
	            }
	            self.clearEditedRow();
	        }
	    }, {
	        key: 'clearEditedRow',
	        value: function clearEditedRow() {
	            self.addedRow = null;
	            self.editedRow = null;
	            self.originalRow = null;
	        }
	    }, {
	        key: 'saveInPersistence',
	        value: function saveInPersistence() {
	            if (!!self.gameId) {
	                var updatedGame = self.persistenceService.getGame(self.gameId);
	                updatedGame.items = self.items;
	                self.persistenceService.updateGame(updatedGame);
	            }
	        }
	    }]);
	
	    return ItemsController;
	})();
	
	exports['default'] = ItemsController;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _notesHtml = __webpack_require__(43);
	
	var _notesHtml2 = _interopRequireDefault(_notesHtml);
	
	var _notesController = __webpack_require__(44);
	
	var _notesController2 = _interopRequireDefault(_notesController);
	
	var notesModule = _angular2['default'].module('app.components.gui.screen.notes', []).component('notes', {
	    template: _notesHtml2['default'],
	    controller: _notesController2['default'],
	    bindings: {
	        gameId: '@',
	        paragraphNr: '@',
	        bookId: '@'
	    }
	});
	
	exports['default'] = notesModule;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<form name=\"notesTableForm\" novalidate=\"novalidate\">\n    <table class=\"table table-striped\">\n        <col style=\"width:75%\">\n        <col style=\"width:5%\">\n        <col style=\"width:10%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <thead>\n        <tr>\n            <th>{{ 'Note' | translate }}</th>\n            <th>{{ 'Paragraph' | translate }}</th>\n            <th>{{ 'Player' | translate }}</th>\n            <th></th>\n            <th></th>\n            <th>\n                <button type=\"button\" class=\"btn btn-default\"\n                        aria-label=\"{{ 'Add note' | translate}}\"\n                        title=\"{{ 'Add note' | translate}}\"\n                        ng-click=\"$ctrl.addRow()\"\n                        ng-show=\"!$ctrl.hasEditedRow()\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                </button>\n            </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"row in $ctrl.notes track by $index\">\n            <td ng-if=\"!$ctrl.isRowEdited(row)\">\n                {{ row.note }}\n            </td>\n            <td ng-if=\"$ctrl.isRowEdited(row)\">\n                <input required type=\"text\" class=\"form-control\" ng-model=\"row.note\">\n                <div class=\"error\" ng-show=\"notesTableForm.$invalid\">\n                    {{ 'Please fill the note' | translate }}\n                </div>\n            </td>\n\n            <td ng-if=\"!$ctrl.isRowEdited(row) || !$ctrl.gameId || !row.playerName\">\n                {{ row.paragraphNr }}\n            </td>\n            <td ng-if=\"$ctrl.isRowEdited(row) && (!!$ctrl.gameId && !!row.playerName)\">\n                <input type=\"checkbox\" class=\"form-control\" ng-model=\"row.isParagraph\" name=\"isParagraph\" value=\"true\"><br>\n            </td>\n\n            <td>\n                {{ row.playerName }}\n            </td>\n\n            <td>\n                <button type=\"button\" class=\"btn btn-success\"\n                        aria-label=\"{{ 'Save note changes' | translate}}\"\n                        title=\"{{ 'Save note changes' | translate}}\"\n                        ng-click=\"$ctrl.saveRowChanges(notesTableForm.$invalid, row)\"\n                        ng-show=\"$ctrl.isRowEdited(row)\">\n                    <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n                </button>\n            </td>\n\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\"\n                        aria-label=\"{{ 'Abort note changes' | translate}}\"\n                        title=\"{{ 'Abort note changes' | translate}}\"\n                        ng-click=\"$ctrl.abortRowChanges()\"\n                        ng-show=\"$ctrl.isRowEdited(row)\">\n                    <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n                </button>\n            </td>\n\n            <td>\n                <button type=\"button\" class=\"btn btn-default\"\n                        aria-label=\"{{ 'Edit note' | translate}} '{{ row.note | translate }}'\"\n                        title=\"{{ 'Edit note' | translate}} '{{ row.note | translate }}'\"\n                        ng-click=\"$ctrl.editRow(row)\"\n                        ng-show=\"!$ctrl.hasEditedRow()\">\n                    <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n                </button>\n                <button type=\"button\" class=\"btn btn-danger\"\n                        aria-label=\"{{ 'Remove note' | translate }} '{{ row.note | translate }}'\"\n                        title=\"{{ 'Remove note' | translate }} '{{ row.note | translate }}'\"\n                        ng-click=\"$ctrl.displayRemovePopup(row)\"\n                        ng-disabled=\"$ctrl.addedRow\"\n                        ng-show=\"$ctrl.isRowEdited(row)\">\n                    <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</form>\n<popup config=\"{{ $ctrl.popupDeleteNoteConfig }}\"></popup>\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var NotesController = (function () {
	    /*@ngInject*/
	
	    function NotesController(preScreenLoadingInterceptorsCallerService, popupService, constants, persistenceService) {
	        _classCallCheck(this, NotesController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	
	        self.popupService = popupService;
	        self.constants = constants;
	        self.persistenceService = persistenceService;
	
	        self.popupDeleteNoteConfig = {
	            id: 'popupDeleteNoteConfig',
	            text: 'Are you sure to remove the note?',
	            choices: [constants.choices.yes, constants.choices.no],
	            withCloseButton: false,
	            closeOnClickOutsideModal: false
	        };
	
	        self.initData();
	    }
	
	    _createClass(NotesController, [{
	        key: 'initData',
	        value: function initData() {
	            var game = undefined;
	            if (!!self.gameId) {
	                game = self.persistenceService.getGame(self.gameId);
	            }
	
	            self.notes = [];
	            var paragraph = self.persistenceService.getParagraph(self.bookId, self.paragraphNr);
	            if (!!paragraph && !!paragraph.notes) {
	                var i = undefined;
	                for (i = 0; i < paragraph.notes.length; i++) {
	                    self.notes.push(paragraph.notes[i]);
	                    paragraph.notes[i].paragraphNr = self.paragraphNr;
	                    paragraph.notes[i].isParagraph = !!paragraph.notes[i].paragraphNr;
	                    if (!paragraph.notes[i].playerName) {
	                        paragraph.notes[i].note = paragraph.notes[i].note;
	                    }
	                }
	            }
	
	            if (!!game) {
	                self.playerName = game.playerName;
	                if (!!game.notes) {
	                    self.notes = self.notes.concat(game.notes);
	                }
	            }
	        }
	    }, {
	        key: 'addRow',
	        value: function addRow(noteValue) {
	            var row = { note: noteValue, isParagraph: true, paragraphNr: self.paragraphNr, playerName: self.playerName };
	            self.notes.push(row);
	            self.addedRow = row;
	        }
	    }, {
	        key: 'displayRemovePopup',
	        value: function displayRemovePopup(removedRow) {
	            self.rowToBeRemoved = removedRow;
	            self.popupService.show(self.popupDeleteNoteConfig.id, self.callbackRemovePopup);
	        }
	    }, {
	        key: 'callbackRemovePopup',
	        value: function callbackRemovePopup(popupDomElementId, choice) {
	            if (choice === self.constants.choices.yes) {
	                self.removeRow(self.rowToBeRemoved);
	            }
	            self.rowToBeRemoved = null;
	        }
	    }, {
	        key: 'removeRow',
	        value: function removeRow(removedRow) {
	            var index = self.notes.indexOf(removedRow);
	            self.notes.splice(index, 1);
	            self.clearEditedRow();
	            self.saveNotes();
	        }
	    }, {
	        key: 'editRow',
	        value: function editRow(row) {
	            self.editedRow = row;
	            self.originalRow = { note: row.note, paragraphNr: row.paragraphNr, playerName: row.playerName };
	        }
	    }, {
	        key: 'isRowEdited',
	        value: function isRowEdited(row) {
	            return row === self.editedRow || row === self.addedRow;
	        }
	    }, {
	        key: 'hasEditedRow',
	        value: function hasEditedRow() {
	            return !!self.editedRow || !!self.addedRow;
	        }
	    }, {
	        key: 'saveRowChanges',
	        value: function saveRowChanges($invalid, row) {
	            if ($invalid) {
	                return;
	            }
	
	            if (!!row.isParagraph) {
	                row.paragraphNr = Number(self.paragraphNr);
	            } else {
	                row.paragraphNr = undefined;
	            }
	
	            self.clearEditedRow();
	            self.saveNotes();
	        }
	    }, {
	        key: 'saveNotes',
	        value: function saveNotes() {
	            self.savePlayerNotes();
	            self.saveParagraphNotes();
	        }
	    }, {
	        key: 'savePlayerNotes',
	        value: function savePlayerNotes() {
	            if (!self.gameId) {
	                return;
	            }
	
	            var savedNotes = [];
	            var i = undefined;
	            for (i = 0; i < self.notes.length; i++) {
	                if (!self.notes[i].paragraphNr) {
	                    savedNotes.push({ note: self.notes[i].note, playerName: self.notes[i].playerName });
	                }
	            }
	            var game = self.persistenceService.getGame(self.gameId);
	            game.notes = savedNotes;
	            self.persistenceService.updateGame(game);
	        }
	    }, {
	        key: 'saveParagraphNotes',
	        value: function saveParagraphNotes() {
	            var savedNotes = [];
	            var i = undefined;
	            for (i = 0; i < self.notes.length; i++) {
	                if (!!self.notes[i].paragraphNr) {
	                    savedNotes.push({ note: self.notes[i].note, playerName: self.notes[i].playerName });
	                }
	            }
	            var paragraph = self.persistenceService.getParagraph(self.bookId, self.paragraphNr);
	            paragraph.notes = savedNotes;
	            self.persistenceService.updateParagraph(paragraph);
	        }
	    }, {
	        key: 'abortRowChanges',
	        value: function abortRowChanges() {
	            if (!!self.addedRow) {
	                self.removeRow(self.addedRow);
	            }
	            if (!!self.editedRow) {
	                self.editedRow.note = self.originalRow.note;
	                self.editedRow.paragraphNr = self.originalRow.paragraphNr;
	                self.editedRow.playerName = self.originalRow.playerName;
	            }
	            self.clearEditedRow();
	        }
	    }, {
	        key: 'clearEditedRow',
	        value: function clearEditedRow() {
	            self.addedRow = null;
	            self.editedRow = null;
	            self.originalRow = null;
	        }
	    }]);
	
	    return NotesController;
	})();
	
	exports['default'] = NotesController;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _statsHtml = __webpack_require__(46);
	
	var _statsHtml2 = _interopRequireDefault(_statsHtml);
	
	var _statsController = __webpack_require__(47);
	
	var _statsController2 = _interopRequireDefault(_statsController);
	
	var statsModule = _angular2['default'].module('app.components.gui.screen.stats', []).component('stats', {
	    template: _statsHtml2['default'],
	    controller: _statsController2['default'],
	    bindings: {
	        gameId: '@',
	        stats: '='
	    }
	});
	
	exports['default'] = statsModule;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table\">\n    <col style=\"width:10%\">\n    <col style=\"width:20%\">\n    <col style=\"width:10%\">\n    <col style=\"width:70%\">\n    <col style=\"width:5%\">\n    <col style=\"width:5%\">\n    <thead>\n    <tr>\n        <th>{{ 'Stats' | translate }}</th>\n        <th>{{ 'Current' | translate }}</th>\n        <th>{{ 'Initial' | translate }}</th>\n        <th></th>\n        <th></th>\n        <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"row in $ctrl.stats\">\n        <td>{{ row.name }}</td>\n        <td>{{ row.current }}</td>\n        <td>{{ row.initial }}</td>\n        <td></td>\n        <td>\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"{{ 'Increment' | translate }} {{ row.name | translate }}\" title=\"{{ 'Increment' | translate }} {{ row.name | translate }}\" ng-click=\"$ctrl.increment(row)\">\n                <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n            </button>\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"{{ 'Decrement' | translate }} {{ row.name | translate }}\" title=\"{{ 'Decrement' | translate }} {{ row.name | translate }}\" ng-click=\"$ctrl.decrement(row)\">\n                <span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n</table>\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var StatsController = (function () {
	    /*@ngInject*/
	
	    function StatsController(preScreenLoadingInterceptorsCallerService, persistenceService) {
	        _classCallCheck(this, StatsController);
	
	        self = this;
	        self.persistenceService = persistenceService;
	        preScreenLoadingInterceptorsCallerService.intercept();
	    }
	
	    _createClass(StatsController, [{
	        key: "increment",
	        value: function increment(row) {
	            row.current = row.current + 1;
	            self.save();
	        }
	    }, {
	        key: "decrement",
	        value: function decrement(row) {
	            row.current = row.current - 1;
	            self.save();
	        }
	    }, {
	        key: "save",
	        value: function save() {
	            var updatedGame = self.persistenceService.getGame(self.gameId);
	            updatedGame.stats = self.stats;
	            self.persistenceService.updateGame(updatedGame);
	        }
	    }]);
	
	    return StatsController;
	})();
	
	exports["default"] = StatsController;
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _paragraphHtml = __webpack_require__(49);
	
	var _paragraphHtml2 = _interopRequireDefault(_paragraphHtml);
	
	var _paragraphController = __webpack_require__(50);
	
	var _paragraphController2 = _interopRequireDefault(_paragraphController);
	
	var paragraphModule = _angular2['default'].module('app.components.gui.screen.paragraph', []).component('paragraph', {
	    template: _paragraphHtml2['default'],
	    controller: _paragraphController2['default'],
	    bindings: {
	        gameId: '@',
	        paragraph: '='
	    }
	});
	
	exports['default'] = paragraphModule;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table table-borderless\">\n    <col style=\"width:95%\">\n    <col style=\"width:5%\">\n    <thead>\n    <tr>\n        <th>{{ 'Description' | translate }}</th>\n        <th>\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>\n            <textarea id=\"inputCurrentDescription\" class=\"form-control\" ng-model=\"$ctrl.paragraph.description\" ng-readonly=\"!$ctrl.isDescriptionEditable()\"></textarea>\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-default\"\n                    aria-label=\"{{ 'Edit description' | translate}}\"\n                    title=\"{{ 'Edit description' | translate}}\"\n                    ng-click=\"$ctrl.editDescription()\"\n                    ng-show=\"!$ctrl.isDescriptionEditable()\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-success\"\n                    aria-label=\"{{ 'Save description changes' | translate}}\"\n                    title=\"{{ 'Save description changes' | translate}}\"\n                    ng-click=\"$ctrl.saveDescriptionChanges()\"\n                    ng-show=\"$ctrl.isDescriptionEditable()\">\n                <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-danger\"\n                    aria-label=\"{{ 'Abort description changes' | translate}}\"\n                    title=\"{{ 'Abort description changes' | translate}}\"\n                    ng-click=\"$ctrl.abortDescriptionChanges()\"\n                    ng-show=\"$ctrl.isDescriptionEditable()\">\n                <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n            </button>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n<form name=\"choicesTableForm\" novalidate=\"novalidate\">\n    <table class=\"table table-striped\">\n        <col style=\"width:10%\">\n        <col style=\"width:75%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <thead>\n        <tr>\n            <th>{{ 'Choice' | translate }}</th>\n            <th>{{ 'Description' | translate }}</th>\n            <th></th>\n            <th></th>\n            <th>\n                <button type=\"button\" class=\"btn btn-default\"\n                        aria-label=\"{{ 'Add choice' | translate}}\"\n                        title=\"{{ 'Add choice' | translate}}\"\n                        ng-click=\"$ctrl.addRow()\"\n                        ng-show=\"!$ctrl.hasEditedRow()\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                </button>\n            </th>\n        </tr>\n        </thead>\n        <tbody>\n            <tr ng-repeat=\"row in $ctrl.paragraph.choices\">\n                <td ng-if=\"!$ctrl.isRowEdited(row) && !$ctrl.hasEditedRow()\">\n                    <button type=\"button\" class=\"btn btn-default\"\n                            aria-label=\"{{ 'Choice paragragh' | translate}} {{ row.paragraphNr }}\"\n                            title=\"{{ 'Choice paragragh' | translate}} '{{ row.paragraphNr }}'\"\n                            ng-click=\"$ctrl.goTo(row.paragraphNr)\">\n                        <div ng-if=\"!!row.alreadyChoosen\">{{ row.paragraphNr }}</div>\n                        <div ng-if=\"!row.alreadyChoosen\"><strong>{{ row.paragraphNr }}</strong></div>\n                    </button>\n                </td>\n                <td ng-if=\"!$ctrl.isRowEdited(row) && $ctrl.hasEditedRow()\">\n                    {{ row.paragraphNr }}\n                </td>\n                <td ng-if=\"$ctrl.isRowEdited(row)\">\n                    <input id=\"rowParagraphNr\" type=\"number\" required class=\"form-control\" ng-model=\"row.paragraphNr\">\n                    <div class=\"error\" ng-show=\"choicesTableForm.$invalid\">\n                        {{ 'Please fill the paragraph number' | translate }}\n                    </div>\n                </td>\n\n                <td ng-if=\"!$ctrl.isRowEdited(row)\">\n                    {{ row.description }}\n                </td>\n                <td ng-if=\"$ctrl.isRowEdited(row)\">\n                    <input type=\"text\" class=\"form-control\" ng-model=\"row.description\">\n                </td>\n\n                <td>\n                    <button type=\"button\" class=\"btn btn-success\"\n                            aria-label=\"{{ 'Save choice changes' | translate}}\"\n                            title=\"{{ 'Save choice changes' | translate}}\"\n                            ng-click=\"$ctrl.saveRowChanges(choicesTableForm.$invalid)\"\n                            ng-show=\"$ctrl.isRowEdited(row)\">\n                        <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n                    </button>\n                </td>\n\n                <td>\n                    <button type=\"button\" class=\"btn btn-danger\"\n                            aria-label=\"{{ 'Abort choice changes' | translate}}\"\n                            title=\"{{ 'Abort choice changes' | translate}}\"\n                            ng-click=\"$ctrl.abortRowChanges()\"\n                            ng-show=\"$ctrl.isRowEdited(row)\">\n                        <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n                    </button>\n                </td>\n                <td>\n                    <button type=\"button\" class=\"btn btn-default\"\n                            aria-label=\"{{ 'Edit choice' | translate}} {{ row.paragraphNr }}\"\n                            title=\"{{ 'Edit choice' | translate}} '{{ row.paragraphNr }}'\"\n                            ng-click=\"$ctrl.editRow(row)\"\n                            ng-show=\"!$ctrl.hasEditedRow()\">\n                        <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger\"\n                            aria-label=\"{{ 'Remove choice' | translate}} {{ row.paragraphNr }}\"\n                            title=\"{{ 'Remove choice' | translate}} '{{ row.paragraphNr }}'\"\n                            ng-click=\"$ctrl.displayRemovePopup(row)\"\n                            ng-disabled=\"$ctrl.addedRow\"\n                            ng-show=\"$ctrl.isRowEdited(row)\">\n                        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                    </button>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <button type=\"button\" class=\"btn btn-default\"\n                            aria-label=\"{{ 'Go to paragraph' | translate}}\"\n                            title=\"{{ 'Go to paragraph' | translate}}\"\n                            ng-click=\"$ctrl.goTo($ctrl.paragraphNrChoice)\"\n                            ng-disabled=\"!$ctrl.paragraphNrChoice\">\n                        {{ 'Go to' | translate}}\n                    </button>\n                </td>\n                <td>\n                    <input id=\"goToParagraphNr\" type=\"number\" class=\"form-control\" ng-model=\"$ctrl.paragraphNrChoice\">\n                </td>\n                <td></td>\n                <td></td>\n                <td></td>\n            </tr>\n\n        </tbody>\n    </table>\n</form>\n\n<popup config=\"{{ $ctrl.popupDeleteChoiceConfig }}\"></popup>"

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var ParagraphController = (function () {
	    /*@ngInject*/
	
	    function ParagraphController(preScreenLoadingInterceptorsCallerService, popupService, constants, persistenceService, $location) {
	        _classCallCheck(this, ParagraphController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        self.popupService = popupService;
	        self.constants = constants;
	        self.persistenceService = persistenceService;
	        self.$location = $location;
	
	        self.popupDeleteChoiceConfig = {
	            id: 'popupDeleteChoice',
	            text: 'Are you sure to remove the choice?',
	            choices: [constants.choices.yes, constants.choices.no],
	            withCloseButton: false,
	            closeOnClickOutsideModal: false
	        };
	
	        self.playerName = persistenceService.getGame(self.gameId).playerName;
	        this.descriptionEditable = false;
	    }
	
	    _createClass(ParagraphController, [{
	        key: 'addRow',
	        value: function addRow() {
	            var row = { paragraphNr: self.inputParagraphNr, description: self.inputDescription };
	            self.paragraph.choices.push(row);
	            self.inputParagraphNr = '';
	            self.inputDescription = '';
	            self.addedRow = row;
	        }
	    }, {
	        key: 'displayRemovePopup',
	        value: function displayRemovePopup(removedRow) {
	            self.rowToBeRemoved = removedRow;
	            self.popupService.show(self.popupDeleteChoiceConfig.id, self.callbackRemovePopup);
	        }
	    }, {
	        key: 'callbackRemovePopup',
	        value: function callbackRemovePopup(popupDomElementId, choice) {
	            if (choice === self.constants.choices.yes) {
	                self.removeRow(self.rowToBeRemoved);
	            }
	            self.rowToBeRemoved = null;
	        }
	    }, {
	        key: 'removeRow',
	        value: function removeRow(removedRow) {
	            var index = self.paragraph.choices.indexOf(removedRow);
	            self.paragraph.choices.splice(index, 1);
	            self.clearEditedRow();
	            this.updateLastEditedBy();
	            self.saveParagraphChoices();
	        }
	    }, {
	        key: 'editDescription',
	        value: function editDescription() {
	            self.descriptionEditable = true;
	            self.originalDescription = self.paragraph.description;
	        }
	    }, {
	        key: 'isDescriptionEditable',
	        value: function isDescriptionEditable() {
	            return self.descriptionEditable;
	        }
	    }, {
	        key: 'saveDescriptionChanges',
	        value: function saveDescriptionChanges() {
	            self.originalDescription = null;
	            self.descriptionEditable = false;
	            this.updateLastEditedBy();
	            self.persistenceService.updateParagraph(self.paragraph);
	        }
	    }, {
	        key: 'updateLastEditedBy',
	        value: function updateLastEditedBy() {
	            self.paragraph.lastEditedBy = self.playerName;
	        }
	    }, {
	        key: 'abortDescriptionChanges',
	        value: function abortDescriptionChanges() {
	            self.paragraph.description = self.originalDescription;
	            self.originalDescription = null;
	            self.descriptionEditable = false;
	        }
	    }, {
	        key: 'editRow',
	        value: function editRow(row) {
	            self.editedRow = row;
	            self.originalRow = { paragraphNr: row.paragraphNr, description: row.description };
	        }
	    }, {
	        key: 'isRowEdited',
	        value: function isRowEdited(row) {
	            return row === self.editedRow || row === self.addedRow;
	        }
	    }, {
	        key: 'hasEditedRow',
	        value: function hasEditedRow() {
	            return !!self.editedRow || !!self.addedRow;
	        }
	    }, {
	        key: 'saveRowChanges',
	        value: function saveRowChanges($invalid) {
	            if ($invalid) {
	                return;
	            }
	            self.clearEditedRow();
	            self.saveParagraphChoices();
	        }
	    }, {
	        key: 'saveParagraphChoices',
	        value: function saveParagraphChoices() {
	            this.updateLastEditedBy();
	            self.persistenceService.updateParagraph(self.paragraph);
	        }
	    }, {
	        key: 'abortRowChanges',
	        value: function abortRowChanges() {
	            if (!!self.addedRow) {
	                self.removeRow(self.addedRow);
	            }
	            if (!!self.editedRow) {
	                self.editedRow.paragraphNr = self.originalRow.paragraphNr;
	                self.editedRow.description = self.originalRow.description;
	            }
	            self.clearEditedRow();
	        }
	    }, {
	        key: 'clearEditedRow',
	        value: function clearEditedRow() {
	            self.addedRow = null;
	            self.editedRow = null;
	            self.originalRow = null;
	        }
	    }, {
	        key: 'goTo',
	        value: function goTo(paragraphNr) {
	            self.persistenceService.setCurrentParagraphNrOfGame(self.gameId, self.paragraph.paragraphNr, paragraphNr);
	            var nextUrl = self.persistenceService.getUrlOfGame(self.gameId);
	            self.$location.url(nextUrl);
	        }
	    }]);
	
	    return ParagraphController;
	})();
	
	exports['default'] = ParagraphController;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _backButtonHtml = __webpack_require__(52);
	
	var _backButtonHtml2 = _interopRequireDefault(_backButtonHtml);
	
	var _backButtonController = __webpack_require__(53);
	
	var _backButtonController2 = _interopRequireDefault(_backButtonController);
	
	var backButtonModule = _angular2['default'].module('app.components.gui.components.back-button', []).component('backButton', { template: _backButtonHtml2['default'], controller: _backButtonController2['default'] });
	
	exports['default'] = backButtonModule;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\"\n        class=\"btn btn-default glyphicon glyphicon-circle-arrow-left\"\n        aria-label=\"{{ 'Back' | translate }}\"\n        title=\"{{ 'Back' | translate }}\"\n        ng-click=\"$ctrl.back()\"\n        ng-disabled=\"$ctrl.isBackDisabled()\">\n    {{ 'Back' | translate }}\n</button>"

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var BackButtonController = (function () {
	    /*@ngInject*/
	
	    function BackButtonController($window) {
	        _classCallCheck(this, BackButtonController);
	
	        self = this;
	        self.$window = $window;
	    }
	
	    _createClass(BackButtonController, [{
	        key: "isBackDisabled",
	        value: function isBackDisabled() {
	            return self.$window.history.length < 2;
	        }
	    }, {
	        key: "back",
	        value: function back() {
	            self.$window.history.back();
	        }
	    }]);
	
	    return BackButtonController;
	})();
	
	exports["default"] = BackButtonController;
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _endGamePopupHtml = __webpack_require__(55);
	
	var _endGamePopupHtml2 = _interopRequireDefault(_endGamePopupHtml);
	
	var _endGamePopupController = __webpack_require__(56);
	
	var _endGamePopupController2 = _interopRequireDefault(_endGamePopupController);
	
	var _endGamePopupService = __webpack_require__(57);
	
	var _endGamePopupService2 = _interopRequireDefault(_endGamePopupService);
	
	__webpack_require__(58);
	
	var endGamePopupModule = _angular2['default'].module('app.components.gui.components.end-game-popup', []).component('endGamePopup', {
	    template: _endGamePopupHtml2['default'],
	    controller: _endGamePopupController2['default'],
	    bindings: {
	        config: '@'
	    }
	}).service('endGamePopupService', _endGamePopupService2['default']);
	
	exports['default'] = endGamePopupModule;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{$ctrl.cfg.id}}\" class=\"modal\">\n    <div class=\"modal-content\">\n        <h1>{{ 'Are you sure to abandon this game?' | translate }}</h1>\n\n        <div class=\"form-group\">\n            <label for=\"endGameReason\">{{ \"End game's reason\" | translate }}</label>\n            <input type=\"text\" class=\"form-control\" id=\"endGameReason\" ng-model=\"$ctrl.endGameReason\">\n        </div>\n\n        <span ng-repeat=\"choice in $ctrl.choices\">\n            <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.select(choice)\">{{ choice | translate }}</button>&nbsp;\n        </span>\n    </div>\n</div>\n"

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var EndGamePopupController = (function () {
	    /*@ngInject*/
	
	    function EndGamePopupController(preScreenLoadingInterceptorsCallerService, endGamePopupService, constants) {
	        _classCallCheck(this, EndGamePopupController);
	
	        this.cfg = JSON.parse(this.config);
	        self = this;
	        self.constants = constants;
	        self.endGamePopupService = endGamePopupService;
	        self.choices = [constants.choices.yes, constants.choices.no];
	    }
	
	    _createClass(EndGamePopupController, [{
	        key: "select",
	        value: function select(choice) {
	            this.close(choice);
	        }
	    }, {
	        key: "close",
	        value: function close(choice) {
	            this.endGamePopupService.close(this.cfg.id, choice, self.endGameReason);
	        }
	    }]);
	
	    return EndGamePopupController;
	})();
	
	exports["default"] = EndGamePopupController;
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var EndGamePopupService = (function () {
	
	    /*@ngInject*/
	
	    function EndGamePopupService(constants) {
	        _classCallCheck(this, EndGamePopupService);
	
	        self = this;
	        self.constants = constants;
	        self.popups = {};
	    }
	
	    _createClass(EndGamePopupService, [{
	        key: "show",
	        value: function show(popupDomElementId, callback) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "block";
	
	            self.popups[popupDomElementId] = callback;
	        }
	    }, {
	        key: "close",
	        value: function close(popupDomElementId, choice, endGameReason) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "none";
	
	            var callback = self.popups[popupDomElementId];
	            if (!!callback && choice === self.constants.choices.yes) {
	                callback(popupDomElementId, endGameReason);
	            }
	            delete self.popups[popupDomElementId];
	        }
	    }]);
	
	    return EndGamePopupService;
	})();
	
	exports["default"] = EndGamePopupService;
	module.exports = exports["default"];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./end-game-popup.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./end-game-popup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, " /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 30%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n    float: right;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _homeHome = __webpack_require__(61);
	
	var _homeHome2 = _interopRequireDefault(_homeHome);
	
	var _gamesGames = __webpack_require__(64);
	
	var _gamesGames2 = _interopRequireDefault(_gamesGames);
	
	var _battleBattle = __webpack_require__(67);
	
	var _battleBattle2 = _interopRequireDefault(_battleBattle);
	
	var _configurationConfiguration = __webpack_require__(70);
	
	var _configurationConfiguration2 = _interopRequireDefault(_configurationConfiguration);
	
	var _chooseLanguageChooseLanguage = __webpack_require__(73);
	
	var _chooseLanguageChooseLanguage2 = _interopRequireDefault(_chooseLanguageChooseLanguage);
	
	var _startGameWizardStartGameWizard = __webpack_require__(76);
	
	var _startGameWizardStartGameWizard2 = _interopRequireDefault(_startGameWizardStartGameWizard);
	
	var _inGameInGame = __webpack_require__(86);
	
	var _inGameInGame2 = _interopRequireDefault(_inGameInGame);
	
	var _aboutAbout = __webpack_require__(89);
	
	var _aboutAbout2 = _interopRequireDefault(_aboutAbout);
	
	var _deleteDataDeleteData = __webpack_require__(92);
	
	var _deleteDataDeleteData2 = _interopRequireDefault(_deleteDataDeleteData);
	
	var screensModule = _angular2['default'].module('app.components.gui.screens', [_homeHome2['default'].name, _gamesGames2['default'].name, _battleBattle2['default'].name, _configurationConfiguration2['default'].name, _chooseLanguageChooseLanguage2['default'].name, _startGameWizardStartGameWizard2['default'].name, _inGameInGame2['default'].name, _aboutAbout2['default'].name, _deleteDataDeleteData2['default'].name]);
	
	exports['default'] = screensModule;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _homeHtml = __webpack_require__(62);
	
	var _homeHtml2 = _interopRequireDefault(_homeHtml);
	
	var _homeController = __webpack_require__(63);
	
	var _homeController2 = _interopRequireDefault(_homeController);
	
	var homeModule = _angular2['default'].module('app.components.gui.screen.home', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('home', {
	        url: constants.url.root, template: '<home></home>'
	    });
	}).component('home', { template: _homeHtml2['default'], controller: _homeController2['default'] });
	
	exports['default'] = homeModule;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n</main>"

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var HomeController = function HomeController($location, $rootScope, preScreenLoadingInterceptorsCallerService, persistenceService, constants) {
	    _classCallCheck(this, HomeController);
	
	    self = this;
	    preScreenLoadingInterceptorsCallerService.intercept();
	    self.$location = $location;
	    self.persistenceService = persistenceService;
	
	    var lastUrl = self.persistenceService.getLastDisplayedScreenUrl();
	    if (!!lastUrl) {
	        $location.url(lastUrl);
	    } else {
	        $location.url(constants.url.games);
	    }
	};
	
	exports["default"] = HomeController;
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _gamesHtml = __webpack_require__(65);
	
	var _gamesHtml2 = _interopRequireDefault(_gamesHtml);
	
	var _gamesController = __webpack_require__(66);
	
	var _gamesController2 = _interopRequireDefault(_gamesController);
	
	var gamesModule = _angular2['default'].module('app.components.gui.screen.games', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('games', {
	        url: constants.url.games, template: '<games></games>'
	    });
	}).component('games', { template: _gamesHtml2['default'], controller: _gamesController2['default'] });
	
	exports['default'] = gamesModule;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'Games' | translate }}</h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <table class=\"table table-striped\">\n                    <col style=\"width:35%\">\n                    <col style=\"width:15% \">\n                    <col style=\"width:30%\">\n                    <col style=\"width:15%\">\n                    <col style=\"width:5%\">\n                    <thead>\n                    <tr>\n                        <th>{{ 'Book' | translate }}</th>\n                        <th>{{ 'Player' | translate }}</th>\n                        <th>{{ 'State' | translate }}</th>\n                        <th>{{ 'Paragraph' | translate }}</th>\n                        <th>{{ 'Selection' | translate }}</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr ng-repeat=\"row in $ctrl.rows\">\n                        <td>{{ row.bookName }}</td>\n                        <td>{{ row.playerName }}</td>\n                        <td>{{ (!!row.endGameReason ? 'game over' : 'in progress') | translate }}\n                            {{ (!!row.endGameReason ? \": '\" + row.endGameReason + \"'\" : '' ) }}\n                        </td>\n                        <td>{{ row.currentParagraphNr }}</td>\n                        <td>\n                            <button type=\"button\" class=\"btn\" ng-class=\"{ 'btn-success' : row.selected, 'btn-default' : !row.selected}\"\n                                    aria-label=\"{{ !row.selected ?\n                                        ('ChoiceGame' | translate: {bookName: row.bookName, playerName: row.playerName}) :\n                                        ('ChoosenGame' | translate: {bookName: row.bookName, playerName: row.playerName}) }}\"\n                                    title=\"{{ !row.selected ?\n                                        ('ChoiceGame' | translate: {bookName: row.bookName, playerName: row.playerName}) :\n                                        ('ChoosenGame' | translate: {bookName: row.bookName, playerName: row.playerName}) }}\"\n                                    ng-click=\"$ctrl.select(row)\">\n                                <span ng-class=\"{ 'glyphicon glyphicon-ok' : row.selected, 'glyphicon glyphicon-hand-left' : !row.selected}\" aria-hidden=\"true\"></span>\n                            </button>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <back-button></back-button>\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.startNewGame()\">{{ 'New game' | translate }}</button>\n        <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"!$ctrl.isContinueAllowed()\" ng-click=\"$ctrl.continueGame()\">{{ 'Continue' | translate }}</button>\n    </div>\n</main>"

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var GamesController = (function () {
	    /*@ngInject*/
	
	    function GamesController($location, preScreenLoadingInterceptorsCallerService, constants, persistenceService, messagesService, $translate) {
	        _classCallCheck(this, GamesController);
	
	        self = this;
	        self.constants = constants;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        self.$location = $location;
	        self.persistenceService = persistenceService;
	        self.messagesService = messagesService;
	        self.$translate = $translate;
	
	        this.initData();
	    }
	
	    _createClass(GamesController, [{
	        key: "initData",
	        value: function initData() {
	            var gamePersistenceKeys = self.persistenceService.getGamePersistenceKeys();
	            var i = undefined;
	
	            self.rows = [];
	            for (i = 0; i < gamePersistenceKeys.length; i++) {
	                var game = self.persistenceService.getGame(gamePersistenceKeys[i]);
	                self.rows.push(game);
	            }
	
	            self.completeBookName(self.rows);
	        }
	    }, {
	        key: "completeBookName",
	        value: function completeBookName(games) {
	            for (var i = 0; i < games.length; i++) {
	                var book = self.persistenceService.getBook(games[i].bookId);
	                if (!!book) {
	                    games[i].bookName = book.name;
	                } else {
	                    self.messagesService.errorMessage(self.$translate.instant('Cannot find book') + " '" + games[i].bookId + "'", false);
	                    games[i].bookName = games[i].bookId;
	                }
	            }
	        }
	    }, {
	        key: "select",
	        value: function select(row) {
	            for (var i = 0; i < self.rows.length; i++) {
	                self.rows[i].selected = false;
	            }
	            row.selected = true;
	        }
	    }, {
	        key: "startNewGame",
	        value: function startNewGame() {
	            self.$location.url(self.constants.url.selectBookForNewGame);
	        }
	    }, {
	        key: "continueGame",
	        value: function continueGame() {
	            var nextUrl = self.persistenceService.getUrlOfGame(self.getSelectedRow().id);
	            self.$location.url(nextUrl);
	        }
	    }, {
	        key: "isContinueAllowed",
	        value: function isContinueAllowed() {
	            return !!self.getSelectedRow();
	        }
	    }, {
	        key: "getSelectedRow",
	        value: function getSelectedRow() {
	            for (var i = 0; i < self.rows.length; i++) {
	                if (!!self.rows[i].selected) {
	                    return self.rows[i];
	                }
	            }
	            return null;
	        }
	    }]);
	
	    return GamesController;
	})();
	
	exports["default"] = GamesController;
	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _battleHtml = __webpack_require__(68);
	
	var _battleHtml2 = _interopRequireDefault(_battleHtml);
	
	var _battleController = __webpack_require__(69);
	
	var _battleController2 = _interopRequireDefault(_battleController);
	
	var BattleModule = _angular2['default'].module('app.components.gui.screen.battle', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('battle', {
	        url: constants.url.battle + '/{game}', template: '<battle></battle>'
	    });
	}).component('battle', { template: _battleHtml2['default'], controller: _battleController2['default'] });
	
	exports['default'] = BattleModule;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'Battle' | translate }}</h1>\n        </div>\n\n        <form name=\"battleTableForm\" novalidate=\"novalidate\">\n            <table class=\"table\">\n                <col style=\"width:20%\">\n                <col style=\"width:10%\" ng-repeat=\"row in $ctrl.stats\">\n                <col style=\"width:{{ $ctrl.lastColumnSizeInPercent() }}%\">\n                <col style=\"width:5%\">\n                <thead>\n                <tr>\n                    <th></th>\n                    <th ng-repeat=\"row in $ctrl.stats\">{{ row.name | translate }}</th>\n                    <th></th>\n                    <th>\n                        <button type=\"button\" class=\"btn btn-default\"\n                                aria-label=\"{{ 'Add enemy' | translate}}\"\n                                title=\"{{ 'Add enemy' | translate}}\"\n                                ng-click=\"$ctrl.addEnemy()\">\n                            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                        </button>\n                    </th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"row in $ctrl.rows\">\n                    <td ng-if=\"!$ctrl.isEnemy(row)\">\n                        {{ row.name }}\n                    </td>\n                    <td ng-if=\"$ctrl.isEnemy(row)\">\n                        <input required type=\"text\" class=\"form-control\" ng-model=\"row.name\">\n                        <div class=\"error\" ng-show=\"!row.name\">\n                            {{ 'Please fill the name' | translate }}\n                        </div>\n                    </td>\n\n                    <td ng-repeat=\"stats in $ctrl.stats\">\n                        <div ng-if=\"!stats.editableForEnemy && !!$ctrl.isEnemy(row)\">\n                            {{ row[stats.name] }}\n                        </div>\n\n                        <div ng-if=\"!!stats.editableForEnemy || !$ctrl.isEnemy(row)\">\n                            <input required type=\"number\" class=\"form-control\" ng-model=\"row[stats.name]\" ng-change=\"$ctrl.save()\">\n                            <div class=\"error\" ng-show=\"!row[stats.name]\">\n                                {{ 'Please fill a value' | translate }}\n                            </div>\n                        </div>\n                    </td>\n\n                    <td></td>\n\n                    <td>\n                        <button type=\"button\" class=\"btn btn-danger\"\n                                aria-label=\"{{ 'Remove enemy' | translate }} {{ row.name | translate }}\"\n                                title=\"{{ 'Remove enemy' | translate }} '{{ row.name | translate }}'\"\n                                ng-click=\"$ctrl.displayRemovePopup(row)\"\n                                ng-show=\"$ctrl.isEnemy(row)\">\n                            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </form>\n\n        <dices></dices>\n        <back-button></back-button>\n\n        <popup config=\"{{ $ctrl.popupDeleteEnemyConfig }}\"></popup>\n</main>"

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var BattleController = (function () {
	    /*@ngInject*/
	
	    function BattleController(preScreenLoadingInterceptorsCallerService, $window, popupService, constants, persistenceService, $stateParams) {
	        _classCallCheck(this, BattleController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        self.$window = $window;
	        self.popupService = popupService;
	        self.constants = constants;
	        self.$stateParams = $stateParams;
	        self.persistenceService = persistenceService;
	
	        self.popupDeleteEnemyConfig = {
	            id: 'popupDeleteEnemy',
	            text: 'Are you sure to remove the enemy?',
	            choices: [constants.choices.yes, constants.choices.no],
	            withCloseButton: false,
	            closeOnClickOutsideModal: false
	        };
	
	        self.initData();
	    }
	
	    _createClass(BattleController, [{
	        key: 'initData',
	        value: function initData() {
	            if (!!self.$stateParams.game) {
	                self.game = self.persistenceService.getGame(decodeURIComponent(self.$stateParams.game));
	                self.book = self.persistenceService.getBook(self.game.bookId);
	            }
	
	            self.initStatsData();
	            self.initPlayerStats();
	            self.defaultEnemy = self.initDefaultEnemy();
	            self.addEnemy();
	        }
	    }, {
	        key: 'initStatsData',
	        value: function initStatsData() {
	            if (!!self.game && !!self.book) {
	                self.stats = [];
	                var i = undefined;
	                for (i = 0; i < self.book.stats.length; i++) {
	                    var currentStats = self.book.stats[i];
	                    if (!!currentStats.battle && !!currentStats.battle.displayed) {
	                        self.stats.push({ name: currentStats.name, enemyDefaultValue: currentStats.battle.enemyDefaultValue, editableForEnemy: currentStats.battle.editableForEnemy });
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'initPlayerStats',
	        value: function initPlayerStats() {
	            if (!!self.stats) {
	                var i = undefined;
	                self.statsPlayer = { name: self.game.playerName };
	
	                for (i = 0; i < self.stats.length; i++) {
	                    var currentStats = self.stats[i];
	
	                    var j = undefined;
	                    for (j = 0; j < self.game.stats.length; j++) {
	                        var currentGameStats = self.game.stats[j];
	                        if (currentStats.name === currentGameStats.name) {
	                            self.statsPlayer[currentStats.name] = currentGameStats.current;
	                            break;
	                        }
	                    }
	                }
	                this.rows = [self.statsPlayer];
	            }
	        }
	    }, {
	        key: 'initDefaultEnemy',
	        value: function initDefaultEnemy() {
	            var defaultEnemyName = 'Enemy';
	            if (!!self.book.defaultEnemyName) {
	                defaultEnemyName = self.book.defaultEnemyName;
	            }
	
	            var i = undefined;
	            var statsDefaultEnemy = { name: defaultEnemyName };
	
	            for (i = 0; i < self.stats.length; i++) {
	                var currentStats = self.stats[i];
	                statsDefaultEnemy[currentStats.name] = currentStats.enemyDefaultValue;
	            }
	
	            return statsDefaultEnemy;
	        }
	    }, {
	        key: 'addEnemy',
	        value: function addEnemy() {
	            this.rows.push(JSON.parse(JSON.stringify(self.defaultEnemy)));
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var i = undefined;
	            for (i = 0; i < self.game.stats.length; i++) {
	                var currentStats = self.game.stats[i];
	                currentStats.current = self.statsPlayer[currentStats.name];
	            }
	            self.persistenceService.updateGame(self.game);
	        }
	    }, {
	        key: 'displayRemovePopup',
	        value: function displayRemovePopup(removedRow) {
	            self.rowToBeRemoved = removedRow;
	            self.popupService.show(self.popupDeleteEnemyConfig.id, self.callbackRemovePopup);
	        }
	    }, {
	        key: 'callbackRemovePopup',
	        value: function callbackRemovePopup(popupDomElementId, choice) {
	            if (choice === self.constants.choices.yes) {
	                self.removeRow(self.rowToBeRemoved);
	            }
	            self.rowToBeRemoved = null;
	        }
	    }, {
	        key: 'removeRow',
	        value: function removeRow(removedRow) {
	            var index = self.rows.indexOf(removedRow);
	            self.rows.splice(index, 1);
	        }
	    }, {
	        key: 'isEnemy',
	        value: function isEnemy(row) {
	            return self.rows.indexOf(row) !== 0;
	        }
	    }, {
	        key: 'lastColumnSizeInPercent',
	        value: function lastColumnSizeInPercent() {
	            var lastColumnSizeInPercent = 75;
	            if (!!self.stats) {
	                lastColumnSizeInPercent = lastColumnSizeInPercent - self.stats.length * 10;
	            }
	            return lastColumnSizeInPercent;
	        }
	    }, {
	        key: 'back',
	        value: function back() {
	            self.$window.history.back();
	        }
	    }]);
	
	    return BattleController;
	})();
	
	exports['default'] = BattleController;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _configurationHtml = __webpack_require__(71);
	
	var _configurationHtml2 = _interopRequireDefault(_configurationHtml);
	
	var _configurationController = __webpack_require__(72);
	
	var _configurationController2 = _interopRequireDefault(_configurationController);
	
	var configurationModule = _angular2['default'].module('app.components.gui.screen.configuration', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('configuration', {
	        url: constants.url.configuration, template: '<configuration></configuration>'
	    });
	}).component('configuration', { template: _configurationHtml2['default'], controller: _configurationController2['default'] });
	
	exports['default'] = configurationModule;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'Configuration' | translate }}</h1>\n        </div>\n        <language-picker></language-picker>\n\n        <h2>{{ 'Administration' | translate }}</h2>\n        <saved-data-admin></saved-data-admin>\n        <back-button></back-button>\n    </div>\n</main>"

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var ConfigurationController =
	/*@ngInject*/
	function ConfigurationController(preScreenLoadingInterceptorsCallerService) {
	    _classCallCheck(this, ConfigurationController);
	
	    self = this;
	    preScreenLoadingInterceptorsCallerService.intercept();
	};
	
	exports["default"] = ConfigurationController;
	module.exports = exports["default"];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _chooseLanguageHtml = __webpack_require__(74);
	
	var _chooseLanguageHtml2 = _interopRequireDefault(_chooseLanguageHtml);
	
	var _chooseLanguageController = __webpack_require__(75);
	
	var _chooseLanguageController2 = _interopRequireDefault(_chooseLanguageController);
	
	var chooseLanguageModule = _angular2['default'].module('app.components.gui.screen.choose-language', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('choose-language', {
	        url: constants.url.chooseLanguage + '?next', template: '<choose-language></choose-language>'
	    });
	}).component('chooseLanguage', { template: _chooseLanguageHtml2['default'], controller: _chooseLanguageController2['default'] });
	
	exports['default'] = chooseLanguageModule;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'Gamebooks Companion' | translate }}</h1>\n        </div>\n        <language-picker></language-picker>\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.goForward()\">{{ 'Continue' | translate }}</button>\n    </div>\n</main>\n"

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var ChooseLanguageController = (function () {
	    /*@ngInject*/
	
	    function ChooseLanguageController(preScreenLoadingInterceptorsCallerService, $location, constants) {
	        _classCallCheck(this, ChooseLanguageController);
	
	        self = this;
	        self.$location = $location;
	        self.constants = constants;
	        preScreenLoadingInterceptorsCallerService.intercept();
	    }
	
	    _createClass(ChooseLanguageController, [{
	        key: "goForward",
	        value: function goForward() {
	            self.$location.url(self.constants.url.games);
	        }
	    }]);
	
	    return ChooseLanguageController;
	})();
	
	exports["default"] = ChooseLanguageController;
	module.exports = exports["default"];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _selectBookSelectBook = __webpack_require__(77);
	
	var _selectBookSelectBook2 = _interopRequireDefault(_selectBookSelectBook);
	
	var _createPlayerCreatePlayer = __webpack_require__(80);
	
	var _createPlayerCreatePlayer2 = _interopRequireDefault(_createPlayerCreatePlayer);
	
	var _chooseItemsChooseItems = __webpack_require__(83);
	
	var _chooseItemsChooseItems2 = _interopRequireDefault(_chooseItemsChooseItems);
	
	var startGameWizardScreenModule = _angular2['default'].module('app.components.gui.screens.start-game-wizard', [_selectBookSelectBook2['default'].name, _createPlayerCreatePlayer2['default'].name, _chooseItemsChooseItems2['default'].name]);
	
	exports['default'] = startGameWizardScreenModule;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _selectBookHtml = __webpack_require__(78);
	
	var _selectBookHtml2 = _interopRequireDefault(_selectBookHtml);
	
	var _selectBookController = __webpack_require__(79);
	
	var _selectBookController2 = _interopRequireDefault(_selectBookController);
	
	var SelectBookModule = _angular2['default'].module('app.components.gui.screen.start-game-wizard.select-book', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('select-book', {
	        url: constants.url.selectBookForNewGame, template: '<select-book></select-book>'
	    });
	}).component('selectBook', { template: _selectBookHtml2['default'], controller: _selectBookController2['default'] });
	
	exports['default'] = SelectBookModule;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'New game' | translate }}</h1>\n        </div>\n\n        <ol class=\"breadcrumb\">\n            <li class=\"active\">{{ 'Select Book' | translate }}</li>\n            <li>{{ 'Create Player' | translate }}</li>\n            <li>{{ 'Choose Items' | translate }}</li>\n        </ol>\n\n        <div class=\"form-group\">\n            <label for=\"selectedBook\">{{ 'Select a gamebook' | translate }}</label>\n            <select id=\"selectedBook\" class=\"form-control\" ng-model=\"$ctrl.selectedBookId\">\n                <option ng-repeat=\"book in $ctrl.getBooks()\" value=\"{{ book.id }}\">{{ book.name }}</option>\n            </select>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.back()\">{{ 'Back' | translate }}</button>\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.next()\">{{ 'Next' | translate }}</button>\n    </div>\n</main>"

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var SelectBookController = (function () {
	    /*@ngInject*/
	
	    function SelectBookController(preScreenLoadingInterceptorsCallerService, constants, $location, $window, persistenceService) {
	        _classCallCheck(this, SelectBookController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        this.$location = $location;
	        this.$window = $window;
	        this.constants = constants;
	        this.persistenceService = persistenceService;
	        this.initData();
	    }
	
	    _createClass(SelectBookController, [{
	        key: "initData",
	        value: function initData() {
	            var bookPersistenceKeys = self.persistenceService.getBookPersistenceKeys();
	            var i = undefined;
	
	            self.books = [];
	            for (i = 0; i < bookPersistenceKeys.length; i++) {
	                var book = self.persistenceService.getBook(bookPersistenceKeys[i]);
	                self.books.push(book);
	            }
	            self.selectedBookId = self.books[0].id;
	        }
	    }, {
	        key: "getBooks",
	        value: function getBooks() {
	            return self.books;
	        }
	    }, {
	        key: "back",
	        value: function back() {
	            self.$window.history.back();
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            self.$location.url(self.constants.url.createPlayerForNewGame + "?bookId=" + encodeURIComponent(self.selectedBookId));
	        }
	    }]);
	
	    return SelectBookController;
	})();
	
	exports["default"] = SelectBookController;
	module.exports = exports["default"];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _createPlayerHtml = __webpack_require__(81);
	
	var _createPlayerHtml2 = _interopRequireDefault(_createPlayerHtml);
	
	var _createPlayerController = __webpack_require__(82);
	
	var _createPlayerController2 = _interopRequireDefault(_createPlayerController);
	
	var CreatePlayerModule = _angular2['default'].module('app.components.gui.screen.start-game-wizard.create-player', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('create-player', {
	        url: constants.url.createPlayerForNewGame + "?bookId", template: '<create-player></create-player>'
	    });
	}).component('createPlayer', { template: _createPlayerHtml2['default'], controller: _createPlayerController2['default'] });
	
	exports['default'] = CreatePlayerModule;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'New game' | translate }}</h1>\n        </div>\n\n        <!-- novalidate=\"novalidate\" allow to do not display untranslated tooltip \"Fill out this field\" -->\n        <form name=\"playerForm\" novalidate=\"novalidate\">\n            <ol class=\"breadcrumb\">\n                <li>{{ 'Select Book' | translate }}</li>\n                <li class=\"active\">{{ 'Create Player' | translate }}</li>\n                <li>{{ 'Choose Items' | translate }}</li>\n            </ol>\n\n            <div class=\"form-group\">\n                <label for=\"playerName\">{{ 'PlayerName' | translate }}*</label>\n                <input type=\"text\" required class=\"form-control\" id=\"playerName\" ng-model=\"$ctrl.playerName\">\n                <div class=\"error\" ng-show=\"playerForm.$invalid\">\n                    {{ 'Please fill the player name' | translate }}\n                </div>\n            </div>\n\n            <div class=\"form-group\" ng-repeat=\"stats in $ctrl.stats\">\n                <label for=\"{{ stats.name }}\">{{ stats.name }}</label>\n                <input type=\"text\" disabled required class=\"form-control\" id=\"{{ stats.name }}\" ng-model=\"stats.value\">\n            </div>\n\n            <div class=\"form-group\">\n                <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.back()\">{{ 'Back' | translate }}</button>\n                <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.generateStats()\">{{ 'Random Stats' | translate }}</button>\n                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.next(playerForm.$invalid)\">{{ 'Next' | translate }}</button>\n            </div>\n        </form>\n    </div>\n</main>"

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var CreatePlayerController = (function () {
	    /*@ngInject*/
	
	    function CreatePlayerController(preScreenLoadingInterceptorsCallerService, $stateParams, $window, $location, constants, dicesService, persistenceService) {
	        _classCallCheck(this, CreatePlayerController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        self.constants = constants;
	        self.$window = $window;
	        self.$location = $location;
	        self.dicesService = dicesService;
	
	        self.book = persistenceService.getBook($stateParams.bookId);
	        this.loadData(self.book);
	        this.generateStats();
	    }
	
	    _createClass(CreatePlayerController, [{
	        key: "loadData",
	        value: function loadData(book) {
	            self.stats = [];
	            var i = undefined;
	
	            var _loop = function () {
	                var currentStats = book.stats[i];
	                self.stats.push({ name: currentStats.name,
	                    generate: function generate() {
	                        return currentStats.init.constant + self.dicesService.rollDices(currentStats.init.sixDiceQuantity, 6);
	                    }
	                });
	            };
	
	            for (i = 0; i < book.stats.length; i++) {
	                _loop();
	            }
	        }
	    }, {
	        key: "generateStats",
	        value: function generateStats() {
	            var i = undefined;
	            for (i = 0; i < self.stats.length; i++) {
	                var stats = self.stats[i];
	                stats.value = stats.generate();
	            }
	        }
	    }, {
	        key: "back",
	        value: function back() {
	            self.$window.history.back();
	        }
	    }, {
	        key: "next",
	        value: function next(invalid) {
	            if (!!invalid) {
	                return;
	            }
	
	            var nextUrl = self.constants.url.chooseItemsForNewGame + "?bookId=" + encodeURIComponent(self.book.id) + "&playerName=" + encodeURIComponent(self.playerName);
	            var i = undefined;
	
	            var statsParam = '';
	            for (i = 0; i < self.stats.length; i++) {
	                var stats = self.stats[i];
	                statsParam = statsParam + encodeURIComponent(stats.name) + encodeURIComponent(stats.value) + ',';
	            }
	
	            nextUrl = nextUrl + "&stats=" + statsParam;
	            self.$location.url(nextUrl);
	        }
	    }]);
	
	    return CreatePlayerController;
	})();
	
	exports["default"] = CreatePlayerController;
	module.exports = exports["default"];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _chooseItemsHtml = __webpack_require__(84);
	
	var _chooseItemsHtml2 = _interopRequireDefault(_chooseItemsHtml);
	
	var _chooseItemsController = __webpack_require__(85);
	
	var _chooseItemsController2 = _interopRequireDefault(_chooseItemsController);
	
	var ChooseItemsModule = _angular2['default'].module('app.components.gui.screen.start-game-wizard.choose-items', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('choose-items', {
	        url: constants.url.chooseItemsForNewGame + "?bookId&playerName&stats", template: '<choose-items></choose-items>'
	    });
	}).component('chooseItems', { template: _chooseItemsHtml2['default'], controller: _chooseItemsController2['default'] });
	
	exports['default'] = ChooseItemsModule;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'New game' | translate }}</h1>\n        </div>\n\n        <ol class=\"breadcrumb\">\n            <li>{{ 'Select Book' | translate }}</li>\n            <li>{{ 'Create Player' | translate }}</li>\n            <li class=\"active\">{{ 'Choose Items' | translate }}</li>\n        </ol>\n\n        <messages></messages>\n\n        <items ng-if=\"$ctrl.isItemsDisplayed()\" items=\"$ctrl.getItems()\"></items>\n\n        <div class=\"spacer\"></div>\n\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.back()\">{{ 'Back' | translate }}</button>\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.startGame()\">{{ 'Start Game' | translate }}</button>\n    </div>\n</main>"

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var ChooseItemsController = (function () {
	    /*@ngInject*/
	
	    function ChooseItemsController(preScreenLoadingInterceptorsCallerService, $stateParams, messagesService, $window, $location, constants, persistenceService, $translate) {
	        _classCallCheck(this, ChooseItemsController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        self.messagesService = messagesService;
	        self.persistenceService = persistenceService;
	        self.$window = $window;
	        self.$stateParams = $stateParams;
	        self.$location = $location;
	        self.$translate = $translate;
	        self.constants = constants;
	
	        self.book = persistenceService.getBook($stateParams.bookId);
	        self.playerItems = self.book.items;
	        var i = undefined;
	        for (i = 0; i < self.playerItems.length; i++) {
	            self.playerItems[i].description = $translate.instant(self.playerItems[i].description);
	        }
	        this.displayNotes();
	    }
	
	    _createClass(ChooseItemsController, [{
	        key: 'isItemsDisplayed',
	        value: function isItemsDisplayed() {
	            return !!self.book.items && self.book.items.length > 0;
	        }
	    }, {
	        key: 'displayNotes',
	        value: function displayNotes() {
	            if (!!self.book.notes) {
	                self.book.notes.forEach(function (entry) {
	                    self.messagesService.infoMessage(entry.note, false);
	                });
	            }
	        }
	    }, {
	        key: 'getItems',
	        value: function getItems() {
	            return self.playerItems;
	        }
	    }, {
	        key: 'startGame',
	        value: function startGame() {
	            var game = self.buildGame();
	            game = self.persistenceService.addGame(game);
	            self.persistenceService.setCurrentParagraphNrOfGame(game.id, null, self.book.startParagraphNr);
	            self.$location.url(self.persistenceService.getUrlOfGame(game.id));
	        }
	    }, {
	        key: 'buildGame',
	        value: function buildGame() {
	            var timestamp = new Date().getTime();
	            var game = {
	                playerName: self.$stateParams.playerName,
	                bookId: self.book.id,
	                items: JSON.parse(JSON.stringify(self.playerItems))
	            };
	            game.stats = self.getStatsInUrlParam();
	            return game;
	        }
	    }, {
	        key: 'getStatsInUrlParam',
	        value: function getStatsInUrlParam() {
	            var statsParamValue = self.$stateParams['stats'];
	            var stats = [];
	            var i = undefined;
	            for (i = 0; i < self.book.stats.length; i++) {
	                var currentStats = self.book.stats[i];
	                var startPos = statsParamValue.indexOf(currentStats.name);
	                startPos = startPos + currentStats.name.length;
	                var endPos = statsParamValue.indexOf(',', startPos);
	                var statsValue = statsParamValue.substring(startPos, endPos);
	                stats.push({
	                    name: currentStats.name,
	                    value: new Number(statsValue)
	                });
	            }
	            return stats;
	        }
	    }, {
	        key: 'back',
	        value: function back() {
	            self.$window.history.back();
	        }
	    }]);
	
	    return ChooseItemsController;
	})();
	
	exports['default'] = ChooseItemsController;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _inGameHtml = __webpack_require__(87);
	
	var _inGameHtml2 = _interopRequireDefault(_inGameHtml);
	
	var _inGameController = __webpack_require__(88);
	
	var _inGameController2 = _interopRequireDefault(_inGameController);
	
	var inGameModule = _angular2['default'].module('app.components.gui.screen.in-game', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider.state('in-game', {
	        url: constants.url.inGame, template: '<in-game></in-game>'
	    });
	}).component('inGame', { template: _inGameHtml2['default'], controller: _inGameController2['default'] });
	
	exports['default'] = inGameModule;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'Paragraph' | translate }} {{ $ctrl.paragraph.paragraphNr }}</h1>\n        </div>\n\n        <div id=\"paragraphEdit\">\n            <paragraph paragraph=\"$ctrl.paragraph\" game-id=\"{{$ctrl.game.id}}\"></paragraph>\n            <notes book-id=\"{{$ctrl.bookId}}\" paragraph-nr=\"{{$ctrl.paragraph.paragraphNr}}\" game-id=\"{{$ctrl.game.id}}\"></notes>\n        </div>\n\n        <div id=\"playerSheet\" ng-if=\"!!$ctrl.playerName\">\n            <h2>{{ 'Player' | translate }} {{ $ctrl.playerName }}</h2>\n            <stats game-id=\"{{$ctrl.game.id}}\" stats=\"$ctrl.stats\"></stats>\n            <items game-id=\"{{$ctrl.game.id}}\" items=\"$ctrl.items\"></items>\n            <dices></dices>\n            <back-button></back-button>\n            <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.startBattle()\">{{ 'Start Battle' | translate }}</button>\n            <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.displayAbandonGamePopup()\">{{ 'End Game' | translate }}</button>\n        </div>\n    </div>\n\n    <end-game-popup config=\"{{ $ctrl.popupAbandonGameConfig }}\"></end-game-popup>\n</main>"

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var InGameController = (function () {
	    /*@ngInject*/
	
	    function InGameController(preScreenLoadingInterceptorsCallerService, $location, constants, endGamePopupService, $stateParams, persistenceService, $translate) {
	        _classCallCheck(this, InGameController);
	
	        self = this;
	        preScreenLoadingInterceptorsCallerService.intercept();
	        self.$location = $location;
	        self.constants = constants;
	        self.endGamePopupService = endGamePopupService;
	        self.$stateParams = $stateParams;
	        self.persistenceService = persistenceService;
	        self.$translate = $translate;
	        this.items = [];
	        this.stats = [];
	
	        self.game = self.persistenceService.getGame(decodeURIComponent(self.$stateParams.gameId));
	        this.playerName = self.game.playerName;
	        if (!!self.game.items) {
	            this.items = this.items.concat(self.game.items);
	        }
	        if (!!self.game.stats) {
	            this.stats = this.stats.concat(self.game.stats);
	        }
	        self.bookId = self.$stateParams.bookId;
	        this.paragraph = self.persistenceService.getOrCreateParagraph(self.bookId, self.$stateParams.paragraphNr);
	        self.popupAbandonGameConfig = { id: 'popupAbandonGame' };
	    }
	
	    _createClass(InGameController, [{
	        key: 'startBattle',
	        value: function startBattle() {
	            self.$location.url(self.constants.url.battle + '/' + self.game.id);
	        }
	    }, {
	        key: 'displayAbandonGamePopup',
	        value: function displayAbandonGamePopup(removedRow) {
	            self.endGamePopupService.show(self.popupAbandonGameConfig.id, self.callbackAbandonGamePopup);
	        }
	    }, {
	        key: 'callbackAbandonGamePopup',
	        value: function callbackAbandonGamePopup(popupDomElementId, endGameReason) {
	            var updatedGame = self.persistenceService.getGame(self.game.id);
	            updatedGame.endGameReason = endGameReason;
	            self.persistenceService.updateGame(updatedGame);
	            self.$location.url(self.constants.url.games);
	        }
	    }]);
	
	    return InGameController;
	})();
	
	exports['default'] = InGameController;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _aboutHtml = __webpack_require__(90);
	
	var _aboutHtml2 = _interopRequireDefault(_aboutHtml);
	
	var _aboutController = __webpack_require__(91);
	
	var _aboutController2 = _interopRequireDefault(_aboutController);
	
	var aboutModule = _angular2['default'].module('app.components.gui.screen.about', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('about', {
	        url: constants.url.about, template: '<about></about>'
	    });
	}).component('about', { template: _aboutHtml2['default'], controller: _aboutController2['default'] });
	
	exports['default'] = aboutModule;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'About' | translate }}</h1>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"appDescription\">{{ \"Application's description\" | translate }}</label>\n            <div id=\"appDescription\">{{ 'application.description' | translate }}</div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"appVersion\">{{ \"Application's version\" | translate }}</label>\n            <div id=\"appVersion\">{{ $ctrl.appVersion }}</div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"license\">{{ \"License\" | translate }}</label>\n            <div id=\"license\"><a href=\"http://morarupasukaru.github.io/gamebooks-assistant/LICENSE.txt\" target=\"_blank\">MIT</a></div>\n        </div>\n\n        <h2>{{ 'Credits' | translate }}</h2>\n\n        <table class=\"table table-striped\">\n            <col style=\"width:30%\">\n            <col style=\"width:30%\">\n            <col style=\"width:40%\">\n            <thead>\n            <tr>\n                <th>{{ 'Who' | translate }}</th>\n                <th>{{ 'For' | translate }}</th>\n                <th>{{ 'Link' | translate }}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td>Ravenmore</td>\n                <td>\n                    {{ 'map image used as favicon' | translate }}\n                    <img src=\"http://morarupasukaru.github.io/gamebooks-assistant/apple-touch-icon-57x57.png\" width=\"32\" height=\"32\" />\n                </td>\n                <td><a href=\"//opengameart.org/content/fantasy-icon-pack-by-ravenmore-0\">opengameart.org Ravenmore page</a></td>\n            </tr>\n            <tr>\n                <td>JamesWhite</td>\n                <td>\n                    {{ 'dice image' | translate }}\n                    <img src=\"http://morarupasukaru.github.io/gamebooks-assistant/dice.png\" width=\"32\" height=\"32\" />\n                </td>\n                <td>\n                    <a href=\"http://opengameart.org/content/dice-4\">opengameart.org JamesWhite page</a>\n                </td>\n            </tr>\n            <tr>\n                <td>SBB (Schweizerische Bundesbahnen)</td>\n                <td>{{ 'Web/JS Framework' | translate }}</td>\n                <td><a href=\"https://github.com/SchweizerischeBundesbahnen/esta-webjs\">esta-webjs project github page</a></td>\n            </tr>\n            <tr>\n                <td>{{ 'Developers and contributors' | translate }}</td>\n                <td>{{ 'Angular JS, Bootstrap, Webpack and all existing tools that make javascript development fun to code' | translate }}</td>\n                <td></td>\n            </tr>\n            </tbody>\n        </table>\n\n        <back-button></back-button>\n    </div>\n</main>"

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var AboutController =
	/*@ngInject*/
	function AboutController(preScreenLoadingInterceptorsCallerService, constants) {
	    _classCallCheck(this, AboutController);
	
	    self = this;
	    preScreenLoadingInterceptorsCallerService.intercept();
	    self.appVersion = constants.version;
	};
	
	exports["default"] = AboutController;
	module.exports = exports["default"];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _deleteDataHtml = __webpack_require__(93);
	
	var _deleteDataHtml2 = _interopRequireDefault(_deleteDataHtml);
	
	var _deleteDataController = __webpack_require__(94);
	
	var _deleteDataController2 = _interopRequireDefault(_deleteDataController);
	
	var configurationModule = _angular2['default'].module('app.components.gui.screen.delete-data', [_angularUiRouter2['default']]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider.state('deleteData', {
	        url: constants.url.deleteData, template: '<delete-data></delete-data>'
	    });
	}).component('deleteData', { template: _deleteDataHtml2['default'], controller: _deleteDataController2['default'] });
	
	exports['default'] = configurationModule;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<navbar></navbar>\n<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>{{ 'Administration' | translate }}</h1>\n        </div>\n        <div class=\"col-md-12\">\n            <form>\n                <div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-danger\" ng-click=\"$ctrl.showPopupConfirmDeleteApplicationData()\" aria-label=\"{{ 'Delete application\\'s data' | translate }}\">{{ \"Delete application's data\" | translate }}</button>\n                    </div>\n                </div>\n            </form>\n\n            <popup config=\"{{ $ctrl.popupConfirmDeleteApplicationDataConfig }}\"></popup>\n        </div>\n\n        <back-button></back-button>\n    </div>\n</main>"

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var DeleteDataController = (function () {
	
	    /*@ngInject*/
	
	    function DeleteDataController(persistenceService, constants, popupService, $window) {
	        _classCallCheck(this, DeleteDataController);
	
	        self = this;
	        self.persistenceService = persistenceService;
	        self.constants = constants;
	        self.popupService = popupService;
	        self.$window = $window;
	
	        self.popupConfirmDeleteApplicationDataConfig = {
	            id: 'popupConfirmDeleteApplicationData',
	            text: 'Are you sure to clear the application data?',
	            choices: [constants.choices.yes, constants.choices.no],
	            withCloseButton: false,
	            closeOnClickOutsideModal: false
	        };
	    }
	
	    _createClass(DeleteDataController, [{
	        key: 'showPopupConfirmDeleteApplicationData',
	        value: function showPopupConfirmDeleteApplicationData() {
	            self.popupService.show(self.popupConfirmDeleteApplicationDataConfig.id, self.callbackPopupConfirmDeleteApplicationData);
	        }
	    }, {
	        key: 'callbackPopupConfirmDeleteApplicationData',
	        value: function callbackPopupConfirmDeleteApplicationData(popupDomElementId, choice) {
	            if (choice === self.constants.choices.yes) {
	                self.persistenceService.cleanAllData();
	                self.$window.location.reload();
	            }
	        }
	    }]);
	
	    return DeleteDataController;
	})();
	
	exports['default'] = DeleteDataController;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _languageAvailabilityCheckerLanguageAvailabilityChecker = __webpack_require__(96);
	
	var _languageAvailabilityCheckerLanguageAvailabilityChecker2 = _interopRequireDefault(_languageAvailabilityCheckerLanguageAvailabilityChecker);
	
	var _softwareRequirementsCheckerSoftwareRequirementsChecker = __webpack_require__(98);
	
	var _softwareRequirementsCheckerSoftwareRequirementsChecker2 = _interopRequireDefault(_softwareRequirementsCheckerSoftwareRequirementsChecker);
	
	var _preScreenLoadingInterceptorsCallerPreScreenLoadingInterceptorsCaller = __webpack_require__(100);
	
	var _preScreenLoadingInterceptorsCallerPreScreenLoadingInterceptorsCaller2 = _interopRequireDefault(_preScreenLoadingInterceptorsCallerPreScreenLoadingInterceptorsCaller);
	
	var _persistencePersistence = __webpack_require__(102);
	
	var _persistencePersistence2 = _interopRequireDefault(_persistencePersistence);
	
	var _dicesDices = __webpack_require__(104);
	
	var _dicesDices2 = _interopRequireDefault(_dicesDices);
	
	var _booksLoaderInterceptorBooksLoaderInterceptor = __webpack_require__(106);
	
	var _booksLoaderInterceptorBooksLoaderInterceptor2 = _interopRequireDefault(_booksLoaderInterceptorBooksLoaderInterceptor);
	
	var _saveScreenUrlInterceptorSaveScreenUrlInterceptor = __webpack_require__(108);
	
	var _saveScreenUrlInterceptorSaveScreenUrlInterceptor2 = _interopRequireDefault(_saveScreenUrlInterceptorSaveScreenUrlInterceptor);
	
	var _booksBooks = __webpack_require__(110);
	
	var _booksBooks2 = _interopRequireDefault(_booksBooks);
	
	var servicesModule = _angular2['default'].module('app.components.services', [_softwareRequirementsCheckerSoftwareRequirementsChecker2['default'].name, _persistencePersistence2['default'].name, _dicesDices2['default'].name, _languageAvailabilityCheckerLanguageAvailabilityChecker2['default'].name, _preScreenLoadingInterceptorsCallerPreScreenLoadingInterceptorsCaller2['default'].name, _booksLoaderInterceptorBooksLoaderInterceptor2['default'].name, _saveScreenUrlInterceptorSaveScreenUrlInterceptor2['default'].name, _booksBooks2['default'].name]);
	
	exports['default'] = servicesModule;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _languageAvailabilityCheckerService = __webpack_require__(97);
	
	var _languageAvailabilityCheckerService2 = _interopRequireDefault(_languageAvailabilityCheckerService);
	
	/*@ngInject*/
	var languageAvailabilityCheckerModule = _angular2['default'].module('app.components.services.language-availability-checker', []).service('languageAvailabilityCheckerService', _languageAvailabilityCheckerService2['default']);
	
	exports['default'] = languageAvailabilityCheckerModule;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var LanguageAvailabilityCheckerService = (function () {
	
	    /*@ngInject*/
	
	    function LanguageAvailabilityCheckerService(persistenceService, $location, constants, $translate) {
	        _classCallCheck(this, LanguageAvailabilityCheckerService);
	
	        self = this;
	        self.persistenceService = persistenceService;
	        self.$location = $location;
	        self.constants = constants;
	        self.$translate = $translate;
	    }
	
	    _createClass(LanguageAvailabilityCheckerService, [{
	        key: 'selectLanguageIfMissing',
	        value: function selectLanguageIfMissing() {
	            var selectedLanguage = self.persistenceService.getSelectedLanguage();
	            var currentUrl = self.$location.url();
	            if (!!selectedLanguage) {
	                self.$translate.use(selectedLanguage);
	            } else {
	                if (!!currentUrl && !currentUrl.startsWith('/choose-language')) {
	                    self.$location.url(self.constants.url.chooseLanguage + '?next=' + encodeURIComponent(currentUrl));
	                }
	            }
	        }
	    }]);
	
	    return LanguageAvailabilityCheckerService;
	})();
	
	exports['default'] = LanguageAvailabilityCheckerService;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _softwareRequirementsCheckerService = __webpack_require__(99);
	
	var _softwareRequirementsCheckerService2 = _interopRequireDefault(_softwareRequirementsCheckerService);
	
	/*@ngInject*/
	var softwareRequirementsCheckerModule = _angular2['default'].module('app.components.services.software-requirements-checker', []).service('softwareRequirementsCheckerService', _softwareRequirementsCheckerService2['default']);
	
	exports['default'] = softwareRequirementsCheckerModule;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var SoftwareRequirementsCheckerService = (function () {
	
	    /*@ngInject*/
	
	    function SoftwareRequirementsCheckerService(messagesService) {
	        _classCallCheck(this, SoftwareRequirementsCheckerService);
	
	        self = this;
	        self.messagesService = messagesService;
	    }
	
	    _createClass(SoftwareRequirementsCheckerService, [{
	        key: 'checkSoftwareRequirements',
	        value: function checkSoftwareRequirements() {
	            var hasSoftwareRequirements = true;
	            if (!self.isLocalStorageSupported()) {
	                hasSoftwareRequirements = false;
	                self.messagesService.errorMessage("The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.", true);
	            }
	        }
	    }, {
	        key: 'isLocalStorageSupported',
	        value: function isLocalStorageSupported() {
	            try {
	                var storage = window['localStorage'];
	                var x = '__storage_test__';
	                storage.setItem(x, x);
	                storage.removeItem(x);
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }
	    }]);
	
	    return SoftwareRequirementsCheckerService;
	})();
	
	exports['default'] = SoftwareRequirementsCheckerService;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _preScreenLoadingInterceptorsCallerService = __webpack_require__(101);
	
	var _preScreenLoadingInterceptorsCallerService2 = _interopRequireDefault(_preScreenLoadingInterceptorsCallerService);
	
	/*@ngInject*/
	var preScreenLoadingInterceptorsCallerModule = _angular2['default'].module('app.components.services.pre-screen-loading-interceptors-caller', []).service('preScreenLoadingInterceptorsCallerService', _preScreenLoadingInterceptorsCallerService2['default']);
	
	exports['default'] = preScreenLoadingInterceptorsCallerModule;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var PreScreenLoadingInterceptorsCallerService = (function () {
	
	    /*@ngInject*/
	
	    function PreScreenLoadingInterceptorsCallerService(languageAvailabilityCheckerService, softwareRequirementsCheckerService, saveScreenUrlInterceptorService, booksLoaderInterceptorService) {
	        _classCallCheck(this, PreScreenLoadingInterceptorsCallerService);
	
	        self = this;
	        self.softwareRequirementsCheckerService = softwareRequirementsCheckerService;
	        self.languageAvailabilityCheckerService = languageAvailabilityCheckerService;
	        self.saveScreenUrlInterceptorService = saveScreenUrlInterceptorService;
	        self.booksLoaderInterceptorService = booksLoaderInterceptorService;
	    }
	
	    _createClass(PreScreenLoadingInterceptorsCallerService, [{
	        key: "intercept",
	        value: function intercept() {
	            self.softwareRequirementsCheckerService.checkSoftwareRequirements();
	            self.languageAvailabilityCheckerService.selectLanguageIfMissing();
	            self.saveScreenUrlInterceptorService.saveScreenUrl();
	            self.booksLoaderInterceptorService.loadBooks();
	        }
	    }]);
	
	    return PreScreenLoadingInterceptorsCallerService;
	})();
	
	exports["default"] = PreScreenLoadingInterceptorsCallerService;
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _persistenceService = __webpack_require__(103);
	
	var _persistenceService2 = _interopRequireDefault(_persistenceService);
	
	/*@ngInject*/
	var persistenceModule = _angular2['default'].module('app.components.services.persistence', []).service('persistenceService', _persistenceService2['default']);
	
	exports['default'] = persistenceModule;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var PersistenceService = (function () {
	
	    /*@ngInject*/
	
	    function PersistenceService(softwareRequirementsCheckerService, constants, messagesService, booksService) {
	        _classCallCheck(this, PersistenceService);
	
	        self = this;
	        self.isLocalStorageSupported = softwareRequirementsCheckerService.isLocalStorageSupported();
	        self.constants = constants;
	        self.messagesService = messagesService;
	        self.booksService = booksService;
	    }
	
	    _createClass(PersistenceService, [{
	        key: 'getSelectedLanguage',
	        value: function getSelectedLanguage() {
	            return self.get(self.constants.data.selectedLanguage);
	        }
	    }, {
	        key: 'setSelectedLanguage',
	        value: function setSelectedLanguage(language) {
	            self.save(self.constants.data.selectedLanguage, language);
	        }
	    }, {
	        key: 'getLastDisplayedScreenUrl',
	        value: function getLastDisplayedScreenUrl() {
	            return self.get(self.constants.data.lastDisplayedScreenUrl);
	        }
	    }, {
	        key: 'setLastDisplayedScreenUrl',
	        value: function setLastDisplayedScreenUrl(lastDisplayedScreenUrl) {
	            self.save(self.constants.data.lastDisplayedScreenUrl, lastDisplayedScreenUrl);
	        }
	    }, {
	        key: 'getBookPersistenceKeys',
	        value: function getBookPersistenceKeys() {
	            if (!self.isLocalStorageSupported) {
	                return null;
	            }
	            var keys = Object.keys(localStorage);
	            var result = [];
	            var i = undefined;
	            for (i = 0; i < keys.length; i++) {
	                if (keys[i].startsWith(self.constants.data.book) && keys[i].indexOf('paragraph.') === -1) {
	                    result.push(keys[i]);
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'findKeysWithPrefix',
	        value: function findKeysWithPrefix(keyPrefix) {
	            if (!self.isLocalStorageSupported) {
	                return null;
	            }
	            var keys = Object.keys(localStorage);
	            var result = [];
	            var i = undefined;
	            for (i = 0; i < keys.length; i++) {
	                if (keys[i].startsWith(keyPrefix)) {
	                    result.push(keys[i]);
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'getBook',
	        value: function getBook(bookId) {
	            return self.get(self.getBookPersistenceKey(bookId));
	        }
	    }, {
	        key: 'setBook',
	        value: function setBook(book) {
	            var bookInfo = {};
	            var keys = Object.keys(book);
	            var i = undefined;
	            for (i = 0; i < keys.length; i++) {
	                if (keys[i] !== 'paragraphs') {
	                    bookInfo[keys[i]] = book[keys[i]];
	                }
	            }
	            self.save(self.constants.data.book + "." + book.id, bookInfo);
	        }
	    }, {
	        key: 'setParagraph',
	        value: function setParagraph(bookId, paragraph) {
	            var key = self.getParagraphPersistenceKey(bookId, paragraph.paragraphNr);
	            self.save(key, paragraph);
	        }
	    }, {
	        key: 'getOrCreateParagraph',
	        value: function getOrCreateParagraph(bookId, paragraphNr) {
	            var foundParagraph = self.getParagraph(bookId, paragraphNr);
	            if (!!foundParagraph) {
	                return foundParagraph;
	            } else {
	                var paragraph = {
	                    version: self.constants.version,
	                    bookId: bookId,
	                    paragraphNr: new Number(paragraphNr),
	                    description: '',
	                    choices: []
	                };
	                self.updateParagraph(paragraph);
	                return paragraph;
	            }
	        }
	    }, {
	        key: 'getParagraph',
	        value: function getParagraph(bookId, paragraphNr) {
	            var key = self.getParagraphPersistenceKey(bookId, paragraphNr);
	            return self.get(key);
	        }
	    }, {
	        key: 'updateParagraph',
	        value: function updateParagraph(paragraph) {
	            if (!paragraph) {
	                return;
	            }
	            paragraph = JSON.parse(JSON.stringify(paragraph));
	            var key = self.getParagraphPersistenceKey(paragraph.bookId, paragraph.paragraphNr);
	            if (!!paragraph.choices) {
	                var i = undefined;
	                for (i = 0; i < paragraph.choices.length; i++) {
	                    delete paragraph.choices[i]['$$hashKey'];
	                }
	            }
	            self.save(key, paragraph);
	        }
	    }, {
	        key: 'getParagraphPersistenceKey',
	        value: function getParagraphPersistenceKey(bookId, paragraphNr) {
	            return self.getBookPersistenceKey(bookId) + ".paragraph." + paragraphNr;
	        }
	    }, {
	        key: 'getBookPersistenceKey',
	        value: function getBookPersistenceKey(bookId) {
	            var key = bookId;
	            if (!key.startsWith(self.constants.data.book)) {
	                key = self.constants.data.book + "." + key;
	            }
	            return key;
	        }
	    }, {
	        key: 'addGame',
	        value: function addGame(game) {
	            var savedGame = {
	                id: self.newId(),
	                playerName: game.playerName,
	                bookId: game.bookId,
	                items: game.items,
	                stats: game.stats,
	                currentParagraphNr: game.currentParagraphNr
	            };
	
	            savedGame.stats = [];
	            var i = undefined;
	            for (i = 0; i < game.stats.length; i++) {
	                savedGame.stats.push({ name: game.stats[i].name, initial: game.stats[i].value, current: game.stats[i].value });
	            }
	
	            self.updateGame(savedGame);
	            return savedGame;
	        }
	    }, {
	        key: 'updateGame',
	        value: function updateGame(game) {
	            if (!game) {
	                return;
	            }
	            game = JSON.parse(JSON.stringify(game));
	
	            var key = self.getGamePersistenceKey(game.id);
	            if (!!game.items) {
	                var i = undefined;
	                for (i = 0; i < game.items.length; i++) {
	                    delete game.items[i]['$$hashKey'];
	                }
	            }
	            self.save(key, game);
	        }
	    }, {
	        key: 'newId',
	        value: function newId() {
	            return new Date().getTime().toString();
	        }
	    }, {
	        key: 'setCurrentParagraphNrOfGame',
	        value: function setCurrentParagraphNrOfGame(gameId, fromParagrahNr, toParagraphNr) {
	            var game = this.getGame(gameId);
	            if (!!fromParagrahNr) {
	                var paragraph = this.getParagraph(game.bookId, fromParagrahNr);
	                var choice = undefined;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = paragraph.choices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        choice = _step.value;
	
	                        if (choice.paragraphNr === toParagraphNr) {
	                            choice.alreadyChoosen = true;
	                            break;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator['return']) {
	                            _iterator['return']();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                this.updateParagraph(paragraph);
	            }
	            game.currentParagraphNr = toParagraphNr;
	            if (!game.path) {
	                game.path = [];
	            }
	            game.path.push(toParagraphNr);
	            this.updateGame(game);
	        }
	    }, {
	        key: 'getUrlOfGame',
	        value: function getUrlOfGame(gameId, paragraphNr) {
	            var game = self.getGame(gameId);
	            if (!paragraphNr) {
	                paragraphNr = game.currentParagraphNr;
	            }
	            var urlOfGame = "/" + encodeURIComponent(game.bookId) + "/" + encodeURIComponent(paragraphNr) + "/game/" + encodeURIComponent(game.id);
	            return urlOfGame;
	        }
	    }, {
	        key: 'getGame',
	        value: function getGame(gameId) {
	            var key = self.getGamePersistenceKey(gameId);
	            return self.get(key);
	        }
	    }, {
	        key: 'getGamePersistenceKeys',
	        value: function getGamePersistenceKeys() {
	            return self.findKeysWithPrefix(self.constants.data.game);
	        }
	    }, {
	        key: 'getGamePersistenceKey',
	        value: function getGamePersistenceKey(gameId) {
	            var key = gameId;
	            if (!key.startsWith(self.constants.data.game)) {
	                key = self.constants.data.game + "." + key;
	            }
	            return key;
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            if (!self.isLocalStorageSupported) {
	                return null;
	            }
	            var value = localStorage.getItem(key);
	            if (value === null || value === "undefined" || value === undefined) {
	                return null;
	            } else {
	                try {
	                    return JSON.parse(value);
	                } catch (e) {
	                    // cannot be parsed, must be a string
	                    return value;
	                }
	            }
	        }
	    }, {
	        key: 'save',
	        value: function save(key, value) {
	            if (!self.isLocalStorageSupported) {
	                return;
	            }
	            if (typeof value === 'string') {
	                localStorage.setItem(key, value);
	            } else {
	                localStorage.setItem(key, JSON.stringify(value));
	            }
	        }
	    }, {
	        key: 'import',
	        value: function _import(importDataAsJson) {
	            if (!self.isLocalStorageSupported) {
	                return;
	            }
	            self.cleanAllData();
	            var importData = JSON.parse(importDataAsJson);
	            var keys = Object.keys(importData);
	            var i = undefined;
	            for (i = 0; i < keys.length; i++) {
	                self.save(keys[i], importData[keys[i]]);
	            }
	        }
	    }, {
	        key: 'cleanAllData',
	        value: function cleanAllData() {
	            if (!self.isLocalStorageSupported) {
	                return;
	            }
	            localStorage.clear();
	        }
	    }, {
	        key: 'export',
	        value: function _export() {
	            this.getEditedParagraphs();
	            return localStorage;
	        }
	    }, {
	        key: 'getEditedParagraphs',
	        value: function getEditedParagraphs() {
	            if (!self.isLocalStorageSupported) {
	                return null;
	            }
	            var keys = Object.keys(localStorage);
	            var result = {};
	            var i = undefined;
	            for (i = 0; i < keys.length; i++) {
	                if (keys[i].startsWith(self.constants.data.book) && keys[i].indexOf('paragraph.') !== -1) {
	                    var bookId = keys[i].substring(0, keys[i].indexOf('.paragraph'));
	                    var paragraph = self.get(keys[i]);
	                    if (self.isEdited(paragraph)) {
	                        if (!result[bookId]) {
	                            result[bookId] = { paragraphs: [] };
	                        }
	                        var editedParagraphData = self.getEditedParagraphData(paragraph);
	                        if (!!editedParagraphData) {
	                            result[bookId].paragraphs.push(editedParagraphData);
	                        }
	                    }
	                }
	            }
	            result = this.sortEditedParagraphs(result);
	            if (Object.keys(result).length > 0) {
	                return this.removeEscapedAccents(result.toSource());
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'sortEditedParagraphs',
	        value: function sortEditedParagraphs(books) {
	            var keys = Object.keys(books);
	            var result = {};
	            for (var i = 0; i < keys.length; i++) {
	                var book = books[keys[i]];
	                if (!!book.paragraphs && book.paragraphs.length > 0) {
	                    result[keys[i]] = book;
	                    book.paragraphs = this.sortParagraphs(book.paragraphs);
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'sortParagraphs',
	        value: function sortParagraphs(paragraphs) {
	            return paragraphs.sort(this.compareParagraph);
	        }
	    }, {
	        key: 'compareParagraph',
	        value: function compareParagraph(p1, p2) {
	            if (!p1 && !p2) {
	                return 0;
	            } else if (!p1) {
	                return 1;
	            } else if (!p2) {
	                return -1;
	            } else {
	                return p1.paragraphNr - p2.paragraphNr;
	            }
	        }
	    }, {
	        key: 'removeEscapedAccents',
	        value: function removeEscapedAccents(text) {
	            // workaround to avoid accent escape
	            return text.replace(/\\xE0/g, 'à').replace(/\\xC0/g, 'À').replace(/\\xE8/g, 'è').replace(/\\xC8/g, 'È').replace(/\\xE9/g, 'é').replace(/\\xC9/g, 'É').replace(/\\xEE/g, 'î').replace(/\\xCE/g, 'Î').replace(/\\xF4/g, 'ô').replace(/\\D4x/g, 'Ô').replace(/\\xF9/g, 'ù').replace(/\\xD9/g, 'Ù').replace(/\\xE7/g, 'ç').replace(/\\xC7/g, 'Ç');
	        }
	    }, {
	        key: 'isEdited',
	        value: function isEdited(paragraph) {
	            return true;
	            // return !!paragraph && !!paragraph.lastEditedBy; TODO
	        }
	    }, {
	        key: 'getEditedParagraphData',
	        value: function getEditedParagraphData(paragraph) {
	            var originalParagraph = this.booksService.getParagraph(paragraph.bookId, paragraph.paragraphNr);
	
	            this.removeUneditableParagraphData(paragraph);
	            this.removeUnmodifiedParagraphData(paragraph, originalParagraph);
	            if (this.hasModifiedParagraphData(paragraph)) {
	                return paragraph;
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'removeUneditableParagraphData',
	        value: function removeUneditableParagraphData(paragraph) {
	            delete paragraph.bookId;
	            delete paragraph.version;
	            for (var j = 0; j < paragraph.choices.length; j++) {
	                delete paragraph.choices[j].alreadyChoosen;
	            }
	        }
	    }, {
	        key: 'removeUnmodifiedParagraphData',
	        value: function removeUnmodifiedParagraphData(paragraph, originalParagraph) {
	            if (!!originalParagraph) {
	                if (paragraph.description === originalParagraph.description) {
	                    delete paragraph.description;
	                }
	
	                if (!!paragraph.choices) {
	                    var deletedChoices = [];
	                    for (var i = 0; i < originalParagraph.choices.length; i++) {
	                        var found = false;
	                        for (var j = 0; j < paragraph.choices.length; j++) {
	                            if (originalParagraph.choices[i].paragraphNr == paragraph.choices[j].paragraphNr) {
	                                found = true;
	                                break;
	                            }
	                        }
	                        if (!found) {
	                            deletedChoices.push(originalParagraph.choices[i].paragraphNr);
	                        }
	                    }
	                    if (deletedChoices.length > 0) {
	                        paragraph.deletedChoices = deletedChoices;
	                    }
	
	                    var choicesToDelete = [];
	                    for (var i = 0; i < paragraph.choices.length; i++) {
	                        for (var j = 0; j < originalParagraph.choices.length; j++) {
	                            if (originalParagraph.choices[j].paragraphNr == paragraph.choices[i].paragraphNr && originalParagraph.choices[j].description === paragraph.choices[i].description) {
	                                choicesToDelete.push(paragraph.choices[i]);
	                            }
	                        }
	                    }
	                    this.removeAll(paragraph.choices, choicesToDelete);
	                    if (paragraph.choices.length === 0) {
	                        delete paragraph.choices;
	                    }
	                }
	
	                if (!!paragraph.notes) {
	                    var currentNotes = paragraph.notes;
	                    delete paragraph.notes;
	
	                    var deletedNotes = [];
	                    if (!!originalParagraph.notes) {
	                        for (var i = 0; i < originalParagraph.notes.length; i++) {
	                            var found = false;
	                            for (var j = 0; j < currentNotes.length; j++) {
	                                if (originalParagraph.notes[i].note == currentNotes[j].note) {
	                                    found = true;
	                                    break;
	                                }
	                            }
	                            if (!found) {
	                                deletedNotes.push(originalParagraph.notes[i].note);
	                            }
	                        }
	
	                        var addedNotes = [];
	                        for (var i = 0; i < currentNotes.length; i++) {
	                            var found = false;
	                            for (var j = 0; j < originalParagraph.notes.length; j++) {
	                                if (originalParagraph.notes[j].note == currentNotes[i].note) {
	                                    found = true;
	                                    break;
	                                }
	                            }
	                            if (!found) {
	                                addedNotes.push(currentNotes[i].note);
	                            }
	                        }
	
	                        if (deletedNotes.length > 0 || addedNotes.length > 0) {
	                            paragraph.notes = {};
	                            if (addedNotes.length > 0) {
	                                paragraph.notes.added = addedNotes;
	                            }
	                            if (deletedNotes.length > 0) {
	                                paragraph.notes.removed = deletedNotes;
	                            }
	                        }
	                    } else if (!!currentNotes && currentNotes.length > 0) {
	                        paragraph.notes = { added: currentNotes };
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'hasModifiedParagraphData',
	        value: function hasModifiedParagraphData(paragraph) {
	            var keys = Object.keys(paragraph);
	            this.remove(keys, 'paragraphNr');
	            this.remove(keys, 'lastEditedBy');
	            return keys.length > 0;
	        }
	    }, {
	        key: 'removeAll',
	        value: function removeAll(array, valuesToRemove) {
	            for (var i = 0; i < valuesToRemove.length; i++) {
	                this.remove(array, valuesToRemove[i]);
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove(array, valueToRemove) {
	            array.splice(array.indexOf(valueToRemove), 1);
	        }
	    }]);
	
	    return PersistenceService;
	})();
	
	exports['default'] = PersistenceService;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dicesService = __webpack_require__(105);
	
	var _dicesService2 = _interopRequireDefault(_dicesService);
	
	/*@ngInject*/
	var dicesModule = _angular2['default'].module('app.components.services.dices', []).service('dicesService', _dicesService2['default']);
	
	exports['default'] = dicesModule;
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var DicesService = (function () {
	
	    /*@ngInject*/
	
	    function DicesService() {
	        _classCallCheck(this, DicesService);
	
	        self = this;
	    }
	
	    _createClass(DicesService, [{
	        key: "rollDices",
	        value: function rollDices(qty, maxDiceValue) {
	            var i = undefined;
	            var dicesValue = 0;
	            for (i = 0; i < qty; i++) {
	                dicesValue = dicesValue + self.randomIntInclusive(1, maxDiceValue);
	            }
	            return dicesValue;
	        }
	    }, {
	        key: "randomIntInclusive",
	        value: function randomIntInclusive(min, max) {
	            return Math.floor(Math.random() * (max - min + 1)) + min;
	        }
	    }]);
	
	    return DicesService;
	})();
	
	exports["default"] = DicesService;
	module.exports = exports["default"];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _booksLoaderInterceptorService = __webpack_require__(107);
	
	var _booksLoaderInterceptorService2 = _interopRequireDefault(_booksLoaderInterceptorService);
	
	/*@ngInject*/
	var booksLoaderInterceptorModule = _angular2['default'].module('app.components.services.books-loader-interceptor', []).service('booksLoaderInterceptorService', _booksLoaderInterceptorService2['default']);
	
	exports['default'] = booksLoaderInterceptorModule;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var BooksLoaderInterceptorService = (function () {
	
	    /*@ngInject*/
	
	    function BooksLoaderInterceptorService(persistenceService, booksService) {
	        _classCallCheck(this, BooksLoaderInterceptorService);
	
	        self = this;
	        self.persistenceService = persistenceService;
	        self.booksService = booksService;
	    }
	
	    _createClass(BooksLoaderInterceptorService, [{
	        key: "loadBooks",
	        value: function loadBooks() {
	            var books = self.booksService.getBooks();
	            for (var i = 0; i < books.length; i++) {
	                self.saveBookToPersistence(books[i]);
	            }
	        }
	    }, {
	        key: "saveBookToPersistence",
	        value: function saveBookToPersistence(book) {
	            var previousSavedBook = self.persistenceService.getBook(book.id);
	            if (!previousSavedBook || new Number(previousSavedBook.version) < new Number(book.version)) {
	                self.persistenceService.setBook(book);
	                self.saveParagraphsToPersistence(book);
	            }
	        }
	    }, {
	        key: "saveParagraphsToPersistence",
	        value: function saveParagraphsToPersistence(book) {
	            if (!!book.paragraphs) {
	                var i = undefined;
	                for (i = 0; i < book.paragraphs.length; i++) {
	                    self.persistenceService.setParagraph(book.id, book.paragraphs[i]);
	                }
	            }
	        }
	    }]);
	
	    return BooksLoaderInterceptorService;
	})();
	
	exports["default"] = BooksLoaderInterceptorService;
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _saveScreenUrlInterceptorService = __webpack_require__(109);
	
	var _saveScreenUrlInterceptorService2 = _interopRequireDefault(_saveScreenUrlInterceptorService);
	
	/*@ngInject*/
	var saveScreenUrlInterceptorModule = _angular2['default'].module('app.components.services.save-screen-url-interceptor', []).service('saveScreenUrlInterceptorService', _saveScreenUrlInterceptorService2['default']);
	
	exports['default'] = saveScreenUrlInterceptorModule;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var SaveScreenUrlInterceptorService = (function () {
	
	    /*@ngInject*/
	
	    function SaveScreenUrlInterceptorService(persistenceService, $location) {
	        _classCallCheck(this, SaveScreenUrlInterceptorService);
	
	        self = this;
	        self.persistenceService = persistenceService;
	        self.$location = $location;
	    }
	
	    _createClass(SaveScreenUrlInterceptorService, [{
	        key: 'saveScreenUrl',
	        value: function saveScreenUrl() {
	            var currentUrl = self.$location.url();
	            if (!!currentUrl && currentUrl !== '/') {
	                self.persistenceService.setLastDisplayedScreenUrl(currentUrl);
	            }
	        }
	    }]);
	
	    return SaveScreenUrlInterceptorService;
	})();
	
	exports['default'] = SaveScreenUrlInterceptorService;
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	        value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _warlockOfFiretopMountainWarlockOfFiretopMountain = __webpack_require__(111);
	
	var _warlockOfFiretopMountainWarlockOfFiretopMountain2 = _interopRequireDefault(_warlockOfFiretopMountainWarlockOfFiretopMountain);
	
	var _booksService = __webpack_require__(113);
	
	var _booksService2 = _interopRequireDefault(_booksService);
	
	/*@ngInject*/
	var booksModule = _angular2['default'].module('app.components.services.books', [_warlockOfFiretopMountainWarlockOfFiretopMountain2['default'].name]).service('booksService', _booksService2['default']);
	
	exports['default'] = booksModule;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _warlockOfFiretopMountainEnService = __webpack_require__(112);
	
	var _warlockOfFiretopMountainEnService2 = _interopRequireDefault(_warlockOfFiretopMountainEnService);
	
	/*@ngInject*/
	var warlockOfFiretopMountainModule = _angular2['default'].module('app.components.services.books.warlock-of-firetop-mountain', []).service('warlockOfFiretopMountainEnglishService', _warlockOfFiretopMountainEnService2['default']);
	
	exports['default'] = warlockOfFiretopMountainModule;
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var self = undefined;
	
	var WarlockOfFiretopMountainService = (function () {
	
	    /*@ngInject*/
	
	    function WarlockOfFiretopMountainService(constants) {
	        _classCallCheck(this, WarlockOfFiretopMountainService);
	
	        self = this;
	        self.constants = constants;
	        self.book = {
	            id: 'warlock-firetop-mountain',
	            version: self.constants.version,
	            language: 'fr',
	            name: 'Le Sorcier de la Montagne de Feu',
	            authors: 'Steve Jackson & Ian Livingstone',
	            isbn: '978-2-07-064740-8',
	            stats: [{
	                name: 'Habilité',
	                init: { sixDiceQuantity: 1, constant: 6 },
	                battle: {
	                    displayed: true,
	                    enemyDefaultValue: 5,
	                    editableForEnemy: true
	                }
	            }, {
	                name: 'Endurance',
	                init: { sixDiceQuantity: 2, constant: 12 },
	                battle: {
	                    displayed: true,
	                    enemyDefaultValue: 4,
	                    editableForEnemy: true
	                }
	            }, {
	                name: 'Chance',
	                init: { sixDiceQuantity: 1, constant: 6 },
	                battle: {
	                    displayed: true,
	                    enemyDefaultValue: undefined,
	                    editableForEnemy: false
	                }
	            }],
	            items: [{
	                quantity: 1,
	                description: 'Epée'
	            }, {
	                quantity: 1,
	                description: 'Bouclier'
	            }, {
	                quantity: 1,
	                description: 'Armure de cuir'
	            }, {
	                quantity: 1,
	                description: 'Sac à dos'
	            }, {
	                quantity: 1,
	                description: 'Lanterne'
	            }, {
	                quantity: 10,
	                description: "Repas (restitue 4 points d'endurance)"
	            }, {
	                quantity: 2,
	                description: "Mesures de potion d'Adresse (rend vos points d'HABILITE)"
	            }, {
	                quantity: 2,
	                description: "Mesures de potion de Vigueur (rend vos points d'ENDURANCE)"
	            }, {
	                quantity: 2,
	                description: "Mesures de Bonne Fortune (rend vos points de CHANCE + 1 point)"
	            }],
	            startParagraphNr: 1,
	            notes: [{ note: "Veuilliez choisir soit la potion d'habilité, de force ou de chance (supprimez les potions non choisies de l'inventaire)." }]
	        };
	
	        self.book.paragraphs = [{
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 1,
	            description: "Caverne sombre",
	            choices: [{
	                paragraphNr: 71,
	                description: "Bifurquer vers l'ouest"
	            }, {
	                paragraphNr: 278,
	                description: "Bifurquer vers l'est"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 21,
	            description: "Le coffre est solide et bien fermé.",
	            choices: [{
	                paragraphNr: 339,
	                description: "Briser la serrure avec votre épée"
	            }, {
	                paragraphNr: 293,
	                description: "Quitter la pièce"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 42,
	            description: "Vous arrivez au bout du couloir avec un croisement.",
	            choices: [{
	                paragraphNr: 257,
	                description: "Aller à l'ouest"
	            }, {
	                paragraphNr: 113,
	                description: "Aller à l'est"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 71,
	            description: "Lutin endormi dans une guérite du passage. Tentez votre chance pour passer devant lui sans le réveiller.",
	            choices: [{
	                paragraphNr: 301,
	                description: "Réussite : le lutin ne se réveille pas."
	            }, {
	                paragraphNr: 248,
	                description: "Échec : le lutin se réveille"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 82,
	            description: "Petite pièce avec créature endormie et une petite boîte en bois. Tentez votre chance pour essayer de voler la boîte sans réveiller la créature",
	            choices: [{
	                paragraphNr: 208,
	                description: "Quitter la pièce et continuer vers le nord"
	            }, {
	                paragraphNr: 147,
	                description: "Réussite : la créature ne se réveille pas"
	            }, {
	                paragraphNr: 33,
	                description: "Échec : la créature se réveille"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 92,
	            description: "Croisement caverne",
	            choices: [{
	                paragraphNr: 71,
	                description: "Avancer droit devant"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 113,
	            description: "Une autre bifurcation",
	            choices: [{
	                paragraphNr: 285,
	                description: "Aller au nord"
	            }, {
	                paragraphNr: 78,
	                description: "Poursuivre vers l'est"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 116,
	            description: "Attaquez les FARFADETS un par un. Ajouter 1 point à votre force d'attaque car ils sont surpris.\n1er FARFADET à HABILITÉ:5, ENDURANCE:4; 2ème FARFADET a HABILITÉ:5, ENDURANCE:5",
	            choices: [{
	                paragraphNr: 378,
	                description: "Vous sortez vainqueur"
	            }, {
	                paragraphNr: 42,
	                description: "Vous prenez la fuite"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 145,
	            description: "La boîte contiens une clé avec le chiffre 99. Ajouter un point de CHANCE",
	            choices: [{
	                paragraphNr: 363,
	                description: "Poursuivre"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 147,
	            description: "Contenu de la boîte : 1 Pièce d'Or. Gain de 2 points de CHANCE",
	            choices: [{
	                paragraphNr: 208,
	                description: "Continuer"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 156,
	            description: "Test de l'enfoncement de la porte: 2d6 <= HABILITÉ",
	            choices: [{
	                paragraphNr: 343,
	                description: "Porte enfoncée"
	            }, {
	                paragraphNr: 92,
	                description: "Échec. Rebrousser à la bifurcation"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 168,
	            description: "Il y a un coffre au centre de la pièce. Une créature de taille humaine fouette une autre créature semblable.",
	            choices: [{
	                paragraphNr: 372,
	                description: "Attaquer les deux créatures"
	            }, {
	                paragraphNr: 65,
	                description: "Attaquer uniquement le fouetteur"
	            }, {
	                paragraphNr: 293,
	                description: "Quitter la pièce et retourner au croisement"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 201,
	            description: "Il y a 25 Pièces d'Or, 1 dose de Potion d'Invisibilité, un gant de soie noire. Ranger une de ces trois trouvailles. Vous pouvez prendre un Repas.",
	            choices: [{
	                paragraphNr: 293,
	                description: "Quittez la pièce"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 208,
	            description: "Passage ayant une porte du côté ouest",
	            choices: [{
	                paragraphNr: 397,
	                description: "Ouvrir la porte"
	            }, {
	                paragraphNr: 363,
	                description: "Poursuivre votre chemin"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 240,
	            description: "Un petit serpent jaillit de la boîte et vous mord au poignet.\nSERPENT a HABILITÉ:5, ENDURANCE:2",
	            choices: [{
	                paragraphNr: 145,
	                description: "Si vous sortez vainqueur du combat"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 257,
	            description: "Le passage aboutit à une porte. Vous entendez des cris de colère qui proviennent de la pièce.",
	            choices: [{
	                paragraphNr: 168,
	                description: "Entrer dans la pièce"
	            }, {
	                paragraphNr: 293,
	                description: "Revenir sur vos pas"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 278,
	            description: "Passage se termine avec une porte fermée à clé",
	            choices: [{
	                paragraphNr: 156,
	                description: "Enfoncer la porte"
	            }, {
	                paragraphNr: 92,
	                description: "Rebrousser chemin"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 285,
	            description: "Il y a une porte le long du mur du passage. Vous entendez un homme appeler à l'aide par le trou de serrure.",
	            choices: [{
	                paragraphNr: 213,
	                description: "Ouvrir la porte"
	            }, {
	                paragraphNr: 314,
	                description: "Poursuivre votre chemin"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 293,
	            description: "Vous retournez à la bifurcation et parter vers l'est",
	            choices: [{
	                paragraphNr: 113,
	                description: "Aller vers l'est"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 296,
	            description: "La boîte contiens une formule magique de l'auteur Farrigo Di Maggio qui permet de neutraliser les Dragons. La page de la formule se consume une fois celle-ci retenue.",
	            choices: [{
	                paragraphNr: 42,
	                description: "Quitter la pièce"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 301,
	            description: "Passage avec porte d'où l'on entend des ronflements",
	            choices: [{
	                paragraphNr: 82,
	                description: "Ouvrir la porte"
	            }, {
	                paragraphNr: 208,
	                description: "Continuer vers le nord"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 339,
	            description: "Peu après avoir ouvert le coffre, une fléchette vient vous atteindre à l'estomac. Réduisez un dé de points d'ENDURANCE.",
	            choices: [{
	                paragraphNr: 201,
	                description: "Si vous survivez"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 343,
	            description: "Fosse. Perte de 1 point d'ENDURANCE",
	            choices: [{
	                paragraphNr: 92,
	                description: "Hisser hors de la fosse et faire rebrousse-chemin"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 363,
	            description: "Il y a une porte dans le mur ouest du passage d'où l'on entend une cacophonie de voix chanter",
	            choices: [{
	                paragraphNr: 370,
	                description: "Entrer dans la pièce"
	            }, {
	                paragraphNr: 42,
	                description: "Poursuivre le long du passage"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 370,
	            description: "Pièce avec une table autour de laquelle deux créatures éméchées sont assises. Il y a une petite boîte sous la table.",
	            choices: [{
	                paragraphNr: 116,
	                description: "Combattre les créatures"
	            }, {
	                paragraphNr: 42,
	                description: "Refermer la porte et courir le long du passage"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 372,
	            description: "CHEF DES FARFADETS a HABILITÉ : 7, ENDURANCE : 6\nSERVITEUR a HABILITÉ : 5, ENDURANCE : 3",
	            choices: [{
	                paragraphNr: 21,
	                description: "En cas de succès"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 378,
	            description: "La boîte est intitulé \"Farrigo Di Maggio\"",
	            choices: [{
	                paragraphNr: 296,
	                description: "Ouvrir la boîte"
	            }, {
	                paragraphNr: 42,
	                description: "Quitter la pièce sans l'examiner"
	            }]
	        }, {
	            bookId: self.book.id,
	            version: self.constants.version,
	            paragraphNr: 397,
	            description: "Petite pièce avec une table. Sous la table, il y a une petite boîte.",
	            choices: [{
	                paragraphNr: 240,
	                description: "Ouvrir la boîte"
	            }, {
	                paragraphNr: 363,
	                description: "Quitter la pièce"
	            }]
	        }];
	    }
	
	    _createClass(WarlockOfFiretopMountainService, [{
	        key: 'getBook',
	        value: function getBook() {
	            return self.book;
	        }
	    }]);
	
	    return WarlockOfFiretopMountainService;
	})();
	
	exports['default'] = WarlockOfFiretopMountainService;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var self = undefined;
	
	var BooksService = (function () {
	
	    /*@ngInject*/
	
	    function BooksService(warlockOfFiretopMountainEnglishService) {
	        _classCallCheck(this, BooksService);
	
	        self = this;
	        this.warlockOfFiretopMountainEnglishService = warlockOfFiretopMountainEnglishService;
	        this.books = [];
	        this.initData();
	    }
	
	    _createClass(BooksService, [{
	        key: "initData",
	        value: function initData() {
	            var book = this.warlockOfFiretopMountainEnglishService.getBook();
	            this.books.push(book);
	            this.indexParagraphs(book);
	        }
	    }, {
	        key: "indexParagraphs",
	        value: function indexParagraphs(book) {
	            book.mapParagraphs = [];
	            for (var i = 0; i < book.paragraphs.length; i++) {
	                book.mapParagraphs[new Number(book.paragraphs[i].paragraphNr)] = book.paragraphs[i];
	            }
	        }
	    }, {
	        key: "getBooks",
	        value: function getBooks() {
	            return this.books;
	        }
	    }, {
	        key: "getParagraph",
	        value: function getParagraph(bookId, paragraphNr) {
	            var book = this.getBook(bookId);
	            return book.mapParagraphs[new Number(paragraphNr)];
	        }
	    }, {
	        key: "getBook",
	        value: function getBook(bookId) {
	            for (var i = 0; i < this.books.length; i++) {
	                if (bookId === this.books[i].id) {
	                    return this.books[i];
	                }
	            }
	            return null;
	        }
	    }]);
	
	    return BooksService;
	})();
	
	exports["default"] = BooksService;
	module.exports = exports["default"];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	/*@ngInject*/
	var constantsModule = _angular2['default'].module('app.components.constants', []).constant('constants', {
	    version: '20160815',
	    supportedLanguages: ['en', 'fr'],
	    data: {
	        selectedLanguage: 'selectedLanguage',
	        lastDisplayedScreenUrl: 'lastDisplayedScreenUrl',
	        book: 'book',
	        game: 'game'
	    },
	    url: {
	        battle: '/battle',
	        chooseLanguage: '/choose-language',
	        configuration: '/configuration',
	        games: '/games',
	        root: '/',
	        selectBookForNewGame: '/games/create/select-book',
	        createPlayerForNewGame: '/games/create/create-player',
	        chooseItemsForNewGame: '/games/create/choose-items',
	        inGame: '/{bookId}/{paragraphNr}/game/{gameId}',
	        about: '/about',
	        deleteData: '/delete-data'
	    },
	    choices: {
	        yes: 'Yes',
	        no: 'No'
	    }
	});
	
	exports['default'] = constantsModule;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
	 *
	 * ESTA WebJS: Hauptkomponente der Angular-Applikation
	 *
	 * @author u220374 (Reto Lehmann)
	 * @version: 0.0.1
	 * @since 23.10.2015, 2015.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _appHtml = __webpack_require__(116);
	
	var _appHtml2 = _interopRequireDefault(_appHtml);
	
	__webpack_require__(117);
	
	var appComponent = function appComponent() {
	    return {
	        template: _appHtml2['default'], restrict: 'E'
	    };
	};
	
	exports['default'] = appComponent;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "<div ui-view></div>"

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, "/* to solve navbar hidding main top content */\nbody {\n    padding-top: 70px;\n}\n\n.ng-invalid.ng-dirty:required {\n    background-color: #ff9999 ! important;\n}\n\n.error {\n    color: #ff9999;\n}\n\n.spacer {\n    margin:0; padding:0; height:10px;\n}\n\n.table-borderless tbody tr td, .table-borderless tbody tr th, .table-borderless thead tr th {\n    border: none;\n}", ""]);
	
	// exports


/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = {
		"fr": "Français",
		"en": "English",
		"ChoiceGame": "Choose game '{{ bookName }}' of '{{ playerName }}'",
		"ChoosenGame": "The game '{{ bookName }}' of '{{ playerName }}' is choosen",
		"application.description": "The 'Gamebooks Assistant' Website is an aid to play fighting fantasy gamebooks (or similar books). The app allow to keep the statistics, items and notes of the player. Paragraphs'choices & description of the book can be edited and shared between several games."
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = {
		"Gamebooks Companion": "Gamebooks Companion",
		"Dices": "Dés",
		"fr": "Français",
		"en": "English",
		"Stats": "Attribut",
		"Battle": "Bataille",
		"Items": "Inventaire",
		"Notes": "Notes",
		"Paragraph": "Paragraphe",
		"Games": "Parties",
		"Configuration": "Configuration",
		"Cookies": "Cookies",
		"Book": "Livre",
		"Player": "Joueur",
		"Played": "Joué",
		"Remove": "Efface",
		"Select": "Sélectionner",
		"New game": "Nouvelle partie",
		"Skill": "Habilité",
		"Stamina": "Endurance",
		"Luck": "Chance",
		"Add enemy": "Ajoute un enemi",
		"Remove enemy": "Supprime l'enemi",
		"Name": "Nom",
		"Quantity": "Quantité",
		"Description": "Description",
		"Add item": "Ajoute un objet",
		"Remove item": "Supprime l'objet",
		"Add note": "Ajoute une note",
		"Remove choice": "Supprime le choice",
		"Add choice": "Ajoute un choix",
		"Current": "Actuel",
		"Initial": "Initial",
		"Increment": "Incrémente",
		"Decrement": "Decrémente",
		"Clear values": "Supprime les valeurs",
		"Roll one dice 6 faces": "Lance un dé 6 faces",
		"Roll two dices 6 faces": "Lance deux dés 6 faces",
		"Choose language": "Sélectionnez une langue",
		"Selection": "Sélection",
		"Remove note": "Supprime la note",
		"Choice paragragh": "Sélectionne le paragraphe",
		"Choice": "Choix",
		"Administration": "Administration",
		"ChoiceGame": "Sélectionne la partie '{{ bookName }}' de '{{ playerName }}'",
		"ChoosenGame": "La partie '{{ bookName }}' de '{{ playerName }}' est actuellement sélectionnée",
		"Yes": "Oui",
		"No": "Non",
		"The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.": "L'application ne peut pas être utilisée car le navigateur est obsolète ou car il n'est pas possible de sauver des données dans le 'localStorage'.",
		"Application's data": "Données de l'application",
		"Delete application's data": "Efface les donées de l'application",
		"Are you sure to clear the application data?": "Êtes-vous sûr de vouloir effacer toutes les données de l'application?",
		"Paste the application's data copied from another browser": "Collez les données de l'application copiées depuis un autre navigateur",
		"Imported data": "Données d'importation",
		"Import": "Importation",
		"All existing application's data will be erased during the import. Are you sure to import the application data?": "Toutes les données existantes de l'application seront effacées lors de l'importation. Êtes-vous sûr de vouloir importer les données?",
		"Missing import data": "Il n'y a pas de données à importer",
		"Invalid import data": "Les données d'importation sont invalides",
		"Current Paragraph": "Paragraphe en cours",
		"Select Book": "Sélection du livre-jeu",
		"Create Player": "Création du personnage",
		"Start Game": "Débute le jeu",
		"Select a gamebook": "Sélectionnez un livre",
		"Next": "Suivant",
		"Back": "Retour",
		"The Warlock of Firetop Mountain": "Le Sorcier de la Montagne de Feu",
		"sword": "épée",
		"shield": "bouclier",
		"leather armour": "armure en cuivre",
		"backpack": "sac à dos",
		"lantern": "lanterne",
		"meal (add 4 points to stamina)": "repas (ajoute 4 points à l'endurance)",
		"measure of potion of skill (restore skill points)": "mesure de potion d'habilité (restaure les points d'habilité)",
		"measure of potion of strength (restore stamina points)": "mesure de potion de force (restaure les points d'endurance)",
		"measure of potion of luck (increase initial luck by 1 point and restore luck points)": "mesure de potion de chance (augmente de 1 point la chance initial et restaure les points de chance)",
		"Start": "Débute",
		"Please choose either the potion of skill, strengh or luck (remove corresponding two unchoosen potions from items list.": "Veuilliez choisir soit la potion d'habilité, de force ou de chance (supprimez les potions non choisies de l'inventaire).",
		"Go to Firetop Mountain": "Se diriger vers la Montagne de feu",
		"PlayerName": "Nom du personnage",
		"Random Stats": "Générer attributs aléatoires",
		"Choose Items": "Choix inventaire",
		"Paragraph number": "Numéro du paragraphe",
		"Go to paragraph": "Aller au paragraphe",
		"Start Battle": "Débuter un combat",
		"End Game": "Terminer la partie",
		"Edit choice": "Edite le choix",
		"Are you sure to remove the enemy?": "Voulez-vous supprimer l'enemi?",
		"Are you sure to remove the item?": "Voulez-vous supprimer l'objet?",
		"Are you sure to remove the choice?": "Voulez-vous supprimer le choix?",
		"Are you sure to remove the note?": "Voulez-vous supprimer la note?",
		"Are you sure to abandon this game?": "Voulez-vous terminer la partie en cours?",
		"Edit description": "Modifie la description",
		"Save description changes": "Sauvegarde les changements de la description",
		"Abort description changes": "Annule les changements de la description",
		"Save choice changes": "Sauvegarde les changements du choix",
		"Abort choice changes": "Annule les changements du choix",
		"Please fill the player name": "Veuilliez saisir le nom du personnage",
		"Please fill the paragraph number": "Veuilliez saisir le numéro du paragraphe",
		"Edit note": "Modifie la note",
		"Save note changes": "Sauvegarde les changements de la note",
		"Abort note changes": "Annule les changements de la note",
		"Please fill the note": "Veuilliez saisir la note",
		"Please fill the quantity": "Veuilliez saisir la quantité",
		"Please fill the description": "Veuilliez saisir la description",
		"Edit item": "Modifie l'objet",
		"Save item changes": "Sauvegarde les changements de l'objet",
		"Abort item changes": "Annule les changements de l'objet",
		"Enemy": "Ennemi",
		"Please fill the name": "Veuilliez saisir le nom",
		"Please fill a value": "Veuilliez saisir une valeur",
		"Reason": "Raison",
		"Roll dices": "Lance les dés",
		"Sum of dices value": "Somme de la valeur des dés",
		"Go to": "Aller au",
		"Item": "Objet",
		"Continue": "Poursuivre",
		"End game's reason": "Raison de la fin de partie",
		"About": "A propos",
		"application.description": "Le site ou application 'Gamebooks Assistant' est une aide afin de jouer à des livres dont vous êtes le héros du genre 'défis fantastiques'. L'application permet de stocker les caractéristiques, l'inventaire et notes du joueur. Le descriptif et choix des paragraphes du livre sont éditables et partageable entre différentes parties.",
		"Application's description": "Description de l'application",
		"Application's version": "Version de l'application",
		"Credits": "Remerciements",
		"Who": "Qui",
		"For": "Pour",
		"Link": "Lien",
		"map image used as favicon": "image de carte utilisée comme 'favicon'",
		"dice image": "image de dé",
		"Developers and contributors": "Développeurs et contributeurs",
		"Angular JS, Bootstrap, Webpack and all existing tools that make javascript development fun to code": "Angular JS, Bootstrap, Webpack et tous les outils qui font que le dévelopement javascript soit fun",
		"Cannot find book": "Le livre suivant est inconnu",
		"State": "Status",
		"in progress": "en cours",
		"game over": "fin de partie",
		"a note": "une note",
		"Edited paragraphs": "Paragraphes modifiées"
	};

/***/ }
]);
//# sourceMappingURL=bundle.js.map