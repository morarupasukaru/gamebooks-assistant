import angular from 'angular';

import bookPersistenceService from './book-persistence.service';

let bookPersistenceModule = angular.module('app.components.services.persistence.book', [])

.service('bookPersistenceService', bookPersistenceService);

export default bookPersistenceModule;