import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '0.1',
        supportedLanguages : ['en', 'fr']
    });

export default constantsModule;