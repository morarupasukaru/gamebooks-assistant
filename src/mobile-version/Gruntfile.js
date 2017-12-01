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
                        'assets/pure/base-min.css',
                        'assets/pure/grids-min.css',
                        'assets/pure/grids-responsive-min.css',
                        'assets/skeleton/normalize.css',
                        'assets/skeleton/skeleton.css',
                        'style/font.css',
                        'style/trim-text.css',
                        'style/nowrap-text.css',
                        'style/anchor.css',
                        'style/footer.css',
                        'style/titles.css',
                        'style/button.css',
                        'style/fullwidth.css',
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

        watch: {
            scripts: {
                files: ['src/**/*.*'],
                tasks: ['default'],
                options: {
                    livereload: true,
                    spawn: true
                },
            }
        }
    }),
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['clean:before', 'cssmin', 'clean:after']);
};