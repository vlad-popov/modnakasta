var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

// server connect

gulp.task('connect', function() {
    connect.server({
        root: '.',
        port: 9999,
        livereload: true
    });
});

//css

gulp.task('style', function () {
    return gulp.src([
        'style/index.scss'
    ])
        .pipe(sass())
        .pipe(concatCSS('modnakasta.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false}))
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});


// html

gulp.task('html', function () {
    gulp.src('index.html')
    .pipe(connect.reload());
});

// js


gulp.task('javascript', function () {
    gulp.src('js/javascript.js')
    .pipe(connect.reload());
});

// watch
gulp.task('watch', function () {
    gulp.watch([
        'style/*.scss',
        'style/*/*.scss'
    ], ['style']);

    gulp.watch('index.html', ['html']);


    gulp.watch('js/javascript.js', ['javascript']);
});

// default

gulp.task('default', ['connect', 'style', 'html', 'javascript', 'watch']);