/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
class HomeController {
    constructor($location, messagesService) {
        // TODO how to redirect this in every screen?
        if (!this.storageAvailable('localStorage')) {
            $location.url('/gameplays')
        }
        else {
            messagesService.errorMessage('The application cannot be used because the browser does not support localStorage', false);
        }
    }

    storageAvailable(type) {
    	try {
    		let storage = window[type],
    			x = '__storage_test__';
    		storage.setItem(x, x);
    		storage.removeItem(x);
    		return true;
    	} catch(e) {
    		return false;
    	}
    }
}

export default HomeController;