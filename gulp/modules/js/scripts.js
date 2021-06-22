const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const paths = require('../assets/paths');
const webpackConfig = require('../../webpack.config.js');

const scriptProd = () => {
  return gulp
    .src(paths.dev.js)
    .pipe(eslint())
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig(false)))
    .pipe(gulp.dest(paths.dist.js));
};

const scriptDev = () => {
  return gulp
    .src(paths.dev.js)
    .pipe(eslint())
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig(true)))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
};

module.exports = { scriptDev, scriptProd };
