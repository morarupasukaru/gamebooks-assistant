import angular from 'angular';
import TemporaryPersistence from './temporary/temporary';
import PermanentPersistence from './permanent/permanent';

let persistenceServicesModule = angular.module('app.components.services.persistence', [
    TemporaryPersistence.name, PermanentPersistence.name
]);

export default persistenceServicesModule;