import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20160815',
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
            configuration: '/configuration',
            games : '/games',
            root: '/',
            selectBookForNewGame : '/games/create/select-book',
            createPlayerForNewGame : '/games/create/create-player',
            chooseItemsForNewGame : '/games/create/choose-items',
            inGame: '/{bookId}/{paragraphNr}/game/{gameId}',
            about: '/about',
            deleteData: '/delete-data'
        },
        choices : {
            yes : 'Yes',
            no : 'No'
        }
    });

export default constantsModule;