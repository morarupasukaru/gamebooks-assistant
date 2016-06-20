import angular from 'angular';
import persistenceService from './persistence/data.service';

/*@ngInject*/
let persistenceModule = angular.module('persistence', [])

.service('persistenceService', persistenceService);

export default persistenceModule;