import angular from 'angular';
import WarlockOfFiretopMountain from './warlock-of-firetop-mountain/warlock-of-firetop-mountain';

/*@ngInject*/
let booksModule = angular.module('app.components.services.books', [
        WarlockOfFiretopMountain.name
    ]);

export default booksModule;