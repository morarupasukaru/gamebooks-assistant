/**
 * Initialisation of the modules (specific order required).
 */
 (function(globals){
    "use strict";
	var __ = globals._;
	__.i18n.initialize();
	__.data.initialize();
	__.route.initialize();
	if (!!__.screens) {
		for (var i = 0; i < __.screens.length; i++) {
			__.screens[i]();
		}
	}
} (this));

// TODO still too complex