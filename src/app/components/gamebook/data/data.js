import angular from 'angular';
import dataService from './data.service';

/*@ngInject*/
let dataModule = angular.module('data', [])

.service('dataService', dataService);

export default dataModule;