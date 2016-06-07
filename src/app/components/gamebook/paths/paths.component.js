import template from './paths.html';
import controller from './paths.controller';

let pathsComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default pathsComponent;