import angular from 'angular';

import service from './messages.service';
import template from './messages.html';
import controller from './messages.controller';

let messagesModule = angular.module('app.components.gui.components.messages', [])
    .service('messagesService', service)
    .component('messages', { template, controller });


export default messagesModule;