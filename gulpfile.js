const gulp = require('gulp')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const flatten = require('gulp-flatten')
const concat = require('gulp-concat')
const rename = require('gulp-rename')

gulp.task('script', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/hammerjs/hammer.js',
    'node_modules/materialize-css/dist/js/materialize.js',
    'src/js/hype.js'], {base: '.'})
    .pipe(uglify())
    .pipe(concat('hype.min.js'))
    .pipe(gulp.dest('views/js/'))
})

gulp.task('style', () => {
  return gulp.src('src/style/hype.scss')
    .pipe(sass({paths: [ '.' ]}))
    .pipe(cleanCSS())
    .pipe(rename('hype.min.css'))
    .pipe(gulp.dest('views/style/'))
})

gulp.task('fonts', () => {
  return gulp.src(['node_modules/materialize-css/dist/fonts/roboto/*'], {base: './'})
    .pipe(flatten())
    .pipe(gulp.dest('views/fonts/roboto/'))
})

gulp.task('default', ['script', 'style', 'fonts'])
