import angular from 'angular';

let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20161219',
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
            root: '/',
            selectAdventureForNewGame : '/games/create/select-adventure',
            createPlayerForNewGame : '/games/create/create-player',
            gameDetail: '/{adventureId}/{paragraphNr}/game/{gameId}',
            about: '/about',
            adventures: '/adventures',
            adventureDetail: '/adventures',
            libraries: '/libraries'
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