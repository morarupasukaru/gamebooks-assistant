import angular from 'angular';
import warlockService from './warlock.service';

/*@ngInject*/
let warlockModule = angular.module('app.components.services.books.warlock', [])
    .service('warlockService', warlockService);

export default warlockModule;