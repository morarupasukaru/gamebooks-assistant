// TODO move to \webapi\dom.js
/**
 * Initialise the functions to modify dom into the global variable "_.dom"
 */
(function(globals){
	// depends on data, route
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
//	__.webapi = __.webapi || {};
//	__.webapi.dom = __.webapi.dom || {};
//    var api = __.webapi.dom;

	__.dom = __.dom || {};
    var api = __.dom;
	
	// publics methods
	
    /**
     * Append given html to a dom element
     */
    api.appendHtml = function(element, html) {
		debugger;
		return api.initialisation('appendHtml', element, html);
	};
	
	
	// implementation
	
	api.initialisation = function(calledFunctionName, parameters) {
		api.appendHtml = function(element, html) {
		debugger;
			var div = document.createElement('div');
			div.innerHTML = html;
			while (div.children.length > 0) {
				element.appendChild(div.children[0]);
			}
		};
		
		return api[calledFunctionName](parameters);
	};

    api.removeCssClass = function(elementId, cssClass) {
		var foundElement = document.getElementById(elementId);
		if (!!foundElement) {
			foundElement.classList.remove(cssClass);
			return true;
		} else {
			return false;
		}
	};
	
    api.display = function(elementId) {
		return api.removeCssClass(elementId, "hidden");
	};
	
    api.addCssClass = function(elementId, cssClass) {
		var foundElement = document.getElementById(elementId);
		if (!!foundElement) {
			foundElement.classList.add(cssClass);
			return true;
		} else {
			return false;
		}
	};
	
    api.hide = function(elementId) {
		return api.addCssClass(elementId, "hidden");
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
	
	api.setPlaceholderText = function(elementId, fr, en) {
		var inputElement = document.getElementById(elementId);
		if (__.data.getLanguage() === 'fr') {
			inputElement.setAttribute("placeholder", fr);
		} else {
			inputElement.setAttribute("placeholder", en);
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