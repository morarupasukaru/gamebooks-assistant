import template from './notes.html';
import controller from './notes.controller';

let notesComponent = function () {
    return {
        restrict: 'E', scope: {}, template, controller, controllerAs: 'ctrl', bindToController: true
    };
};

export default notesComponent;