import angular from 'angular';
import permanentPersistenceService from './permanent.service';

/*@ngInject*/
let permanentPersistenceModule = angular.module('app.components.services.persistence.permanent', [])

.service('permanentPersistenceService', permanentPersistenceService);

export default permanentPersistenceModule;