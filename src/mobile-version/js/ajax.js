/**
 * Initialise the functions to load asynchronous data into the global variable "_.ajax"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.ajax = globals._.ajax || {};

    var api = globals._.ajax;

    api.loadJson = function(jsonUrl, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                callback(json);
            }
        };
        xmlhttp.open("GET", jsonUrl, true);
        xmlhttp.send();
    };
} (this));


