module.exports = function(grunt) {
    grunt.initConfig({
        // Clean temporary folders
        clean: {
            before: ['target'],
            after: ['target/screens']
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
                        'style/trim-text.css',
                        'style/nowrap-text.css',
                        'style/anchor.css',
                        'style/footer.css',
                        'style/button.css',
                        'style/margins.css',
                        'style/radiobutton.css',
                        'style/muted-text.css',
                        'style/toggle-button.css',
                        'style/new-paragraph-choice.css',
                        'style/expanded-table.css',
                        'style/striped-table.css',
                        'style/list-table.css',
                        'style/right-aligned-text.css',
                        'style/textarea.css',
                        'style/splash.css',
                        'style/form.css',
                        'screens/**/*.css'
                    ],
                    dest: 'target/assets/styles.css'
                }]
            }
        },

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
                'style/**/*.css',
                'screens/**/*.css',
                'target/**/*.css'
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
                'style/**/*.css',
                'screens/**/*.css',
                'target/**/*.css'
            ]
          }
        },
        copy: {
          main: {
            files: [
              // includes files within path
              {expand: true, flatten: true, src: ['assets/icons/icomoon/fonts/*'], dest: 'target/assets/fonts', filter: 'isFile'}
            ],
          },
        },
        processhtml: {
            target: {
              files: [
                {
                  expand: true,     // Enable dynamic expansion.
                  cwd: 'screens/',      // Src matches are relative to this path.
                  src: ['**/*.html'], // Actual pattern(s) to match.
                  dest: 'target/',   // Destination path prefix.
                }
              ]
            }
        },
        vnuserver: {
        },
        htmllint: {
            all: {
              options: {
                // connect to a validator instance running in server mode on localhost:8888
                server: {}
              },
              src: ['screens/**/*.html', 'target/**/*.html']
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                  expand: true,
                  cwd: 'target',
                  src: ['**/*.html'],
                  dest: 'target/'
              }]
            }
        },
        watch: {
            scripts: {
                files: ['assets/**/*.*', 'screens/**/*.*', 'style/**/*.*'],
                tasks: ['buildPipeline'],
                options: {
                    livereload: true,
                    spawn: true
                },
            }
        }
    }),
    grunt.loadNpmTasks('grunt-vnuserver');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['vnuserver', 'buildPipeline', 'watch']);
    grunt.registerTask('buildPipeline', ['clean:before', 'cssmin', 'csslint:strict', 'copy', 'processhtml', 'htmlmin', 'htmllint', 'clean:after']);
};