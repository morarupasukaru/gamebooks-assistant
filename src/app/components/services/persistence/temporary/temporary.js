import angular from 'angular';
import ngCookies from 'angular-cookies';
import temporaryPersistenceService from './temporary.service';

/*@ngInject*/
let temporaryPersistenceModule = angular.module('app.components.services.persistence.temporary', ['ngCookies'])

.service('temporaryPersistenceService', temporaryPersistenceService);

export default temporaryPersistenceModule;