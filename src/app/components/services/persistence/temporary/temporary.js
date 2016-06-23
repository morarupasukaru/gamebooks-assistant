import angular from 'angular';
import temporaryPersistenceService from './temporary.service';

/*@ngInject*/
let temporaryPersistenceModule = angular.module('app.components.services.persistence.temporary', [])

.service('temporaryPersistenceService', temporaryPersistenceService);

export default temporaryPersistenceModule;