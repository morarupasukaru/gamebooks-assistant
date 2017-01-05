import angular from 'angular';

let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20161230',
        supportedLanguages: ['en', 'fr'],
        data: {
            selectedLanguage: 'selectedLanguage',
            adventure: 'adventure',
            game: 'game',
            library: 'library'
        },
        url: {
            administration: '/administration',
            games : '/games',
            selectAdventureForNewGame : '/games/create/select-adventure',
            createPlayerForNewGame : '/games/create/create-player',
            gameDetail: '/{adventureId}/{paragraphNr}/game/{gameId}',
            credits: '/credits',
            adventures: '/adventures',
            adventureDetail: '/adventures',
            libraryImport: '/library-import'
        },
        choices : {
            yes : 'Yes',
            no : 'No',
            ok: 'Ok',
            cancel: 'Cancel',
            display: 'Display',
            continue: 'Continue',
            remove: 'Remove',
            export: 'Export',
            download: 'Download',
            adventure: 'Adventure',
            game: 'Game'
        },
        errors: {
            adventureAlreadyExist : 'error.adventureAlreadyExist',
            missingMandatoryFields: 'error.missingMandatoryFields'
        }
    });

export default constantsModule;