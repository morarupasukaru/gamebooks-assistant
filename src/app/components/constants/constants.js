import angular from 'angular';

/*@ngInject*/
let constantsModule = angular.module('app.components.constants', [])
    .constant('constants', {
        version: '20160627',
        data: "data",
        supportedLanguages: ['en', 'fr'],
        preferences: {
            language: 'language'
        },
        url: {
            battle : '/battle',
            chooseLanguage : '/choose-language',
            configuration: '/configuration',
            export: '/export',
            games : '/games',
            root: '/',
            import : '/import',
            items : '/items',
            notes :'/notes',
            paragraph: '/paragraph',
            paths: '/paths',
            stats: '/stats',
            createGame : '/games/create'
        }
    });

export default constantsModule;