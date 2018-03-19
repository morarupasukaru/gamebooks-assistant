(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("book-new-id");
		if (!!found) {
			__.footer.displayChildFooter();
		}
		// TODO move to forms
		document.getElementById('book-new-title-id').value = '';
		document.getElementById('book-new-serie-id').value = '';
		document.getElementById('book-new-title-id').focus();
	};
	
    var hide = function() {
		__.dom.hide("book-new-id");
	};
	
	var setPlaceholderToCurrentLanguage = function() {
		__.dom.setPlaceholderText('book-new-title-id', "Titre du livre-jeu", "Title of the gamebook");
		__.dom.setPlaceholderText('book-new-serie-id', "Serie du livre-jeu", "Serie of the gamebook");
	};
	
	var initialized = false;
    var initialize = function() {
		if (!!initialized) {
			return ;
		}
		setPlaceholderToCurrentLanguage();
		__.dom.setHrefOfScreen('book-new-cancel-id', 'gamebooks');
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
