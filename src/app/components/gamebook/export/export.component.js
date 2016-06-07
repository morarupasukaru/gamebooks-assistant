import template from './export.html';
import controller from './export.controller';

let exportComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default exportComponent;