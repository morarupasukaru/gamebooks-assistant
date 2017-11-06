import angular from 'angular';

let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20171106',
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
            gameDetail: '/{adventureId}/{paragraphNr}/game/{gameId}',
            credits: '/credits',
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
            game: 'Game',
            restart: 'Restart',
            createGame: 'Create a game'
        },
        errors: {
            adventureAlreadyExist : 'error.adventureAlreadyExist',
            missingMandatoryFields: 'error.missingMandatoryFields'
        }
    });

export default constantsModule;