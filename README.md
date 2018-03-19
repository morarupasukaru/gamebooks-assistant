# Gamebooks Assistant

[Gamebooks Assistant](http://morarupasukaru.github.io/gamebooks-assistant/) is web-application to ease the  resolution of [gamebooks](https://en.wikipedia.org/wiki/Gamebook).

The motivation of this "private" project is to help me to learn how-to to develop a professional responsive-design single page application in plain javascript and with as few tools as possible.

The "Business" goal is to be able to play a gamebook with a book in a hand and a smartphone in the other hand.


### Installation

Several quick start options are available:

- Clone the repo: `git clone https://github.com/morarupasukaru/gamebooks-assistant.git`
- Install [node.js](https://nodejs.org) with [npm](https://www.npmjs.com/), see https://nodejs.org
- Install a Java 8 JDK that is required to run the HTML validation locally
- Install [Grunt](https://gruntjs.com/)'s command line interface (CLI): npm install -g grunt-cli
```bash
npm install -g grunt-cli
```
- Install Project dependency
```bash
cd ...\gamebooks-assistant\src
npm install
```
- Start the applications' build
```bash
cd ...\gamebooks-assistant\src
grunt
```
- A not-minified version of the application will be available at http://localhost:9000/ 
- ... and a minified version at http://localhost:9001/


### Documentation

- [Development design choices](DESIGN.md).


### Project History

See the [HISTORY](HISTORY.md).


### Credits

- [Ravenmore's image](//opengameart.org/content/fantasy-icon-pack-by-ravenmore-0) used for the favicon
- [realfavicongenerator](https://realfavicongenerator.net/) for the favicon generation
- [fontawesome](http://fontawesome.io) for used icons.
- [icomoon](https://icomoon.io/) for conversions of icons as css fonts.
- [normalize.css](https://necolas.github.io/normalize.css/) used to reset CSS
- [pure.css](https://purecss.io/) used for its responsive css grids
- [Skeleton](http://getskeleton.com/) used for the look-and-feel of the application
- [Cypress](https://www.cypress.io/) used for the front-end tests
- [pure.css marketing layout](https://purecss.io/layouts/marketing/) for the "splash" solution used in the homepage screen
- [Article of Smashingmagazine](https://www.smashingmagazine.com/2014/06/css-driven-internationalization-in-javascript/) for the solution of CSS internationalization
- [PlainJS](https://plainjs.com/javascript/) for code snippets
- [W3schools](https://www.w3schools.com/) for code snippets
- [Grunt](https://gruntjs.com/) and various pluggins used for the applications build, see [package.json](/src/package.json)
- [GitHub](https://github.com/) for the great tools available and the repository


### License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/morarupasukaru/gamebooks-assistant/blob/master/LICENSE.md)

This project is licensed under the terms of the [MIT license](/LICENSE.md).