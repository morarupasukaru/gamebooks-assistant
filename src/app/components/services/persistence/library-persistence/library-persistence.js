import angular from 'angular';
import libraryPersistenceService from './library-persistence.service';

let libraryPersistenceModule = angular.module('app.components.services.persistence.library', [])

.service('libraryPersistenceService', libraryPersistenceService);

export default libraryPersistenceModule;