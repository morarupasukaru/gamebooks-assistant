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
	
	var showDataBtnInitialized = false;
    var initialize = function() {
		if (!showDataBtnInitialized) {
			var showDataBtn = document.getElementById('screen-home-showDataBtn');
			showDataBtn.href = __.route.getScreenUrl('dataOfApplication');
			showDataBtnInitialized = true;
		}
    };

    __.screens = __.screens || [];
	__.screens.push({
		id: 'home',
		routeUrl: [],
		initialize: initialize,
		display: display,
		hide: hide
	});

} (this));
