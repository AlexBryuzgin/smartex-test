var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus')

gulp.task('stylus', function(){
    gulp.src('/application/css/style.styl')
    .pipe(stylus('style.css'))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('concat-js', function () {
    gulp.src([

            './bower_components/angular/angular.js'
            , './bower_components/angular-animate/angular-animate.js'
            , './bower_components/angular-aria/angular-aria.js'
            , './bower_components/jquery/dist/jquery.js'
            , './bower_components/angular-route/angular-route.js'
            , './bower_components/angular-resource/angular-resource.js'
            , './bower_components/angular-local-storage/dist/angular-local-storage.js'

            , './application/js/app.js'
            , './application/js/**/*.js' ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
    gulp.watch(['./application/js/**/*.js'], ['default']);
});

gulp.task('default', ['concat-js', 'stylus']);