import angular from 'angular';
import persistenceService from './persistence.service';

/*@ngInject*/
let persistenceModule = angular.module('app.components.services.persistence', [])

.service('persistenceService', persistenceService);

export default persistenceModule;