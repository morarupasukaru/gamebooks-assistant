/**
 * Javascript function that will add for every supported language, an anchor html tag in the div with id 'footer_language'
 */
(function(globals, divId){
    "use strict";
    var appendSerieTitle = function(title) {
        _.dom.appendHtml(document.getElementById(divId), '<div class="pure-u-1"><h2>' + title + '</h2></div>');
    };
    var appendGamebook = function(gamebook) {
        if (!gamebook) {
            return ;
        }
        _.dom.appendHtml(document.getElementById(divId),
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
        var adminMode = globals._.route.isAdminMode();
		var adminBtnId = "screen-gamebooks-adminBtn";
        if (!!adminMode) {
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
		var gamebooks = globals._.data.get(globals._.config.storageKeys.gamebooksList);
		debugger;
		addGamebooks(gamebooks);
        globals._.route.onhashchange = configureAdminMode;
        configureAdminMode();
    };

    globals._ = globals._ || {};
    globals._.screens = globals._.screens || [];
    globals._.screens.push(initialise);

} (this, 'screen-gamebooks-chooseAdventureDiv'));
