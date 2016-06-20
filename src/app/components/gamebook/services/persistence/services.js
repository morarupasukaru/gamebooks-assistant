import angular from 'angular';
import persistenceService from './persistence/data.service';

/*@ngInject*/
let servicesModule = angular.module('services', [])

.service('persistenceService', persistenceService);

export default servicesModule;