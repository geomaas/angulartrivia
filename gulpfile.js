'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
  gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));

    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
    return gulp.src('./styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));
});

gulp.task('js', function () {
  gulp.src('./controllers/*.js').pipe(gulp.dest('./public/controllers'));

    return gulp.src('./app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public'))
});

gulp.task('watch', function () {
    gulp.watch('./*.js', ['js']);
    gulp.watch('./*/*.js', ['js']);
    gulp.watch('./*.scss', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./templates/*.html', ['html']);
    gulp.watch('./controllers/*.js,'['js']);

});
