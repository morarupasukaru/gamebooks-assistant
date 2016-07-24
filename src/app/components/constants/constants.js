import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20160723',
        data: "data",
        supportedLanguages: ['en', 'fr'],
        preferences: {
            language: 'language'
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
            inGame: '/in-game',
            about: '/about'
        },
        choices : {
            yes : 'Yes',
            no : 'No'
        }
    });

export default constantsModule;