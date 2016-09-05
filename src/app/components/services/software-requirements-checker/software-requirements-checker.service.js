class SoftwareRequirementsCheckerService {

    /*@ngInject*/
    constructor(messagesService) {
        this.messagesService = messagesService;
    }

    checkSoftwareRequirements() {
        let hasSoftwareRequirements = true;
        if (!this.isLocalStorageSupported()) {
            hasSoftwareRequirements = false;
            this.messagesService.errorMessage("The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.", true);
        }
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

export default SoftwareRequirementsCheckerService;