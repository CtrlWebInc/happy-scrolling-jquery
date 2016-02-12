/**
 * Created by me on 2016-02-12.
 */

var gulp = require('gulp'),
    batch = require('gulp-batch'),
    watch = require('gulp-watch');

var jsSource = 'src/**/*.js',
    jsDist = 'dist';


gulp.task('build', function () {
    return gulp.src(jsSource).pipe(gulp.dest(jsDist));
});

gulp.task('watch', function () {
    watch(jsSource, batch(function (events, done) {
        gulp.start('build', done)
    }));
});