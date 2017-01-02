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
            games : '/',
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
            create: 'Create',
            cancel: 'Cancel',
            display: 'Display',
            remove: 'Remove',
            import: 'Import',
            export: 'Export',
            download: 'Download'
        },
        errors: {
            adventureAlreadyExist : 'error.adventureAlreadyExist',
            missingMandatoryFields: 'error.missingMandatoryFields'
        }
    });

export default constantsModule;