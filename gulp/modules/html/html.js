import { src, dest } from 'gulp';
import paths from '../assets/paths';

import plumber from 'gulp-plumber';
import fileinclude from "gulp-file-include";
import webphtml from 'gulp-webp-html';
import htmlhint, { reporter } from 'gulp-htmlhint';

const html = (cb) => {
  return src(paths.dev.html)
    .pipe(plumber())
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(htmlhint())
    .pipe(reporter())
    .pipe(dest(paths.dist.html));
};

export default html;
