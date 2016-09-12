/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Angular-Modul der Hauptkomponente
 *
 * @author u220374 (Reto Lehmann)
 * @version: 0.0.1
 * @since 23.10.2015, 2015.
 */

import i18n_en from './i18n/en.js';
import i18n_fr from './i18n/fr.js';

// Vendor-Imports
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import ngTranslate from 'angular-translate';
import uiBootstrap from 'angular-ui-bootstrap';

// Interne Modul-Imports
import Components from './components/components';
import AppComponent from './app.component';

// A robust & optimized ES3-compatible polyfill for the String.prototype.startsWith method in ECMAScript 6
require('string.prototype.startswith');

angular.module('app', [
    uiRouter, ngTranslate, ngCookies, ngResource, uiBootstrap, Components.name
    ])

    .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('en', i18n_en);
      $translateProvider.translations('fr', i18n_fr);
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('escape');
    }])

    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(|mailto|blob|):/);
    }])

    .directive('onReadFile', function ($parse) {
    	return {
    		restrict: 'A',
    		scope: false,
    		link: function(scope, element, attrs) {
                var fn = $parse(attrs.onReadFile);

    			element.on('change', function(onChangeEvent) {
    				var reader = new FileReader();

    				reader.onload = function(onLoadEvent) {
    					scope.$apply(function() {
    						fn(scope, {$fileContent:onLoadEvent.target.result});
    					});
    				};

    				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
    			});
    		}
    	};
    })

    // Die App als Direktive exportieren
    .directive('app', AppComponent);


