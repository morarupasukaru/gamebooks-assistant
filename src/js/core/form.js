// TODO move to ..\application specific to application

/*
In order to make form submit with several screen available, we need:

1) Have an unique form in index with following structure:

<form onsubmit="_.form.onSubmit();">
	<!-- build:include xyz.template -->
	<!-- /build -->
    <input id="submit-id" type="submit">
</form>

2) The controller of the screen must have on "onSubmit" method
 */
(function(globals){
	// depends on "route.js"
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