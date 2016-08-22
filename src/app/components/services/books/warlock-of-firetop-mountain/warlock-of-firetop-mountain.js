import angular from 'angular';
import warlockOfFiretopMountainEnglishService from './warlock-of-firetop-mountain-fr.service';

/*@ngInject*/
let warlockOfFiretopMountainModule = angular.module('app.components.services.books.warlock-of-firetop-mountain', [])
    .service('warlockOfFiretopMountainEnglishService', warlockOfFiretopMountainEnglishService);

export default warlockOfFiretopMountainModule;