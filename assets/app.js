!function(e){"use strict";e._=e._||{},e._.i18n=e._.i18n||{};var t=e._.i18n;t.setLanguage=function(e){var t=$("html").attr("lang");t||(t="en"),t!==e&&($("html").attr("lang",e),$("#link_"+t).toggleClass("hidden"),$("#link_"+e).toggleClass("hidden"),this._forceReloadStylesheetIfNeeded(e))},t._forceReloadStylesheetIfNeeded=function(e){var t=$("#test-i18n")[0],n=window.getComputedStyle(t,":before").getPropertyValue("content");n&&n==='"'+e+'"'||this.forceReloadStylesheet(e)},t._forceReloadStylesheet=function(e){var t="forceReloadStylesheets",n=$("#"+t),a='<link id="'+t+'" rel="stylesheet" href="'+t+".css?"+e+'">';!!n.length?n.replaceWith(a):$("head").append(a)}}(this),$(function(){"use strict";var e=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage;"fr"===e||e.startsWith("fr-")?_.i18n.setLanguage("fr"):("en"===e||e.startsWith("en-"))&&_.i18n.setLanguage("en")}),String.prototype.startsWith||(String.prototype.startsWith=function(e,t){"use strict";return t=t||0,this.substr(t,e.length)===e});