var i;if(function(){"use strict";String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e})}(),function(e){"use strict";e._=e._||{},e._.config=e._.config||{};var t=e._.config;t.storageKeys={savedLanguage:"savedLanguage"},t.languages={default:"en",supported:["fr","en"]},t.texts={errorLocalstorageUnavailable:"error-localstorage-unavailable",modalTitlePrefix:"modal-title-",modalTitleError:"modal-title-error",fr:"Francais",en:"English"},t.translatedTexts={en:{},fr:{}},t.translatedTexts.en[t.texts.errorLocalstorageUnavailable]="LocalStorage is required by the application but is unavailable",t.translatedTexts.fr[t.texts.errorLocalstorageUnavailable]="LocalStorage est requis à l'application mais n'est pas disponible",t.translatedTexts.en[t.texts.modalTitleError]="ERROR",t.translatedTexts.fr[t.texts.modalTitleError]="ERREUR",t.translatedTexts.fr[t.texts.modalTitleError]="ERREUR"}(this),function(e){"use strict";e._=e._||{},e._.dom=e._.dom||{},e._.dom.appendHtml=function(e,t){var a=document.createElement("div");for(a.innerHTML=t;a.children.length>0;)e.appendChild(a.children[0])}}(this),function(e){"use strict";e._=e._||{},e._.msg=e._.msg||{};var t=e._.msg;t.ids={modal:"modal",title:"modalTitle",text:"modalText"},t.error=function(e){this._displayMessage("error",e)},t._displayMessage=function(e,t){var a=_.i18n.currentLanguage,n=_.config.translatedTexts[a][t];n||(n=t);var i=_.config.translatedTexts[a][_.config.texts.modalTitlePrefix+e];window.document.getElementById(this.ids.title).innerText=i,window.document.getElementById(this.ids.text).innerText=n,window.document.getElementById(this.ids.modal).style.display="block"},t.closeModal=function(){window.document.getElementById(this.ids.modal).style.display="none"},e.addEventListener&&e.addEventListener("error",function(e){_.msg.error(e.error.toString())})}(this),function(e){"use strict";e._=e._||{},e._.data=e._.data||{};var t=e._.data;t.get=function(e){if(this.lazyInitialisation(),!this.isLocalStorageAvailable)return null;var t=localStorage.getItem(e);if(null==t||"undefined"===t)return null;try{return JSON.parse(t)}catch(e){return t}},t.save=function(e,t){this.lazyInitialisation(),this.isLocalStorageAvailable&&("string"==typeof t?localStorage.setItem(e,t):localStorage.setItem(e,JSON.stringify(t)))};t.lazyInitialisation=function(){void 0===this.isLocalStorageAvailable&&(this.isLocalStorageAvailable=function(){try{var e=window.localStorage,t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(e){return!1}}())},t.initialize=function(){if(this.lazyInitialisation(),!this.isLocalStorageAvailable)throw _.config.texts.errorLocalstorageUnavailable}}(this),function(e){"use strict";e._=e._||{},e._.ajax=e._.ajax||{},e._.ajax.loadJson=function(e,t){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText);t(e)}},a.open("GET",e,!0),a.send()}}(this),function(e){"use strict";e._=e._||{},e._.i18n=e._.i18n||{};var t=e._.i18n;t.setLanguage=function(e){if(this.currentLanguage!==e){this.currentLanguage=e,_.data.save(_.config.storageKeys.savedLanguage,e),document.getElementsByTagName("html")[0].lang=e,document.getElementById("link_"+e).classList.add("hidden");for(var t=0;t<_.config.languages.supported.length;t++)e!==_.config.languages.supported[t]&&document.getElementById("link_"+_.config.languages.supported[t]).classList.remove("hidden");this._forceReloadStylesheetIfNeeded(e)}},t._forceReloadStylesheetIfNeeded=function(e){var t=document.getElementById("test-i18n"),a=window.getComputedStyle(t,":before").getPropertyValue("content");a&&a==='"'+e+'"'||this._forceReloadStylesheet(e)},t._forceReloadStylesheet=function(e){var t="forceReloadStylesheets",a=document.getElementById(t),n=t+".css?"+e;a?a.href=n:_.dom.appendHtml(document.getElementsByTagName("head")[0],'<link id="'+t+'" rel="stylesheet" href="'+n+'">')},t.initialize=function(){if(!_.config)throw"config is unavailable";if(!_.data)throw"data is unavailable";var e=_.data.get(_.config.storageKeys.savedLanguage);if(e)this.setLanguage(e);else{for(var t,a=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,n=0;n<_.config.languages.supported.length;n++){var i=_.config.languages.supported[n];if(a===i||a.startsWith(i+"-")){t=i;break}}t||(t=this.defaultLanguage),this.setLanguage(t)}}}(this),function(e,t){"use strict";for(var a=function(e,t){var a=document.getElementById("footer_language"),n=document.createElement("a");n.setAttribute("href","#"),n.setAttribute("id","link_"+e),n.setAttribute("hreflang",e),n.setAttribute("onClick","_.i18n.setLanguage('"+e+"');"),n.innerHTML='<span class="icon icon-globe"></span><span class="spanLang">&nbsp;'+t+"&nbsp;</span>";var i=a.firstChild;a.insertBefore(n,i)},n=e._.config.languages.supported,i=0;i<n.length;i++)a(n[i],e._.config.texts[n[i]])}(this),function(e,t){"use strict";var a=function(e,t){var a,n,i,s,o;if(t&&t.gamebooks)for(a=e,n=t.name,_.dom.appendHtml(document.getElementById(a),'<div class="pure-u-1"><h2>'+n+"</h2></div>"),i=0;i<t.gamebooks.length;i++)s=e,(o=t.gamebooks[i])&&_.dom.appendHtml(document.getElementById(s),'<div class="pure-u-1 pure-u-lg-1-3"><div class="margin-right"><a class="button u-full-width" href="../gamebook">'+o.name+"</a></div></div>")};e._=e._||{},e._.screens=e._.screens||[],e._.screens.push(function(){if(document.getElementById(t)){e._.ajax.loadJson("http://morarupasukaru.github.io/gamebooks-assistant/assets/data/library.json",function(e){!function(e){var n;for(n=0;n<e.length;n++)a(t,e[n])}(e)});var n=!1;e.location&&e.location.search&&(n=-1!==e.location.search.indexOf("admin")),n||document.getElementById("screen.gamebooks.admin").classList.add("hidden")}})}(this,"screen.gamebooks.title.choose-adventure"),_.i18n.initialize(),_.data.initialize(),_.screens)for(i=0;i<_.screens.length;i++)_.screens[i]();