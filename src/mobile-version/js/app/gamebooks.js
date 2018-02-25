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

    var addSeries = function() {
        addSerie(divId, {
            name: 'Défis Fantastiques',
            gamebooks: [
                { name: 'Le Sorcier de la Montagne de Feu' },
                { name: 'Retour à la Montagne de Feu' },
                { name: 'La Légende de Zagor' },
                { name: 'Interlude Sylvain' },
                { name: 'La Forêt de la Malédiction' },
                { name: 'Le Temple de la Terreur' },
                { name: 'Le Labyrinthe de la Mort' },
                { name: 'L\'épreuve des Champions' },
                { name: 'Les Sombres Cohortes' },
                { name: 'Le Talisman de la Mort' },
                { name: 'Retour à Griseguilde' },
                { name: 'La Créature venue du Chaos' },
                { name: 'La Nuit du Nécromancien' },
                { name: 'Le Manoir de l\'Enfer' },
                { name: 'Le Manoir aux maléfices' }
            ]});

        addSerie(divId, {
            name: 'Les Portes Interdites',
            gamebooks: [
                { name: 'L\'Horreur dans la Vallée' },
                { name: 'Terreur hors du Temps' }
            ]});

        addSerie(divId, {
            name: 'Sorcellerie!',
            gamebooks: [
                { name: 'Les Collines Maléfiques' },
                { name: 'La Cité des Pièges' },
                { name: 'Les Sept Serpents' },
                { name: 'La Couronne des Rois' }
            ]});

        addSerie(divId, {
            name: 'Quête du Graal',
            gamebooks: [
                { name: 'Le Château des Ténèbres' },
                { name: 'La Guilde des Voleurs' },
                { name: 'L\'Antre des Dragons' },
                { name: 'Les Portes de l\'Au-delà' },
                { name: 'Le Voyage de l\'Effroi' },
                { name: 'Au Royaume de l\'Epouvante' },
                { name: 'Le Temps de la Malédiction' },
                { name: 'Le Tombeau des Maléfices' },
                { name: 'La Légion des Morts' }
            ]});
    };

    var initialise = function() {
        addSeries();
    };

    globals._ = globals._ || {};
    globals._.screens = globals._.screens || [];
    globals._.screens.push(initialise);

    // TODO retrieve data with json & http (if possible) or read-it from localstorage (offline)

} (this, 'screen.gamebooks.title.choose-adventure'));