(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("404-id");
		if (!!found) {
			__.footer.displayChildFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("404-id");
	};
	
	var initialized = false;
    var initialize = function() {
		if (initialized) {
			return ;
		}
		__.dom.setHrefOfScreen('404-back-id', 'home');
		initialized = true;
    };

    __.screens = __.screens || [];
	__.screens.push({
		id: 'pageNotFound',
		routeUrl: ['404'],
		initialize: initialize,
		display: display,
		hide: hide
	});

} (this));
