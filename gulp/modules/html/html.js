const gulp = require('gulp');
const paths = require('../assets/paths');

const plumber = require('gulp-plumber');
const fileinclude = require("gulp-file-include");
const webphtml = require('gulp-webp-html');
const htmlhint = require('gulp-htmlhint');

const html = (cb) => {
  return gulp
    .src(paths.dev.html)
    .pipe(plumber())
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(paths.dist.html));
};

module.exports = html;
