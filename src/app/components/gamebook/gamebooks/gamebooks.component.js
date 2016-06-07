import template from './gamebooks.html';
import controller from './gamebooks.controller';

let gamebooksComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default gamebooksComponent;