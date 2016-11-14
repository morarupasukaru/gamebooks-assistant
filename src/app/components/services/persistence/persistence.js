import angular from 'angular';

import GamePersistence from './game-persistence/game-persistence';
import AdventurePersistence from './adventure-persistence/adventure-persistence';
import LibraryPersistence from './library-persistence/library-persistence';
import persistenceService from './persistence.service';
import MapPersistence from './map-persistence/map-persistence';

let persistenceModule = angular.module('app.components.services.persistence', [
    GamePersistence.name, AdventurePersistence.name, LibraryPersistence.name, MapPersistence.name
])

.service('persistenceService', persistenceService);

export default persistenceModule;