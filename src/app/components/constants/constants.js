import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20160627',
        data: "data",
        supportedLanguages : ['en', 'fr']
    });

export default constantsModule;