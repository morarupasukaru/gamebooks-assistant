import angular from 'angular';
import Persistence from './persistence/persistence';
import Dices from './dices/dices';

let servicesModule = angular.module('app.components.gamebook.services', [
    Persistence.name, Dices.name
]);

export default servicesModule;