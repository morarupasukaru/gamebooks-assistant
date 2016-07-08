import angular from 'angular';
import templeOfTerrorService from './temple-of-terror.service';

/*@ngInject*/
let templeOfTerrorModule = angular.module('app.components.services.books.temple-of-terror', [])
    .service('templeOfTerrorService', templeOfTerrorService);

export default templeOfTerrorModule;