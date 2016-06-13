import template from './stats.html';
import controller from './stats.controller';
import './stats.css';

let statsComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'vm', bindToController: true
    };
};

export default statsComponent;