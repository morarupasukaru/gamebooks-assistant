import angular from 'angular';
import gamePersistenceService from './game-persistence.service';

let gamePersistenceModule = angular.module('app.components.services.persistence.game', [])

.service('gamePersistenceService', gamePersistenceService);

export default gamePersistenceModule;