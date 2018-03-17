# Mobile Version development

## Requirement of minimal mobile version
* nice minimalist layout
* playability: require only one hand (the other hand has the book)
* as few lib, tool as possible
* no framework

## Technical aspects
* autosave (when)
* add choice in description while jumping and remove choice if undo the "jump"
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
* map screen
* image (localstorage? online?)

## Improvment features

### Popup warn: JS disabled, unavailable

display a popup or a special screen if js is not available.

### Popup warn: unsupported browser

display a popup or a special screen if current browser is not supported (e.g. ie version < x)

### i18n

i18n text must be provided in json
available languages are defined in in the i18n json file (not hard-coded as currently)
data-xx must be set a the application initialization.

### html form validation

generic solution for form validations.

See why required attribute does not work in some browser (safari of ipad v?)

### Version of html, js, css

Allow a way to add a version (automatic generated?) in the build process into html, js, css (minified version).
It can be used for error analysis (version will be commited in distrib)

e.g.
/* gamebooks-assistant, version .... */


### Javascript errors > Popup to inform developper by emails

Try to catch javascript errors (actual solution for errors does not work in safari of ipad v?) and allow user to send a report to a given email
with several technical info (browser version, language, localStorage, javascript error, apps version)

=> this functionnality can be disabled in the email of the developper is not given

### Errors

Errors does not work in Safari ipad (version ?).

See an altenative with i18n integration.


### Configuration & Customization

improve the configuration in order to ease the customization of the apps (e.g. someone else make a fork and install the apps somewhere else)

=> write a CUSTOMIZATION.md file


### html id convention

decide a convention for the id in the various screen. Goal is to avoid id dupplication and to long id.

id will be used also for i18n, it's better to haved a suffix .id in order to diffenciate text of html elements to other type of i18n text (placeholder, error, ...)

=> Describe that in TECHNICAL.md & apply that on existing screens (make a list of the id of all screens)


### Data

The goal is to provide a way to load data as json from a given url and stores them in the localStorage.
The data must have a version in order to reload / merge data in the localStorage correctly.
The data can be modified by the user (add of a gamebook, edition of a gamebook) => merge problem to analyse

reducation of data-loaded
* store url of json in the localStorage, while initialising the apps, the "data" api try to reload the json of given url
* see how to avoid to reload data if the url in the app does not change  (?version in url e.g.)

localStorage "cached"
* make some test to decide wether the localStorage should be cached or not (make a simple github page and test it with several browser)

### JSON of application

See a solution to create a minified json data "data.json" by merging several json files (e.g. i18n.json, gamebooks.json, config.json, etc.)

Structure of final json should be something like (but minified) :

{
	version: ... <- version how to modify the version only if some data has changed
	data : [ <- json files are inserted as entry of data
		{
			key: ... <- key of localStorage
			value: {
				version: <- version of given json file
				data: <- data to be stored in localStorage
			}
		}
	]
}
