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
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import ngTranslate from 'angular-translate';
import ngTranslateStaticFilesLoader from 'angular-translate-loader-static-files';
import uiBootstrap from 'angular-ui-bootstrap';

// Interne Modul-Imports
import Components from './components/components';
import AppComponent from './app.component';

// Language file import
import langEn from './languages/lang-en.json';
import langFr from './languages/lang-fr.json';

// A robust & optimized ES3-compatible polyfill for the String.prototype.startsWith method in ECMAScript 6
require('string.prototype.startswith');

angular.module('app', [
    uiRouter, ngTranslate, ngTranslateStaticFilesLoader, ngCookies, ngResource,
    uiBootstrap, Components.name
])
    .config(/*@ngInject*/($translateProvider, $httpProvider) => {

        // Translation settings
        $translateProvider.translations('en', langEn);
        $translateProvider.translations('fr', langFr);
        $translateProvider.preferredLanguage('en').useSanitizeValueStrategy('escape');
    })

    .constant('config', {
    })
    // Die App als Direktive exportieren
    .directive('app', AppComponent);