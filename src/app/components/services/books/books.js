import angular from 'angular';

import WarlockOfFiretopMountain from './warlock-of-firetop-mountain/warlock-of-firetop-mountain';
import booksService from './books.service';

let booksModule = angular.module('app.components.services.books', [
        WarlockOfFiretopMountain.name
    ])
    .service('booksService', booksService);

export default booksModule;