/**
 * Javascript function that will add for every supported language, an anchor html tag in the div with id 'footer_language'
 */
(function(globals, divId){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
    __.screens = __.screens || [];

    var appendSerieTitle = function(title) {
        __.dom.appendHtml(document.getElementById(divId), '<div class="pure-u-1"><h2>' + title + '</h2></div>');
    };
    var appendGamebook = function(gamebook) {
        if (!gamebook) {
            return ;
        }
        __.dom.appendHtml(document.getElementById(divId),
            '<div class="pure-u-1 pure-u-lg-1-3">' +
                '<div class="margin-right">' +
                    '<a class="button u-full-width screen-gamebooks-book" href="../gamebook">' + gamebook.name +'</a>' +
                '</div>' +
            '</div>'
        );
    };

	var addGamebooks = function(gamebooks) {
		if (!!gamebooks) {
			var series = [];
			var gamebooksOfSeries = {};
			var i;
			var j;
			var serie;
			for (i = 0; i < gamebooks.length; i++) {
				serie = gamebooks[i].serie;
				if (series.indexOf(serie) === -1) {
					series.push(serie);
					gamebooksOfSeries[serie] = [];
				}
				gamebooksOfSeries[serie].push(gamebooks[i]);
			}
			series.sort();
			for (i = 0; i < series.length; i++) {
				serie = series[i];
				appendSerieTitle(serie);
				var gamebooksOfSerie = gamebooksOfSeries[serie];
				gamebooksOfSerie = gamebooksOfSerie.sort(function(obj1, obj2) {
					return obj1.order - obj2.order;
				});
				for (j = 0; j < gamebooksOfSerie.length; j++) {
					appendGamebook(gamebooksOfSerie[j]);
				}
			}
		}
	};

    var configureAdminMode = function() {
		var adminEnabled = __.data.isAdminEnabled();
		var adminBtnId = "screen-gamebooks-adminBtn";
        if (!!adminEnabled) {
            document.getElementById(adminBtnId).classList.remove("hidden");
        } else {
            document.getElementById(adminBtnId).classList.add("hidden");
        }
    };

    var initialise = function() {
        var elementOfGamebooksScreen = document.getElementById(divId);
        if (!elementOfGamebooksScreen) {
            return ;
        }
		
		var gamebooks = __.data.getGamebooksList();
		addGamebooks(gamebooks);
		
        __.route.onhashchange = configureAdminMode;
        configureAdminMode();
    };

    __.screens.push(initialise);

} (this, 'screen-gamebooks-chooseAdventureDiv'));
