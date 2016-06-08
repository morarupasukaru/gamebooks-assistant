let ctrl;
class ImportController {
    /*@ngInject*/
    constructor() {
        ctrl = this;
    }

    import() {
        alert('imported: ' + ctrl.data);
    }
}

export default ImportController;