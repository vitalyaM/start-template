const gulp = require('gulp');
const { watch, series } = gulp;
const html = require('../html/html');
const browserSync = require('browser-sync');
const paths = require('../assets/paths');
const { styleDev } = require('../styles/sass');
const { scriptDev } = require('../js/scripts');
const { webp, copyImages, clearImages } = require('../images/images');
const copyFiles = require('../assets/files');

const options = {
  server: paths.distPath,
  notify: false,
  open: true,
  cors: true,
  port: 4000,
  stream: true,
  injectChanges: false,
  tunnel: true
};

const imagesDev = series(clearImages, copyImages, webp);

const gulpWatch = (browserSync) => {
  watch(paths.dev.assets, copyFiles).on('change', browserSync.reload);
  watch(paths.watch.images, imagesDev).on('change', browserSync.reload);
  watch(paths.watch.scss, styleDev);
  watch(paths.watch.js, scriptDev);
  watch(paths.watch.html, html);
  watch(paths.dist.html + '*.html').on('change', browserSync.reload);
};

const serve = (cb) => {
  browserSync(options);
  gulpWatch(browserSync);
  return cb();
};

module.exports = { serve };
