webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _en = __webpack_require__(1);

	var _en2 = _interopRequireDefault(_en);

	var _fr = __webpack_require__(2);

	var _fr2 = _interopRequireDefault(_fr);

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _angularTranslate = __webpack_require__(6);

	var _angularTranslate2 = _interopRequireDefault(_angularTranslate);

	var _angularTranslateHandlerLog = __webpack_require__(7);

	var _angularTranslateHandlerLog2 = _interopRequireDefault(_angularTranslateHandlerLog);

	var _components = __webpack_require__(8);

	var _components2 = _interopRequireDefault(_components);

	var _app = __webpack_require__(109);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Interne Modul-Imports


	// Vendor-Imports
	_angular2.default.module('app', [_angularUiRouter2.default, _angularTranslate2.default, _angularTranslateHandlerLog2.default, _components2.default.name]).config(['$translateProvider', function ($translateProvider) {
	    $translateProvider.translations('en', _en2.default);
	    $translateProvider.translations('fr', _fr2.default);
	    $translateProvider.preferredLanguage('en');
	    $translateProvider.useSanitizeValueStrategy('escape');
	    $translateProvider.useMissingTranslationHandlerLog();
	}]).config(['$compileProvider', function ($compileProvider) {
	    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
	}]).directive('onReadFile',
	/*@ngInject*/
	function ($parse) {
	    return {
	        restrict: 'A',
	        scope: false,
	        link: function link(scope, element, attrs) {
	            var fn = $parse(attrs.onReadFile);

	            element.on('change', function (onChangeEvent) {
	                var reader = new FileReader();

	                reader.onload = function (onLoadEvent) {
	                    scope.$apply(function () {
	                        fn(scope, { $fileContent: onLoadEvent.target.result });
	                    });
	                };

	                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
	            });
	        }
	    };
	})

	// Die App als Direktive exportieren
	.directive('app', _app2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var englishTranslations = {
	    'Add': 'Add',
	    'Administration': 'Administration',
	    'AdventureAlreadyExists': "The adventure already exists with id '{{ adventure }}'",
	    'AdventureDownloaded': "Adventure '{{ adventure }}' is downloaded",
	    'Adventure': 'Adventure',
	    'Adventures': 'Adventures',
	    "All existing application's data will be erased during the import. Are you sure to import the application data?": "All existing application's data will be erased during the import. Are you sure to import the application data?",
	    "Application's data": "Application's data",
	    "Application's version": "Application's version",
	    'application.description': "ease the resolution of gamebooks",
	    'Are you sure to clear the application data?': 'Are you sure to clear the application data?',
	    'Are you sure to download the selected adventure? Existing games could be non-playable after the update if the new version is not retro-compatible': 'Are you sure to download the selected adventure? Existing games could be non-playable after the update if the new version is not retro-compatible',
	    'Are you sure to restart the selected game?': 'Are you sure to restart the selected game?',
	    'Are you sure to remove the character?': 'Are you sure to remove the character?',
	    'Are you sure to remove the selected adventure?': 'Are you sure to remove the selected adventure?',
	    'Are you sure to remove the selected game?': 'Are you sure to remove the selected game?',
	    'attributValueGenerationRule': '{{ dicesQuantity}} dices[{{ min }},{{ max }}] + {{ constant }}',
	    'Author(s)': 'Author(s)',
	    'Back': 'Back',
	    'Battle': 'Battle',
	    'Cancel': 'Cancel',
	    'CannotImportProjectAon': "Cannot import project aon book with url '{{ url }}'",
	    'Cannot import adventure': 'Cannot import adventure',
	    'Cannot import game': 'Cannot import game',
	    'Change language to en': 'Change language to english',
	    'Change language to fr': 'Changez la langue en français',
	    'Characters': 'Characters',
	    'Choose an action': 'Choose an action',
	    'Clear': 'Clear',
	    'Collapse': 'Collapse',
	    'Constant': 'Constant',
	    'Continue': 'Continue',
	    'Create': 'Create',
	    'Create an adventure': 'Create an adventure',
	    'Create a game': 'Create a game',
	    'Credits': 'Credits',
	    'credit_description_javascript': 'language',
	    'credit_description_map_image': 'map image used as favicon',
	    'credit_description_estawebjs': 'development stack',
	    'credit_description_angularjs': 'framework',
	    'credit_description_bootstrap': 'framework',
	    'credit_description_webpack': 'module bundler',
	    'credit_description_gulp': 'build system',
	    'credit_description_nodejs': 'JavaScript runtime',
	    'credit_description_npm': 'package manager for nodejs',
	    'credit_description_browsersync': 'time-saving synchronised browser testing',
	    'credit_description_angular-translate': 'i18n for AngularJS',
	    'credit_description_angular-ui-router': 'flexible routing with nested views in AngularJS',
	    'credit_description_babel': 'JavaScript compiler',
	    'credit_description_realfavicongenerator': 'favicon generator',
	    'credit_description_github': 'Online project hosting using Git',
	    'credit_description_article_sticky_footer': "article",
	    'credit_description_article_responsive_navigation_patterns': "article",
	    'Current': 'Current',
	    'Decrease tree': 'Decrease tree',
	    'DecrementStatsTitle': "Decrement '{{ stats }}'",
	    "Delete application's data": "Delete application's data",
	    'Description': 'Description',
	    'description.syntax': 'Surround paragraph number with § to add a choice (e.g. §123§)',
	    'Detail': 'Detail',
	    'Dices': 'Dices',
	    'dicesQuantity': 'Quantity of dices[{{ min }},{{ max }}]',
	    'Display': 'Display',
	    'Display actions': 'Display actions',
	    'Display more paragraphs': 'Display more paragraphs',
	    'Download': 'Download',
	    'Download URL': 'Download URL',
	    'downloadable_in_list': ' (downloadable)',
	    'DupplicateParagraph': "The paragraph '{{paragraphNr}}' already exist",
	    'Edit': 'Edit',
	    'en': 'English',
	    'English': 'English',
	    'Enable characters with stats': 'Enable characters with stats',
	    'Enable dices': 'Enable dices',
	    'Enable map': 'Enable map',
	    'Enable Go to paragraph': 'Enable Go to paragraph',
	    'Enemy': 'Enemy',
	    'Expand': 'Expand',
	    'Export': 'Export',
	    'Features': 'Features',
	    'First paragraph': 'First paragraph',
	    'fr': 'Français',
	    'Français': 'Français',
	    'Game': 'Game',
	    "Game's rules": "Game's rules",
	    "Game's rules paragraph": "Game's rules paragraph",
	    'GameAlreadyExists': "The game already exists with id '{{ gameId }}'",
	    'General': 'General',
	    'Go to': 'Go to',
	    'Go to paragraph': 'Go to paragraph',
	    'Homepage': 'Homepage',
	    'Home': 'Home',
	    'Import': 'Import',
	    'Imported data': 'Imported data',
	    'ImportGameFailedMissingFields': "Cannot import game because of missing mandatory fields: '{{ missingMandatoryFields }}'",
	    'Increase tree': 'Increase tree',
	    'IncrementStatsTitle': "Increment '{{ stats }}'",
	    'Initial': 'Initial',
	    'ISBN': 'ISBN',
	    'Keep on restart': 'Keep on restart',
	    'Language': 'Language',
	    'link': 'link',
	    'Lists': 'Lists',
	    'Map': 'Map',
	    "Minimal dice's value": "Minimal dice's value",
	    'missing-adventure': "Missing adventure '{{ name }}'",
	    'MIT License': 'MIT License',
	    "Maximal dice's value": "Maximal dice's value",
	    'Name': 'Name',
	    'New character': 'New character',
	    'New entry': 'New entry',
	    'New stats': 'New stats',
	    'Next': 'Next',
	    'No': 'No',
	    'No adventure available': 'No adventure available',
	    'No way further': 'No way further',
	    'Ok': 'Ok',
	    'Paragraph': 'Paragraph',
	    'Paragraph link': 'Paragraph link',
	    'Paragraph not played yet': 'Paragraph not played',
	    "Paste the application's data copied from another browser": "Paste the application's data copied from another browser",
	    'Please complete mandatory fields': 'Please complete mandatory fields',
	    'Please fill a value': 'Please fill a value',
	    'Please fill the name': 'Please fill the name',
	    'Please fill the name of the stats': 'Please fill the name of the stats',
	    'Please fill the name of the game': 'Please fill the name of the game',
	    "Remaining Local's Storage": "Remaining Local's Storage",
	    'Remove': 'Remove',
	    'Remove the character': 'Remove the character',
	    'Remove the stats': 'Remove the stats',
	    'Restart': 'Restart',
	    'Roll dice': 'Roll dice',
	    'Save': 'Save',
	    'Save changes': 'Save changes',
	    'Serie': 'Serie',
	    'sorted alphabetically': 'sorted alphabetically',
	    'Sum of dices value': 'Sum of dices value',
	    'Tag': 'Tag',
	    'The adventure is not available': 'The adventure is not available',
	    "The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.": "The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.",
	    "Used Local's Storage": "Used Local's Storage",
	    "Used Local's Storage in Percent": "Used Local's Storage in Percent",
	    'Version': 'Version',
	    'Visible sections': 'Visible sections',
	    'What must be imported?': 'What must be imported?',
	    'Yes': 'Yes'
	};

	exports.default = englishTranslations;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var frenchTranslations = {
	    'Add': 'Ajoute',
	    'Administration': 'Administration',
	    'AdventureAlreadyExists': "Une aventure existe déjà avec l'id '{{ adventure }}'",
	    'AdventureDownloaded': "L'aventure '{{ adventure }}' est téléchargée",
	    'Adventure': 'Aventure',
	    'Adventures': 'Aventures',
	    "All existing application's data will be erased during the import. Are you sure to import the application data?": "Toutes les données de l'application seront supprimées durant l'importation. Etes-vous certain(e) de vouloir importer les données?",
	    "Application's data": "Données de l'application",
	    "Application's version": "Version de l'application",
	    'application.description': "facilite la résolution de livres-jeux",
	    'Are you sure to clear the application data?': "Etes-vous certain(e) de vouloir supprimer les données de l'application?",
	    'Are you sure to download the selected adventure? Existing games could be non-playable after the update if the new version is not retro-compatible': "Etes-vous certain(e) de vouloir télécharger l'aventure sélectionnée? Les parties existantes pourraient ne plus être jouable suite à la mise-à-jour si celle-ci ne supporte pas de retro-compatibilité",
	    'Are you sure to restart the selected game?': 'Etes-vous certain(e) de vouloir recommencer la partie séléectionnée?',
	    'Are you sure to remove the character?': "Etes-vous certain(e) de vouloir supprimer le personnage?",
	    'Are you sure to remove the selected adventure?': "Etes-vous certain(e) de vouloir supprimer l'aventure sélectionnée?",
	    'Are you sure to remove the selected game?': 'Etes-vous certain(e) de vouloir supprimer la partie sélectionnée?',
	    'attributValueGenerationRule': '{{ dicesQuantity}} dés[{{ min }},{{ max }}] + {{ constant }}',
	    'Author(s)': 'Auteur(s)',
	    'Back': 'Retour',
	    'Battle': 'Combat',
	    'Cancel': 'Annule',
	    'CannotImportProjectAon': "Impossible d'importer le livre du projet aon à l'adresse '{{ url }}'",
	    'Cannot import adventure': "Impossible d'importer l'aventure",
	    'Cannot import game': "Impossible d'importer la partie",
	    'Change language to en': 'Change language to english',
	    'Change language to fr': 'Changez la langue en français',
	    'Characters': 'Personnages',
	    'ChoiceGame': "Sélectionne  le jeu '{{ adventureName }}' du joueur '{{ playerName }}'",
	    'Choose an action': 'Choisissez une action',
	    'ChoosenGame': "Le jeu '{{ adventureName }}' du joueur '{{ playerName }}' est choisi",
	    'Clear': 'Efface',
	    'Collapse': 'Collapse',
	    'Constant': 'Constant',
	    'Continue': 'Poursuivre',
	    'Create': 'Crée',
	    'Create an adventure': 'Crée une aventure',
	    'Create a game': 'Crée une partie',
	    'Credits': 'Crédits',
	    'credit_description_javascript': 'langage',
	    'credit_description_map_image': 'image de carte utilisée comme favicon',
	    'credit_description_estawebjs': 'pile de développement',
	    'credit_description_angularjs': 'framework',
	    'credit_description_bootstrap': 'framework',
	    'credit_description_webpack': 'module bundler',
	    'credit_description_gulp': 'build system',
	    'credit_description_nodejs': 'JavaScript runtime',
	    'credit_description_npm': 'package manager pour nodejs',
	    'credit_description_browsersync': 'time-saving synchronised browser testing',
	    'credit_description_angular-translate': 'i18n pour AngularJS',
	    'credit_description_angular-ui-router': 'flexible routing with nested views in AngularJS',
	    'credit_description_babel': 'compilateur JavaScript',
	    'credit_description_realfavicongenerator': 'générateur de favicon',
	    'credit_description_github': 'Online project hosting using Git',
	    'credit_description_article_sticky_footer': "article",
	    'credit_description_article_responsive_navigation_patterns': "article",
	    'Current': 'Actuel',
	    'Decrease tree': "Réduit l'arborescence",
	    'DecrementStatsTitle': "Décrémente '{{ stats }}'",
	    "Delete application's data": "Supprime les données de l'application",
	    'Description': 'Description',
	    'description.syntax': "Délimiter un numéro de paragraphe avec § afin de l'ajouter comme choix (p.ex. §123§)",
	    'Detail': 'Détail',
	    'Dices': 'Dés',
	    'dicesQuantity': 'Quantité de dés[{{ min }},{{ max }}]',
	    'Display': 'Affiche',
	    'Display actions': 'Affiche actions',
	    'Display more paragraphs': 'Affiche plus de paragraphes',
	    'Download': 'Download',
	    'Download URL': 'URL de download',
	    'downloadable_in_list': ' (téléchargeable)',
	    'DupplicateParagraph': "Le pagraphe '{{paragraphNr}}' existe déjà",
	    'Edit': 'Edite',
	    'en': 'English',
	    'English': 'English',
	    'Enable characters with stats': 'Active les personnages avec attributs',
	    'Enable dices': 'Active les dés',
	    'Enable Go to paragraph': 'Active les sauts de paragraphe',
	    'Enable map': 'Active la carte',
	    'Enemy': 'Enemi',
	    'Export': 'Exporte',
	    'Expand': 'Expand',
	    'Features': 'Fonctionnalitées',
	    'First paragraph': 'Premier paragraphe',
	    'fr': 'Français',
	    'Français': 'Français',
	    'Game': 'Partie',
	    "Game's rules": 'Règles de jeu',
	    "Game's rules paragraph": "Paragraphe des règles du jeu",
	    'GameAlreadyExists': "Le jeu existe déjà avec l'id '{{ gameId }}'",
	    'General': 'Générale',
	    'Go to': 'Aller au',
	    'Go to paragraph': 'Aller au paragraphe',
	    'Home': 'Accueil',
	    'Homepage': "Page d'accueil",
	    'Import': 'Importe',
	    'Imported data': 'Données importées',
	    'ImportGameFailedMissingFields': "Impossible d'importer le jeu car il manque les champs obligatoires suivants: '{{ missingMandatoryFields }}'",
	    'Increase tree': "Augmente l'arborescence",
	    'IncrementStatsTitle': "Incrémente '{{ stats }}'",
	    'Initial': 'Initiale',
	    'ISBN': 'ISBN',
	    'Keep on restart': 'Garder lors de recommencement',
	    'Language': 'Langue',
	    'link': 'lien',
	    'Lists': 'Listes',
	    'Map': 'Carte',
	    "Minimal dice's value": "Valeur de dé minimale",
	    'missing-adventure': "Aventure '{{ name }}' manquante",
	    'MIT License': 'License MIT',
	    "Maximal dice's value": "Valeur de dé maximale",
	    'Name': 'Nom',
	    'New character': 'Nouveau personnage',
	    'New entry': 'Nouvelle entrée',
	    'New stats': 'Nouvel attribut',
	    'Next': 'Suivant',
	    'No': 'Non',
	    'No adventure available': 'Aucune aventure disponible',
	    'No way further': 'Cul-de-sac',
	    'Ok': 'Ok',
	    'Paragraph': 'Paragraphe',
	    'Paragraph link': 'Liens du paragraphe',
	    'Paragraph not played yet': "Le paragraphe n'a pas encore été jouée",
	    "Paste the application's data copied from another browser": "Collez les données de l'application précédent copié depuis une autre navigateur",
	    'Please complete mandatory fields': 'Veuilliez compléter les champs obligatoires',
	    'Please fill a value': 'Veuilliez saisir une valeur',
	    'Please fill the name': 'Veuilliez saisir le nom',
	    'Please fill the quantity of dices used to generate a value for this stats': 'Veuilliez saisir la quantié de dés utilisée pour générer la valeu de cet attribut',
	    'Please fill the name of the stats': 'Veuilliez saisir le nom de cet attribut',
	    'Please fill a default value of this stats for characters': 'Veuilliez saisir une valeur par défaut pour les personnages',
	    "Please do not fill a default value as this stats is not available for characters": "Veuilliez ne pas saisir une valeur par défaut pour les ennemis comme cet attribut n'est pas disponible pour les personnages",
	    'Please fill the name of the game': 'Veuilliez saisir le nom de la partie',
	    "Remaining Local's Storage": "Local's Storage disponible",
	    'Remove': 'Supprime',
	    'Remove the character': 'Supprime le caractère',
	    'Remove the stats': "Supprime l'attribut",
	    'Restart': 'Recommence',
	    'Roll dice': 'Lance un dé',
	    'Save': 'Sauvegarde',
	    'Save changes': 'Sauvegarde les changements',
	    'Serie': 'Série',
	    'sorted alphabetically': 'triés alphabétiquement',
	    'Sum of dices value': 'Somme des dés',
	    'Tag': 'Tag',
	    'The adventure is not available': "L'aventure n'est pas disponible",
	    "The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.": "L'application ne peut pas être utilisée car la version du navigateur est trop ancien ou qu'il n'est pas possible de sauver dans le 'localStorage'.",
	    "Used Local's Storage": "Local's Storage utilisé",
	    "Used Local's Storage in Percent": "Local's Storage utilisé en pourcent",
	    'Visible sections': 'Sections visibles',
	    'Version': 'Version',
	    'What must be imported?': "Qu'est-ce qui doit être importé?",
	    'Yes': 'Oui'
	};

	exports.default = frenchTranslations;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * angular-translate - v2.13.1 - 2016-12-06
	 * 
	 * Copyright (c) 2016 The angular-translate team, Pascal Precht; Licensed MIT
	 */
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    factory();
	  }
	}(this, function () {

	$translateMissingTranslationHandlerLog.$inject = ['$log'];
	angular.module('pascalprecht.translate')

	/**
	 * @ngdoc object
	 * @name pascalprecht.translate.$translateMissingTranslationHandlerLog
	 * @requires $log
	 *
	 * @description
	 * Uses angular's `$log` service to give a warning when trying to translate a
	 * translation id which doesn't exist.
	 *
	 * @returns {function} Handler function
	 */
	.factory('$translateMissingTranslationHandlerLog', $translateMissingTranslationHandlerLog);

	function $translateMissingTranslationHandlerLog ($log) {

	  'use strict';

	  return function (translationId) {
	    $log.warn('Translation for ' + translationId + ' doesn\'t exist');
	  };
	}

	$translateMissingTranslationHandlerLog.displayName = '$translateMissingTranslationHandlerLog';
	return 'pascalprecht.translate';

	}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _gui = __webpack_require__(9);

	var _gui2 = _interopRequireDefault(_gui);

	var _services = __webpack_require__(89);

	var _services2 = _interopRequireDefault(_services);

	var _constants = __webpack_require__(108);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var componentModule = _angular2.default.module('app.components', [_constants2.default.name, _services2.default.name, _gui2.default.name]);

	exports.default = componentModule;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _components = __webpack_require__(10);

	var _components2 = _interopRequireDefault(_components);

	var _screens = __webpack_require__(65);

	var _screens2 = _interopRequireDefault(_screens);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var guiModule = _angular2.default.module('app.components.gui', [_components2.default.name, _screens2.default.name]);

	exports.default = guiModule;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _dices = __webpack_require__(11);

	var _dices2 = _interopRequireDefault(_dices);

	var _messages = __webpack_require__(14);

	var _messages2 = _interopRequireDefault(_messages);

	var _popup = __webpack_require__(18);

	var _popup2 = _interopRequireDefault(_popup);

	var _backButton = __webpack_require__(22);

	var _backButton2 = _interopRequireDefault(_backButton);

	var _importDataPopup = __webpack_require__(25);

	var _importDataPopup2 = _interopRequireDefault(_importDataPopup);

	var _nodes = __webpack_require__(29);

	var _nodes2 = _interopRequireDefault(_nodes);

	var _node = __webpack_require__(32);

	var _node2 = _interopRequireDefault(_node);

	var _characters = __webpack_require__(39);

	var _characters2 = _interopRequireDefault(_characters);

	var _list = __webpack_require__(42);

	var _list2 = _interopRequireDefault(_list);

	var _description = __webpack_require__(45);

	var _description2 = _interopRequireDefault(_description);

	var _goto = __webpack_require__(48);

	var _goto2 = _interopRequireDefault(_goto);

	var _collapse = __webpack_require__(51);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _selectableList = __webpack_require__(54);

	var _selectableList2 = _interopRequireDefault(_selectableList);

	var _footnote = __webpack_require__(57);

	var _footnote2 = _interopRequireDefault(_footnote);

	var _about = __webpack_require__(62);

	var _about2 = _interopRequireDefault(_about);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var guiComponentsModule = _angular2.default.module('app.components.gui.components', [_dices2.default.name, _messages2.default.name, _popup2.default.name, _backButton2.default.name, _importDataPopup2.default.name, _nodes2.default.name, _node2.default.name, _characters2.default.name, _list2.default.name, _description2.default.name, _goto2.default.name, _collapse2.default.name, _selectableList2.default.name, _footnote2.default.name, _about2.default.name]);

	exports.default = guiComponentsModule;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _dices = __webpack_require__(12);

	var _dices2 = _interopRequireDefault(_dices);

	var _dices3 = __webpack_require__(13);

	var _dices4 = _interopRequireDefault(_dices3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dicesModule = _angular2.default.module('app.components.gui.components.dices', []).component('dices', {
	    template: _dices2.default,
	    controller: _dices4.default,
	    bindings: {
	        gameId: '@'
	    }
	});

	exports.default = dicesModule;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"input-group\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\"\n                        ng-click=\"$ctrl.rollDice()\"\n                        aria-label=\"{{ 'Roll dice' | translate }}\"\n                        title=\"{{ 'Roll dice' | translate }}\">\n                    {{ 'Roll dice' | translate }} {{ '[' + $ctrl.min + ',' + $ctrl.max + ']' }}\n                </button>\n                <button type=\"button\"\n                        class=\"btn btn-default\"\n                        ng-click=\"$ctrl.clear()\">\n                    {{ 'Clear' | translate }}\n                </button>\n            </span>\n            <label class=\"form-control\" >{{ $ctrl.dicesValue }}</label>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DicesController = function () {
	    /*@ngInject*/
	    function DicesController(dicesService, gamePersistenceService, adventurePersistenceService) {
	        _classCallCheck(this, DicesController);

	        this.dicesService = dicesService;
	        this.gamePersistenceService = gamePersistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.initData();
	        this.clear();
	    }

	    _createClass(DicesController, [{
	        key: 'initData',
	        value: function initData() {
	            var game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
	            var adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
	            if (!!adventure.dice) {
	                this.min = adventure.dice.min;
	                this.max = adventure.dice.max;
	            }
	        }
	    }, {
	        key: 'rollDice',
	        value: function rollDice() {
	            this.appendToResult(this.dicesService.rollDices(1, this.min, this.max));
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.dicesValue = '';
	        }
	    }, {
	        key: 'appendToResult',
	        value: function appendToResult(value) {
	            if (this.dicesValue !== '') {
	                this.dicesValue = this.dicesValue + ',';
	            }
	            this.dicesValue = this.dicesValue + value;
	        }
	    }]);

	    return DicesController;
	}();

	exports.default = DicesController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _messages = __webpack_require__(15);

	var _messages2 = _interopRequireDefault(_messages);

	var _messages3 = __webpack_require__(16);

	var _messages4 = _interopRequireDefault(_messages3);

	var _messages5 = __webpack_require__(17);

	var _messages6 = _interopRequireDefault(_messages5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var messagesModule = _angular2.default.module('app.components.gui.components.messages', []).service('messagesService', _messages2.default).component('messages', { template: _messages4.default, controller: _messages6.default });

	exports.default = messagesModule;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MessagesService = function () {
	    /*@ngInject*/
	    function MessagesService($rootScope, $translate) {
	        _classCallCheck(this, MessagesService);

	        this.$rootScope = $rootScope;
	        this.$translate = $translate;

	        if (!this.$rootScope.messages) {
	            this.$rootScope.messages = [];
	        }
	    }

	    _createClass(MessagesService, [{
	        key: 'getMessages',
	        value: function getMessages() {
	            return this.$rootScope.messages || [];
	        }
	    }, {
	        key: 'clearMessages',
	        value: function clearMessages() {
	            this.$rootScope.messages.forEach(function (msg, index, arr) {
	                if (!msg.keepAfterLocationChange) {
	                    arr.splice(index, 1);
	                }
	            });
	        }
	    }, {
	        key: 'removeMessage',
	        value: function removeMessage(index) {
	            this.$rootScope.messages.splice(index, 1);
	        }
	    }, {
	        key: 'successMessage',
	        value: function successMessage(msg, keepAfterLocationChange) {
	            this._addMessage(msg, 'success', keepAfterLocationChange);
	        }
	    }, {
	        key: 'errorMessage',
	        value: function errorMessage(msg, keepAfterLocationChange) {
	            this._addMessage(msg, 'error', keepAfterLocationChange);
	        }
	    }, {
	        key: 'infoMessage',
	        value: function infoMessage(msg, keepAfterLocationChange) {
	            this._addMessage(msg, 'info', keepAfterLocationChange);
	        }
	    }, {
	        key: '_addMessage',
	        value: function _addMessage(msg, type, keepAfterLocationChange) {
	            if (!this._hasMessage(msg, type)) {
	                this.$rootScope.messages.push({
	                    message: msg,
	                    type: type,
	                    keepAfterLocationChange: keepAfterLocationChange
	                });
	            }
	        }
	    }, {
	        key: '_hasMessage',
	        value: function _hasMessage(msg, type) {
	            var hasMessage = false;
	            for (var i = 0; i < this.$rootScope.messages.length; i++) {
	                if (this.$rootScope.messages[i].message === msg && this.$rootScope.messages[i].type === type) {
	                    hasMessage = true;
	                    break;
	                }
	            }
	            return hasMessage;
	        }
	    }]);

	    return MessagesService;
	}();

	exports.default = MessagesService;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div ng-repeat=\"msg in $ctrl.messages\">\n    <div class=\"alert alert-{{ msg.type === 'error' ? 'danger' : msg.type }}\">\n        {{ msg.message }}\n        <a class=\"close\" ng-click=\"$ctrl.removeMessage($index)\">&times;</a>\n    </div>\n</div>\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MessagesController = function () {
	    /*@ngInject*/
	    function MessagesController(messagesService, $rootScope) {
	        var _this = this;

	        _classCallCheck(this, MessagesController);

	        this.messagesService = messagesService;

	        $rootScope.$on('$locationChangeStart', function () {
	            return _this.messagesService.clearMessages();
	        });

	        this.messages = messagesService.getMessages();
	    }

	    _createClass(MessagesController, [{
	        key: 'removeMessage',
	        value: function removeMessage(index) {
	            this.messagesService.removeMessage(index);
	        }
	    }]);

	    return MessagesController;
	}();

	exports.default = MessagesController;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _popup = __webpack_require__(19);

	var _popup2 = _interopRequireDefault(_popup);

	var _popup3 = __webpack_require__(20);

	var _popup4 = _interopRequireDefault(_popup3);

	var _popup5 = __webpack_require__(21);

	var _popup6 = _interopRequireDefault(_popup5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var popupModule = _angular2.default.module('app.components.gui.components.popup', []).component('popup', {
	    template: _popup2.default,
	    controller: _popup4.default,
	    bindings: {
	        config: '@'
	    }
	}).service('popupService', _popup6.default);

	exports.default = popupModule;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"{{$ctrl.cfg.id}}\" class=\"modal\">\n    <div class=\"modal-content\">\n        <p>{{ $ctrl.cfg.textToDisplay }}</p>\n        <div class=\"form-group\" ng-show=\"!!$ctrl.cfg.withText\">\n            <input type=\"text\" class=\"form-control\" id=\"text\" ng-model=\"$ctrl.text\" ng-required=\"!!$ctrl.cfg.textRequired\">\n        </div>\n        <span ng-repeat=\"choice in $ctrl.cfg.choices\">\n            <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.select(choice, $ctrl.text)\">{{ choice | translate }}</button>&nbsp;\n        </span>\n    </div>\n</div>\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PopupController = function () {
	    /*@ngInject*/
	    function PopupController(popupService, $translate, constants) {
	        _classCallCheck(this, PopupController);

	        this.cfg = JSON.parse(this.config);
	        this.constants = constants;
	        this.popupService = popupService;
	        if (!!this.cfg.withoutTranslate) {
	            this.cfg.textToDisplay = this.cfg.text;
	        } else {
	            this.cfg.textToDisplay = $translate.instant(this.cfg.text);
	        }
	    }

	    _createClass(PopupController, [{
	        key: "select",
	        value: function select(choice, text) {
	            if (!!this.cfg.withText && !text && choice !== this.constants.choices.cancel) {
	                return;
	            }
	            this.close(choice, text);
	        }
	    }, {
	        key: "close",
	        value: function close(choice, text) {
	            this.popupService.close(this.cfg.id, choice, text);
	        }
	    }]);

	    return PopupController;
	}();

	exports.default = PopupController;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PopupService = function () {

	    /*@ngInject*/
	    function PopupService() {
	        _classCallCheck(this, PopupService);

	        this.popups = {};
	    }

	    _createClass(PopupService, [{
	        key: "show",
	        value: function show(popupDomElementId, callback) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "block";

	            this.popups[popupDomElementId] = callback;
	        }
	    }, {
	        key: "close",
	        value: function close(popupDomElementId, choice, text) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "none";

	            var callback = this.popups[popupDomElementId];
	            if (!!callback) {
	                callback(popupDomElementId, choice, text);
	            }
	            delete this.popups[popupDomElementId];
	        }
	    }]);

	    return PopupService;
	}();

	exports.default = PopupService;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _backButton = __webpack_require__(23);

	var _backButton2 = _interopRequireDefault(_backButton);

	var _backButton3 = __webpack_require__(24);

	var _backButton4 = _interopRequireDefault(_backButton3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var backButtonModule = _angular2.default.module('app.components.gui.components.back-button', []).component('backButton', { template: _backButton2.default, controller: _backButton4.default });

	exports.default = backButtonModule;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<button type=\"button\"\n        class=\"btn btn-default\"\n        aria-label=\"{{ 'Back' | translate }}\"\n        title=\"{{ 'Back' | translate }}\"\n        ng-click=\"$ctrl.back()\"\n        ng-disabled=\"$ctrl.isBackDisabled()\">\n    {{ 'Back' | translate }}\n</button>"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BackButtonController = function () {
	    /*@ngInject*/
	    function BackButtonController($location, constants) {
	        _classCallCheck(this, BackButtonController);

	        this.$location = $location;
	        this.constants = constants;
	    }

	    _createClass(BackButtonController, [{
	        key: "back",
	        value: function back() {
	            this.$location.url(this.constants.url.games);
	        }
	    }]);

	    return BackButtonController;
	}();

	exports.default = BackButtonController;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _importDataPopup = __webpack_require__(26);

	var _importDataPopup2 = _interopRequireDefault(_importDataPopup);

	var _importDataPopup3 = __webpack_require__(27);

	var _importDataPopup4 = _interopRequireDefault(_importDataPopup3);

	var _importDataPopup5 = __webpack_require__(28);

	var _importDataPopup6 = _interopRequireDefault(_importDataPopup5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var importDataPopupModule = _angular2.default.module('app.components.gui.components.import-data-popup', []).component('importDataPopup', {
	    template: _importDataPopup2.default,
	    controller: _importDataPopup4.default,
	    bindings: {
	        config: '<'
	    }
	}).service('importDataPopupService', _importDataPopup6.default);

	exports.default = importDataPopupModule;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = "<form name=\"importDataForm\" novalidate=\"novalidate\">\n    <div id=\"{{$ctrl.config.id}}\" class=\"modal\">\n        <div class=\"modal-content\">\n            <div class=\"form-group\">\n                <input id=\"importUpload\" type=\"file\" ng-model=\"$ctrl.uploadFile\" on-read-file=\"$ctrl.showContent($fileContent)\" />\n            </div>\n\n            <span ng-repeat=\"choice in $ctrl.choices\">\n                <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.select(choice, importDataForm)\">{{ choice | translate }}</button>&nbsp;\n            </span>\n        </div>\n    </div>\n</form>"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImportDataPopupController = function () {
	    /*@ngInject*/
	    function ImportDataPopupController(importDataPopupService, constants, $window) {
	        _classCallCheck(this, ImportDataPopupController);

	        this.constants = constants;
	        this.importDataPopupService = importDataPopupService;
	        this.$window = $window;
	        this.choices = [constants.choices.cancel, constants.choices.ok];
	    }

	    _createClass(ImportDataPopupController, [{
	        key: "select",
	        value: function select(choice, form) {
	            if (choice === this.constants.choices.cancel) {
	                this.close(choice);
	            } else if (choice === this.constants.choices.ok) {
	                var importData = this.importUploadData;
	                this.close(choice, importData);
	                this.importUploadData = null;
	            }
	        }
	    }, {
	        key: "close",
	        value: function close(choice, importData) {
	            this.importDataPopupService.close(this.config.id, choice, importData);
	        }
	    }, {
	        key: "showContent",
	        value: function showContent($fileContent) {
	            this.importUploadData = $fileContent;
	        }
	    }]);

	    return ImportDataPopupController;
	}();

	exports.default = ImportDataPopupController;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImportDataPopupService = function () {

	    /*@ngInject*/
	    function ImportDataPopupService(constants) {
	        _classCallCheck(this, ImportDataPopupService);

	        this.constants = constants;
	        this.popups = {};
	    }

	    _createClass(ImportDataPopupService, [{
	        key: "show",
	        value: function show(popupDomElementId, callback) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "block";

	            this.popups[popupDomElementId] = callback;
	        }
	    }, {
	        key: "close",
	        value: function close(popupDomElementId, choice, data) {
	            var modalElement = window.document.getElementById(popupDomElementId);
	            modalElement.style.display = "none";

	            var callback = this.popups[popupDomElementId];
	            if (!!callback && choice === this.constants.choices.ok) {
	                callback(popupDomElementId, data);
	            }
	            delete this.popups[popupDomElementId];
	        }
	    }]);

	    return ImportDataPopupService;
	}();

	exports.default = ImportDataPopupService;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _nodes = __webpack_require__(30);

	var _nodes2 = _interopRequireDefault(_nodes);

	var _nodes3 = __webpack_require__(31);

	var _nodes4 = _interopRequireDefault(_nodes3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var nodesModule = _angular2.default.module('app.components.gui.components.nodes', []).component('nodes', {
	    template: _nodes2.default,
	    controller: _nodes4.default,
	    bindings: {
	        gameId: '<',
	        adventureId: '<',
	        rootParagraphNr: '<'
	    }
	});

	exports.default = nodesModule;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = "<ul>\n    <li class=\"node\" ng-if=\"$ctrl.isDisplayMoreParagraphsButtonAvailable()\">\n        <button type=\"button\"\n                class=\"btn btn-xs btn-default\"\n                aria-label=\"{{ 'Display more paragraphs' | translate}}\"\n                title=\"{{ 'Display more paragraphs' | translate}}\"\n                ng-click=\"$ctrl.displayMoreParagraphs()\">\n            <span aria-hidden=\"true\">...</span>\n        </button>\n    </li>\n    <li class=\"node\" ng-repeat=\"path in $ctrl.path\">\n        <button type=\"button\" class=\"btn btn-xs btn-default\" ng-click=\"$ctrl.setRootParagraphNr(path.value)\">{{ path.value + (!!path.tag ? ' (' + path.tag + ')': '') }}</button>\n    </li>\n</ul>\n<ul>\n    <node data=\"$ctrl.rootNode\" root-node=\"$ctrl.rootNode\"></node>\n</ul>\n<li class=\"node\">\n    <button type=\"button\" class=\"btn btn-xs btn-default\"\n            ng-click=\"$ctrl.increaseTree()\">\n        <span aria-hidden=\"true\">{{ 'Increase tree' | translate }}</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-xs btn-default\"\n            ng-click=\"$ctrl.decreaseTree()\">\n        <span aria-hidden=\"true\">{{ 'Decrease tree' | translate }}</span>\n    </button>\n</li>\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NodesController = function () {
	    /*@ngInject*/
	    function NodesController(mapPersistenceService, gamePersistenceService, adventurePersistenceService) {
	        _classCallCheck(this, NodesController);

	        this.mapPersistenceService = mapPersistenceService;
	        this.gamePersistenceService = gamePersistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.initData();
	    }

	    _createClass(NodesController, [{
	        key: "initData",
	        value: function initData() {
	            var game = this.gamePersistenceService.getGame(this.gameId);
	            if (game.expandedTreeLevels !== 0 && !game.expandedTreeLevels) {
	                this.expandedTreeLevels = 5;
	            } else {
	                this.expandedTreeLevels = game.expandedTreeLevels;
	            }
	            this.setRootParagraphNr(this.rootParagraphNr);
	        }
	    }, {
	        key: "getExpandedTreeLevels",
	        value: function getExpandedTreeLevels() {}
	    }, {
	        key: "displayMoreParagraphs",
	        value: function displayMoreParagraphs() {
	            this.displayedLastParagraphCount = this.displayedLastParagraphCount + 3;
	            this.computeDisplayedLastParagraphs();
	        }
	    }, {
	        key: "isDisplayMoreParagraphsButtonAvailable",
	        value: function isDisplayMoreParagraphsButtonAvailable() {
	            return this.lastParagraphCount - 2 >= this.displayedLastParagraphCount;
	        }
	    }, {
	        key: "computeDisplayedLastParagraphs",
	        value: function computeDisplayedLastParagraphs() {
	            var game = this.gamePersistenceService.getGame(this.gameId);
	            this.lastParagraphCount = 0;
	            if (!!game.path && !!game.path.length) {
	                this.lastParagraphCount = game.path.length - 1;
	            }

	            this.path = [];
	            if (!!this.lastParagraphCount > 0) {
	                var firstIndex = 0;
	                var lastIndex = game.path.length - 2;
	                if (this.displayedLastParagraphCount < lastIndex) {
	                    firstIndex = lastIndex - this.displayedLastParagraphCount + 1;
	                }
	                for (var i = firstIndex; i <= lastIndex; i++) {
	                    var pathElement = { value: game.path[i] };
	                    var paragraph = this.adventurePersistenceService.getParagraph(this.adventureId, game.path[i]);
	                    if (!!paragraph.tag) {
	                        pathElement.tag = paragraph.tag;
	                    }
	                    this.path.push(pathElement);
	                }
	            }
	        }
	    }, {
	        key: "collapseAll",
	        value: function collapseAll(node) {
	            this.collapse(node, -1);
	        }
	    }, {
	        key: "collapse",
	        value: function collapse(node, level) {
	            this.setCollapse(node, level, true);
	        }
	    }, {
	        key: "expand",
	        value: function expand(node, level) {
	            this.setCollapse(node, level, false);
	        }
	    }, {
	        key: "setCollapse",
	        value: function setCollapse(node, level, collapse) {
	            if (!!node.children) {
	                node.collapsed = collapse;
	                if (level !== 0) {
	                    for (var i = 0; i < node.children.length; i++) {
	                        this.setCollapse(node.children[i], level - 1, collapse);
	                    }
	                }
	            }
	        }
	    }, {
	        key: "setRootParagraphNr",
	        value: function setRootParagraphNr(paragraphNr) {
	            this.rootParagraphNr = paragraphNr;
	            this.displayedLastParagraphCount = 5;
	            this.computeDisplayedLastParagraphs();
	            this.rootNode = this.mapPersistenceService.getMap(this.adventureId, this.rootParagraphNr);
	            this.collapseAll(this.rootNode);
	            this.expand(this.rootNode, this.expandedTreeLevels);
	        }
	    }, {
	        key: "increaseTree",
	        value: function increaseTree() {
	            this.expandedTreeLevels = this.expandedTreeLevels + 1;
	            this.setRootParagraphNr(this.rootParagraphNr);
	            this.saveExpandedTreeLevel();
	        }
	    }, {
	        key: "decreaseTree",
	        value: function decreaseTree() {
	            this.expandedTreeLevels = this.expandedTreeLevels - 1;
	            if (this.expandedTreeLevels < 0) {
	                this.expandedTreeLevels = 0;
	            }
	            this.setRootParagraphNr(this.rootParagraphNr);
	            this.saveExpandedTreeLevel();
	        }
	    }, {
	        key: "saveExpandedTreeLevel",
	        value: function saveExpandedTreeLevel() {
	            var game = this.gamePersistenceService.getGame(this.gameId);
	            game.expandedTreeLevels = this.expandedTreeLevels;
	            this.gamePersistenceService.updateGame(game);
	        }
	    }]);

	    return NodesController;
	}();

	exports.default = NodesController;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _node = __webpack_require__(33);

	var _node2 = _interopRequireDefault(_node);

	var _node3 = __webpack_require__(34);

	var _node4 = _interopRequireDefault(_node3);

	__webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var nodeModule = _angular2.default.module('app.components.gui.components.node', []).component('node', {
	    template: _node2.default,
	    controller: _node4.default,
	    bindings: {
	        data: '<',
	        rootNode: '<'
	    }
	});

	exports.default = nodeModule;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"{{$ctrl.data.id}}\" ng-click=\"$ctrl.click()\">\n    <span>\n        {{ $ctrl.data.name + (!!$ctrl.data.tag ? ' (' + $ctrl.data.tag + ')': '') }}\n    </span>\n    <span class=\"glyphicon glyphicon-link\"\n          aria-label=\"{{ 'Paragraph link' | translate }}\"\n          title=\"{{ 'Paragraph link' | translate }}\"\n          ng-show=\"!!$ctrl.data.linkNodeId\">\n    </span>\n    <span class=\"glyphicon glyphicon-question-sign\"\n          aria-label=\"{{ 'Paragraph not played yet' | translate }}\"\n          title=\"{{ 'Paragraph not played yet' | translate }}\"\n          ng-show=\"!!$ctrl.data.unknown\">\n    </span>\n    <span class=\"glyphicon glyphicon-minus-sign\"\n          aria-label=\"{{ 'No way further' | translate }}\"\n          title=\"{{ 'No way further' | translate }}\"\n          ng-show=\"!$ctrl.data.children && !!$ctrl.data.linkNodeId && !!$ctrl.data.unknown\">\n    </span>\n    <button type=\"button\"\n            class=\"btn btn-xs btn-default\"\n            ng-click=\"$ctrl.toogleCollapse()\"\n            ng-show=\"!!$ctrl.data.children\">\n        {{ (!!$ctrl.data.collapsed ? 'Expand': 'Collapse') | translate }}\n    </button>\n</div>\n<div ng-if=\"!!$ctrl.data.children && !$ctrl.data.collapsed\">\n    <ul>\n        <li class=\"node\" ng-repeat=\"childNode in $ctrl.data.children\">\n            <node data=\"childNode\" root-node=\"$ctrl.rootNode\"></node>\n        </li>\n    </ul>\n</div>\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NodeController = function () {
	    /*@ngInject*/
	    function NodeController() {
	        _classCallCheck(this, NodeController);
	    }

	    _createClass(NodeController, [{
	        key: "click",
	        value: function click() {
	            if (!!this.data.children) {
	                this.toggleCollapse(this.data);
	            } else if (!!this.data.linkNodeId) {
	                this.expandUpTo(this.data.linkNodeId);
	            }
	        }
	    }, {
	        key: "expandUpTo",
	        value: function expandUpTo(nodeId) {
	            var path = [];
	            this.findNode(this.rootNode, nodeId, path);
	            for (var i = 0; i < path.length; i++) {
	                path[i].collapsed = false;
	            }
	        }
	    }, {
	        key: "toggleCollapse",
	        value: function toggleCollapse(node) {
	            if (!!node.children) {
	                if (!node.collapsed) {
	                    node.collapsed = true;
	                } else {
	                    node.collapsed = !node.collapsed;
	                }
	            }
	        }
	    }, {
	        key: "findNode",
	        value: function findNode(currentNode, nodeId, path) {
	            path.push(currentNode);
	            if (nodeId === currentNode.id) {
	                return currentNode;
	            } else {
	                if (!!currentNode.children) {
	                    for (var i = 0; i < currentNode.children.length; i++) {
	                        var foundNode = this.findNode(currentNode.children[i], nodeId, path);
	                        if (!!foundNode) {
	                            return foundNode;
	                        }
	                    }
	                }
	            }
	            var index = path.indexOf(currentNode);
	            path.splice(index, 1);
	            return null;
	        }
	    }]);

	    return NodeController;
	}();

	exports.default = NodeController;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!./node.css", function() {
				var newContent = require("!!../../../../../../node_modules/css-loader/index.js!./node.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "li.node {\n  display: block;\n}", ""]);

	// exports


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _characters = __webpack_require__(40);

	var _characters2 = _interopRequireDefault(_characters);

	var _characters3 = __webpack_require__(41);

	var _characters4 = _interopRequireDefault(_characters3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var charactersModule = _angular2.default.module('app.components.gui.components.characters', []).component('characters', {
	    template: _characters2.default,
	    controller: _characters4.default,
	    bindings: {
	        gameId: '<'
	    }
	});

	exports.default = charactersModule;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = "<ul>\n    <li ng-repeat=\"entry in $ctrl.characters\">\n        <span ng-show=\"!entry.edited\">{{ entry.name }}</span>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-default\"\n                ng-click=\"$ctrl.editEntry(entry)\"\n                ng-show=\"!entry.edited\">\n            {{ 'Edit' | translate }}\n        </button>\n        <form name=\"formCharacter\" ng-show=\"!!entry.edited\">\n            <div class=\"form-group\" ng-if=\"!$ctrl.adventure.id\">\n                <label for=\"name\">{{ \"Name\" | translate }}</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" ng-model=\"entry.name\" required>\n                <div class=\"error\" ng-show=\"!entry.name\">\n                    {{ 'Please fill the name' | translate }}\n                </div>\n            </div>\n            <div ng-repeat=\"stats in entry.stats\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" ng-model=\"stats.name\" id=\"{{ stats.name }}\" required>\n                    <div class=\"error\" ng-show=\"!stats.name\">\n                        {{ 'Please fill the name of the stats' | translate }}\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <div class=\"input-group\">\n                                <input type=\"number\" class=\"form-control\" ng-model=\"stats.current\" id=\"{{ stats.name }}\" required>\n                              <span class=\"input-group-addon\">\n                                <label>/</label>\n                              </span>\n                                <input type=\"number\" class=\"form-control\" ng-model=\"stats.initial\" required>\n                            </div>\n                            <div class=\"error\" ng-show=\"!stats.current || !stats.initial\">\n                                {{ 'Please fill a value' | translate }}\n                            </div>\n                        </div>\n                    </div>\n                    <button type=\"button\"\n                            class=\"btn btn-xs btn-danger\"\n                            aria-label=\"{{ 'Remove the stats' | translate }}\"\n                            title=\"{{ 'Remove the stats' | translate }}\"\n                            ng-click=\"$ctrl.removeStats(entry, stats)\">\n                        {{ 'Remove' | translate }}\n                    </button>\n                </div>\n            </div>\n        </form>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-success\"\n                ng-click=\"$ctrl.saveChanges(entry, formCharacter)\"\n                ng-show=\"!!entry.edited\">\n            {{ 'Save' | translate }}\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-danger\"\n                ng-click=\"$ctrl.abortChanges(entry)\"\n                ng-show=\"!!entry.edited\">\n            {{ 'Cancel' | translate }}\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-danger\"\n                aria-label=\"{{ 'Remove the character' | translate }}\"\n                title=\"{{ 'Remove the character' | translate }}\"\n                ng-click=\"$ctrl.displayRemovePopup(entry)\"\n                ng-show=\"!!entry.edited\">\n            {{ 'Remove' | translate }}\n        </button>\n\n        <ul>\n            <li ng-repeat=\"stats in entry.stats\">\n                {{ stats.name + ' [' + stats.current + '/' + stats.initial + ']' }}\n                <button type=\"button\" class=\"btn btn-xs btn-default\"\n                        aria-label=\"{{ 'IncrementStatsTitle' | translate: {stats: stats.name} }}\"\n                        title=\"{{ 'IncrementStatsTitle' | translate: {stats: stats.name} }}\"\n                        ng-click=\"$ctrl.increment(stats)\">\n                    <span aria-hidden=\"true\"><b>+</b></span>\n                </button>\n                <button type=\"button\" class=\"btn btn-xs btn-default\"\n                        aria-label=\"{{ 'DecrementStatsTitle' | translate: {stats: stats.name} }}\"\n                        title=\"{{ 'DecrementStatsTitle' | translate: {stats: stats.name} }}\"\n                        ng-click=\"$ctrl.decrement(stats)\">\n                    <span aria-hidden=\"true\"><b>-</b></span>\n                </button>\n            </li>\n            <li ng-show=\"!entry.edited\">\n                <input id=\"newStats\" type=\"text\" placeholder=\"{{ 'New stats' | translate }}\" ng-model=\"entry.newStats\"/>\n                <button type=\"button\"\n                        class=\"btn btn-xs btn-success\"\n                        ng-click=\"$ctrl.addStats(entry)\"\n                        ng-show=\"!!entry.newStats\">\n                    {{ 'Add' | translate }}\n                </button>\n            </li>\n        </ul>\n    </li>\n    <li>\n        <input id=\"newEntry\" type=\"text\" placeholder=\"{{ 'New character' | translate }}\" ng-model=\"$ctrl.newEntry\"/>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-success\"\n                ng-click=\"$ctrl.addEntry()\"\n                ng-show=\"!!$ctrl.newEntry\">\n            {{ 'Add' | translate }}\n        </button>\n    </li>\n</ul>\n\n<popup config=\"{{ $ctrl.popupDeleteCharacterConfig }}\"></popup>\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CharactersController = function () {

	    /*@ngInject*/
	    function CharactersController(gamePersistenceService, adventurePersistenceService, popupService, constants) {
	        _classCallCheck(this, CharactersController);

	        this.gamePersistenceService = gamePersistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.popupService = popupService;
	        this.constants = constants;
	        this.initData();

	        this.popupDeleteCharacterConfig = {
	            id: 'popupDeleteCharacter',
	            text: 'Are you sure to remove the character?',
	            choices: [constants.choices.yes, constants.choices.no]
	        };
	    }

	    _createClass(CharactersController, [{
	        key: 'initData',
	        value: function initData() {
	            var game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
	            if (!game.characters) {
	                this.characters = [];
	            } else {
	                this.characters = game.characters;
	            }
	        }
	    }, {
	        key: 'addEntry',
	        value: function addEntry() {
	            var character = this.createCharacter(this.newEntry);
	            this.characters.push(character);
	            this.newEntry = null;
	            this.save();
	            this.editEntry(character);
	        }
	    }, {
	        key: 'addStats',
	        value: function addStats(character) {
	            if (!character.stats) {
	                character.stats = [];
	            }
	            character.stats.push({
	                name: character.newStats
	            });
	            this.editEntry(character);
	        }
	    }, {
	        key: 'createCharacter',
	        value: function createCharacter(characterName) {
	            var character = {
	                name: characterName
	            };
	            character.stats = [];
	            return character;
	        }
	    }, {
	        key: 'editEntry',
	        value: function editEntry(entry) {
	            if (!entry.edited) {
	                entry.edited = true;
	                entry.originalValues = {};
	                this.copyCharacter(entry, entry.originalValues);
	            }
	        }
	    }, {
	        key: 'displayRemovePopup',
	        value: function displayRemovePopup(removedRow) {
	            this.rowToBeRemoved = removedRow;
	            var self = this;
	            this.popupService.show(this.popupDeleteCharacterConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.yes) {
	                    self.removeEntry(self.rowToBeRemoved);
	                }
	                self.rowToBeRemoved = null;
	            });
	        }
	    }, {
	        key: 'removeEntry',
	        value: function removeEntry(entry) {
	            var index = this.characters.indexOf(entry);
	            this.characters.splice(index, 1);
	            this.save();
	        }
	    }, {
	        key: 'removeStats',
	        value: function removeStats(entry, stats) {
	            var index = entry.stats.indexOf(stats);
	            entry.stats.splice(index, 1);
	        }
	    }, {
	        key: 'saveChanges',
	        value: function saveChanges(entry, form) {
	            if (form.$invalid) {
	                return;
	            }
	            this.clearEdition(entry);
	            this.save();
	        }
	    }, {
	        key: 'abortChanges',
	        value: function abortChanges(entry) {
	            this.copyCharacter(entry.originalValues, entry);
	            if (!!entry.newStats) {
	                var foundIndex = -1;
	                for (var i = 0; i < entry.stats.length; i++) {
	                    if (entry.newStats == entry.stats[i].name) {
	                        foundIndex = i;
	                        break;
	                    }
	                }
	                if (foundIndex !== -1) {
	                    entry.stats.splice(foundIndex, 1);
	                }
	            }
	            this.clearEdition(entry);
	        }
	    }, {
	        key: 'copyCharacter',
	        value: function copyCharacter(src, dest) {
	            dest.name = src.name;
	            if (!!src.stats) {
	                dest.stats = [];
	                for (var i = 0; i < src.stats.length; i++) {
	                    dest.stats.push({
	                        name: src.stats[i].name,
	                        current: src.stats[i].current,
	                        initial: src.stats[i].initial
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'clearEdition',
	        value: function clearEdition(entry) {
	            delete entry.originalValues;
	            delete entry.edited;
	            entry.newStats = null;
	        }
	    }, {
	        key: 'increment',
	        value: function increment(stats) {
	            stats.current = stats.current + 1;
	            this.save();
	        }
	    }, {
	        key: 'decrement',
	        value: function decrement(stats) {
	            stats.current = stats.current - 1;
	            this.save();
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var game = this.gamePersistenceService.getGame(decodeURIComponent(this.gameId));
	            game.characters = this.characters;
	            this.gamePersistenceService.updateGame(game);
	        }
	    }]);

	    return CharactersController;
	}();

	exports.default = CharactersController;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _list = __webpack_require__(43);

	var _list2 = _interopRequireDefault(_list);

	var _list3 = __webpack_require__(44);

	var _list4 = _interopRequireDefault(_list3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var listModule = _angular2.default.module('app.components.gui.components.list', []).component('list', {
	    template: _list2.default,
	    controller: _list4.default,
	    bindings: {
	        entries: '<',
	        onSave: '&'
	    }
	});

	exports.default = listModule;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = "<ul>\n    <li ng-repeat=\"entry in $ctrl.innerEntries\">\n        <span ng-show=\"!entry.edited\">{{ entry.value }}</span>\n        <input type=\"text\" ng-model=\"entry.value\" ng-show=\"!!entry.edited\"/>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-default\"\n                ng-click=\"$ctrl.editEntry(entry)\"\n                ng-show=\"!entry.edited\">\n            {{ 'Edit' | translate }}\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-success\"\n                ng-click=\"$ctrl.saveChanges(entry)\"\n                ng-show=\"!!entry.edited\">\n            {{ 'Save' | translate }}\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-danger\"\n                ng-click=\"$ctrl.abortChanges(entry)\"\n                ng-show=\"!!entry.edited\">\n            {{ 'Cancel' | translate }}\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-danger\"\n                ng-click=\"$ctrl.removeEntry(entry)\"\n                ng-show=\"!!entry.edited\">\n            {{ 'Remove' | translate }}\n        </button>\n    </li>\n    <li>\n        <input id=\"newEntry\" type=\"text\" placeholder=\"{{ 'New entry' | translate }}\" ng-model=\"$ctrl.newEntry\"/>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-success\"\n                ng-click=\"$ctrl.addEntry()\"\n                ng-show=\"!!$ctrl.newEntry\">\n            {{ 'Add' | translate }}\n        </button>\n    </li>\n</ul>"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListController = function () {

	    /*@ngInject*/
	    function ListController() {
	        _classCallCheck(this, ListController);

	        this.innerEntries = [];
	        if (!!this.entries) {
	            for (var i = 0; i < this.entries.length; i++) {
	                this.innerEntries.push({ value: this.entries[i] });
	            }
	        }
	    }

	    _createClass(ListController, [{
	        key: "addEntry",
	        value: function addEntry() {
	            this.innerEntries.push({ value: this.newEntry });
	            this.newEntry = null;
	            this.save();
	        }
	    }, {
	        key: "editEntry",
	        value: function editEntry(entry) {
	            if (!entry.edited) {
	                entry.edited = true;
	                entry.originalValue = entry.value;
	            }
	        }
	    }, {
	        key: "removeEntry",
	        value: function removeEntry(entry) {
	            var index = this.innerEntries.indexOf(entry);
	            this.innerEntries.splice(index, 1);
	            this.save();
	        }
	    }, {
	        key: "saveChanges",
	        value: function saveChanges(entry) {
	            this.clearEdition(entry);
	            this.save();
	        }
	    }, {
	        key: "abortChanges",
	        value: function abortChanges(entry) {
	            entry.value = entry.originalValue;
	            this.clearEdition(entry);
	        }
	    }, {
	        key: "clearEdition",
	        value: function clearEdition(entry) {
	            delete entry.originalValue;
	            delete entry.edited;
	        }
	    }, {
	        key: "save",
	        value: function save() {
	            var entriesValues = [];
	            if (!!this.innerEntries) {
	                for (var i = 0; i < this.innerEntries.length; i++) {
	                    entriesValues.push(this.innerEntries[i].value);
	                }
	            }
	            this.onSave({ entries: entriesValues });
	        }
	    }]);

	    return ListController;
	}();

	exports.default = ListController;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _description = __webpack_require__(46);

	var _description2 = _interopRequireDefault(_description);

	var _description3 = __webpack_require__(47);

	var _description4 = _interopRequireDefault(_description3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var descriptionModule = _angular2.default.module('app.components.gui.components.description', []).component('description', {
	    template: _description2.default,
	    controller: _description4.default,
	    bindings: {
	        gameId: '<',
	        paragraph: '<'
	    }
	});

	exports.default = descriptionModule;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-md-11\">\n        <textarea id=\"inputCurrentDescription\" class=\"form-control\" ng-model=\"$ctrl.paragraph.description\" ng-if=\"!!$ctrl.isDescriptionEditable()\" title=\"{{ 'description.syntax' | translate }}\"></textarea>\n        <div ng-if=\"!$ctrl.isDescriptionEditable()\">\n            <div ng-repeat=\"paragraph in $ctrl.paragraphs\">\n                <ng-repeat ng-repeat=\"paragraphElement in paragraph\">\n                    <button class=\"btn btn-xs btn-default\" ng-if=\"!!paragraphElement.choice && !!$ctrl.isAlreadyChoosen(paragraphElement.text)\" ng-click=\"$ctrl.goTo(paragraphElement.text)\">\n                        {{ paragraphElement.text }}\n                    </button>\n                    <button class=\"btn btn-xs btn-default\" ng-if=\"!!paragraphElement.choice && !$ctrl.isAlreadyChoosen(paragraphElement.text)\" ng-click=\"$ctrl.goTo(paragraphElement.text)\">\n                        <strong>{{ paragraphElement.text }}</strong>\n                    </button>\n                    <ng-if ng-if=\"!paragraphElement.choice\">\n                        {{ paragraphElement.text }}\n                    </ng-if>\n                    <br ng-if=\"!paragraphElement.text && !paragraphElement.choice\" />\n                </ng-repeat>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-1\">\n        <button type=\"button\"\n                class=\"btn btn-xs btn-default\"\n                ng-click=\"$ctrl.editDescription()\"\n                ng-show=\"!$ctrl.isDescriptionEditable()\">\n            {{ 'Edit' | translate }}\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-success\"\n                ng-click=\"$ctrl.saveDescriptionChanges()\"\n                ng-show=\"$ctrl.isDescriptionEditable()\">\n            {{ 'Save' | translate }}\n        </button>\n        <button type=\"button\"\n                class=\"btn btn-xs btn-danger\"\n                ng-click=\"$ctrl.abortDescriptionChanges()\"\n                ng-show=\"$ctrl.isDescriptionEditable()\">\n            {{ 'Cancel' | translate }}\n        </button>\n    </div>\n</div>\n"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DescriptionController = function () {
	    /*@ngInject*/
	    function DescriptionController(gamePersistenceService, adventurePersistenceService, $location) {
	        _classCallCheck(this, DescriptionController);

	        this.gamePersistenceService = gamePersistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.$location = $location;
	        this.initData();
	    }

	    _createClass(DescriptionController, [{
	        key: "initData",
	        value: function initData() {
	            var game = this.gamePersistenceService.getGame(this.gameId);
	            this.adventureId = game.adventureId;
	            this.descriptionEditable = false;
	            this.alreadyChoosen = this.gamePersistenceService.getChoosenChoices(this.gameId, this.paragraph.paragraphNr);
	            this.paragraphs = this.adventurePersistenceService.getDescriptionParagraphs(this.paragraph.description);
	        }
	    }, {
	        key: "editDescription",
	        value: function editDescription() {
	            this.descriptionEditable = true;
	            this.originalDescription = this.paragraph.description;
	        }
	    }, {
	        key: "isDescriptionEditable",
	        value: function isDescriptionEditable() {
	            return this.descriptionEditable;
	        }
	    }, {
	        key: "saveDescriptionChanges",
	        value: function saveDescriptionChanges() {
	            this.originalDescription = null;
	            this.descriptionEditable = false;
	            this.adventurePersistenceService.updateParagraph(this.adventureId, this.paragraph);
	            this.paragraphs = this.adventurePersistenceService.getDescriptionParagraphs(this.paragraph.description);
	        }
	    }, {
	        key: "abortDescriptionChanges",
	        value: function abortDescriptionChanges() {
	            this.paragraph.description = this.originalDescription;
	            this.originalDescription = null;
	            this.descriptionEditable = false;
	        }
	    }, {
	        key: "goTo",
	        value: function goTo(paragraphNr) {
	            this.gamePersistenceService.setCurrentParagraphNrOfGame(this.gameId, this.paragraph.paragraphNr, paragraphNr);
	            var nextUrl = this.gamePersistenceService.getUrlOfGame(this.gameId);
	            this.$location.url(nextUrl);
	        }
	    }, {
	        key: "isAlreadyChoosen",
	        value: function isAlreadyChoosen(paragraphNr) {
	            return this.alreadyChoosen.indexOf(paragraphNr) !== -1;
	        }
	    }]);

	    return DescriptionController;
	}();

	exports.default = DescriptionController;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _goto = __webpack_require__(49);

	var _goto2 = _interopRequireDefault(_goto);

	var _goto3 = __webpack_require__(50);

	var _goto4 = _interopRequireDefault(_goto3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gotoModule = _angular2.default.module('app.components.gui.components.goto', []).component('goto', {
	    template: _goto2.default,
	    controller: _goto4.default,
	    bindings: {
	        gameId: '<',
	        paragraph: '<'
	    }
	});

	exports.default = gotoModule;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"row\" ng-if=\"!!$ctrl.gotoAvailable\">\n    <div class=\"col-lg-12\">\n        <div class=\"input-group\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\"\n                        aria-label=\"{{ 'Go to paragraph' | translate }}\"\n                        title=\"{{ 'Go to paragraph' | translate }}\"\n                        ng-click=\"$ctrl.goTo($ctrl.paragraphNrChoice)\"\n                        ng-disabled=\"!$ctrl.paragraphNrChoice\">\n                    {{ 'Go to paragraph' | translate }}\n                </button>\n            </span>\n            <input id=\"goToParagraphNr\" type=\"text\" class=\"form-control\" ng-model=\"$ctrl.paragraphNrChoice\">\n        </div>\n    </div>\n</div>"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GoToController = function () {
	    /*@ngInject*/
	    function GoToController(gamePersistenceService, adventurePersistenceService, $location) {
	        _classCallCheck(this, GoToController);

	        this.gamePersistenceService = gamePersistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.$location = $location;
	        this.initData();
	    }

	    _createClass(GoToController, [{
	        key: "initData",
	        value: function initData() {
	            var game = this.gamePersistenceService.getGame(this.gameId);
	            var adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
	            this.gotoAvailable = !!adventure.toggles.goto;
	        }
	    }, {
	        key: "goTo",
	        value: function goTo(paragraphNr) {
	            this.gamePersistenceService.setCurrentParagraphNrOfGame(this.gameId, this.paragraph.paragraphNr, paragraphNr);
	            var nextUrl = this.gamePersistenceService.getUrlOfGame(this.gameId);
	            this.$location.url(nextUrl);
	        }
	    }]);

	    return GoToController;
	}();

	exports.default = GoToController;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _collapse = __webpack_require__(52);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _collapse3 = __webpack_require__(53);

	var _collapse4 = _interopRequireDefault(_collapse3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var collapseModule = _angular2.default.module('app.components.gui.components.collapse', []).component('collapse', {
	    template: _collapse2.default,
	    controller: _collapse4.default,
	    transclude: true,
	    bindings: {
	        title: '@',
	        flag: '@'
	    }
	});

	exports.default = collapseModule;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = "<h2>\n    {{ $ctrl.title }}\n    <button type=\"button\"\n            class=\"btn btn-xs btn-default\"\n            ng-click=\"$ctrl.toogleCollapse()\">\n        {{ (!!$ctrl.collapsed ? 'Expand': 'Collapse') | translate }}\n    </button>\n</h2>\n<div ng-if=\"!$ctrl.collapsed\" ng-transclude>\n</div>"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var collapse = {};

	var CollapseController = function () {
	    /*@ngInject*/
	    function CollapseController() {
	        _classCallCheck(this, CollapseController);

	        if (!collapse[this.flag]) {
	            collapse[this.flag] = false;
	        }
	        this.collapsed = !!collapse[this.flag];
	    }

	    _createClass(CollapseController, [{
	        key: "toogleCollapse",
	        value: function toogleCollapse() {
	            this.collapsed = !this.collapsed;
	            collapse[this.flag] = this.collapsed;
	        }
	    }]);

	    return CollapseController;
	}();

	exports.default = CollapseController;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _selectableList = __webpack_require__(55);

	var _selectableList2 = _interopRequireDefault(_selectableList);

	var _selectableList3 = __webpack_require__(56);

	var _selectableList4 = _interopRequireDefault(_selectableList3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var selectableListModule = _angular2.default.module('app.components.gui.components.selectable-list', []).component('selectableList', {
	    template: _selectableList2.default,
	    controller: _selectableList4.default,
	    bindings: {
	        entries: '='
	    }
	});

	exports.default = selectableListModule;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = "<ul class=\"list-unstyled\">\n    <li ng-repeat=\"entry in $ctrl.entries\">\n        <div class=\"checkbox\">\n            <label>\n                <input type=\"checkbox\" ng-model=\"entry.checked\">{{ entry.value }}\n            </label>\n        </div>\n    </li>\n</ul>"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SelectableListController =

	/*@ngInject*/
	function SelectableListController() {
	    _classCallCheck(this, SelectableListController);
	};

	exports.default = SelectableListController;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _footnote = __webpack_require__(58);

	var _footnote2 = _interopRequireDefault(_footnote);

	var _footnote3 = __webpack_require__(59);

	var _footnote4 = _interopRequireDefault(_footnote3);

	__webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var footnoteModule = _angular2.default.module('app.components.gui.components.footnote', []).component('footnote', {
	    template: _footnote2.default,
	    controller: _footnote4.default
	});

	exports.default = footnoteModule;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = "<br>\n<footer role=\"contentinfo\">\n    <div class=\"container\">\n        <p class=\"text-muted\">\n            <a href=\"http://morarupasukaru.github.io/gamebooks-assistant/#\">\n                {{ 'Home' | translate}}\n            </a>\n            -\n            <a ui-sref=\"credits\">\n                {{ 'Credits' | translate}}\n            </a>\n            -\n            <a href=\"https://opensource.org/licenses/MIT\">\n                {{ 'MIT License' | translate}}\n            </a>\n            -\n            <a ng-repeat=\"language in $ctrl.supportedLanguages\"\n               href ng-click=\"$ctrl.changeLanguage(language.code)\"\n               aria-label=\"{{ 'Change language to ' + language.code | translate}}\"\n               title=\"{{ 'Change language to ' + language.code | translate}}\">\n                {{ language.code }}\n            </a>\n        </p>\n    </div>\n</footer>\n"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FootnoteController = function () {

	    /*@ngInject*/
	    function FootnoteController(languagePickerService) {
	        _classCallCheck(this, FootnoteController);

	        this.languagePickerService = languagePickerService;
	        this.initData();
	    }

	    _createClass(FootnoteController, [{
	        key: "initData",
	        value: function initData() {
	            this.supportedLanguages = this.languagePickerService.getSupportedLanguages();
	            this.changeLanguage(this.languagePickerService.getSelectedLanguage());
	        }
	    }, {
	        key: "changeLanguage",
	        value: function changeLanguage(selectedLanguage) {
	            this.language = selectedLanguage;
	            this.languagePickerService.changeLanguage(selectedLanguage);
	        }
	    }]);

	    return FootnoteController;
	}();

	exports.default = FootnoteController;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!./footnote.css", function() {
				var newContent = require("!!../../../../../../node_modules/css-loader/index.js!./footnote.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "html {\n    position: relative;\n    min-height: 100%;\n}\nbody {\n    margin: 0 0 100px; /* bottom = footer height */\n}\nfooter {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 100px;\n    width: 100%;\n}", ""]);

	// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _about = __webpack_require__(63);

	var _about2 = _interopRequireDefault(_about);

	var _about3 = __webpack_require__(64);

	var _about4 = _interopRequireDefault(_about3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var aboutModule = _angular2.default.module('app.components.gui.components.about', []).component('about', { template: _about2.default, controller: _about4.default });

	exports.default = aboutModule;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container bg-white\" role=\"main\">\n    <h1 class=\"text-center\">Gamebooks Assistant</h1>\n    <div class=\"text-muted text-center\">{{ 'application.description' | translate }}</div>\n</div>\n"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AboutController =
	/*@ngInject*/
	function AboutController() {
	    _classCallCheck(this, AboutController);
	};

	exports.default = AboutController;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(66);

	var _home2 = _interopRequireDefault(_home);

	var _games = __webpack_require__(69);

	var _games2 = _interopRequireDefault(_games);

	var _administration = __webpack_require__(76);

	var _administration2 = _interopRequireDefault(_administration);

	var _credits = __webpack_require__(79);

	var _credits2 = _interopRequireDefault(_credits);

	var _adventures = __webpack_require__(82);

	var _adventures2 = _interopRequireDefault(_adventures);

	var _libraryImport = __webpack_require__(86);

	var _libraryImport2 = _interopRequireDefault(_libraryImport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var screensModule = _angular2.default.module('app.components.gui.screens', [_home2.default.name, _games2.default.name, _administration2.default.name, _adventures2.default.name, _libraryImport2.default.name, _credits2.default.name]);

	exports.default = screensModule;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _home = __webpack_require__(67);

	var _home2 = _interopRequireDefault(_home);

	var _home3 = __webpack_require__(68);

	var _home4 = _interopRequireDefault(_home3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var homeModule = _angular2.default.module('app.components.gui.screen.home', [_angularUiRouter2.default]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('home', {
	        url: '/', template: '<home></home>'
	    });
	}).component('home', { template: _home2.default, controller: _home4.default });

	exports.default = homeModule;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = "<messages></messages>\n<main></main>\n<footnote></footnote>\n"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeController =
	/*@ngInject*/
	function HomeController($location, constants) {
	    _classCallCheck(this, HomeController);

	    $location.url(constants.url.games);
	};

	exports.default = HomeController;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _gamesList = __webpack_require__(70);

	var _gamesList2 = _interopRequireDefault(_gamesList);

	var _gameDetail = __webpack_require__(73);

	var _gameDetail2 = _interopRequireDefault(_gameDetail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gamesModule = _angular2.default.module('app.components.gui.screens.games', [_gamesList2.default.name, _gameDetail2.default.name]);

	exports.default = gamesModule;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _gamesList = __webpack_require__(71);

	var _gamesList2 = _interopRequireDefault(_gamesList);

	var _gamesList3 = __webpack_require__(72);

	var _gamesList4 = _interopRequireDefault(_gamesList3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gamesListModule = _angular2.default.module('app.components.gui.screen.games.list', [_angularUiRouter2.default]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('gamesList', {
	        url: constants.url.games + '?importGame&importAdventure', template: '<games-list></games-list>'
	    });
	}).component('gamesList', { template: _gamesList2.default, controller: _gamesList4.default });

	exports.default = gamesListModule;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = "<messages></messages>\n<about></about>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <h2>{{ 'Adventures' | translate }}</h2>\n\n        <ul>\n            <li ng-repeat=\"adventure in $ctrl.adventures\">\n                <span>\n                    {{ (!!adventure.serie ? adventure.serie + ': ': '') +  adventure.name }} {{ ($ctrl.hasAdventureToBeDownloaded(adventure) ? 'downloadable_in_list' : '') | translate }}\n                </span>\n                <button type=\"button\"\n                        class=\"btn btn-xs btn-default\"\n                        aria-label=\"{{ 'Display actions' | translate}}\"\n                        title=\"{{ 'Display actions' | translate}}\"\n                        ng-if=\"!adventure.missingAdventure\"\n                        ng-click=\"$ctrl.displaySelectedAdventureActions(adventure)\">\n                    <span aria-hidden=\"true\">{{ 'Display actions' | translate }}</span>\n                </button>\n\n                <ul>\n                    <li ng-repeat=\"game in adventure.games\">\n                        <span>\n                            {{ game.name + ' (' + game.time + ')' }}\n                        </span>\n                        <button type=\"button\"\n                                class=\"btn btn-xs btn-default\"\n                                aria-label=\"{{ 'Display actions' | translate}}\"\n                                title=\"{{ 'Display actions' | translate}}\"\n                                ng-click=\"$ctrl.displaySelectedGameActions(game)\">\n                            <span aria-hidden=\"true\">{{ 'Display actions' | translate }}</span>\n                        </button>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n\n        <button type=\"button\" class=\"btn btn-default\"\n                aria-label=\"{{ 'Create an adventure' | translate }}\"\n                title=\"{{ 'Create an adventure' | translate }}\"\n                ng-click=\"$ctrl.createAdventure()\">{{ 'Create an adventure' | translate }}</button>\n        <button type=\"button\" class=\"btn btn-default\"\n                aria-label=\"{{ 'Import' | translate }}\"\n                title=\"{{ 'Import' | translate }}\"\n                ng-click=\"$ctrl.displayImportActions()\">{{ 'Import' | translate }}</button>\n    </div>\n</main>\n<footnote></footnote>\n\n<a id=\"linkDownloadExportAdventure\" ng-show=\"false\" ng-href=\"{{$ctrl.exportDownloadBlobUrl}}\" download=\"exportAdventure.txt\">download adventure (link hidden)</a>\n<a id=\"linkDownloadExportGame\" ng-show=\"false\" ng-href=\"{{$ctrl.exportDownloadBlobUrl}}\" download=\"exportGame.txt\">download game (link hidden)</a>\n\n<popup config=\"{{ $ctrl.popupDeleteAdventureConfig }}\"></popup>\n<popup config=\"{{ $ctrl.popupDownloadAdventureConfig }}\"></popup>\n<popup config=\"{{ $ctrl.popupDeleteGameConfig }}\"></popup>\n<popup config=\"{{ $ctrl.popupRestartGameConfig }}\"></popup>\n<popup config=\"{{ $ctrl.popupDisplaySelectedAdventureActionsConfig }}\"></popup>\n<popup config=\"{{ $ctrl.popupDisplaySelectedGameActionsConfig }}\"></popup>\n<popup config=\"{{ $ctrl.popupDisplayImportActionsConfig }}\"></popup>\n<popup config=\"{{ $ctrl.popupStartGameConfig }}\"></popup>\n<import-data-popup config=\"$ctrl.popupImportAdventureConfig\"></import-data-popup>\n<import-data-popup config=\"$ctrl.popupImportGameConfig\"></import-data-popup>"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GamesListController = function () {
	    /*@ngInject*/
	    function GamesListController($location, constants, gamePersistenceService, adventurePersistenceService, messagesService, $translate, popupService, importDataPopupService, $stateParams, $window, $timeout) {
	        _classCallCheck(this, GamesListController);

	        this.constants = constants;
	        this.$location = $location;
	        this.gamePersistenceService = gamePersistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.messagesService = messagesService;
	        this.$translate = $translate;
	        this.popupService = popupService;
	        this.importDataPopupService = importDataPopupService;
	        this.$stateParams = $stateParams;
	        this.$window = $window;
	        this.$timeout = $timeout;

	        this.popupStartGameConfig = {
	            id: 'popupStartGame',
	            text: 'Please fill the name of the game',
	            withText: true,
	            textRequired: true,
	            choices: [constants.choices.ok, constants.choices.cancel]
	        };

	        this.popupDeleteGameConfig = {
	            id: 'popupDeleteGame',
	            text: 'Are you sure to remove the selected game?',
	            choices: [constants.choices.yes, constants.choices.no]
	        };

	        this.popupRestartGameConfig = {
	            id: 'popupRestartGame',
	            text: 'Are you sure to restart the selected game?',
	            choices: [constants.choices.yes, constants.choices.no]
	        };

	        this.popupDeleteAdventureConfig = {
	            id: 'popupDeleteAdventure',
	            text: 'Are you sure to remove the selected adventure?',
	            choices: [constants.choices.yes, constants.choices.no]
	        };

	        this.popupDownloadAdventureConfig = {
	            id: 'popupDownloadAdventure',
	            text: 'Are you sure to download the selected adventure? Existing games could be non-playable after the update if the new version is not retro-compatible',
	            choices: [constants.choices.yes, constants.choices.no]
	        };

	        this.popupDisplaySelectedGameActionsConfig = {
	            id: 'popupDisplaySelectedGameActions',
	            text: 'Choose an action',
	            choices: [constants.choices.continue, constants.choices.restart, constants.choices.remove, constants.choices.export, constants.choices.cancel]
	        };

	        this.popupDisplaySelectedAdventureActionsConfig = {
	            id: 'popupDisplaySelectedAdventureActions',
	            text: 'Choose an action',
	            choices: [constants.choices.display, constants.choices.remove, constants.choices.createGame, constants.choices.export, constants.choices.download, constants.choices.cancel]
	        };

	        this.popupDisplayImportActionsConfig = {
	            id: 'popupDisplayImportActions',
	            text: 'What must be imported?',
	            choices: [constants.choices.adventure, constants.choices.game, constants.choices.cancel]
	        };

	        this.popupImportGameConfig = { id: 'popupImportGame' };

	        this.popupImportAdventureConfig = { id: 'popupImportAdventure' };

	        if (!!$stateParams.importGame) {
	            this.importGameFromUrl($stateParams.importGame);
	        } else if (!!$stateParams.importAdventure) {
	            this.importAdventureFromUrl($stateParams.importAdventure);
	        }

	        this.initData();
	    }

	    _createClass(GamesListController, [{
	        key: 'initData',
	        value: function initData() {
	            this.adventures = this.adventurePersistenceService.getAdventuresOverview();
	            this.adventures.sort(this.compareAdventure);
	            var games = this.getGamesData();
	            var missingAdventures = this.createMissingAdventures(this.getMissingAdventureIds(this.adventures, games));
	            for (var i = 0; i < missingAdventures.length; i++) {
	                this.adventures.push(missingAdventures[i]);
	            }

	            for (var j = 0; j < games.length; j++) {
	                var _game = games[j];
	                for (var _i = 0; _i < this.adventures.length; _i++) {
	                    var adventure = this.adventures[_i];
	                    if (_game.adventureId == adventure.id) {
	                        if (!adventure.games) {
	                            adventure.games = [];
	                        }
	                        adventure.games.push(_game);
	                        break;
	                    }
	                }
	            }

	            for (var _i2 = 0; _i2 < this.adventures.length; _i2++) {
	                if (!!this.adventures[_i2].games) {
	                    this.adventures[_i2].games.sort(this.compareGame);
	                }
	            }
	        }
	    }, {
	        key: 'getMissingAdventureIds',
	        value: function getMissingAdventureIds(adventures, games) {
	            var missingAdventuresIds = [];
	            for (var j = 0; j < games.length; j++) {
	                var _game2 = games[j];
	                var foundAdventure = false;
	                for (var i = 0; i < adventures.length; i++) {
	                    var adventure = adventures[i];
	                    if (_game2.adventureId == adventure.id) {
	                        foundAdventure = true;
	                        break;
	                    }
	                }
	                if (!foundAdventure && missingAdventuresIds.indexOf(_game2.adventureId) === -1) {
	                    missingAdventuresIds.push(_game2.adventureId);
	                }
	            }
	            return missingAdventuresIds;
	        }
	    }, {
	        key: 'createMissingAdventures',
	        value: function createMissingAdventures(missingAdventureIds) {
	            var missingAdventures = [];
	            for (var i = 0; i < missingAdventureIds.length; i++) {
	                var missingAdventure = {
	                    id: missingAdventureIds[i],
	                    name: this.$translate.instant('missing-adventure', { name: missingAdventureIds[i] }),
	                    games: [],
	                    missingAdventure: true
	                };
	                missingAdventures.push(missingAdventure);
	            }
	            missingAdventures.sort(this.compareAdventure);
	            return missingAdventures;
	        }
	    }, {
	        key: 'compareAdventure',
	        value: function compareAdventure(a1, a2) {
	            if (!a1 && !a2) {
	                return 0;
	            } else if (!a1) {
	                return 1;
	            } else if (!a2) {
	                return -1;
	            } else {
	                var n1 = '';
	                var n2 = '';
	                if (!!a1.serie) {
	                    n1 = n1 + 'Z' + a1.serie;
	                } else {
	                    n1 = 'A';
	                }
	                if (!!a1.name) {
	                    n1 = n1 + a1.name;
	                }
	                if (!!a2.serie) {
	                    n2 = n2 + 'Z' + a2.serie;
	                } else {
	                    n2 = 'A';
	                }
	                if (!!a2.name) {
	                    n2 = n2 + a2.name;
	                }
	                return n1.localeCompare(n2);
	            }
	        }
	    }, {
	        key: 'compareGame',
	        value: function compareGame(g1, g2) {
	            if (!g1 && !g2) {
	                return 0;
	            } else if (!g1) {
	                return 1;
	            } else if (!g2) {
	                return -1;
	            } else {
	                if (!g1.name && !g2.name) {
	                    return 0;
	                } else if (!g1.name) {
	                    return 1;
	                } else if (!g2.name) {
	                    return -1;
	                } else {
	                    return g1.name.localeCompare(g2.name);
	                }
	            }
	        }
	    }, {
	        key: 'getGamesData',
	        value: function getGamesData() {
	            var gamePersistenceKeys = this.gamePersistenceService.getGamePersistenceKeys();
	            var games = [];
	            for (var i = 0; i < gamePersistenceKeys.length; i++) {
	                var _game3 = this.gamePersistenceService.getGame(gamePersistenceKeys[i]);
	                var adventure = this.adventurePersistenceService.getAdventure(_game3.adventureId);
	                if (!!adventure) {
	                    var paragraph = this.adventurePersistenceService.getParagraph(_game3.adventureId, _game3.currentParagraphNr);
	                    if (!!paragraph) {
	                        _game3.paragraphTag = paragraph.tag;
	                    }
	                } else {
	                    _game3.adventureName = _game3.adventureId;
	                }
	                games.push(_game3);
	            }
	            return games;
	        }
	    }, {
	        key: 'displaySelectedAdventureActions',
	        value: function displaySelectedAdventureActions(adventure) {
	            var self = this;
	            this.popupService.show(this.popupDisplaySelectedAdventureActionsConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.display) {
	                    self.displayAdventure(adventure);
	                } else if (choice === self.constants.choices.remove) {
	                    self.displayRemoveAdventurePopup(adventure);
	                } else if (choice === self.constants.choices.export) {
	                    self.exportAdventure(adventure.id);
	                } else if (choice === self.constants.choices.download) {
	                    self.downloadAdventure(adventure);
	                } else if (choice === self.constants.choices.createGame) {
	                    self.displayStartGamePopup(adventure);
	                }
	            });
	        }
	    }, {
	        key: 'displayAdventure',
	        value: function displayAdventure(adventure) {
	            this.$location.url(this.constants.url.adventureDetail + '/' + adventure.id);
	        }
	    }, {
	        key: 'displayRemoveAdventurePopup',
	        value: function displayRemoveAdventurePopup(adventure) {
	            var self = this;
	            this.popupService.show(this.popupDeleteAdventureConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.yes) {
	                    self.deleteAdventure(adventure);
	                }
	            });
	        }
	    }, {
	        key: 'displayStartGamePopup',
	        value: function displayStartGamePopup(adventure) {
	            var self = this;
	            this.popupService.show(this.popupStartGameConfig.id, function (popupDomElementId, choice, text) {
	                if (choice === self.constants.choices.ok) {
	                    self.startGame(adventure.id, text);
	                }
	            });
	        }
	    }, {
	        key: 'deleteAdventure',
	        value: function deleteAdventure(adventure) {
	            this.adventurePersistenceService.deleteAdventureAndParagraphs(adventure.id);
	            this.initData();
	        }
	    }, {
	        key: 'exportAdventure',
	        value: function exportAdventure(adventureId) {
	            var exportData = JSON.stringify(this.adventurePersistenceService.exportAdventure(adventureId));
	            this.exportDownloadBlobUrl = this.createDownloadBlobUrl(exportData);
	            this.$timeout(function () {
	                var href = window.document.getElementById('linkDownloadExportAdventure');
	                href.click();
	            });
	        }
	    }, {
	        key: 'displayDownloadAdventurePopup',
	        value: function displayDownloadAdventurePopup(adventure) {
	            var self = this;
	            this.popupService.show(this.popupDownloadAdventureConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.yes) {
	                    self.downloadAdventure(adventure);
	                }
	            });
	        }
	    }, {
	        key: 'downloadAdventure',
	        value: function downloadAdventure(adventure) {
	            var self = this;
	            var promise = this.adventurePersistenceService.downloadAdventureWithId(adventure.id);
	            promise.then(function (json) {
	                self.initData();
	            }, function (reason) {
	                self.initData();
	            });
	        }
	    }, {
	        key: 'displayImportActions',
	        value: function displayImportActions() {
	            var self = this;
	            this.popupService.show(this.popupDisplayImportActionsConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.game) {
	                    self.displayImportGamePopup();
	                } else if (choice === self.constants.choices.adventure) {
	                    self.displayImportAdventurePopup();
	                }
	            });
	        }
	    }, {
	        key: 'displaySelectedGameActions',
	        value: function displaySelectedGameActions(game) {
	            var self = this;
	            this.popupService.show(this.popupDisplaySelectedGameActionsConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.continue) {
	                    self.continueGame(game);
	                } else if (choice === self.constants.choices.restart) {
	                    self.displayRestartGamePopup(game);
	                } else if (choice === self.constants.choices.remove) {
	                    self.displayRemoveGamePopup(game);
	                } else if (choice === self.constants.choices.export) {
	                    self.exportGame(game.id);
	                }
	            });
	        }
	    }, {
	        key: 'displayRestartGamePopup',
	        value: function displayRestartGamePopup(game) {
	            var self = this;
	            this.popupService.show(this.popupRestartGameConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.yes) {
	                    self.restartGame(game);
	                }
	            });
	        }
	    }, {
	        key: 'startGame',
	        value: function startGame(adventureId, gameName) {
	            var adventure = this.adventurePersistenceService.getAdventure(adventureId);
	            if (!adventure) {
	                this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: game.adventureId }), false);
	            } else {
	                this.continueGame(this.gamePersistenceService.startGame(adventureId, gameName));
	            }
	        }
	    }, {
	        key: 'restartGame',
	        value: function restartGame(game) {
	            var adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
	            if (!adventure) {
	                this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: game.adventureId }), false);
	            } else {
	                this.gamePersistenceService.restart(game.id);
	                game = this.gamePersistenceService.getGame(game.id);
	                this.continueGame(game);
	            }
	        }
	    }, {
	        key: 'continueGame',
	        value: function continueGame(game) {
	            var adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
	            if (!adventure) {
	                this.messagesService.errorMessage(this.$translate.instant('CannotFindAdventure', { adventure: game.adventureId }), false);
	            } else {
	                var nextUrl = this.gamePersistenceService.getUrlOfGame(game.id);
	                this.$location.url(nextUrl);
	            }
	        }
	    }, {
	        key: 'displayRemoveGamePopup',
	        value: function displayRemoveGamePopup(game) {
	            var self = this;
	            this.popupService.show(this.popupDeleteGameConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.yes) {
	                    self.deleteGame(game);
	                }
	            });
	        }
	    }, {
	        key: 'deleteGame',
	        value: function deleteGame(game) {
	            this.gamePersistenceService.deleteGame(game.id);
	            this.initData();
	        }
	    }, {
	        key: 'exportGame',
	        value: function exportGame(gameId) {
	            var exportData = JSON.stringify(this.gamePersistenceService.exportGame(gameId));
	            this.exportDownloadBlobUrl = this.createDownloadBlobUrl(exportData);
	            this.$timeout(function () {
	                var href = window.document.getElementById('linkDownloadExportGame');
	                href.click();
	            });
	        }
	    }, {
	        key: 'createDownloadBlobUrl',
	        value: function createDownloadBlobUrl(data) {
	            var blob = new Blob([data], { type: 'text/plain' });
	            var url = this.$window.URL || this.$window.webkitURL;
	            return url.createObjectURL(blob);
	        }
	    }, {
	        key: 'displayImportGamePopup',
	        value: function displayImportGamePopup() {
	            var self = this;
	            this.importDataPopupService.show(this.popupImportGameConfig.id, function (popupDomElementId, data) {
	                self.gamePersistenceService.importGame(data);
	                self.initData();
	            });
	        }
	    }, {
	        key: 'displayImportAdventurePopup',
	        value: function displayImportAdventurePopup() {
	            var self = this;
	            this.importDataPopupService.show(this.popupImportAdventureConfig.id, function (popupDomElementId, data) {
	                self.adventurePersistenceService.importAdventure(data);
	                self.initData();
	            });
	        }
	    }, {
	        key: 'importGameFromUrl',
	        value: function importGameFromUrl(url) {
	            var self = this;
	            var promise = this.gamePersistenceService.downloadGame(url);
	            promise.then(function (json) {
	                self.initData();
	                self.clearUrl();
	            }, function (reason) {
	                self.messagesService.errorMessage(reason, false);
	            });
	        }
	    }, {
	        key: 'importAdventureFromUrl',
	        value: function importAdventureFromUrl(url) {
	            var self = this;
	            var promise = this.adventurePersistenceService.downloadAdventure(null, url);
	            promise.then(function (json) {
	                self.initData();
	                self.clearUrl();
	            }, function (reason) {
	                self.messagesService.errorMessage(reason, false);
	            });
	        }
	    }, {
	        key: 'clearUrl',
	        value: function clearUrl() {
	            this.$location.url(this.constants.url.games);
	        }
	    }, {
	        key: 'createAdventure',
	        value: function createAdventure() {
	            this.$location.url(this.constants.url.adventureDetail + '/create');
	        }
	    }, {
	        key: 'hasAdventureToBeDownloaded',
	        value: function hasAdventureToBeDownloaded(row) {
	            return !!row.downloadUrl && !row.downloaded;
	        }
	    }]);

	    return GamesListController;
	}();

	exports.default = GamesListController;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _gameDetail = __webpack_require__(74);

	var _gameDetail2 = _interopRequireDefault(_gameDetail);

	var _gameDetail3 = __webpack_require__(75);

	var _gameDetail4 = _interopRequireDefault(_gameDetail3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gameDetailModule = _angular2.default.module('app.components.gui.screen.games.detail', [_angularUiRouter2.default]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider.state('game-detail', {
	        url: constants.url.gameDetail, template: '<game-detail></game-detail>'
	    });
	}).component('gameDetail', { template: _gameDetail2.default, controller: _gameDetail4.default });

	exports.default = gameDetailModule;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = "<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <div class=\"page-header\">\n            <h1>\n                {{ 'Paragraph' | translate }} {{ $ctrl.paragraph.paragraphNr }}\n                {{ !!$ctrl.paragraph.tag ? '(' + $ctrl.paragraph.tag +  ')' : '' }}\n                <button type=\"button\"\n                        class=\"btn btn-xs btn-default\"\n                        ng-click=\"$ctrl.editTag()\"\n                        ng-show=\"!$ctrl.isTagEditable()\">\n                    {{ 'Edit' | translate }}\n                </button>\n            </h1>\n        </div>\n\n        <div ng-if=\"!!$ctrl.isTagEditable()\">\n            <h2>{{ 'Visible sections' | translate }}</h2>\n            <selectable-list entries=\"$ctrl.visibleSections\"></selectable-list>\n\n            <h2>{{ 'Tag' | translate }}</h2>\n            <input id=\"inputTag\" type=\"text\" class=\"form-control\" ng-model=\"$ctrl.paragraph.tag\">\n            <br>\n\n            <button type=\"button\" class=\"btn btn-default\"\n                    aria-label=\"{{ 'Back' | translate}}\"\n                    title=\"{{ 'Back' | translate}}\"\n                    ng-click=\"$ctrl.abortTagChanges()\">\n                {{ 'Back' | translate }}\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\"\n                    aria-label=\"{{ 'Save changes' | translate }}\"\n                    title=\"{{ 'Save changes' | translate }}\"\n                    ng-click=\"$ctrl.saveTagChanges()\">{{ 'Save' | translate }}</button>\n        </div>\n\n        <div ng-if=\"!$ctrl.isTagEditable()\">\n            <description game-id=\"$ctrl.game.id\" paragraph=\"$ctrl.paragraph\">\n            </description>\n\n            <goto game-id=\"$ctrl.game.id\" paragraph=\"$ctrl.paragraph\">\n            </goto>\n\n            <collapse ng-if=\"$ctrl.isMapAvailable()\" title=\"{{ 'Map' | translate }}\" flag=\"game.map\">\n                <nodes game-id=\"$ctrl.game.id\" adventure-id=\"$ctrl.adventureId\" root-paragraph-nr=\"$ctrl.paragraph.paragraphNr\"></nodes>\n            </collapse>\n\n            <collapse ng-if=\"$ctrl.isCharactersAvailable()\" title=\"{{ 'Characters' | translate }}\" flag=\"game.characters\">\n                <characters-deprecated game-id=\"$ctrl.game.id\"></characters-deprecated>\n                <characters game-id=\"$ctrl.game.id\"></characters>\n            </collapse>\n\n            <collapse ng-if=\"$ctrl.isDicesAvailable()\" title=\"{{ 'Dices' | translate }}\" flag=\"game.dices\">\n                <dices ng-if=\"$ctrl.isDicesAvailable() && !$ctrl.dicesCollapsed()\" game-id=\"{{$ctrl.game.id}}\"></dices>\n            </collapse>\n\n            <div ng-repeat=\"list in $ctrl.adventure.lists.keys\">\n                <collapse ng-if=\"$ctrl.isEntriesAvailable(list)\" title=\"{{ list }}\" flag=\"game.{{list}}\">\n                    <list entries=\"$ctrl.game.lists[list]\" on-save=\"$ctrl.onSubListSave(list, entries)\"></list>\n                </collapse>\n            </div>\n\n            <back-button></back-button>\n\n            <button type=\"button\"\n                    class=\"btn btn-default\"\n                    ng-if=\"$ctrl.isGameRulesAvailable()\"\n                    ng-click=\"$ctrl.goToGameRulesParagraph()\">\n                {{ \"Game's rules\" | translate }}\n            </button>\n        </div>\n    </div>\n</main>\n<footnote></footnote>\n"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GameDetailController = function () {
	    /*@ngInject*/
	    function GameDetailController($location, constants, $stateParams, gamePersistenceService, adventurePersistenceService, $translate, messagesService, $filter, $window) {
	        _classCallCheck(this, GameDetailController);

	        this.$location = $location;
	        this.constants = constants;
	        this.$stateParams = $stateParams;
	        this.gamePersistenceService = gamePersistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.$translate = $translate;
	        this.messagesService = messagesService;
	        this.$filter = $filter;
	        this.$window = $window;
	        this.stats = [];
	        this.initData();
	    }

	    _createClass(GameDetailController, [{
	        key: 'initData',
	        value: function initData() {
	            alert(JSON.stringify(this.$stateParams));
	            this.game = this.gamePersistenceService.getGame(decodeURIComponent(this.$stateParams.gameId));
	            if (!!this.game.stats) {
	                this.stats = this.stats.concat(this.game.stats);
	            }
	            this.adventureId = this.$stateParams.adventureId;
	            this.paragraph = this.adventurePersistenceService.getOrCreateParagraph(this.adventureId, this.$stateParams.paragraphNr);
	            this.adventure = this.adventurePersistenceService.getAdventure(this.adventureId);
	            debugger;
	            this.visibleSections = this.adventurePersistenceService.getOrCreateVisibleSections(this.adventureId, this.paragraph.tag);
	            this.checkAvailableAdventure();
	        }
	    }, {
	        key: 'checkAvailableAdventure',
	        value: function checkAvailableAdventure() {
	            if (!this.adventure) {
	                this.messagesService.errorMessage('The adventure is not available', false);
	            }
	        }
	    }, {
	        key: 'goToGameRulesParagraph',
	        value: function goToGameRulesParagraph() {
	            this.gamePersistenceService.setCurrentParagraphNrOfGame(this.game.id, this.paragraph.paragraphNr, this.adventure.gameRulesParagraphId);
	            var nextUrl = this.gamePersistenceService.getUrlOfGame(this.game.id);
	            this.$location.url(nextUrl);
	        }
	    }, {
	        key: 'isMapAvailable',
	        value: function isMapAvailable() {
	            return !!this.adventure.toggles.map && !!this.visibleSections['Map'].checked;
	        }
	    }, {
	        key: 'isDicesAvailable',
	        value: function isDicesAvailable() {
	            return !!this.adventure.toggles.dices && !!this.visibleSections['Dices'].checked;
	        }
	    }, {
	        key: 'isCharactersAvailable',
	        value: function isCharactersAvailable() {
	            return !!this.adventure.toggles.characters && !!this.visibleSections['Characters'].checked;
	        }
	    }, {
	        key: 'isEntriesAvailable',
	        value: function isEntriesAvailable(type) {
	            return !this.visibleSections[type] || !!this.visibleSections[type].checked;
	        }
	    }, {
	        key: 'isGameRulesAvailable',
	        value: function isGameRulesAvailable() {
	            return !!this.adventure.gameRulesParagraphId;
	        }
	    }, {
	        key: 'editDescription',
	        value: function editDescription() {
	            this.descriptionEditable = true;
	            this.originalDescription = this.paragraph.description;
	        }
	    }, {
	        key: 'isDescriptionEditable',
	        value: function isDescriptionEditable() {
	            return this.descriptionEditable;
	        }
	    }, {
	        key: 'saveDescriptionChanges',
	        value: function saveDescriptionChanges() {
	            this.originalDescription = null;
	            this.descriptionEditable = false;
	            this.adventurePersistenceService.updateParagraph(this.adventureId, this.paragraph);
	        }
	    }, {
	        key: 'abortDescriptionChanges',
	        value: function abortDescriptionChanges() {
	            this.paragraph.description = this.originalDescription;
	            this.originalDescription = null;
	            this.descriptionEditable = false;
	        }
	    }, {
	        key: 'editTag',
	        value: function editTag() {
	            this.tagEditable = true;
	            this.originalTag = this.paragraph.tag;
	            this.originalVisibileSections = JSON.parse(JSON.stringify(this.visibleSections));
	        }
	    }, {
	        key: 'isTagEditable',
	        value: function isTagEditable() {
	            return this.tagEditable;
	        }
	    }, {
	        key: 'saveTagChanges',
	        value: function saveTagChanges() {
	            this.adventurePersistenceService.updateVisibleSectionsAndParagrahTag(this.adventure.id, this.paragraph, this.visibleSections, this.originalTag);
	            this.originalTag = null;
	            this.tagEditable = false;
	        }
	    }, {
	        key: 'abortTagChanges',
	        value: function abortTagChanges() {
	            this.paragraph.tag = this.originalTag;
	            this.originalTag = null;
	            this.tagEditable = false;
	            this.visibleSections = this.originalVisibileSections;
	        }
	    }, {
	        key: 'onSubListSave',
	        value: function onSubListSave(list, entries) {
	            this.game.lists[list] = entries;
	            this.gamePersistenceService.updateGame(this.game);
	        }
	    }, {
	        key: 'now',
	        value: function now() {
	            var now = new Date();
	            return this.$filter('date')(now, 'dd.MM.yyyy HH:mm');
	        }
	    }]);

	    return GameDetailController;
	}();

	exports.default = GameDetailController;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _administration = __webpack_require__(77);

	var _administration2 = _interopRequireDefault(_administration);

	var _administration3 = __webpack_require__(78);

	var _administration4 = _interopRequireDefault(_administration3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var administrationModule = _angular2.default.module('app.components.gui.screen.administration', [_angularUiRouter2.default]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('administration', {
	        url: constants.url.administration, template: '<administration></administration>'
	    });
	}).component('administration', { template: _administration2.default, controller: _administration4.default });

	exports.default = administrationModule;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = "<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"contentinfo\">\n        <h2>{{ 'Administration' | translate }}</h2>\n        <div class=\"col-md-12\">\n            <form>\n                <div>\n                    <div class=\"form-group\">\n                        <label for=\"appVersion\">{{ \"Application's version\" | translate }}</label>\n                        <div id=\"appVersion\">{{ $ctrl.appVersion }}</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"usedLocalStorageInPercent\">{{ \"Used Local's Storage in Percent\" | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"usedLocalStorageInPercent\" value=\"{{ $ctrl.usedLocalStorageInPercent | number : 2}}%\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"usedLocalStorage\">{{ \"Used Local's Storage\" | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"usedLocalStorage\" value=\"{{$ctrl.usedLocalStorage / 1024 | number : 2 }}kb\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"remainingCapacity\">{{ \"Remaining Local's Storage\" | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"remainingCapacity\" value=\"{{$ctrl.remainingCapacity / 1024 | number : 2 }}kb\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"applicationData\">{{ \"Application's data\" | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"applicationData\" ng-model=\"$ctrl.applicationData\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"importData\">{{ \"Paste the application's data copied from another browser\" | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" ng-model=\"$ctrl.importData\" id=\"importData\" placeholder=\"{{ 'Imported data' | translate }}\">\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-danger\" ng-click=\"$ctrl.showPopupConfirmImportData()\" aria-label=\"{{ 'Import' | translate }}\">{{ 'Import' | translate }}</button>\n                    </div>\n                </div>\n                <div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-danger\" ng-click=\"$ctrl.showPopupConfirmDeleteApplicationData()\" aria-label=\"{{ 'Delete application\\'s data' | translate }}\">{{ \"Delete application's data\" | translate }}</button>\n                    </div>\n                </div>\n                <back-button></back-button>\n            </form>\n\n            <popup config=\"{{ $ctrl.popupConfirmImportApplicationDataConfig }}\"></popup>\n            <popup config=\"{{ $ctrl.popupConfirmDeleteApplicationDataConfig }}\"></popup>\n        </div>\n    </div>\n</main>\n<footnote></footnote>\n"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AdministrationController = function () {
	    /*@ngInject*/
	    function AdministrationController(persistenceService, adventurePersistenceService, constants, popupService, $window) {
	        _classCallCheck(this, AdministrationController);

	        this.persistenceService = persistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.constants = constants;
	        this.popupService = popupService;
	        this.initData();
	        this.$window = $window;

	        this.popupConfirmImportApplicationDataConfig = {
	            id: 'popupConfirmImportApplicationData',
	            text: "All existing application's data will be erased during the import. Are you sure to import the application data?",
	            choices: [constants.choices.yes, constants.choices.no]
	        };

	        this.popupConfirmDeleteApplicationDataConfig = {
	            id: 'popupConfirmDeleteApplicationData',
	            text: 'Are you sure to clear the application data?',
	            choices: [constants.choices.yes, constants.choices.no]
	        };
	    }

	    _createClass(AdministrationController, [{
	        key: 'initData',
	        value: function initData() {
	            this.appVersion = this.constants.version;
	            this.applicationData = this.persistenceService.export();
	            this.computeLocalStorageCapacities();
	        }
	    }, {
	        key: 'computeLocalStorageCapacities',
	        value: function computeLocalStorageCapacities() {
	            this.usedLocalStorage = this.persistenceService.getUsedCapacity();
	            this.remainingCapacity = this.persistenceService.getRemainingCapacity();
	            this.usedLocalStorageInPercent = this.persistenceService.getUsedCapacityInPercent();
	        }
	    }, {
	        key: 'showPopupConfirmImportData',
	        value: function showPopupConfirmImportData() {
	            var self = this;
	            this.popupService.show(this.popupConfirmImportApplicationDataConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.yes) {
	                    self.persistenceService.import(self.importData);
	                    self.$window.location.reload();
	                }
	            });
	        }
	    }, {
	        key: 'showPopupConfirmDeleteApplicationData',
	        value: function showPopupConfirmDeleteApplicationData() {
	            var self = this;
	            this.popupService.show(this.popupConfirmDeleteApplicationDataConfig.id, function (popupDomElementId, choice) {
	                if (choice === self.constants.choices.yes) {
	                    self.persistenceService.cleanAllData();
	                    self.$window.location.reload();
	                }
	            });
	        }
	    }]);

	    return AdministrationController;
	}();

	exports.default = AdministrationController;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _credits = __webpack_require__(80);

	var _credits2 = _interopRequireDefault(_credits);

	var _credits3 = __webpack_require__(81);

	var _credits4 = _interopRequireDefault(_credits3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var creditsModule = _angular2.default.module('app.components.gui.screen.credits', [_angularUiRouter2.default]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('credits', {
	        url: constants.url.credits, template: '<credits></credits>'
	    });
	}).component('credits', { template: _credits2.default, controller: _credits4.default });

	exports.default = creditsModule;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = "<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <h1>{{ 'Credits' | translate }}</h1>\n        <div class=\"text-muted\">{{ 'sorted alphabetically' | translate }}</div>\n\n        <ul>\n            <li ng-repeat=\"credit in $ctrl.credits\">\n                <a href=\"{{ credit.url }}\" target=\"_blank\">{{ credit.resourceName }}</a>\n                <ng-if ng-if=\"!!credit.author\">{{ 'by' | translate }} {{ credit.author }}</ng-if>\n                <ng-if ng-if=\"!!credit.description\">({{ credit.description | translate }})</ng-if>\n            </li>\n        </ul>\n\n        <back-button></back-button>\n    </div>\n</main>\n<footnote></footnote>\n"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreditsController = function () {
	    /*@ngInject*/
	    function CreditsController() {
	        _classCallCheck(this, CreditsController);

	        var credits = [{
	            resourceName: 'JavaScript',
	            author: 'Brendan Eich',
	            url: 'https://en.wikipedia.org/wiki/JavaScript',
	            description: 'credit_description_javascript'
	        }, {
	            resourceName: 'Image',
	            author: 'Ravenmore',
	            url: '//opengameart.org/content/fantasy-icon-pack-by-ravenmore-0',
	            description: 'credit_description_map_image'
	        }, {
	            resourceName: 'ESTA Web/JS',
	            author: 'Schweizerische Bundesbahnen',
	            url: 'https://github.com/SchweizerischeBundesbahnen/esta-webjs',
	            description: 'credit_description_estawebjs'
	        }, {
	            resourceName: 'AngularJS1',
	            author: 'Google',
	            url: 'https://angularjs.org/',
	            description: 'credit_description_angularjs'
	        }, {
	            resourceName: 'Bootstrap',
	            author: 'Twitter',
	            url: 'http://getbootstrap.com/',
	            description: 'credit_description_bootstrap'
	        }, {
	            resourceName: 'Webpack',
	            url: 'https://webpack.github.io/docs/',
	            description: 'credit_description_webpack'
	        }, {
	            resourceName: 'Gulp',
	            url: 'http://gulpjs.com/',
	            description: 'credit_description_gulp'
	        }, {
	            resourceName: 'npm',
	            url: 'https://www.npmjs.com/',
	            description: 'credit_description_npm'
	        }, {
	            resourceName: 'node.js',
	            url: 'https://nodejs.org/en/',
	            description: 'credit_description_nodejs'
	        }, {
	            resourceName: 'Browsersync',
	            url: 'https://www.browsersync.io/',
	            description: 'credit_description_browsersync'
	        }, {
	            resourceName: 'angular translate',
	            url: 'https://github.com/angular-translate/angular-translate',
	            description: 'credit_description_angular-translate'
	        }, {
	            resourceName: 'AngularUI Router',
	            url: 'https://github.com/angular-ui/ui-router',
	            description: 'credit_description_angular-ui-router'
	        }, {
	            resourceName: 'Babel',
	            url: 'https://babeljs.io/',
	            description: 'credit_description_babel'
	        }, {
	            resourceName: 'RealFaviconGenerator',
	            url: 'https://realfavicongenerator.net/',
	            description: 'credit_description_realfavicongenerator'
	        }, {
	            resourceName: 'GitHub',
	            url: 'https://github.com/',
	            description: 'credit_description_github'
	        }, {
	            resourceName: 'Modern Clean CSS “Sticky Footer”',
	            author: 'Rizqy Hidayat',
	            url: 'http://mystrd.at/modern-clean-css-sticky-footer/',
	            description: 'credit_description_article_sticky_footer'
	        }, {
	            resourceName: 'Responsive Navigation Patterns',
	            author: 'Brad Frost',
	            url: 'http://bradfrost.com/blog/web/responsive-nav-patterns/',
	            description: 'credit_description_article_responsive_navigation_patterns'
	        }];
	        this.credits = this.sort(credits);
	    }

	    _createClass(CreditsController, [{
	        key: 'sort',
	        value: function sort(credits) {
	            return credits.sort(this.compareCredit);
	        }
	    }, {
	        key: 'compareCredit',
	        value: function compareCredit(o1, o2) {
	            if (!o1 && !o2) {
	                return 0;
	            } else if (!o1) {
	                return 1;
	            } else if (!o2) {
	                return -1;
	            } else {
	                return o1.resourceName.localeCompare(o2.resourceName);
	            }
	        }
	    }]);

	    return CreditsController;
	}();

	exports.default = CreditsController;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _adventureDetail = __webpack_require__(83);

	var _adventureDetail2 = _interopRequireDefault(_adventureDetail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var adventuresModule = _angular2.default.module('app.components.gui.screens.adventures', [_adventureDetail2.default.name]);

	exports.default = adventuresModule;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _adventureDetail = __webpack_require__(84);

	var _adventureDetail2 = _interopRequireDefault(_adventureDetail);

	var _adventureDetail3 = __webpack_require__(85);

	var _adventureDetail4 = _interopRequireDefault(_adventureDetail3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var adventureDetailModule = _angular2.default.module('app.components.gui.screen.adventures.detail', [_angularUiRouter2.default]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('adventure-detail', {
	        url: constants.url.adventureDetail + '/{adventureId}', template: '<adventure-detail></adventure-detail>'
	    });
	}).component('adventureDetail', { template: _adventureDetail2.default, controller: _adventureDetail4.default });

	exports.default = adventureDetailModule;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = "<messages></messages>\n<main>\n    <div class=\"container bg-white\" role=\"main\">\n        <h2>{{ $ctrl.adventure.name }}</h2>\n        <div class=\"col-md-12\">\n            <form name=\"adventureTableForm\" novalidate=\"novalidate\" ng-submit=\"$ctrl.save()\">\n                <h2>{{ 'General' | translate }}</h2>\n                <div>\n                    <div class=\"form-group\" ng-if=\"!$ctrl.adventure.id\">\n                        <label for=\"name\">{{ 'Name' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" ng-model=\"$ctrl.adventure.name\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"serie\">{{ 'Serie' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"serie\" ng-model=\"$ctrl.adventure.serie\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"authors\">{{ 'Author(s)' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"authors\" ng-model=\"$ctrl.adventure.authors\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"description\">{{ 'Description' | translate }}</label>\n                        <textarea id=\"description\" class=\"form-control\" ng-model=\"$ctrl.adventure.description\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"version\">{{ 'Version' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"version\" ng-model=\"$ctrl.adventure.version\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"language\">{{ 'Language' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"language\" ng-model=\"$ctrl.adventure.language\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"homepage\">{{ 'Homepage' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"homepage\" ng-model=\"$ctrl.adventure.homepage\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"isbn\">{{ 'ISBN' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"isbn\" ng-model=\"$ctrl.adventure.isbn\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"startParagraphId\">{{ 'First paragraph' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"startParagraphId\" ng-model=\"$ctrl.adventure.startParagraphId\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"gameRulesParagraphId\">{{ \"Game's rules paragraph\" | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"gameRulesParagraphId\" ng-model=\"$ctrl.adventure.gameRulesParagraphId\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"homepage\">{{ 'Download URL' | translate }}</label>\n                        <input type=\"text\" class=\"form-control\" id=\"homepage\" ng-model=\"$ctrl.adventure.downloadUrl\">\n                    </div>\n                </div>\n\n                <h2>{{ 'Features' | translate }}</h2>\n\n                <div>\n                    <div class=\"form-group\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\" ng-model=\"$ctrl.adventure.toggles.characters\">\n                            {{ 'Enable characters with stats' | translate }}\n                        </label>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\" ng-model=\"$ctrl.adventure.toggles.dices\">\n                            {{ 'Enable dices' | translate }}\n                        </label>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\" ng-model=\"$ctrl.adventure.toggles.goto\">\n                            {{ 'Enable Go to paragraph' | translate }}\n                        </label>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\" ng-model=\"$ctrl.adventure.toggles.map\">\n                            {{ 'Enable map' | translate }}\n                        </label>\n                    </div>\n                </div>\n\n                <div ng-if=\"$ctrl.adventure.toggles.dices\">\n                    <h2>{{ 'Dices' | translate }}</h2>\n                    <div>\n                        <div class=\"form-group\">\n                            <label for=\"diceMin\">{{ \"Minimal dice's value\" | translate }}</label>\n                            <input type=\"number\" class=\"form-control\" id=\"diceMin\" ng-model=\"$ctrl.adventure.dice.min\"\n                                   ng-required=\"$ctrl.adventure.toggles.dices\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"diceMax\">{{ \"Maximal dice's value\" | translate }}</label>\n                            <input type=\"number\" class=\"form-control\" id=\"diceMax\" ng-model=\"$ctrl.adventure.dice.max\"\n                                   ng-required=\"$ctrl.adventure.toggles.dices\">\n                        </div>\n                    </div>\n                </div>\n\n                <h2>{{ 'Lists' | translate }}</h2>\n                <list entries=\"$ctrl.adventure.lists.keys\" on-save=\"$ctrl.onListSave(entries)\"></list>\n\n                <div ng-repeat=\"list in $ctrl.adventure.lists.keys\">\n                    <h2>{{ list }}</h2>\n                    <list entries=\"$ctrl.adventure.lists.values[list]\" on-save=\"$ctrl.onSubListSave(list, entries)\"></list>\n\n                    <label>\n                        <input type=\"checkbox\" value=\"\" ng-model=\"$ctrl.adventure.lists.keepOnRestart[list]\">\n                        {{ 'Keep on restart' | translate }}\n                    </label>\n                </div>\n            </form>\n        </div>\n        <back-button></back-button>\n        <button type=\"button\" class=\"btn btn-primary\"\n                aria-label=\"{{ 'Save changes' | translate }}\"\n                title=\"{{ 'Save changes' | translate }}\"\n                ng-click=\"$ctrl.save(adventureTableForm)\">{{ 'Save' | translate }}</button>\n    </div>\n</main>\n<footnote></footnote>"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AdventureDetailController = function () {
	    /*@ngInject*/
	    function AdventureDetailController(persistenceService, adventurePersistenceService, $stateParams, $location, constants, popupService, messagesService, $timeout, $window, formHelperService, $translate, $log) {
	        _classCallCheck(this, AdventureDetailController);

	        this.persistenceService = persistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.$stateParams = $stateParams;
	        this.$location = $location;
	        this.constants = constants;
	        this.popupService = popupService;
	        this.messagesService = messagesService;
	        this.$timeout = $timeout;
	        this.$window = $window;
	        this.formHelperService = formHelperService;
	        this.$translate = $translate;
	        this.$log = $log;
	        this.initData();

	        this.setInitialFocus();
	    }

	    _createClass(AdventureDetailController, [{
	        key: "initData",
	        value: function initData() {
	            var adventureId = encodeURIComponent(this.$stateParams.adventureId);
	            if (!!adventureId) {
	                if ("create" === adventureId) {
	                    this.adventure = {
	                        toggles: {
	                            battle: true,
	                            dices: true,
	                            goto: true,
	                            characters: true,
	                            map: true
	                        }
	                    };
	                    this.mode = "create";
	                } else {
	                    this.adventure = this.adventurePersistenceService.getAdventure(adventureId);
	                    this.mode = "edit";
	                }
	                if (!this.adventure.lists) {
	                    this.adventure.lists = { values: {} };
	                }
	            }
	        }
	    }, {
	        key: "setInitialFocus",
	        value: function setInitialFocus() {
	            var that = this;
	            this.$timeout(function () {
	                var element = void 0;
	                if (that.mode === "create") {
	                    element = that.$window.document.getElementById("name");
	                } else {
	                    element = that.$window.document.getElementById("authors");
	                }
	                if (!!element) {
	                    element.focus();
	                }
	            });
	        }
	    }, {
	        key: "save",
	        value: function save(form) {
	            this.formHelperService.setErrorFieldsAsDirty(form, true);
	            if (form.$invalid) {
	                return;
	            }

	            if (!this.adventure.toggles.dices) {
	                delete this.adventure.dice;
	            }
	            try {
	                this.adventurePersistenceService.updateAdventureWithoutParagraphs(this.adventure);
	                this.$location.url(this.constants.url.games);
	            } catch (error) {
	                this.$log.warn(error);
	            }
	        }
	    }, {
	        key: "onListSave",
	        value: function onListSave(entries) {
	            if (!!this.adventure.lists.keys) {
	                for (var i = 0; i < this.adventure.lists.keys.length; i++) {
	                    var key = this.adventure.lists.keys[i];
	                    if (entries.indexOf(key) === -1) {
	                        delete this.adventure.lists.values[key];
	                    }
	                }
	            }
	            this.adventure.lists.keys = entries;
	        }
	    }, {
	        key: "onSubListSave",
	        value: function onSubListSave(list, entries) {
	            this.adventure.lists.values[list] = entries;
	        }
	    }]);

	    return AdventureDetailController;
	}();

	exports.default = AdventureDetailController;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(5);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _libraryImport = __webpack_require__(87);

	var _libraryImport2 = _interopRequireDefault(_libraryImport);

	var _libraryImport3 = __webpack_require__(88);

	var _libraryImport4 = _interopRequireDefault(_libraryImport3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var libraryImportModule = _angular2.default.module('app.components.gui.screen.library-import', [_angularUiRouter2.default]).config( /*@ngInject*/function ($stateProvider, $urlRouterProvider, constants) {
	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('libraryImport', {
	        url: constants.url.libraryImport + '?import', template: '<library-import></library-import>'
	    });
	}).component('libraryImport', { template: _libraryImport2.default, controller: _libraryImport4.default });

	exports.default = libraryImportModule;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = "<messages></messages>\n<main>\n</main>\n<footnote></footnote>\n"

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LibraryImportController = function () {
	    /*@ngInject*/
	    function LibraryImportController($location, constants, messagesService, libraryPersistenceService, $stateParams) {
	        _classCallCheck(this, LibraryImportController);

	        this.constants = constants;
	        this.$location = $location;
	        this.libraryPersistenceService = libraryPersistenceService;
	        this.messagesService = messagesService;
	        this.$stateParams = $stateParams;
	        if (!!$stateParams.import) {
	            this.downloadLibrary($stateParams.import);
	        } else {
	            this.displayAdventures();
	        }
	    }

	    _createClass(LibraryImportController, [{
	        key: "downloadLibrary",
	        value: function downloadLibrary(url) {
	            var self = this;
	            var promise = this.libraryPersistenceService.downloadLibrary(url);
	            promise.then(function (json) {
	                self.displayAdventures();
	            }, function (reason) {
	                self.messagesService.errorMessage(reason, false);
	            });
	        }
	    }, {
	        key: "displayAdventures",
	        value: function displayAdventures() {
	            this.$location.url(this.constants.url.games);
	        }
	    }]);

	    return LibraryImportController;
	}();

	exports.default = LibraryImportController;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _persistence = __webpack_require__(90);

	var _persistence2 = _interopRequireDefault(_persistence);

	var _dices = __webpack_require__(100);

	var _dices2 = _interopRequireDefault(_dices);

	var _formHelper = __webpack_require__(102);

	var _formHelper2 = _interopRequireDefault(_formHelper);

	var _remoteJsonRetriever = __webpack_require__(104);

	var _remoteJsonRetriever2 = _interopRequireDefault(_remoteJsonRetriever);

	var _languagePicker = __webpack_require__(106);

	var _languagePicker2 = _interopRequireDefault(_languagePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var servicesModule = _angular2.default.module('app.components.services', [_persistence2.default.name, _dices2.default.name, _formHelper2.default.name, _remoteJsonRetriever2.default.name, _languagePicker2.default.name]);

	exports.default = servicesModule;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _gamePersistence = __webpack_require__(91);

	var _gamePersistence2 = _interopRequireDefault(_gamePersistence);

	var _adventurePersistence = __webpack_require__(93);

	var _adventurePersistence2 = _interopRequireDefault(_adventurePersistence);

	var _libraryPersistence = __webpack_require__(95);

	var _libraryPersistence2 = _interopRequireDefault(_libraryPersistence);

	var _persistence = __webpack_require__(97);

	var _persistence2 = _interopRequireDefault(_persistence);

	var _mapPersistence = __webpack_require__(98);

	var _mapPersistence2 = _interopRequireDefault(_mapPersistence);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var persistenceModule = _angular2.default.module('app.components.services.persistence', [_gamePersistence2.default.name, _adventurePersistence2.default.name, _libraryPersistence2.default.name, _mapPersistence2.default.name]).service('persistenceService', _persistence2.default);

	exports.default = persistenceModule;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _gamePersistence = __webpack_require__(92);

	var _gamePersistence2 = _interopRequireDefault(_gamePersistence);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gamePersistenceModule = _angular2.default.module('app.components.services.persistence.game', []).service('gamePersistenceService', _gamePersistence2.default);

	exports.default = gamePersistenceModule;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GamePersistenceService = function () {

	    /*@ngInject*/
	    function GamePersistenceService(constants, persistenceService, adventurePersistenceService, messagesService, $q, remoteJsonRetrieverService, $translate) {
	        _classCallCheck(this, GamePersistenceService);

	        this.persistenceService = persistenceService;
	        this.adventurePersistenceService = adventurePersistenceService;
	        this.constants = constants;
	        this.messagesService = messagesService;
	        this.$q = $q;
	        this.remoteJsonRetrieverService = remoteJsonRetrieverService;
	        this.$translate = $translate;
	    }

	    _createClass(GamePersistenceService, [{
	        key: "downloadGame",
	        value: function downloadGame(url) {
	            var self = this;
	            var deferred = this.$q.defer();
	            var promise = this.remoteJsonRetrieverService.retrieveJson(url);
	            promise.then(function (json) {
	                self.importGame(JSON.stringify(json));
	                deferred.resolve('Success');
	            }, function (reason) {
	                self.messagesService.errorMessage(reason, false);
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        }
	    }, {
	        key: "getSelectedLanguage",
	        value: function getSelectedLanguage() {
	            return this.persistenceService.get(this.constants.data.selectedLanguage);
	        }
	    }, {
	        key: "setSelectedLanguage",
	        value: function setSelectedLanguage(language) {
	            this.persistenceService.save(this.constants.data.selectedLanguage, language);
	        }
	    }, {
	        key: "addGame",
	        value: function addGame(game) {
	            var savedGame = {
	                id: this.newGameId(),
	                name: game.name,
	                adventureId: game.adventureId,
	                currentParagraphNr: game.currentParagraphNr
	            };
	            if (!!game.lists) {
	                savedGame.lists = game.lists;
	            }
	            savedGame.characters = [];
	            this.updateGame(savedGame);
	            return savedGame;
	        }
	    }, {
	        key: "exportGame",
	        value: function exportGame(gameId) {
	            var game = this.getGame(gameId);
	            if (!!game.characters) {
	                for (var i = 0; i < game.characters.length; i++) {
	                    delete game.characters[i]["$$hashKey"];
	                    if (!!game.characters[i].stats) {
	                        for (var j = 0; j < game.characters[i].stats.length; j++) {
	                            delete game.characters[i].stats[j]["$$hashKey"];
	                        }
	                    }
	                }
	            }
	            return this.sortObjectKeys(game);
	        }
	    }, {
	        key: "sortObjectKeys",
	        value: function sortObjectKeys(object) {
	            var result = object;
	            if (!!object) {
	                if (Array.isArray(object)) {
	                    result = [];
	                    for (var i = 0; i < object.length; i++) {
	                        result.push(this.sortObjectKeys(object[i]));
	                    }
	                } else if ((typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object') {
	                    var keys = Object.keys(object);
	                    if (!!keys && keys.length > 0) {
	                        keys = keys.sort();
	                        result = {};
	                        for (var _i = 0; _i < keys.length; _i++) {
	                            var value = object[keys[_i]];
	                            value = this.sortObjectKeys(value);
	                            result[keys[_i]] = value;
	                        }
	                    }
	                }
	            }
	            return result;
	        }
	    }, {
	        key: "importGame",
	        value: function importGame(gameAsStr) {
	            try {
	                var game = JSON.parse(gameAsStr);
	                var missingMandatoryFields = [];
	                if (!game.id) {
	                    game.id = this.newGameId();
	                }
	                if (!game.adventureId) {
	                    missingMandatoryFields.push('adventureId');
	                }
	                if (!game.currentParagraphNr) {
	                    missingMandatoryFields.push('currentParagraphNr');
	                }
	                if (missingMandatoryFields.length > 0) {
	                    this.messagesService.errorMessage(this.$translate.instant("ImportGameFailedMissingFields", { missingMandatoryFields: missingMandatoryFields.join(', ') }), false);
	                } else if (!!this.getGame(game.id)) {
	                    this.messagesService.errorMessage(this.$translate.instant("GameAlreadyExists", { gameId: game.id }), false);
	                } else {
	                    this.updateGame(game);
	                }
	            } catch (error) {
	                this.messagesService.errorMessage(this.$translate.instant('Cannot import game'), false);
	            }
	        }
	    }, {
	        key: "updateGame",
	        value: function updateGame(game) {
	            if (!game) {
	                return;
	            }
	            game = JSON.parse(JSON.stringify(game));
	            game.time = this.adventurePersistenceService.now();

	            var key = this.getGamePersistenceKey(game.id);
	            this.persistenceService.save(key, game);
	        }
	    }, {
	        key: "deleteGame",
	        value: function deleteGame(gameId) {
	            var key = this.getGamePersistenceKey(gameId);
	            localStorage.removeItem(key);
	        }
	    }, {
	        key: "newGameId",
	        value: function newGameId() {
	            return new Date().getTime().toString();
	        }
	    }, {
	        key: "getUrlOfGame",
	        value: function getUrlOfGame(gameId, paragraphNr) {
	            var game = this.getGame(gameId);
	            if (!paragraphNr) {
	                paragraphNr = game.currentParagraphNr;
	            }
	            var urlOfGame = "/" + encodeURIComponent(game.adventureId) + "/" + encodeURIComponent(paragraphNr) + "/game/" + encodeURIComponent(game.id);
	            return urlOfGame;
	        }
	    }, {
	        key: "getGame",
	        value: function getGame(gameId) {
	            var key = this.getGamePersistenceKey(gameId);
	            return this.persistenceService.get(key);
	        }
	    }, {
	        key: "getGamePersistenceKeys",
	        value: function getGamePersistenceKeys() {
	            return this.persistenceService.findKeysWithPrefix(this.constants.data.game);
	        }
	    }, {
	        key: "getGamePersistenceKey",
	        value: function getGamePersistenceKey(gameId) {
	            var key = gameId;
	            if (key.indexOf(this.constants.data.game) !== 0) {
	                key = this.constants.data.game + "." + key;
	            }
	            return key;
	        }
	    }, {
	        key: "setCurrentParagraphNrOfGame",
	        value: function setCurrentParagraphNrOfGame(gameId, fromParagrahNr, toParagraphNr) {
	            var game = this.getGame(gameId);
	            if (!!fromParagrahNr) {
	                var choosenParagraphs = game.choosenParagraphs;
	                if (!choosenParagraphs) {
	                    choosenParagraphs = [];
	                    game.choosenParagraphs = choosenParagraphs;
	                }
	                if (choosenParagraphs.indexOf(toParagraphNr) === -1) {
	                    choosenParagraphs.push(toParagraphNr);
	                }
	            }
	            game.currentParagraphNr = toParagraphNr;
	            if (!game.path) {
	                game.path = [];
	            }
	            game.path.push(toParagraphNr);
	            this.updateGame(game);
	        }
	    }, {
	        key: "getChoosenChoices",
	        value: function getChoosenChoices(gameId, paragraphNr) {
	            var game = this.getGame(gameId);
	            var choosenParagraphs = game.choosenParagraphs;
	            if (!choosenParagraphs) {
	                return [];
	            } else {
	                var paragraph = this.adventurePersistenceService.getParagraph(game.adventureId, paragraphNr);
	                var choosen = [];
	                var choices = this.adventurePersistenceService.getParagraphChoices(paragraph);
	                if (!!choices) {
	                    for (var i = 0; i < choices.length; i++) {
	                        if (choosenParagraphs.indexOf(choices[i]) !== -1) {
	                            choosen.push('' + choices[i]);
	                        }
	                    }
	                }
	                return choosen;
	            }
	        }
	    }, {
	        key: "getGames",
	        value: function getGames(adventureId) {
	            var gamePersistenceKeys = this.getGamePersistenceKeys();
	            var games = [];
	            for (var i = 0; i < gamePersistenceKeys.length; i++) {
	                var game = this.getGame(gamePersistenceKeys[i]);
	                if (game.adventureId === adventureId) {
	                    games.push(game);
	                }
	            }
	            return games;
	        }
	    }, {
	        key: "startGame",
	        value: function startGame(adventureId, gameName) {
	            var adventure = this.adventurePersistenceService.getAdventure(adventureId);
	            var game = {
	                name: gameName,
	                adventureId: adventure.id
	            };
	            if (!!adventure.lists && !!adventure.lists.keys) {
	                game.lists = {};
	                for (var i = 0; i < adventure.lists.keys.length; i++) {
	                    game.lists[adventure.lists.keys[i]] = [];
	                }

	                var keys = Object.keys(adventure.lists.values);
	                for (var _i2 = 0; _i2 < keys.length; _i2++) {
	                    game.lists[keys[_i2]] = adventure.lists.values[keys[_i2]];
	                }
	            }
	            game = this.addGame(game);
	            this.setCurrentParagraphNrOfGame(game.id, null, adventure.startParagraphId);
	            return game;
	        }
	    }, {
	        key: "restart",
	        value: function restart(gameId) {
	            var game = this.getGame(gameId);
	            var adventure = this.adventurePersistenceService.getAdventure(game.adventureId);
	            game.path = [];
	            if (!!game.characters) {
	                for (var i = 0; i < game.characters.length; i++) {
	                    if (!!game.characters[i].stats) {
	                        for (var j = 0; j < game.characters[i].stats.length; j++) {
	                            game.characters[i].stats[j].current = game.characters[i].stats[j].initial;
	                        }
	                    }
	                }
	            }
	            if (!!adventure.lists && !!adventure.lists.keys) {
	                for (var _i3 = 0; _i3 < adventure.lists.keys.length; _i3++) {
	                    var key = adventure.lists.keys[_i3];
	                    var keep = !!adventure.lists.keepOnRestart && !!adventure.lists.keepOnRestart[key];
	                    if (!keep && !!game.lists) {
	                        delete game.lists[key];
	                    }
	                    if (!!adventure.lists.values && !!adventure.lists.values[key]) {
	                        if (!game.lists[key]) {
	                            game.lists[key] = [];
	                        }
	                        for (var _j = 0; _j < adventure.lists.values[key].length; _j++) {
	                            var value = adventure.lists.values[key][_j];
	                            if (game.lists[key].indexOf(value) === -1) {
	                                game.lists[key].push(value);
	                            }
	                        }
	                    }
	                }
	            }
	            this.updateGame(game);
	            this.setCurrentParagraphNrOfGame(gameId, null, adventure.startParagraphId);
	        }
	    }]);

	    return GamePersistenceService;
	}();

	exports.default = GamePersistenceService;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _adventurePersistence = __webpack_require__(94);

	var _adventurePersistence2 = _interopRequireDefault(_adventurePersistence);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var adventurePersistenceModule = _angular2.default.module('app.components.services.persistence.adventure', []).service('adventurePersistenceService', _adventurePersistence2.default);

	exports.default = adventurePersistenceModule;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AdventurePersistenceService = function () {

	    /*@ngInject*/
	    function AdventurePersistenceService(constants, persistenceService, messagesService, $translate, $q, remoteJsonRetrieverService, $filter) {
	        _classCallCheck(this, AdventurePersistenceService);

	        this.constants = constants;
	        this.persistenceService = persistenceService;
	        this.messagesService = messagesService;
	        this.$translate = $translate;
	        this.$q = $q;
	        this.remoteJsonRetrieverService = remoteJsonRetrieverService;
	        this.$filter = $filter;
	    }

	    _createClass(AdventurePersistenceService, [{
	        key: 'downloadAdventureWithId',
	        value: function downloadAdventureWithId(adventureId) {
	            var adventure = this.getAdventure(adventureId);
	            return this.downloadAdventure(adventure, adventure.downloadUrl);
	        }
	    }, {
	        key: 'downloadAdventure',
	        value: function downloadAdventure(adventure, downloadUrl) {
	            var self = this;
	            var deferred = this.$q.defer();
	            var promise = this.remoteJsonRetrieverService.retrieveJson(downloadUrl);
	            promise.then(function (json) {
	                if (!!adventure) {
	                    json.id = adventure.id;
	                } else {
	                    json.id = self.getAdventureIdFromAdventureName(json.name);
	                }
	                self.import(json);
	                self.messagesService.successMessage(self.$translate.instant("AdventureDownloaded", { adventure: json.name }), false);
	                deferred.resolve('Success');
	            }, function (reason) {
	                self.messagesService.errorMessage(reason, false);
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        }
	    }, {
	        key: 'now',
	        value: function now() {
	            var now = new Date();
	            return this.$filter('date')(now, 'dd.MM.yyyy HH:mm');
	        }
	    }, {
	        key: 'updateDownloadableAdventures',
	        value: function updateDownloadableAdventures(adventures) {
	            if (!!adventures) {
	                for (var i = 0; i < adventures.length; i++) {
	                    this.updateDownloadableAdventure(adventures[i]);
	                }
	            }
	        }
	    }, {
	        key: 'updateDownloadableAdventure',
	        value: function updateDownloadableAdventure(adventure) {
	            try {
	                this.updateAdventureWithoutParagraphs(adventure);
	            } catch (error) {
	                if (this.constants.errors.adventureAlreadyExist === error) {
	                    var existingAdventure = this.getAdventure(adventure.id);
	                    existingAdventure.downloadUrl = adventure.downloadUrl;
	                    this.updateAdventureWithoutParagraphs(existingAdventure);
	                }
	            }
	        }
	    }, {
	        key: 'getAdventuresOverview',
	        value: function getAdventuresOverview() {
	            var keys = this.getAdventurePersistenceKeys();
	            var adventures = [];
	            for (var i = 0; i < keys.length; i++) {
	                var adventure = this.persistenceService.get(keys[i]);
	                adventures.push({
	                    id: adventure.id,
	                    name: adventure.name,
	                    numberOfParagraphs: adventure.numberOfParagraphs,
	                    language: adventure.language,
	                    version: adventure.version,
	                    authors: adventure.authors,
	                    serie: adventure.serie,
	                    downloadUrl: adventure.downloadUrl,
	                    downloadHistory: adventure.downloadHistory,
	                    downloaded: adventure.downloaded
	                });
	            }
	            return adventures;
	        }
	    }, {
	        key: 'getAdventurePersistenceKeys',
	        value: function getAdventurePersistenceKeys() {
	            var keys = Object.keys(localStorage);
	            var result = [];
	            for (var i = 0; i < keys.length; i++) {
	                if (keys[i].indexOf(this.constants.data.adventure) === 0 && keys[i].indexOf('paragraph.') === -1 && keys[i].indexOf('.choosen') === -1) {
	                    result.push(keys[i]);
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'getAdventure',
	        value: function getAdventure(adventureId) {
	            return this.persistenceService.get(this.getAdventurePersistenceKey(adventureId));
	        }
	    }, {
	        key: 'importAdventure',
	        value: function importAdventure(adventureAsStr) {
	            try {
	                var adventure = JSON.parse(adventureAsStr, true);
	                this.import(adventure);
	            } catch (error) {
	                this.messagesService.errorMessage(this.$translate.instant('Cannot import adventure'), false);
	            }
	        }
	    }, {
	        key: 'import',
	        value: function _import(adventure, checkDupplicate) {
	            try {
	                var missingMandatoryFields = [];
	                if (!adventure.id) {
	                    missingMandatoryFields.push('id');
	                }
	                if (!adventure.name) {
	                    missingMandatoryFields.push('name');
	                }
	                if (!adventure.authors) {
	                    missingMandatoryFields.push('authors');
	                }
	                if (!adventure.version) {
	                    missingMandatoryFields.push('version');
	                }
	                if (!adventure.language) {
	                    missingMandatoryFields.push('language');
	                }
	                if (!adventure.startParagraphId) {
	                    missingMandatoryFields.push('startParagraphId');
	                }
	                if (missingMandatoryFields.length > 0) {
	                    this.messagesService.errorMessage(this.$translate.instant("ImportGameFailedMissingFields", { missingMandatoryFields: missingMandatoryFields.join(', ') }), false);
	                } else if (!!checkDupplicate && !!this.getAdventure(adventure.id)) {
	                    this.messagesService.errorMessage(this.$translate.instant("AdventureAlreadyExists", { adventure: adventure.id }), false);
	                } else {
	                    if (!!adventure.paragraphs) {
	                        adventure.numberOfParagraphs = adventure.paragraphs.length;
	                    }
	                    if (!!adventure.downloadUrl) {
	                        adventure.downloaded = true;
	                    }
	                    this.updateAdventureWithoutParagraphs(adventure);
	                    if (!!adventure.paragraphs) {
	                        for (var i = 0; i < adventure.paragraphs.length; i++) {
	                            this.setParagraph(adventure.id, adventure.paragraphs[i], checkDupplicate);
	                        }
	                    }
	                }
	            } catch (error) {
	                this.messagesService.errorMessage(this.$translate.instant('Cannot import adventure'), false);
	            }
	        }
	    }, {
	        key: 'updateVisibleSectionsAndParagrahTag',
	        value: function updateVisibleSectionsAndParagrahTag(adventureId, paragraph, visibleSections, originalTag) {
	            if (!paragraph.tag) {
	                delete paragraph.tag;
	            }
	            this.updateParagraph(adventureId, paragraph);
	            this.updateVisibleSections(adventureId, paragraph, visibleSections, originalTag);
	        }
	    }, {
	        key: 'updateVisibleSections',
	        value: function updateVisibleSections(adventureId, paragraph, visibleSections, originalTag) {
	            originalTag = this.getTag(originalTag);
	            var newTag = this.getTag(paragraph.tag);
	            var newVisibleSections = this.getOrCreateVisibleSections(adventureId, newTag);
	            if (originalTag !== newTag) {
	                this.deleteVisibleSectionsIfUnused(adventureId, originalTag);
	            }

	            var keys = Object.keys(visibleSections);
	            for (var i = 0; i < keys.length; i++) {
	                var key = keys[i];
	                newVisibleSections[key] = visibleSections[key];
	            }
	            this.saveVisibleSections(adventureId, newVisibleSections, newTag);
	        }
	    }, {
	        key: 'deleteVisibleSectionsIfUnused',
	        value: function deleteVisibleSectionsIfUnused(adventureId, tag) {
	            var foundParagraphWithTag = false;
	            var paragraphs = this.getParagraphs(adventureId);
	            if (!!paragraphs) {
	                for (var i = 0; i < paragraphs.length; i++) {
	                    var paragraph = paragraphs[i];
	                    if (!!paragraph.tag && tag === paragraph.tag) {
	                        foundParagraphWithTag = true;
	                        break;
	                    }
	                }
	            }
	            if (!foundParagraphWithTag) {
	                var adventure = this.getAdventure(adventureId);
	                delete adventure.visibleSections[tag];
	                this.updateAdventureWithoutParagraphs(adventure);
	            }
	        }
	    }, {
	        key: 'getOrCreateVisibleSections',
	        value: function getOrCreateVisibleSections(adventureId, tag) {
	            tag = this.getTag(tag);
	            var adventure = this.getAdventure(adventureId);
	            if (!adventure.visibleSections) {
	                adventure.visibleSections = {};
	            }
	            var tagVisibleSections = adventure.visibleSections[tag];
	            if (!tagVisibleSections) {
	                tagVisibleSections = {};
	                if (!!adventure.toggles.map) {
	                    tagVisibleSections['Map'] = { value: this.$translate.instant('Map'), checked: true };
	                }
	                if (!!adventure.toggles.characters) {
	                    tagVisibleSections['Characters'] = { value: this.$translate.instant('Characters'), checked: true };
	                }
	                if (!!adventure.toggles.dices) {
	                    tagVisibleSections['Dices'] = { value: this.$translate.instant('Dices'), checked: true };
	                }
	                if (!!adventure.lists) {
	                    for (var i = 0; i < adventure.lists.keys.length; i++) {
	                        tagVisibleSections[adventure.lists.keys[i]] = { value: adventure.lists.keys[i], checked: true };
	                    }
	                }
	                this.saveVisibleSections(adventure.id, tagVisibleSections, tag);
	            }
	            return tagVisibleSections;
	        }
	    }, {
	        key: 'saveVisibleSections',
	        value: function saveVisibleSections(adventureId, newVisibleSections, tag) {
	            var adventure = this.getAdventure(adventureId);
	            if (!adventure.visibleSections) {
	                adventure.visibleSections = {};
	            }
	            adventure.visibleSections[tag] = newVisibleSections;
	            this.updateAdventureWithoutParagraphs(adventure);
	        }
	    }, {
	        key: 'getTag',
	        value: function getTag(tag) {
	            if (!tag) {
	                tag = 'withoutTag';
	            }
	            return tag;
	        }
	    }, {
	        key: 'updateAdventureWithoutParagraphs',
	        value: function updateAdventureWithoutParagraphs(adventure) {
	            var adventureIdFromFromAdventureName = this.getAdventureIdFromAdventureName(adventure.name);
	            if (!adventure.id) {
	                adventure.id = adventureIdFromFromAdventureName;
	                var existingAdventure = this.getAdventure(adventureIdFromFromAdventureName);
	                if (!!existingAdventure) {
	                    this.messagesService.errorMessage(this.$translate.instant("AdventureAlreadyExists", { adventure: adventureIdFromFromAdventureName }), false);
	                    throw this.constants.errors.adventureAlreadyExist;
	                }
	            }
	            var adventureInfo = {};
	            var keys = Object.keys(adventure);
	            for (var i = 0; i < keys.length; i++) {
	                if (keys[i] !== 'paragraphs') {
	                    adventureInfo[keys[i]] = adventure[keys[i]];
	                }
	            }
	            this.persistenceService.save(this.constants.data.adventure + "." + adventure.id, adventureInfo);
	        }
	    }, {
	        key: 'getAdventureIdFromAdventureName',
	        value: function getAdventureIdFromAdventureName(adventureName) {
	            return encodeURIComponent(adventureName.replace(/\s+/g, '-').toLowerCase());
	        }
	    }, {
	        key: 'deleteAdventureAndParagraphs',
	        value: function deleteAdventureAndParagraphs(adventureId) {
	            this.persistenceService.remove(this.getAdventurePersistenceKey(adventureId));
	            var paragraphKeys = this.getAdventureParagraphKeys(adventureId);
	            for (var i = 0; i < paragraphKeys.length; i++) {
	                this.persistenceService.remove(paragraphKeys[i]);
	            }
	        }
	    }, {
	        key: 'setParagraph',
	        value: function setParagraph(adventureId, paragraph, checkDupplicate) {
	            var key = this.getParagraphPersistenceKey(adventureId, paragraph.paragraphNr);
	            if (!!checkDupplicate) {
	                var existingParagraph = this.persistenceService.get(key);
	                if (!!existingParagraph) {
	                    this.messagesService.errorMessage(this.$translate.instant("DupplicateParagraph", { paragraphNr: paragraph.paragraphNr }), true);
	                    return;
	                }
	            }
	            this.persistenceService.save(key, paragraph);
	        }
	    }, {
	        key: 'getOrCreateParagraph',
	        value: function getOrCreateParagraph(adventureId, paragraphNr) {
	            var foundParagraph = this.getParagraph(adventureId, paragraphNr);
	            if (!!foundParagraph) {
	                return foundParagraph;
	            } else {
	                var paragraph = {
	                    version: this.constants.version,
	                    adventureId: adventureId,
	                    paragraphNr: paragraphNr,
	                    description: ''
	                };
	                var adventure = this.getAdventure(adventureId);
	                if (!adventure.numberOfParagraphs) {
	                    adventure.numberOfParagraphs = 0;
	                }
	                adventure.numberOfParagraphs = adventure.numberOfParagraphs + 1;
	                this.updateAdventureWithoutParagraphs(adventure);
	                this.updateParagraph(adventureId, paragraph);
	                return paragraph;
	            }
	        }
	    }, {
	        key: 'getParagraph',
	        value: function getParagraph(adventureId, paragraphNr) {
	            var key = this.getParagraphPersistenceKey(adventureId, paragraphNr);
	            return this.persistenceService.get(key);
	        }
	    }, {
	        key: 'updateParagraph',
	        value: function updateParagraph(adventureId, paragraph) {
	            if (!paragraph) {
	                return;
	            }
	            paragraph = JSON.parse(JSON.stringify(paragraph));
	            var key = this.getParagraphPersistenceKey(adventureId, paragraph.paragraphNr);
	            this.persistenceService.save(key, paragraph);
	        }
	    }, {
	        key: 'getParagraphChoices',
	        value: function getParagraphChoices(currentParagraph) {
	            var paragraphs = this.getDescriptionParagraphs(currentParagraph.description);
	            var paragraphNrInChoices = [];
	            if (!!paragraphs) {
	                for (var i = 0; i < paragraphs.length; i++) {
	                    var paragraph = paragraphs[i];
	                    for (var j = 0; j < paragraph.length; j++) {
	                        var part = paragraph[j];
	                        if (!!part.choice) {
	                            paragraphNrInChoices.push(part.text);
	                        }
	                    }
	                }
	            }
	            return paragraphNrInChoices;
	        }
	    }, {
	        key: 'getDescriptionParagraphs',
	        value: function getDescriptionParagraphs(description) {
	            var lines = this.getLines(description);
	            var parts = [];
	            for (var i = 0; i < lines.length; i++) {
	                var line = lines[i];
	                var descriptionWithChoices = [];
	                while (this.hasChoice(line)) {
	                    var indexOfFirstDelimiter = line.indexOf('§');
	                    var indexOfSecondDelimiter = line.indexOf('§', indexOfFirstDelimiter + 1);
	                    var textBeforeChoice = line.slice(0, indexOfFirstDelimiter);
	                    if (!!textBeforeChoice && textBeforeChoice.trim().length > 0) {
	                        descriptionWithChoices.push({ choice: false, text: textBeforeChoice });
	                    }

	                    var textOfChoice = line.slice(indexOfFirstDelimiter + 1, indexOfSecondDelimiter);
	                    if (!!textOfChoice && textOfChoice.trim().length > 0) {
	                        descriptionWithChoices.push({ choice: true, text: textOfChoice });
	                    }
	                    line = line.substr(indexOfSecondDelimiter + 1);
	                }
	                descriptionWithChoices.push({ choice: false, text: line });
	                parts.push(descriptionWithChoices);
	            }
	            return parts;
	        }
	    }, {
	        key: 'getLines',
	        value: function getLines(description) {
	            var lines = [];
	            if (!!description) {
	                var textsDelimitedWithEol = description.split('\n');
	                for (var i = 0; i < textsDelimitedWithEol.length; i++) {
	                    var textDelimitedWithEol = textsDelimitedWithEol[i];
	                    lines.push(textDelimitedWithEol);
	                }
	            }
	            return lines;
	        }
	    }, {
	        key: 'hasChoice',
	        value: function hasChoice(text) {
	            var indexOfFirstDelimiter = text.indexOf('§');
	            var indexOfSecondDelimiter = text.indexOf('§', indexOfFirstDelimiter + 1);
	            return indexOfFirstDelimiter !== -1 && indexOfSecondDelimiter !== -1;
	        }
	    }, {
	        key: 'getAdventureParagraphKeys',
	        value: function getAdventureParagraphKeys(adventureId) {
	            var paragraphKeys = [];
	            var keys = Object.keys(localStorage);
	            var keyAdventureId = this.constants.data.adventure + '.' + adventureId;
	            for (var i = 0; i < keys.length; i++) {
	                if (keys[i].indexOf(this.constants.data.adventure) === 0 && keys[i].indexOf('paragraph.') !== -1) {
	                    var adventureIdInKey = keys[i].substring(0, keys[i].indexOf('.paragraph'));
	                    if (adventureIdInKey === keyAdventureId) {
	                        paragraphKeys.push(keys[i]);
	                    }
	                }
	            }
	            return paragraphKeys;
	        }
	    }, {
	        key: 'getParagraphPersistenceKey',
	        value: function getParagraphPersistenceKey(adventureId, paragraphNr) {
	            return this.getAdventurePersistenceKey(adventureId) + ".paragraph." + paragraphNr;
	        }
	    }, {
	        key: 'getAdventurePersistenceKey',
	        value: function getAdventurePersistenceKey(adventureId) {
	            var key = adventureId;
	            if (key.indexOf(this.constants.data.adventure + ".") !== 0) {
	                key = this.constants.data.adventure + "." + key;
	            }
	            return key;
	        }
	    }, {
	        key: 'exportAdventure',
	        value: function exportAdventure(adventureId) {
	            var adventure = this.getAdventure(adventureId);
	            if (!!adventure.stats) {
	                for (var i = 0; i < adventure.stats.length; i++) {
	                    delete adventure.stats[i]["$$hashKey"];
	                }
	            }
	            adventure.downloadUrl;
	            delete adventure.numberOfParagraphs;

	            adventure = this.sortObjectKeys(adventure);

	            var stats = adventure.stats;
	            delete adventure.stats;
	            var items = adventure.items;
	            delete adventure.items;
	            delete adventure.downloaded;

	            adventure.items = items;
	            adventure.stats = stats;
	            adventure.paragraphs = this.getParagraphs(adventureId);
	            return adventure;
	        }
	    }, {
	        key: 'getParagraphs',
	        value: function getParagraphs(adventureId) {
	            var paragraphs = [];

	            var keys = Object.keys(localStorage);
	            var adventureIdKeyPrefix = this.constants.data.adventure + '.' + adventureId;
	            for (var i = 0; i < keys.length; i++) {
	                if (keys[i].indexOf(adventureIdKeyPrefix + ".paragraph") === 0) {
	                    var currentAdventureIdPrefix = keys[i].substring(0, keys[i].indexOf('.paragraph'));
	                    if (currentAdventureIdPrefix === adventureIdKeyPrefix) {
	                        var paragraph = this.persistenceService.get(keys[i]);
	                        if (!!paragraph) {
	                            delete paragraph.version;
	                            delete paragraph.adventureId;
	                            if (!!paragraph.notes && paragraph.notes.length === 0) {
	                                delete paragraph.notes;
	                            }
	                            paragraphs.push(this.sortObjectKeys(paragraph));
	                        }
	                    }
	                }
	            }
	            paragraphs = this.sortParagraphs(paragraphs);
	            return paragraphs;
	        }
	    }, {
	        key: 'sortObjectKeys',
	        value: function sortObjectKeys(object) {
	            var result = void 0;
	            if (object == null) {
	                result = object;
	            } else if (Array.isArray(object)) {
	                result = [];
	                for (var i = 0; i < object.length; i++) {
	                    result.push(this.sortObjectKeys(object[i]));
	                }
	            } else if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
	                var keys = Object.keys(object);
	                if (!!keys && keys.length > 0) {
	                    keys = keys.sort();
	                    result = {};
	                    for (var _i = 0; _i < keys.length; _i++) {
	                        var value = object[keys[_i]];
	                        value = this.sortObjectKeys(value);
	                        result[keys[_i]] = value;
	                    }
	                } else {
	                    result = object;
	                }
	            } else {
	                result = object;
	            }
	            return result;
	        }
	    }, {
	        key: 'sortParagraphs',
	        value: function sortParagraphs(paragraphs) {
	            return paragraphs.sort(this.compareParagraph);
	        }
	    }, {
	        key: 'compareParagraph',
	        value: function compareParagraph(p1, p2) {
	            if (!p1 && !p2) {
	                return 0;
	            } else if (!p1) {
	                return 1;
	            } else if (!p2) {
	                return -1;
	            } else {
	                return p1.paragraphNr - p2.paragraphNr;
	            }
	        }
	    }]);

	    return AdventurePersistenceService;
	}();

	exports.default = AdventurePersistenceService;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _libraryPersistence = __webpack_require__(96);

	var _libraryPersistence2 = _interopRequireDefault(_libraryPersistence);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var libraryPersistenceModule = _angular2.default.module('app.components.services.persistence.library', []).service('libraryPersistenceService', _libraryPersistence2.default);

	exports.default = libraryPersistenceModule;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LibraryPersistenceService = function () {

	    /*@ngInject*/
	    function LibraryPersistenceService(remoteJsonRetrieverService, $q, adventurePersistenceService) {
	        _classCallCheck(this, LibraryPersistenceService);

	        this.remoteJsonRetrieverService = remoteJsonRetrieverService;
	        this.$q = $q;
	        this.adventurePersistenceService = adventurePersistenceService;
	    }

	    _createClass(LibraryPersistenceService, [{
	        key: 'downloadLibrary',
	        value: function downloadLibrary(url) {
	            var self = this;
	            var deferred = this.$q.defer();
	            var promise = this.remoteJsonRetrieverService.retrieveJson(url);
	            promise.then(function (json) {
	                self.adventurePersistenceService.updateDownloadableAdventures(json);
	                deferred.resolve('Success');
	            }, function (reason) {
	                deferred.reject(reason);
	            });
	            return deferred.promise;
	        }
	    }]);

	    return LibraryPersistenceService;
	}();

	exports.default = LibraryPersistenceService;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PersistenceService = function () {

	    /*@ngInject*/
	    function PersistenceService(messagesService) {
	        _classCallCheck(this, PersistenceService);

	        this.messagesService = messagesService;
	        this.checkLocalStorageSupported();
	    }

	    _createClass(PersistenceService, [{
	        key: 'checkLocalStorageSupported',
	        value: function checkLocalStorageSupported() {
	            this.isLocalStorageSupported = true;
	            if (!this.testLocalStorageSupported()) {
	                this.isLocalStorageSupported = false;
	                this.messagesService.errorMessage("The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.", true);
	            }
	        }
	    }, {
	        key: 'testLocalStorageSupported',
	        value: function testLocalStorageSupported() {
	            try {
	                var storage = window['localStorage'];
	                var x = '__storage_test__';
	                storage.setItem(x, x);
	                storage.removeItem(x);
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }
	    }, {
	        key: 'findKeysWithPrefix',
	        value: function findKeysWithPrefix(keyPrefix) {
	            if (!this.isLocalStorageSupported) {
	                return null;
	            }
	            var keys = Object.keys(localStorage);
	            var result = [];
	            for (var i = 0; i < keys.length; i++) {
	                if (keys[i].indexOf(keyPrefix) === 0) {
	                    result.push(keys[i]);
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            if (!this.isLocalStorageSupported) {
	                return null;
	            }
	            var value = localStorage.getItem(key);
	            if (value === null || value === "undefined" || value === undefined) {
	                return null;
	            } else {
	                try {
	                    return JSON.parse(value);
	                } catch (e) {
	                    // cannot be parsed, must be a string
	                    return value;
	                }
	            }
	        }
	    }, {
	        key: 'save',
	        value: function save(key, value) {
	            if (!this.isLocalStorageSupported) {
	                return;
	            }
	            if (typeof value === 'string') {
	                localStorage.setItem(key, value);
	            } else {
	                localStorage.setItem(key, JSON.stringify(value));
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            if (!this.isLocalStorageSupported) {
	                return;
	            }
	            localStorage.removeItem(key);
	        }
	    }, {
	        key: 'import',
	        value: function _import(importDataAsJson) {
	            if (!this.isLocalStorageSupported) {
	                return;
	            }
	            this.cleanAllData();
	            var importData = JSON.parse(importDataAsJson);
	            var keys = Object.keys(importData);
	            for (var i = 0; i < keys.length; i++) {
	                this.save(keys[i], importData[keys[i]]);
	            }
	        }
	    }, {
	        key: 'export',
	        value: function _export() {
	            return JSON.stringify(localStorage);
	        }
	    }, {
	        key: 'cleanAllData',
	        value: function cleanAllData() {
	            if (!this.isLocalStorageSupported) {
	                return;
	            }
	            localStorage.clear();
	        }
	    }, {
	        key: 'getUsedCapacity',
	        value: function getUsedCapacity() {
	            if (!this.isLocalStorageSupported) {
	                return 0;
	            }
	            return unescape(encodeURIComponent(JSON.stringify(localStorage))).length;
	        }
	    }, {
	        key: 'getRemainingCapacity',
	        value: function getRemainingCapacity() {
	            var b10 = "0123456789";
	            var b100 = this.repeat(b10, 10);
	            var b1000 = this.repeat(b100, 10);
	            var b10k = this.repeat(b1000, 10);
	            var b100k = this.repeat(b10k, 10);
	            var b1M = this.repeat(b100k, 10);
	            var buffers = [b1M, b100k, b10k, b1000, b100, b10];
	            for (var i = 0; i < buffers.length; i++) {
	                while (this.setLocalStorageWithoutError(buffers[i])) {}
	            }
	            var capacity = this.getUsedCapacity();
	            delete localStorage.test;
	            return capacity;
	        }
	    }, {
	        key: 'getUsedCapacityInPercent',
	        value: function getUsedCapacityInPercent() {
	            var usedCapacity = this.getUsedCapacity();
	            var remainingCapacity = this.getRemainingCapacity();
	            var available = usedCapacity + remainingCapacity;
	            return usedCapacity / available * 100;
	        }
	    }, {
	        key: 'setLocalStorageWithoutError',
	        value: function setLocalStorageWithoutError(value) {
	            try {
	                localStorage.test = localStorage.test + value;
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }
	    }, {
	        key: 'repeat',
	        value: function repeat(string, count) {
	            var array = [];
	            while (count--) {
	                array.push(string);
	            }
	            return array.join('');
	        }
	    }]);

	    return PersistenceService;
	}();

	exports.default = PersistenceService;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _mapPersistence = __webpack_require__(99);

	var _mapPersistence2 = _interopRequireDefault(_mapPersistence);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapPersistenceModule = _angular2.default.module('app.components.services.persistence.map', []).service('mapPersistenceService', _mapPersistence2.default);

	exports.default = mapPersistenceModule;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MapPersistenceService = function () {

	    /*@ngInject*/
	    function MapPersistenceService(adventurePersistenceService, gamePersistenceService) {
	        _classCallCheck(this, MapPersistenceService);

	        this.adventurePersistenceService = adventurePersistenceService;
	        this.gamePersistenceService = gamePersistenceService;
	        this.nodeSequence = 1;
	    }

	    _createClass(MapPersistenceService, [{
	        key: "getMap",
	        value: function getMap(adventureId, rootParagrahNr) {
	            var adventure = this.adventurePersistenceService.exportAdventure(adventureId);
	            var knownNodes = this.getKnownNodes(adventureId);
	            var root = this.createNodeRecursively(adventure.paragraphs, rootParagrahNr, [], knownNodes);

	            return root;
	        }
	    }, {
	        key: "getKnownNodes",
	        value: function getKnownNodes(adventureId) {
	            var games = this.gamePersistenceService.getGames(adventureId);
	            var knownNodes = [];
	            for (var i = 0; i < games.length; i++) {
	                var game = games[i];
	                for (var j = 0; j < game.path.length; j++) {
	                    knownNodes[game.path[j]] = true;
	                }
	            }
	            return knownNodes;
	        }
	    }, {
	        key: "findParagraph",
	        value: function findParagraph(paragraphs, paragraphNr) {
	            for (var i = 0; i < paragraphs.length; i++) {
	                if (paragraphNr == paragraphs[i].paragraphNr) {
	                    return paragraphs[i];
	                }
	            }
	            return null;
	        }
	    }, {
	        key: "createNodeRecursively",
	        value: function createNodeRecursively(paragraphs, paragraphNr, paragraphsMapId, knownNodes) {
	            var currentParagraph = this.findParagraph(paragraphs, paragraphNr);
	            if (!currentParagraph || !knownNodes[paragraphNr]) {
	                return this.createUnknownNode(paragraphNr);
	            } else {
	                var nodeLinkId = paragraphsMapId[currentParagraph.paragraphNr];
	                var node = void 0;
	                if (!!nodeLinkId) {
	                    node = this.createNodeLink(currentParagraph.paragraphNr, nodeLinkId);
	                } else {
	                    node = this.createNode(currentParagraph);
	                    paragraphsMapId[currentParagraph.paragraphNr] = node.id;
	                    var choices = this.adventurePersistenceService.getParagraphChoices(currentParagraph);
	                    if (!!choices) {
	                        node.children = [];
	                        for (var i = 0; i < choices.length; i++) {
	                            node.children.push(this.createNodeRecursively(paragraphs, choices[i], paragraphsMapId, knownNodes));
	                        }
	                    }
	                }
	                return node;
	            }
	        }
	    }, {
	        key: "createNode",
	        value: function createNode(paragraph) {
	            var node = {
	                id: this.newNodeId(),
	                name: paragraph.paragraphNr
	            };
	            if (!!paragraph.notes) {
	                node.notes = paragraph.notes;
	            }
	            if (!!paragraph.label) {
	                node.label = paragraph.label;
	            }
	            if (!!paragraph.tag) {
	                node.tag = paragraph.tag;
	            }
	            return node;
	        }
	    }, {
	        key: "createNodeLink",
	        value: function createNodeLink(paragraphNr, linkNodeId) {
	            var node = {
	                id: this.newNodeId(),
	                name: paragraphNr,
	                linkNodeId: linkNodeId
	            };
	            return node;
	        }
	    }, {
	        key: "createUnknownNode",
	        value: function createUnknownNode(paragraphNr) {
	            var node = {
	                id: this.newNodeId(),
	                name: paragraphNr,
	                unknown: true
	            };
	            return node;
	        }
	    }, {
	        key: "newNodeId",
	        value: function newNodeId() {
	            return this.nodeSequence++;
	        }
	    }]);

	    return MapPersistenceService;
	}();

	exports.default = MapPersistenceService;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _dices = __webpack_require__(101);

	var _dices2 = _interopRequireDefault(_dices);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dicesModule = _angular2.default.module('app.components.services.dices', []).service('dicesService', _dices2.default);

	exports.default = dicesModule;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DicesService = function () {

	    /*@ngInject*/
	    function DicesService() {
	        _classCallCheck(this, DicesService);
	    }

	    _createClass(DicesService, [{
	        key: "rollDices",
	        value: function rollDices(qty, minDiceValue, maxDiceValue) {
	            var dicesValue = 0;
	            for (var i = 0; i < qty; i++) {
	                dicesValue = dicesValue + this.randomIntInclusive(minDiceValue, maxDiceValue);
	            }
	            return dicesValue;
	        }
	    }, {
	        key: "randomIntInclusive",
	        value: function randomIntInclusive(min, max) {
	            return Math.floor(Math.random() * (max - min + 1)) + min;
	        }
	    }]);

	    return DicesService;
	}();

	exports.default = DicesService;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _formHelper = __webpack_require__(103);

	var _formHelper2 = _interopRequireDefault(_formHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formHelperModule = _angular2.default.module('app.components.services.form-helper', []).service('formHelperService', _formHelper2.default);

	exports.default = formHelperModule;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FormHelperService = function () {

	    /*@ngInject*/
	    function FormHelperService(messagesService) {
	        _classCallCheck(this, FormHelperService);

	        this.messagesService = messagesService;
	    }

	    _createClass(FormHelperService, [{
	        key: 'setErrorFieldsAsDirty',
	        value: function setErrorFieldsAsDirty(form, withMessage) {
	            if (form.$invalid) {
	                if (!!withMessage) {
	                    this.messagesService.errorMessage('Please complete mandatory fields', false);
	                }

	                // error "dirty" field will be hightlighted (see app.css)
	                angular.forEach(form.$error, function (type) {
	                    angular.forEach(type, function (field) {
	                        field.$setDirty();
	                    });
	                });
	            }
	        }
	    }]);

	    return FormHelperService;
	}();

	exports.default = FormHelperService;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _remoteJsonRetriever = __webpack_require__(105);

	var _remoteJsonRetriever2 = _interopRequireDefault(_remoteJsonRetriever);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var remoteJsonRetrieverModule = _angular2.default.module('app.components.services.remote-json-retriever', []).service('remoteJsonRetrieverService', _remoteJsonRetriever2.default);

	exports.default = remoteJsonRetrieverModule;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RemoteJsonRetrieverService = function () {

	    /*@ngInject*/
	    function RemoteJsonRetrieverService($http, $q) {
	        _classCallCheck(this, RemoteJsonRetrieverService);

	        this.$http = $http;
	        this.$q = $q;
	    }

	    _createClass(RemoteJsonRetrieverService, [{
	        key: 'retrieveJson',
	        value: function retrieveJson(jsonUrl) {
	            var deferred = this.$q.defer();
	            this.$http.get(jsonUrl).then(function successCallback(response) {
	                if (!!response && !!response.data) {
	                    deferred.resolve(response.data);
	                } else {
	                    deferred.reject('Cannot get data from ' + jsonUrl);
	                }
	            }, function errorCallback(response) {
	                deferred.reject('Cannot get data from ' + jsonUrl);
	            });
	            return deferred.promise;
	        }
	    }]);

	    return RemoteJsonRetrieverService;
	}();

	exports.default = RemoteJsonRetrieverService;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	var _languagePicker = __webpack_require__(107);

	var _languagePicker2 = _interopRequireDefault(_languagePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var languagePickerModule = _angular2.default.module('app.components.gui.components.language-picker', []).service('languagePickerService', _languagePicker2.default);

	exports.default = languagePickerModule;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LanguagePickerService = function () {

	    /*@ngInject*/
	    function LanguagePickerService(gamePersistenceService, $translate, constants) {
	        _classCallCheck(this, LanguagePickerService);

	        this.gamePersistenceService = gamePersistenceService;
	        this.$translate = $translate;
	        this.constants = constants;
	        this.supportedLanguages = this.initSupportedLanguages();
	    }

	    _createClass(LanguagePickerService, [{
	        key: "initSupportedLanguages",
	        value: function initSupportedLanguages() {
	            var supportedLanguages = [];
	            for (var i = 0; i < this.constants.supportedLanguages.length; i++) {
	                supportedLanguages.push({
	                    code: this.constants.supportedLanguages[i]
	                });
	            }
	            return supportedLanguages;
	        }
	    }, {
	        key: "getSupportedLanguages",
	        value: function getSupportedLanguages() {
	            return this.supportedLanguages;
	        }
	    }, {
	        key: "getSelectedLanguage",
	        value: function getSelectedLanguage() {
	            var selectedLanguage = this.gamePersistenceService.getSelectedLanguage();
	            if (!!selectedLanguage) {
	                return selectedLanguage;
	            } else if (!!navigator.language) {
	                var i = void 0;
	                for (i = 0; i < this.constants.supportedLanguages.length; i++) {
	                    if (this.constants.supportedLanguages[i] === navigator.language) {
	                        return this.constants.supportedLanguages[i];
	                    }
	                }

	                for (i = 0; i < this.constants.supportedLanguages.length; i++) {
	                    if (navigator.language.indexOf(this.constants.supportedLanguages[i]) === 0) {
	                        return this.constants.supportedLanguages[i];
	                    }
	                }
	            }
	            return this.constants.supportedLanguages[0];
	        }
	    }, {
	        key: "changeLanguage",
	        value: function changeLanguage(selectedLanguage) {
	            this.$translate.use(selectedLanguage);
	            this.gamePersistenceService.setSelectedLanguage(selectedLanguage);
	            for (var i = 0; i < this.supportedLanguages.length; i++) {
	                this.supportedLanguages[i].selected = this.supportedLanguages[i].code === selectedLanguage;
	            }
	        }
	    }]);

	    return LanguagePickerService;
	}();

	exports.default = LanguagePickerService;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var constantsModule = _angular2.default.module('app.components.constants', []).constant('constants', {
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
	        games: '/games',
	        gameDetail: '/{adventureId}/{paragraphNr}/game/{gameId}',
	        credits: '/credits',
	        adventureDetail: '/adventures',
	        libraryImport: '/library-import'
	    },
	    choices: {
	        yes: 'Yes',
	        no: 'No',
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
	        adventureAlreadyExist: 'error.adventureAlreadyExist',
	        missingMandatoryFields: 'error.missingMandatoryFields'
	    }
	});

	exports.default = constantsModule;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _app = __webpack_require__(110);

	var _app2 = _interopRequireDefault(_app);

	__webpack_require__(111);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appComponent = function appComponent() {
	    return {
	        template: _app2.default, restrict: 'E'
	    };
	};

	exports.default = appComponent;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports = "<div ui-view></div>"

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(112);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, ".ng-invalid.ng-dirty:required {\n    background-color: #ff9999 ! important;\n}\n\n.error {\n    color: #ff9999;\n}\n\n /* CSS - The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 30%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n    float: right;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n /* end of CSS of The Modal (background) */\n", ""]);

	// exports


/***/ })
]);
//# sourceMappingURL=bundle.js.map