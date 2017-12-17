/**
 * polyfill : String.prototype.startsWith()
 * see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/startsWith
 */
// jshint freeze:false
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        "use strict";
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}
// jshint freeze:true
