import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('app.components.constants', [])
    .constant('app.components.constants', {
        version: '0.1'
    });

export default constantsModule;