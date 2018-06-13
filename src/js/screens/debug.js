(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("debug-id");
		if (!!found) {
			__.footer.displayChildFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("debug-id");
	};
	
	var initialized = false;
    var initialize = function() {
		if (!!initialized) {
			return ;
		}
		__.dom.setHrefOfScreen('debug-showdata-id', 'dataOfApplication');
		__.dom.setHrefOfScreen('debug-back-id', 'home');
		initialized = true;
    };

    __.screens = __.screens || [];
	__.screens.push({
		id: 'debug',
		routeUrl: ['debug'],
		initialize: initialize,
		display: display,
		hide: hide
	});

} (this));
