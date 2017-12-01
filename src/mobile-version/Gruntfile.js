module.exports = function(grunt) {
    grunt.initConfig({
        // Clean temporary folders
        clean: {
            before: ['build', 'target'],
            after: ['build']
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
                        'node_modules/skeleton-css/css/normalize.css',
                        'node_modules/skeleton-css/css/skeleton.css',
                        'src/**/*.css'
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