import { src, dest } from 'gulp';
import webpackStream from 'webpack-stream';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import { stream } from 'browser-sync';
import paths from '../assets/paths';
import webpackConfig from '../../webpack.config.js';

const scriptProd = () => {
  return src(paths.dev.js)
    .pipe(eslint())
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig(false)))
    .pipe(dest(paths.dist.js));
};

const scriptDev = () => {
  return src(paths.dev.js)
    .pipe(eslint())
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig(true)))
    .pipe(dest(paths.dist.js))
    .pipe(stream());
};

export { scriptDev, scriptProd };
