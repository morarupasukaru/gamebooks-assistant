# Mobile Version development

## Requirement of minimal mobile version
* must work on an android mobile
* nice google material design
* as few user-interaction as possible (click & input)
* able to replay an adventure with some reusable data of previous play (map, notes, etc.)
* able to use same json (library, adventure, game) files as desktop version
* javascript included with script html tag (no node.js) 

## Excluded from minimal mobile version
* assets downloaded from external resources
* no offline modus
* as few as javascript possible
* no i18n (only english)
* no framework (and no jquery)
* no spa
* no adventure edit modus (with text), only paragraph jump
* no build system (no gulp, grunt)
* no share of javascript between desktop & mobile version (but keep an eye on this while developing)

## Mobile version planning
* Nice minimal homepage to select desktop or mobile version
* Static Mobile screens designed with google web components
* Test the ux with a static pages demo (copy-paste same screens with different url)
* Add dynamic functionalities with javascript (always non-spa => static url with parameters)
* Test the playability with concrete gamebooks: the book in an hand the smartphone in the other hand