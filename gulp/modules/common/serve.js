import { watch, series } from 'gulp';
import html from '../html/html';
import browserSync from 'browser-sync';
import paths from '../assets/paths';
import { styleDev } from '../styles/sass';
import { scriptDev }  from '../js/scripts';
import { webp, copyImages, clearImages } from '../images/images';
import copyFiles from '../assets/files';

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

export { serve };
