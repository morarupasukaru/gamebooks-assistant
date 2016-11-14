import angular from 'angular';
import mapPersistenceService from './map-persistence.service';

let mapPersistenceModule = angular.module('app.components.services.persistence.map', [])

.service('mapPersistenceService', mapPersistenceService);

export default mapPersistenceModule;