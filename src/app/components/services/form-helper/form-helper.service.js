class FormHelperService {

    /*@ngInject*/
    constructor(messagesService) {
        this.messagesService = messagesService;
    }

    setErrorFieldsAsDirty(form, withMessage) {
        if (form.$invalid) {
            if (!!withMessage) {
                this.messagesService.errorMessage('Please complete mandatory fields', false);
            }

            // error "dirty" field will be hightlighted (see app.css)
            angular.forEach(form.$error, function(type) {
                angular.forEach(type, function(field) {
                    field.$setDirty();
                });
            });
        }
    }
}

export default FormHelperService;