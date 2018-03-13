(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
    var display = function() {
		var found = __.dom.display("screen-localStorageData");
		if (!!found) {
			__.footer.displayChildFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("screen-localStorageData");
	};
	
	var initialized = false;
    var initialize = function() {
		if (!!initialized) {
			return ;
		}
		initialized = true;
    };
	
	var setCodeText = function(text) {
		var codeElement = document.getElementById('screen-localStorageData-code');
		codeElement.innerHTML = text;
	};
	
	var setText = function(elementId, fr, en) {
		// TODO into dom with object for the language
		var titleElement = document.getElementById(elementId);
		titleElement.setAttribute('data-fr', fr);
		titleElement.setAttribute('data-en', en);
	};
	
	var initializeDataOfGamebooks = function() {
		initialize();
		setText("screen-localStorageData-title", "Données de la liste des livres-jeux", "Gamebooks list data");
		setText("screen-localStorageData-backToHomeBtn", "Retour à la liste des livres-jeux", "Back to gamebooks list");
		setCodeText(JSON.stringify(__.data.getGamebooksList(), null, '\t'));
		
		var backBtn = document.getElementById('screen-localStorageData-backToHomeBtn');
		var backUrl = __.route.getScreenUrl('gamebooks');
		backBtn.setAttribute('href', backUrl);
	};
	
	var initializeDataApplication = function() {
		initialize();
		setText("screen-localStorageData-title", "Données de l'application", "Data of the application");
		setText("screen-localStorageData-backToHomeBtn", "Retour à l'acceuil", "Back to home");
		setCodeText(JSON.stringify(__.data.getAllData(), null, '\t'));
		
		var backBtn = document.getElementById('screen-localStorageData-backToHomeBtn');
		var backUrl = __.route.getHomeUrl();
		backBtn.setAttribute('href', backUrl);
	};

    __.screens = __.screens || [];
	__.screens.push({
		id: 'dataOfGamebooks',
		routeUrl: 'data-gamebooks',
		initialize: initializeDataOfGamebooks,
		display: display,
		hide: hide
	});
	__.screens.push({
		id: 'dataOfApplication',
		routeUrl: 'data-application',
		initialize: initializeDataApplication,
		display: display,
		hide: hide
	});
	
	// TODO change title of footer-left when displaying data of a given gamebook
	
	// TODO change back text & url

} (this));
