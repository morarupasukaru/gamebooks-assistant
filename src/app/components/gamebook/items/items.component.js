import template from './items.html';
import controller from './items.controller';

let itemsComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default itemsComponent;