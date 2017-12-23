# Mobile Version development

later
* add i18n to all text (placeholder?)
* json minify
* json validation
* include css, json, js, html inside one html page > grunt-processhtml

## Requirement of minimal mobile version
* nice minimalist layout
* playability: require only one hand (the other hand has the book)
* as few lib, tool as possible
* no framework

## Technical aspects
* other assets as bundle?
* autosave (when)
* html template
* single vanilly-js (unique id)
* html validator
* js validator
* detect unsupported js feature (e.g. for safari)
* add choice in description while jumping and remove choice if undo the "jump"
* i18n of static user-interface (available with core app data)
* i18n of dynamic user-interface, gamebook content (available in gamebook data), include "placeholder"
* css animation when changing screen
* css loading animation when loading adventure data
* autodata deletion if localstorage too small
* gamebook-id : uuid (non editable)
* Copyrights in Git Projekt readme
    pure css
    skeleton
    normalize
    pureicons (and google material)
    google font
    grunts, ...
    npm
    node
    
## Non-available with fist version:
* import, export données (dispo en admin, via texte à copier-coller)
* map screen
* offline modus
* spa
* image (localstorage? online?)

## Non-available at al:
* share localstorage data with angular-js version
* share of javascript with angular-js version (no node module)
