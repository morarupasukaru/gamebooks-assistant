import template from './items.html';
import controller from './items.controller';

let itemsComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'ctrl', bindToController: true
    };
};

export default itemsComponent;