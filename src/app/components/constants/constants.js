import angular from 'angular';

let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20161122',
        supportedLanguages: ['en', 'fr'],
        data: {
            selectedLanguage: 'selectedLanguage',
            adventure: 'adventure',
            game: 'game',
            library: 'library'
        },
        url: {
            battle : '/battle',
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
            i18n: '/i18n',
            importProjectaon: '/import-projectaon'
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