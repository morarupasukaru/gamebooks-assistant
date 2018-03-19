(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.form = __.form || {};
    var api = __.form;

	api.onSubmit = function() {
		var screen = __.route.getCurrentScreen();
		if (!!screen && !!screen.onSubmit) {
			screen.onSubmit();
		}
	};
	
	api.submit = function() {
		document.getElementById("submit-id").click();
	};
} (this));