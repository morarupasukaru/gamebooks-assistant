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
            self.messagesService.errorMessage(self.$translate.instant('msg.error.permanentPersistenceService_and_localStorage_are_disabled'), true);
        }
        if (!self.isCookiesSupported()) {
            hasSoftwareRequirements = false;
            self.messagesService.errorMessage(self.$translate.instant('msg.error.temporaryPersistenceService_and_cookies_are_disabled'), true);
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

    isCookiesSupported() {
        return navigator.cookieEnabled;
    }
}

export default SoftwareRequirementsCheckerService;