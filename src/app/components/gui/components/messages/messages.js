import angular from 'angular';

import service from './messages.service';

let messagesModule = angular.module('app.components.gui.components.messages', [])
    .service('messagesService', service);


export default messagesModule;