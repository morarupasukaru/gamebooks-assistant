/**
 * Initialisation of the modules (specific order required).
 */
 (function(globals){
    "use strict";
	var __ = globals._;
	__.dom.hide("nojs-id");
	__.i18n.initialize();
	__.data.initialize();
	__.footer.initialize();
	__.route.initialize();
} (this));