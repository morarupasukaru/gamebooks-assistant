/**
 * Initialisation of the modules (specific order required).
 */
 (function(globals){
    "use strict";
	globals._.i18n.initialize();
	globals._.data.initialize();
	if (!!globals._.screens) {
		var i;
		for (i = 0; i < globals._.screens.length; i++) {
			globals._.screens[i]();
		}
	}
} (this));

// TODO still too complex