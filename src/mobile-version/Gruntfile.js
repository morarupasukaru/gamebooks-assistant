module.exports = function(grunt) {
    grunt.initConfig({
        // Clean temporary folders
        clean: {
            before: ['target'],
            after: []
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
                        'assets/googlefont/roboto/Roboto-300-400-500-700-400italic.css',
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
                        'style/titles.css',
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
                    dest: 'target/styles.css'
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
                'screens/**/*.css'
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
                'screens/**/*.css'
            ]
          }
        }
    }),
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.registerTask('default', ['clean:before', 'cssmin', 'csslint:strict', 'clean:after']);
};