/**
 * Helper functions for dom manipulation (global document must not be called outside this api).
 */
(function(globals){
	// depends on data, route < TODO reduce to no dependencies
    "use strict";
	globals.gamebooksAssistant = globals.gamebooksAssistant || {};
	globals.gamebooksAssistant.webapi = globals.gamebooksAssistant.webapi || {};
	globals.gamebooksAssistant.webapi.dom = globals.gamebooksAssistant.webapi.dom || {};
	var api = globals.gamebooksAssistant.webapi.dom;
	var dom = globals.document;
	
	// ------------------------------------------------------------
	// publics methods
	// ------------------------------------------------------------
	
    /**
     * Append given {html} to a dom {element}.
     */
    api.appendHtml = function(element, html) {
		return api.initialisation('appendHtml', element, html);
	};
	
	
	// ------------------------------------------------------------
	// implementation
	// ------------------------------------------------------------
	
	api.initialisation = function(calledFunctionName, parameters) {
		api.appendHtml = function(element, html) {
			var div = dom.createElement('div');
			div.innerHTML = html;
			while (div.children.length > 0) {
				element.appendChild(div.children[0]);
			}
		};
		
		return api[calledFunctionName](parameters);
	};
	
} (this));