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
import langDe from './languages/lang-de.json';
import langEn from './languages/lang-en.json';

angular.module('app', [
    uiRouter, ngTranslate, ngTranslateStaticFilesLoader, ngCookies, ngResource,
    uiBootstrap, Components.name
])
    .config(/*@ngInject*/($translateProvider, $httpProvider) => {

        // Translation settings
        $translateProvider.translations('de', langDe);
        $translateProvider.translations('en', langEn);
        $translateProvider.preferredLanguage('de').useSanitizeValueStrategy('escape');
    })

    .constant('config', {
    })
    // Die App als Direktive exportieren
    .directive('app', AppComponent);


