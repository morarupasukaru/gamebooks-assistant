module.exports = function(grunt) {
    grunt.initConfig({
        src: 'src',
        target: 'target',
        targetNonMinified: '<%= target %>/nonMinified',
        targetMinified: '<%= target %>/minified',
        distrib: '../gamebooks-assistant-distrib',

        // Clean temporary folders
        clean: {
            before: ['<%= target %>', '<%= distrib %>/*'],
            after: ['<%= targetMinified %>/html'],
            options: {
              force: true
            }
        },
        
        /////////////////////////////////////////////////////////////////
        // Copy non-minified files into target
        /////////////////////////////////////////////////////////////////
        
        // Copy Assets into target
        copy: {
          main: {
            files: [
              { expand: true, flatten: true, src: ['<%= src %>/css/*.css'], dest: '<%= targetNonMinified %>/css'},
              { expand: true, cwd: '<%= src %>/assets/', src: ['**'], dest: '<%= targetNonMinified %>/assets'},
              { expand: true, cwd: '<%= src %>/js/', src: ['**'], dest: '<%= targetNonMinified %>/js'},
              { expand: true, flatten: true, src: '<%= src %>/assets/favicon/*.*', dest: '<%= targetNonMinified %>/'},
              
              { expand: true, flatten: true, src: ['<%= src %>/assets/icons/icomoon/fonts/*'], dest: '<%= targetMinified %>/assets/fonts', filter: 'isFile'},
              { expand: true, flatten: true, src: ['<%= src %>/assets/data/*.json'], dest: '<%= targetMinified %>/assets/data'},
              { expand: true, flatten: true, src: '<%= src %>/assets/favicon/*.*', dest: '<%= targetMinified %>/'}
            ],
          },
          distrib: {
            files: [
              { expand: true, cwd: '<%= targetMinified %>', src: ['**'], dest: '<%= distrib %>'}
            ],
		  }
        },

        
        /////////////////////////////////////////////////////////////////
        // Minification
        /////////////////////////////////////////////////////////////////

        // Concat css files into a single minified css file
        cssmin: {
            options: {
                report: 'gzip'
            },
            target: {
                files: [{
                    expand: false,
                    src: [
                        '<%= src %>/assets/icons/icomoon/style.css',
                        '<%= src %>/assets/normalize/normalize.css',
                        '<%= src %>/assets/pure/base.css',
                        '<%= src %>/assets/pure/grids.css',
                        '<%= src %>/assets/pure/grids-responsive.css',
                        '<%= src %>/assets/skeleton/normalize.css',
                        '<%= src %>/assets/skeleton/skeleton-grid.css',
                        '<%= src %>/assets/skeleton/skeleton-base-styles.css',
                        '<%= src %>/assets/skeleton/skeleton-typography.css',
                        '<%= src %>/assets/skeleton/skeleton-links.css',
                        '<%= src %>/assets/skeleton/skeleton-buttons.css',
                        '<%= src %>/assets/skeleton/skeleton-forms.css',
                        '<%= src %>/assets/skeleton/skeleton-code.css',
                        '<%= src %>/assets/skeleton/skeleton-tables.css',
                        '<%= src %>/assets/skeleton/skeleton-spacing.css',
                        '<%= src %>/assets/skeleton/skeleton-utilities.css',
                        '<%= src %>/css/version.css',
                        '<%= src %>/css/trim-text.css',
                        '<%= src %>/css/nowrap-text.css',
                        '<%= src %>/css/anchor.css',
                        '<%= src %>/css/footer.css',
                        '<%= src %>/css/button.css',
                        '<%= src %>/css/margins.css',
                        '<%= src %>/css/radiobutton.css',
                        '<%= src %>/css/muted-text.css',
                        '<%= src %>/css/toggle-button.css',
                        '<%= src %>/css/new-paragraph-choice.css',
                        '<%= src %>/css/expanded-table.css',
                        '<%= src %>/css/striped-table.css',
                        '<%= src %>/css/list-table.css',
                        '<%= src %>/css/right-aligned-text.css',
                        '<%= src %>/css/textarea.css',
                        '<%= src %>/css/splash.css',
                        '<%= src %>/css/form.css',
                        '<%= src %>/css/i18n.css',
                        '<%= src %>/css/modal.css',
                        '<%= src %>/css/bigtop-margin.css',
                        '<%= src %>/html/**/*.css'
                    ],
                    dest: '<%= targetMinified %>/assets/style.css'
                }]
            }
        },
        
        // Minify JS
        uglify: {
            options: {},
            my_target: {
              files: {
                '<%= targetMinified %>/assets/app.js': [
                    '<%= src %>/js/**/core/polyfill.js',
                    '<%= src %>/js/**/core/dom.js',
                    '<%= src %>/js/**/core/message.js',
                    '<%= src %>/js/**/core/data.js',
                    '<%= src %>/js/**/core/ajax.js',
                    '<%= src %>/js/**/core/internationalization.js',
                    '<%= src %>/js/**/components/footer_language.js',
                    '<%= src %>/js/**/screens/homepage.js',
                    '<%= src %>/js/**/screens/debug.js',
                    '<%= src %>/js/**/screens/pageNotFound.js',
                    '<%= src %>/js/**/screens/applicationData.js',
                    '<%= src %>/js/**/screens/gamebook.js',
                    '<%= src %>/js/**/screens/gamebooks.js',
                    '<%= src %>/js/**/screens/newGamebook.js',
                    '<%= src %>/js/**/core/route.js',
                    '<%= src %>/js/**/core/form.js',
                    '<%= src %>/js/**/core/initialisation.js'
                ]
              }
            }
        },

        // Replace some content into HTML files (e.g. css, script includes)
        processhtml: {
            target: {
              files: [
                {
                  expand: true,     // Enable dynamic expansion.
                  cwd: '<%= src %>/html/',      // Src matches are relative to this path.
                  src: ['**/*.html'], // Actual pattern(s) to match.
                  dest: '<%= targetNonMinified %>/',   // Destination path prefix.
                }
              ]
            },
            dist: {
              files: [
                {
                  expand: true,     // Enable dynamic expansion.
                  cwd: '<%= src %>/html/',      // Src matches are relative to this path.
                  src: ['**/*.html'], // Actual pattern(s) to match.
                  dest: '<%= targetMinified %>/',   // Destination path prefix.
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
                  cwd: '<%= targetMinified %>',
                  src: ['**/*.html'],
                  dest: '<%= targetMinified %>/'
              }]
            }
        },

        // Minify json files from target directory
        'json-minify': {
          build: {
            files: '<%= targetMinified %>/**/*.json'
          }
        },

        
        /////////////////////////////////////////////////////////////////
        // Validation
        /////////////////////////////////////////////////////////////////

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
                '<%= src %>/assets/icons/**/*.css',
                '<%= src %>/assets/normalize/**/*.css',
                '<%= src %>/assets/pure/**/*.css',
                '<%= src %>/assets/skeleton/**/*.css',
                '<%= src %>/css/**/*.css',
                '<%= src %>/html/**/*.css',
                '<%= targetMinified %>/**/*.css'
            ]
          },
          lax: {
            options: {
              import: false
            },
            src: [
                '<%= src %>/assets/icons/**/*.css',
                '<%= src %>/assets/normalize/**/*.css',
                '<%= src %>/assets/pure/**/*.css',
                '<%= src %>/assets/skeleton/**/*.css',
                '<%= src %>/css/**/*.css',
                '<%= src %>/html/**/*.css',
                '<%= targetMinified %>/**/*.css'
            ]
          }
        },

        // Validate non-minified JS
        jshint: {
            files: ['<%= src %>/js/**/*.js'],
            options: {
                jshintrc: true
            }
			
			// TODO validate cypress js with a different .jshintrc
        },

        
        /////////////////////////////////////////////////////////////////
        // Serving
        /////////////////////////////////////////////////////////////////

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
              src: ['<%= targetNonMinified %>/**/*.html', '<%= targetMinified %>/**/*.html']
            }
        },

        // Watch changes and project files and start the build process if required
        watch: {
            scripts: {
                files: ['<%= src %>/assets/**/*.*', '<%= src %>/html/**/*.*', '<%= src %>/css/**/*.*', '<%= src %>/js/**/*'],
                tasks: ['buildPipeline'],
                options: {
                    livereload: true,
                    spawn: true
                },
            }
        },

        // Start a server from the target directory
        connect: {
          siteNonMinified: {
            options: {
              port: 9000,
              base: '<%= targetNonMinified %>',
              open: true
            }
          },
          siteMinified: {
            options: {
              port: 9001,
              base: '<%= targetMinified %>',
              open: true
            }
          }
        },
        
        run: {
			options: {
				wait: false
			},
			cypress: {
			  exec: 'npm run cypress:open'
			}
		}
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
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('default', ['vnuserver', 'buildPipeline', 'connect', 'run', 'watch']);
    grunt.registerTask('buildPipeline', ['clean:before', 'cssmin', 'csslint:strict', 'jshint', 'uglify', 'copy', 'processhtml', 'htmlmin', 'json-minify', 'htmllint', 'copy:distrib', 'clean:after']);
};
