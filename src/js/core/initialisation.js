/**
 * Initialisation of the modules (specific order required).
 */
 (function(globals){
    "use strict";
	var __ = globals._;
	__.dom.hide("nojs-id");
	
	var isLegacyBrowser = function() {
		// TODO
		return false;
	};
	if (!!isLegacyBrowser()) {
		// TODO
		var browserDescription = 'toto';
		if (!!browserDescription) {
			var foundElements = document.querySelectorAll('.legacybrowser-description');
			if (!!foundElements) {
				for (var i = 0; i < foundElements.length; i++) {
					foundElements[i].innerHTML = '<b>' + browserDescription + '</b>';
				}
			}
		}
		__.dom.display("legacybrowser-id");
	} else {
		__.data.initialize();
		if (!__.data.isWebStorageAvailable) {
			__.dom.display("nostorage-id");
		} else {
			__.i18n.initialize();
			__.footer.initialize();
			__.route.initialize();
		}
	}
} (this));