import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('constants', [])
    .constant('constants', {
        version: '0.1'
    });

export default constantsModule;