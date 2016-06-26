let self;

class SoftwareRequirementsChecksService {

    /*@ngInject*/
    constructor(messagesService) {
        self = this;
        self.messagesService = messagesService;
    }

    hasSoftwareRequirements() {
        let hasSoftwareRequirements = true;
        if (!self.isLocalStorageSupported()) {
            hasSoftwareRequirements = false;
            // TODO i18n
            self.messagesService.errorMessage('The application cannot be used because the browser does not support localStorage', false);
        }
        return hasSoftwareRequirements;
    }

    isLocalStorageSupported() {
    	try {
    		let storage = window['localStorage'];
            let x = '__storage_test__';
    		storage.setItem(x, x);
    		storage.removeItem(x);
    		return true;
    	} catch(e) {
    		return false;
    	}
    }
}

export default SoftwareRequirementsChecksService;