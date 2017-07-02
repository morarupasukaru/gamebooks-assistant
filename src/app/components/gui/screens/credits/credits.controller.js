class CreditsController {
    /*@ngInject*/
    constructor() {
        let credits = [
            {
                resourceName : 'JavaScript',
                author: 'Brendan Eich',
                url: 'https://en.wikipedia.org/wiki/JavaScript',
                description: 'credit_description_javascript'
            },
            {
                resourceName : 'Image',
                author: 'Ravenmore',
                url: '//opengameart.org/content/fantasy-icon-pack-by-ravenmore-0',
                description: 'credit_description_map_image'
            },
            {
                resourceName : 'ESTA Web/JS',
                author: 'Schweizerische Bundesbahnen',
                url: 'https://github.com/SchweizerischeBundesbahnen/esta-webjs',
                description: 'credit_description_estawebjs'
            },

            {
                resourceName : 'AngularJS1',
                author: 'Google',
                url: 'https://angularjs.org/',
                description: 'credit_description_angularjs'
            },
            {
                resourceName : 'Angular Material',
                author: 'Google',
                url: 'https://material.angularjs.org/latest/',
                description: 'credit_description_angularmaterial'
            },
            {
                resourceName : 'Webpack',
                url: 'https://webpack.github.io/docs/',
                description: 'credit_description_webpack'
            },
            {
                resourceName : 'Gulp',
                url: 'http://gulpjs.com/',
                description: 'credit_description_gulp'
            },
            {
                resourceName : 'npm',
                url: 'https://www.npmjs.com/',
                description: 'credit_description_npm'
            },
            {
                resourceName : 'node.js',
                url: 'https://nodejs.org/en/',
                description: 'credit_description_nodejs'
            },
            {
                resourceName : 'Browsersync',
                url: 'https://www.browsersync.io/',
                description: 'credit_description_browsersync'
            },
            {
                resourceName : 'angular translate',
                url: 'https://github.com/angular-translate/angular-translate',
                description: 'credit_description_angular-translate'
            },
            {
                resourceName : 'AngularUI Router',
                url: 'https://github.com/angular-ui/ui-router',
                description: 'credit_description_angular-ui-router'
            },
            {
                resourceName : 'Babel',
                url: 'https://babeljs.io/',
                description: 'credit_description_babel'
            },
            {
                resourceName : 'RealFaviconGenerator',
                url: 'https://realfavicongenerator.net/',
                description: 'credit_description_realfavicongenerator'
            },
            {
                resourceName : 'GitHub',
                url: 'https://github.com/',
                description: 'credit_description_github'
            },
            {
                resourceName : 'Responsive Navigation Patterns',
                author: 'Brad Frost',
                url: 'http://bradfrost.com/blog/web/responsive-nav-patterns/',
                description: 'credit_description_article_responsive_navigation_patterns'
            }
        ];
        this.credits = this.sort(credits);
    }

    sort(credits) {
        return credits.sort(this.compareCredit);
    }

    compareCredit(o1, o2) {
        if (!o1 && !o2) {
            return 0;
        } else if (!o1) {
            return 1;
        } else if (!o2) {
            return -1;
        } else {
            return o1.resourceName.localeCompare(o2.resourceName);
        }
    }
}

export default CreditsController;