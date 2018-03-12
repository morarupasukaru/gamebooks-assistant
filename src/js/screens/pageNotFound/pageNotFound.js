/**
 * Javascript function that will add for every supported language, an anchor html tag in the div with id 'footer_language'
 */
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

    __.screens = __.screens || {};
	__.screens[__.config.screens.pageNotFound] = {
		initialize: null,
		display: display,
		hide: hide
	};

} (this));
