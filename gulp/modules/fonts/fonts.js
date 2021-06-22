const gulp = require('gulp');
const { series } = gulp;
const del = require('del');
const paths = require('../assets/paths');

const plumber = require('gulp-plumber');
const ttf2woff2 = require('gulp-ttf2woff2');

const convert = () => {
  return gulp
    .src(paths.dev.fonts)
    .pipe(plumber())
    .pipe(ttf2woff2())
    .pipe(gulp.dest(paths.dist.fonts))
};


const clean = (cb) => {
  del(paths.dev.fonts);
  cb();
};

const fonts = series(convert, clean);

module.exports = fonts;
