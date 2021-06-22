const gulp = require('gulp');
const paths = require('../assets/paths');
const del = require('del');
const cached = require('gulp-cached');

const cleanTask = () => {
  cached.caches = {};

  return del([paths.clean]);
};

module.exports = cleanTask;
