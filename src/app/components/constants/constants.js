import angular from 'angular';

let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20160906',
        supportedLanguages: ['en', 'fr'],
        data: {
            selectedLanguage: 'selectedLanguage',
            adventure: 'adventure',
            game: 'game'
        },
        url: {
            battle : '/battle',
            chooseLanguage : '/choose-language',
            administration: '/administration',
            games : '/games',
            root: '/',
            selectAdventureForNewGame : '/games/create/select-adventure',
            createPlayerForNewGame : '/games/create/create-player',
            chooseItemsForNewGame : '/games/create/choose-items',
            gameDetail: '/{adventureId}/{paragraphNr}/game/{gameId}',
            about: '/about?admin',
            adventures: '/adventures',
            adventureDetail: '/adventures'
        },
        choices : {
            yes : 'Yes',
            no : 'No'
        },
        errors: {
            adventureAlreadyExist : 'error.adventureAlreadyExist'
        }
    });

export default constantsModule;