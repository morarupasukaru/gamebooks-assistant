/**
 * Initialise the functions to modify dom into the global variable "_.dom"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.dom = globals._.dom || {};

    var api = globals._.dom;
    api.appendHtml = function(element, html) {
        var div = document.createElement('div');
        div.innerHTML = html;
        while (div.children.length > 0) {
            element.appendChild(div.children[0]);
        }
    };
} (this));