let self;

class SoftwareRequirementsChecksService {

    /*@ngInject*/
    constructor(messagesService, $translate) {
        self = this;
        self.messagesService = messagesService;
        self.$translate = $translate;
    }

    hasSoftwareRequirements() {
        let hasSoftwareRequirements = true;
        if (!self.isLocalStorageSupported()) {
            hasSoftwareRequirements = false;
            self.messagesService.errorMessage(self.$translate.instant('msg.error.application_cookies_disabled'), true);
        }
        if (!self.isCookiesSupported()) {
            hasSoftwareRequirements = false;
            self.messagesService.errorMessage(self.$translate.instant('msg.error.application_localStorage_disabled'), true);
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

    isCookiesSupported() {
        return navigator.cookieEnabled;
    }
}

export default SoftwareRequirementsChecksService;