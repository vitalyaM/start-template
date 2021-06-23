import { src, dest, series } from 'gulp';
import del from 'del';
import paths from '../assets/paths';

import plumber from 'gulp-plumber';
import ttf2woff2 from 'gulp-ttf2woff2';

const convert = () => {
  return src(paths.dev.fonts)
    .pipe(plumber())
    .pipe(ttf2woff2())
    .pipe(dest(paths.dist.fonts))
};


const clean = (cb) => {
  del(paths.dev.fonts);
  cb();
};

const fonts = series(convert, clean);

export default fonts;
