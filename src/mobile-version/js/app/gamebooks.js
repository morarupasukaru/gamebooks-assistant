/**
 * Javascript function that will add for every supported language, an anchor html tag in the div with id 'footer_language'
 */
(function(globals, divId){
    "use strict";
    var appendSerieTitle = function(divId, title) {
        _.dom.appendHtml(document.getElementById(divId), '<div class="pure-u-1"><h2>' + title + '</h2></div>');
    };

    var appendGamebook = function(divId, gamebook) {
        if (!gamebook) {
            return ;
        }
        _.dom.appendHtml(document.getElementById(divId),
            '<div class="pure-u-1 pure-u-lg-1-3">' +
                '<div class="margin-right">' +
                    '<a class="button u-full-width" href="../gamebook">' + gamebook.name +'</a>' +
                '</div>' +
            '</div>'
        );
    };

    var addSerie = function(divId, serie) {
        if (!serie || !serie.gamebooks) {
            return ;
        }
        appendSerieTitle(divId, serie.name);

        var i;
        for (i = 0; i < serie.gamebooks.length; i++) {
            appendGamebook(divId, serie.gamebooks[i]);
        }
    };

    var addSeries = function(series) {
        var i;
        for (i = 0; i < series.length; i++) {
            addSerie(divId, series[i]);
        }
    };

    var initialise = function() {
        var elementOfGamebooksScreen = document.getElementById(divId);
        if (!elementOfGamebooksScreen) {
            return ;
        }
        // TODO retrieve data with json & http (if possible) or read-it from localstorage (offline)
        var callback = function(json) {
            addSeries(json);
        }
        globals._.ajax.loadJson('http://morarupasukaru.github.io/gamebooks-assistant/assets/library.json', callback);
    };

    globals._ = globals._ || {};
    globals._.screens = globals._.screens || [];
    globals._.screens.push(initialise);

} (this, 'screen.gamebooks.title.choose-adventure'));