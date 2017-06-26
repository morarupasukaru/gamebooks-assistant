import i18n_en from './i18n/en.js';
import i18n_fr from './i18n/fr.js';

// Vendor-Imports
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngTranslate from 'angular-translate';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import ngTranslateHandlerLog from 'angular-translate-handler-log';

// Interne Modul-Imports
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter, ngTranslate, ngTranslateHandlerLog, Components.name, ngAria, ngAnimate, ngMaterial
    ])

    .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('en', i18n_en);
      $translateProvider.translations('fr', i18n_fr);
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.useMissingTranslationHandlerLog();
    }])

    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }])

    .directive('onReadFile',
    /*@ngInject*/
    function ($parse) {
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
    .directive('app', AppComponent)

    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme("success-toast");
      $mdThemingProvider.theme("success-toast");
    });


