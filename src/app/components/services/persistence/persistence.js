import angular from 'angular';

import GamePersistence from './game-persistence/game-persistence';
import BookPersistence from './book-persistence/book-persistence';
import persistenceService from './persistence.service';

let persistenceModule = angular.module('app.components.services.persistence', [
    GamePersistence.name, BookPersistence.name
])

.service('persistenceService', persistenceService);

export default persistenceModule;