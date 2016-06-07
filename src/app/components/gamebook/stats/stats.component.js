import template from './stats.html';
import controller from './stats.controller';

let statsComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default statsComponent;