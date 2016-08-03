import angular from 'angular';
import creatureFromHavocService from './creature-from-havoc.service';

/*@ngInject*/
let creatureFromHavocModule = angular.module('app.components.services.books.creature-from-havoc', [])
    .service('creatureFromHavocService', creatureFromHavocService);

export default creatureFromHavocModule;