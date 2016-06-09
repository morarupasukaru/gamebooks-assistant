import template from './dices.html';
import controller from './dices.controller';

let dicesComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'ctrl', bindToController: true
    };
};

export default dicesComponent;