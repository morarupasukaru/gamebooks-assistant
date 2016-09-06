import angular from 'angular';

import adventurePersistenceService from './adventure-persistence.service';

let adventurePersistenceModule = angular.module('app.components.services.persistence.adventure', [])

.service('adventurePersistenceService', adventurePersistenceService);

export default adventurePersistenceModule;