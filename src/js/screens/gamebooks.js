(function(globals){
    "use strict";
	globals._ = globals._ || {};
	var __ = globals._;
	
	var chooseAdventureDiv = 'screen-gamebooks-chooseAdventureDiv';

    var appendSerieTitle = function(title) {
        __.dom.appendHtml(document.getElementById(chooseAdventureDiv), '<div class="pure-u-1"><h2 class="screen-gamebooks-serie">' + title + '</h2></div>');
    };
    var appendGamebook = function(gamebook) {
        if (!gamebook) {
            return ;
        }
        __.dom.appendHtml(document.getElementById(chooseAdventureDiv),
            '<div class="pure-u-1 pure-u-lg-1-3">' +
                '<div class="margin-right">' +
                    '<a class="button u-full-width screen-gamebooks-book" href="' + __.route.getScreenUrl('gamebook') + '">' + gamebook.name +'</a>' +
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
			__.dom.display(adminBtnId);
        } else {
			__.dom.hide(adminBtnId);
        }
    };
	
    var display = function() {
		var found = __.dom.display("screen-gamebooks");
		if (!!found) {
			__.footer.displayChildFooter();
		}
	};
	
    var hide = function() {
		__.dom.hide("screen-gamebooks");
	};
	
	var gamebooksListVersion;
	
    var initialize = function() {
        var elementOfGamebooksScreen = document.getElementById(chooseAdventureDiv);
        if (!elementOfGamebooksScreen) {
            return ;
        }
		
		var gamebooks = __.data.getGamebooksList();
		if (!gamebooksListVersion || gamebooksListVersion !== gamebooks.version) {
			// TODO clean books
			addGamebooks(gamebooks.gamebooks);
			gamebooksListVersion = gamebooks.version;
		}
		
        __.route.onhashchange = configureAdminMode;
        configureAdminMode();
    };

    __.screens = __.screens || [];
	__.screens.push({
		id: 'gamebooks',
		routeUrl: 'gamebooks',
		initialize: initialize,
		display: display,
		hide: hide
	});

} (this));
