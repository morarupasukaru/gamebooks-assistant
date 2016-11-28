import gulp     from 'gulp';
import path     from 'path';
import webpack  from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

let webpackConfig = require('./webpack.config');
let root = 'src';

/**
 * Hilfsmethode: Dateien vom Pfad app/{glob} erhalten
 * @param glob Pfad nach app/
 * @returns {string} Den Pfad zur Applikation app/{glob}
 */
let resolveToApp = (glob) => {
    glob = glob || '';
    return path.join(root, 'app', glob);
};

/**
 * Hilfsmethode: Dateien vom Pfad app/components/{glob} erhalten
 * @param glob Pfad nach app/components/
 * @returns {string} Den Pfad zur Applikation app/components/{glob}
 */
let resolveToComponents = (glob) => {
    glob = glob || '';
    return path.join(root, 'app/components', glob);
};

/**
 * Map aller Dateien
 */
let paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // Alle .js ohne .spec.js
    css: resolveToApp('**/*.css'),
    html: [resolveToApp('**/*.html'), path.join(root, 'index.html')],
    entry: path.join(root, 'app/app.js'),
    output: 'dist',
    build: path.join(__dirname, 'target/build')
};

/**
 * Gulp-Task: Kopiert alle statischen Dateien nach /dist
 */
gulp.task('copyHtml', () => {
    gulp.src(path.join(root, 'books/*.*')).pipe(gulp.dest(paths.output));
    return gulp.src(path.join(root, '*.*')).pipe(gulp.dest(paths.output));
});

/**
 * Gulp-Task: Fuehrt webpack aus und startet den Development-Server
 */
gulp.task('serve', () => {
    return new WebpackDevServer(webpack(webpackConfig.development), {
        hot: true, contentBase: './dist/', watchOptions: {
            aggregateTimeout: 100, poll: 300
        }, stats: {
            colors: true
        }
    }).listen(3000, 'localhost', function (err) {
            if (err) {
                console.error(err);
            }
        });
});

/**
 * Gulp-Task: Baut die Applikation fuer das Deployment
 * - Erstellt das Webpack-Bundle und kopiert es nach /target/build
 * - Kopiert index.html nach /target/build
 */
//gulp.task('build', ['test-selenium-webgrid', 'doc'], (done) => {
gulp.task('build', [], (done) => {
    gulp.src(path.join(root, '*.*')).pipe(gulp.dest(paths.build));
    // remove commented line if decided to make /books/ public
    gulp.src(path.join(root, 'books/*.json')).pipe(gulp.dest(paths.build));
    return webpack(webpackConfig.production, done);
});

/**
 * Gulp-Task: Standardfall mit 'gulp' kopiert das HTML nach /dist und startet Webserver
 */
gulp.task('default', ['copyHtml', 'serve']);
