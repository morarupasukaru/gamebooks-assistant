(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("screen-pageNotFound");
		if (!!found) {
			__.footer.displayChildFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("screen-pageNotFound");
	};
	
    var initialize = function() {
		var homeBtn = document.getElementById('screen-pageNotFound-backToHomeBtn');
		homeBtn.setAttribute('href', __.route.getHomeUrl());
    };

    __.screens = __.screens || [];
	__.screens.push({
		id: 'pageNotFound',
		routeUrl: '404',
		initialize: initialize,
		display: display,
		hide: hide
	});

} (this));
