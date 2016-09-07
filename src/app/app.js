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
import uiBootstrap from 'angular-ui-bootstrap';

// Interne Modul-Imports
import Components from './components/components';
import AppComponent from './app.component';

// A robust & optimized ES3-compatible polyfill for the String.prototype.startsWith method in ECMAScript 6
require('string.prototype.startswith');


let english = {
    'yesno_true': 'yes',
    'yesno_false': 'no',
    'NumberOfParagraphs': '{{ (!!numberOfParagraphs ? numberOfParagraphs + " paragraphs" : "") }}',
    'ChoiceAdventure': 'Select the adventure "{{ adventureName }}"',
    'ChoosenAdventure': 'The adventure "{{ adventureName }}" is choosen',
    'ChoiceGame': 'Select the game "{{ adventureName }}" of the player "{{ playerName }}"',
    'ChoosenGame': 'The game "{{ adventureName }}" of the player "{{ playerName }}" is choosen',
    'DupplicateParagraph': 'The paragraph "{paragraphNr}" already exist'
};

let french = {
};

angular.module('app', [
    uiRouter, ngTranslate, ngCookies, ngResource, uiBootstrap, Components.name
    ])

    .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('en', english);
      $translateProvider.translations('fr', french);
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('escape');
    }])

    // Die App als Direktive exportieren
    .directive('app', AppComponent);