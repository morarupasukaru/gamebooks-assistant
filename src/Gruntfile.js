module.exports = function(grunt) {
    grunt.initConfig({
        target: '../target',

        // Clean temporary folders
        clean: {
            before: ['<%= target %>'],
            after: ['<%= target %>/html'],
            options: {
              force: true
            }
        },

        // Concat css files into a single minified css file
        cssmin: {
            options: {
                report: 'gzip'
            },
            target: {
                files: [{
                    expand: false,
                    src: [
                        'assets/icons/icomoon/style.css',
                        'assets/normalize/normalize.css',
                        'assets/pure/base.css',
                        'assets/pure/grids.css',
                        'assets/pure/grids-responsive.css',
                        'assets/skeleton/normalize.css',
                        'assets/skeleton/skeleton-grid.css',
                        'assets/skeleton/skeleton-base-styles.css',
                        'assets/skeleton/skeleton-typography.css',
                        'assets/skeleton/skeleton-links.css',
                        'assets/skeleton/skeleton-buttons.css',
                        'assets/skeleton/skeleton-forms.css',
                        'assets/skeleton/skeleton-code.css',
                        'assets/skeleton/skeleton-tables.css',
                        'assets/skeleton/skeleton-spacing.css',
                        'assets/skeleton/skeleton-utilities.css',
                        'css/trim-text.css',
                        'css/nowrap-text.css',
                        'css/anchor.css',
                        'css/footer.css',
                        'css/button.css',
                        'css/margins.css',
                        'css/radiobutton.css',
                        'css/muted-text.css',
                        'css/toggle-button.css',
                        'css/new-paragraph-choice.css',
                        'css/expanded-table.css',
                        'css/striped-table.css',
                        'css/list-table.css',
                        'css/right-aligned-text.css',
                        'css/textarea.css',
                        'css/splash.css',
                        'css/form.css',
                        'css/i18n.css',
                        'css/modal.css',
                        'html/**/*.css'
                    ],
                    dest: '<%= target %>/assets/style.css'
                }]
            }
        },

        // Validate non-minified and minified CSS
        csslint: {
          options: {
            csslintrc: '.csslintrc'
          },
          strict: {
            options: {
              import: 2
            },
            src: [
                'assets/icons/**/*.css',
                'assets/normalize/**/*.css',
                'assets/pure/**/*.css',
                'assets/skeleton/**/*.css',
                'css/**/*.css',
                'html/**/*.css',
                '<%= target %>/**/*.css'
            ]
          },
          lax: {
            options: {
              import: false
            },
            src: [
                'assets/icons/**/*.css',
                'assets/normalize/**/*.css',
                'assets/pure/**/*.css',
                'assets/skeleton/**/*.css',
                'css/**/*.css',
                'html/**/*.css',
                '<%= target %>/**/*.css'
            ]
          }
        },

        // Validate non-minified JS
        jshint: {
            files: ['js/**/*.js'],
            options: {
                jshintrc: true
            }
        },

        // Minify JS
        uglify: {
            options: {},
            my_target: {
              files: {
                '<%= target %>/assets/app.js': [
                    'js/**/core/polyfill.js',
                    'js/**/core/config.js',
                    'js/**/core/dom.js',
                    'js/**/core/message.js',
                    'js/**/core/data.js',
                    'js/**/core/ajax.js',
                    'js/**/core/internationalization.js',
                    'js/**/core/route.js',
                    'js/**/components/footer_language.js',
                    'js/**/screens/gamebooks.js',
                    'js/**/core/initialisation.js'
                ]
              }
            }
        },

        // Copy Assets into target
        copy: {
          main: {
            files: [
              // includes files within path
              { expand: true, flatten: true, src: ['assets/icons/icomoon/fonts/*'], dest: '<%= target %>/assets/fonts', filter: 'isFile'},

              { expand: true, flatten: true, src: ['assets/data/*.json'], dest: '<%= target %>/assets/data'},

              { expand: true, flatten: true, src: 'assets/favicon/favicon.ico', dest: '<%= target %>/'}
            ],
          },
        },

        // Replace some content into HTML files (e.g. css, script includes)
        processhtml: {
            target: {
              files: [
                {
                  expand: true,     // Enable dynamic expansion.
                  cwd: 'html/',      // Src matches are relative to this path.
                  src: ['**/*.html'], // Actual pattern(s) to match.
                  dest: '<%= target %>/',   // Destination path prefix.
                }
              ]
            }
        },

        // Minify html files from target directory
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                  expand: true,
                  cwd: '<%= target %>',
                  src: ['**/*.html'],
                  dest: '<%= target %>/'
              }]
            }
        },

        // Minify json files from target directory
        'json-minify': {
          build: {
            files: '<%= target %>/**/*.json'
          }
        },

        // Start a server to validate html files
        vnuserver: {
        },

        // Validate non-minified and minified html files
        htmllint: {
            all: {
              options: {
                // connect to a validator instance running in server mode on localhost:8888
                server: {},
                ignore: 'Empty heading.'
              },
              src: ['html/**/*.html', '<%= target %>/**/*.html']
            }
        },

        // Watch changes and project files and start the build process if required
        watch: {
            scripts: {
                files: ['assets/**/*.*', 'html/**/*.*', 'css/**/*.*', 'js/**/*'],
                tasks: ['buildPipeline'],
                options: {
                    livereload: true,
                    spawn: true
                },
            }
        },

        // Start a server from the target directory
        connect: {
          server: {
            options: {
              port: 9001,
              base: '../target',
              open: true
            }
          }
          // TODO start another instance with non-minified version
        }

        // Copy target into external folder (we deletion of content)
        // TODO

        // Separate target/non-minified & target/minified
        // TODO

        // Run front-end tests
        // TODO with target/non-minified www.cypress.io/
        // TODO with target/minified www.cypress.io/
        // TODO with github version
    }),
    grunt.loadNpmTasks('grunt-vnuserver');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-json-minify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['vnuserver', 'buildPipeline', 'connect', 'watch']);
    grunt.registerTask('buildPipeline', ['clean:before', 'cssmin', 'csslint:strict', 'jshint', 'uglify', 'copy', 'processhtml', 'htmlmin', 'json-minify', 'htmllint', 'clean:after']);
};
