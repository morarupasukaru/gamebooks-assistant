import angular from 'angular';

import GamePersistence from './game-persistence/game-persistence';
import AdventurePersistence from './adventure-persistence/adventure-persistence';
import LibraryPersistence from './library-persistence/library-persistence';
import persistenceService from './persistence.service';

let persistenceModule = angular.module('app.components.services.persistence', [
    GamePersistence.name, AdventurePersistence.name, LibraryPersistence.name
])

.service('persistenceService', persistenceService);

export default persistenceModule;