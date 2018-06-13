/**
 * Initialise general application keys
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.config = __.config || {};
    var api = __.config;

    api.languages = {
		// TODO this variable will be removed as soon as i18n will be retrieved in external json file
        default : 'en',
        supported : ['fr', 'en']
    };

    api.texts = {
        fr : 'Francais',
        en : 'English'
    };
} (this));