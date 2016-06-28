import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20160627',
        data: "data",
        supportedLanguages: ['en', 'fr'],
        preferences: {
            language: 'language'
        }
    });

export default constantsModule;