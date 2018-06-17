var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var open = require('gulp-open');
var serveStatic = require('serve-static');

gulp.task('styles', function () {
    return gulp.src('src/assets/css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/assets/css'));
});

gulp.task('styles-watch', function () {
    gulp.watch('src/**/*.scss', ['styles']);
});

gulp.task('host', ['styles', 'styles-watch'], function () {
    var settings = {
        root: 'src',
        host: 'localhost',
        port: '8080',
        fallback: 'src/index.html',
        middleware: function (connect) {
            return [connect().use('/node_modules', serveStatic('node_modules'))];
        }
    };
    connect.server(settings);
    gulp.src('src/index.html')
        .pipe(open({ uri: 'http://' + settings.host + ':' + settings.port, app: 'chrome' }));
});