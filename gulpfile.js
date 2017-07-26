'use strict';

var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-ruby-sass'),
    minifycss    = require('gulp-minify-css'),
	rename       = require('gulp-rename');

// style
gulp.task('style', function() {
	return sass('./sass/toast.scss')
	    .pipe(plumber())
		.pipe(gulp.dest('./dist/'))
		.pipe(minifycss())
		.pipe(rename({
			suffix: '.min'
		}))
	    .pipe(gulp.dest('./dist/'));
});

// watch files
gulp.task('watch', function() {
	gulp.watch('./sass/*.scss', ['style']);
});

// exec default
gulp.task('default', ['style', 'watch']);
