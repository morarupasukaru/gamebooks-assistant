import angular from 'angular';

let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20160822',
        supportedLanguages: ['en', 'fr'],
        data: {
            selectedLanguage: 'selectedLanguage',
            lastDisplayedScreenUrl: 'lastDisplayedScreenUrl',
            book : 'book',
            game : 'game'
        },
        url: {
            battle : '/battle',
            chooseLanguage : '/choose-language',
            administration: '/administration',
            games : '/games',
            root: '/',
            selectBookForNewGame : '/games/create/select-book',
            createPlayerForNewGame : '/games/create/create-player',
            chooseItemsForNewGame : '/games/create/choose-items',
            inGame: '/{bookId}/{paragraphNr}/game/{gameId}',
            about: '/about?admin'
        },
        choices : {
            yes : 'Yes',
            no : 'No'
        }
    });

export default constantsModule;