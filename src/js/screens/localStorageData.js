(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("data-id");
		if (!!found) {
			__.footer.displayChildFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("data-id");
	};
	
	var initialized = false;
    var initialize = function() {
		if (!!initialized) {
			return ;
		}
		initialized = true;
    };
	
	var setCodeText = function(text) {
		var codeElement = document.getElementById('data-code-id');
		codeElement.innerHTML = text;
	};
	
	var initializeDataOfGamebooks = function() {
		initialize();
		__.dom.setText("data-title-id", "Données de la liste des livres-jeux", "Gamebooks list data");
		__.dom.setText("data-back-id", "Retour à la liste des livres-jeux", "Back to gamebooks list");
		setCodeText(JSON.stringify(__.data.getGamebooksList(), null, '\t'));
		
		__.dom.setHrefOfScreen('data-back-id', 'gamebooks');
	};
	
	var initializeDataApplication = function() {
		initialize();
		__.dom.setText("data-title-id", "Données de l'application", "Data of the application");
		__.dom.setText("data-back-id", "Retour à l'écran de débogage", "Back to debug screen");
		setCodeText(JSON.stringify(__.data.getAllData(), null, '\t'));
		
		__.dom.setHrefOfScreen('data-back-id', 'debug');
	};

    __.screens = __.screens || [];
	__.screens.push({
		id: 'dataOfGamebooks',
		routeUrl: ['data-gamebooks'],
		initialize: initializeDataOfGamebooks,
		display: display,
		hide: hide
	});
	__.screens.push({
		id: 'dataOfApplication',
		routeUrl: ['data-application'],
		initialize: initializeDataApplication,
		display: display,
		hide: hide
	});
	
	// TODO change title of footer-left when displaying data of a given gamebook

} (this));
