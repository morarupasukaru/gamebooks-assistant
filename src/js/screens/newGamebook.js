(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("screen-newGamebook");
		if (!!found) {
			__.footer.displayChildFooter();
		}
		document.getElementById('screen-newGamebook-title').value = '';
		document.getElementById('screen-newGamebook-serie').value = '';
		document.getElementById('screen-newGamebook-title').focus();
	};
	
    var hide = function() {
		__.dom.hide("screen-newGamebook");
		document.getElementById('screen-newGamebook-title').removeAttribute("autofocus");	
	};
	
	var setPlaceholderToCurrentLanguage = function() {
		__.dom.setPlaceholderText('screen-newGamebook-title', "Titre du livre-jeu", "Title of the gamebook");
		__.dom.setPlaceholderText('screen-newGamebook-serie', "Serie du livre-jeu", "Serie of the gamebook");
	};
	
	var initialized = false;
    var initialize = function() {
		if (!!initialized) {
			return ;
		}
		setPlaceholderToCurrentLanguage();
		__.dom.setHrefOfScreen('screen-newGamebook-cancelBtn', 'gamebooks');
		initialized = true;
    };
	
	var onSubmit = function() {
		__.route.setCurrentScreenWithId('gamebook');
	};

    __.screens = __.screens || [];
	__.screens.push({
		id: 'newGamebook',
		routeUrl: ['gamebook', 'new'],
		initialize: initialize,
		display: display,
		hide: hide,
		onLanguageChange: setPlaceholderToCurrentLanguage,
		onSubmit: onSubmit
	});

} (this));
