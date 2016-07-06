import angular from 'angular';
import booksService from './books.service';
import Warlock from './warlock/warlock';

/*@ngInject*/
let booksModule = angular.module('app.components.services.books', [ Warlock.name ])
    .service('booksService', booksService);

export default booksModule;