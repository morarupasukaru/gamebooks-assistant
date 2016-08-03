import angular from 'angular';
import warlockOfFiretopMountainService from './warlock-of-firetop-mountain.service';

/*@ngInject*/
let warlockOfFiretopMountainModule = angular.module('app.components.services.books.warlock-of-firetop-mountain', [])
    .service('warlockOfFiretopMountainService', warlockOfFiretopMountainService);

export default warlockOfFiretopMountainModule;