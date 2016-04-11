var gulp            = require('gulp');
var uglify          = require('gulp-uglify');
var plumber         = require('gulp-plumber');
var sass            = require('gulp-ruby-sass');
var autoprefixer    = require('gulp-autoprefixer');
var nodemon         = require('gulp-nodemon');
var browserSync     = require('browser-sync');


gulp.task('default', ['sass','browser-sync'], function () {
});

// Compile Sass
gulp.task('sass', function() {
    return sass('public/sass/main.sass')
           .on('error', sass.logError)
           .pipe(plumber())
           .pipe(autoprefixer({
                    browser: ['last 2 versions'],
                    cascade: false
            }))
           .pipe(gulp.dest('public/css/'))
           .pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["views/index.ejs"],
        browser: "google chrome",
        port: 7000,
	});

    gulp.watch("./**/*.sass", ['sass']);
    gulp.watch("./**/*.ejs").on('change', browserSync.reload);
});

gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
	});
});
