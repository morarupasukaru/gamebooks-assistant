(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("debug-id");
		if (!!found) {
			__.footer.displayChildFooter();
		}
		
		var javascriptErrors = __.data.getJavascriptErrors();
		var javascriptErrorCount = !!javascriptErrors ? javascriptErrors.length: 0;
		__.dom.setText("debug-showerrors-id", javascriptErrorCount + " erreurs javascript", javascriptErrorCount + " javascript errors");
		if (!!javascriptErrorCount) {
			__.dom.addCssClass("debug-showerrors-id", "button-primary");
			// TODO remove attribute disabled
		} else {
			__.dom.removeCssClass("debug-showerrors-id", "button-primary");
			// TODO add attribute disabled
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
