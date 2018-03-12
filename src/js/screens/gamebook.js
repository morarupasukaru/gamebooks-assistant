(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("screen-gamebook");
		if (!!found) {
			__.footer.displayChildFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("screen-gamebook");
	};
	
    __.screens = __.screens || [];
	__.screens.push({
		id: 'gamebook',
		routeUrl: 'gamebook',
		initialize: function() {},
		display: display,
		hide: hide
	});
} (this));
