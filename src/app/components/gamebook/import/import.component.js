import template from './import.html';
import controller from './import.controller';

let importComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default importComponent;