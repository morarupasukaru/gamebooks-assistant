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
		var titleInput = document.getElementById('screen-newGamebook-title');
		var serieInput = document.getElementById('screen-newGamebook-serie');
		var language = __.data.getLanguage();
		if (language === 'fr') {
			titleInput.setAttribute("placeholder", "Titre du livre-jeu");
			serieInput.setAttribute("placeholder", "Serie du livre-jeu");
		} else {
			titleInput.setAttribute("placeholder", "Title of the gamebook");
			serieInput.setAttribute("placeholder", "Serie of the gamebook");
		}
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
