let self;
class SoftwareRequirementsCheckerService {

    /*@ngInject*/
    constructor(messagesService, $translate) {
        self = this;
        self.messagesService = messagesService;
        self.$translate = $translate;
    }

    checkSoftwareRequirements() {
        let hasSoftwareRequirements = true;
        if (!self.isLocalStorageSupported()) {
            hasSoftwareRequirements = false;
            self.messagesService.errorMessage(self.$translate.instant("The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'."), true);
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