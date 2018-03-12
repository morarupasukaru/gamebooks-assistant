(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("screen-homepage");
		if (!!found) {
			__.footer.displayHomepageFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("screen-homepage");
	};

    __.screens = __.screens || [];
	__.screens.push({
		id: 'home',
		routeUrl: null,
		initialize: function() {},
		display: display,
		hide: hide
	});

} (this));
