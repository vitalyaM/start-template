const gulp = require('gulp');
const paths = require('./paths');
const del = require('del');

const copyFiles = async () => {
  await del([paths.dist.assets]);

  return gulp
    .src(paths.dev.assets)
    .pipe(gulp.dest(paths.dist.assets));
};

module.exports = copyFiles;
