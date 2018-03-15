/**
 * Initialise the functions to modify dom into the global variable "_.dom"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.dom = __.dom || {};
    var api = __.dom;

    /**
     * Append given html to a dom element
     */
    api.appendHtml = function(element, html) {
        var div = document.createElement('div');
        div.innerHTML = html;
        while (div.children.length > 0) {
            element.appendChild(div.children[0]);
        }
    };
	
    api.display = function(elementId) {
		var foundElement = document.getElementById(elementId);
		if (!!foundElement) {
			foundElement.classList.remove("hidden");
			return true;
		} else {
			return false;
		}
	};
	
    api.hide = function(elementId) {
		var foundElement = document.getElementById(elementId);
		if (!!foundElement) {
			foundElement.classList.add("hidden");
			return true;
		} else {
			return false;
		}
	};
	
    api.displayAllByCssSelector = function(cssSelector) {
		var foundElements = document.querySelectorAll(cssSelector);
		if (!!foundElements) {
			for (var i = 0; i < foundElements.length; i++) {
				foundElements[i].classList.remove("hidden");
			}
		}
	};
	
    api.hideAllByCssSelector = function(cssSelector) {
		var foundElements = document.querySelectorAll(cssSelector);
		if (!!foundElements) {
			for (var i = 0; i < foundElements.length; i++) {
				foundElements[i].classList.add("hidden");
			}
		}
	};
	
	api.setText = function(elementId, fr, en) {
		var titleElement = document.getElementById(elementId);
		if(!!titleElement) {
			titleElement.setAttribute('data-fr', fr);
			titleElement.setAttribute('data-en', en);
		}
	};
	
	api.setHrefOfScreen = function(elementId, screenId) {
		var linkElement  = document.getElementById(elementId);
		if(!!linkElement) {
			var url = __.route.getScreenUrl(screenId);
			linkElement.setAttribute('href', url);
		}
	};
	
} (this));