import template from './gameplays.html';
import controller from './gameplays.controller';

let gameplaysComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default gameplaysComponent;