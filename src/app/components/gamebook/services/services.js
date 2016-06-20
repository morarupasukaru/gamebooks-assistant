import angular from 'angular';
import Persistence from './persistence/persistence';

let servicesModule = angular.module('app.components.gamebook.services', [
    Persistence.name
]);

export default servicesModule;