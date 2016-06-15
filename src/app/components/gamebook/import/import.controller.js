let self;
class ImportController {
    /*@ngInject*/
    constructor() {
        self = this;
    }

    import() {
        alert('imported: ' + self.data);
    }
}

export default ImportController;