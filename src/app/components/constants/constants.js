import angular from 'angular';

let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20161002',
        supportedLanguages: ['en', 'fr'],
        data: {
            selectedLanguage: 'selectedLanguage',
            adventure: 'adventure',
            game: 'game',
            library: 'library'
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
            adventureDetail: '/adventures',
            libraries: '/libraries',
            libraryDetail: '/libraries',
        },
        choices : {
            yes : 'Yes',
            no : 'No',
            ok: 'Ok',
            cancel: 'Cancel'
        },
        errors: {
            adventureAlreadyExist : 'error.adventureAlreadyExist',
            libraryAlreadyExist : 'error.libraryAlreadyExist',
            missingMandatoryFields: 'error.missingMandatoryFields'
        }
    });

export default constantsModule;