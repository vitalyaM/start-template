import paths from '../assets/paths';
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import sass, { logError } from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import { init, write } from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import cached from 'gulp-cached';
import dependents from 'gulp-dependents';
import cleanCSS from 'gulp-clean-css';
import gulpStylelint from 'gulp-stylelint';
import rename from 'gulp-rename';
import webpcss from "gulp-webpcss";
import gcmq from "gulp-group-css-media-queries";
import { stream } from 'browser-sync';

const plugins = [
  autoprefixer({
    grid: true,
    overrideBrowserslist: ['last 10 version'],
  }),
];

const styleDev = () => {
  return src(paths.dev.scss)
    .pipe(plumber())
    .pipe(
      gulpStylelint({
        failAfterError: false,
        reporters: [
          {
            formatter: 'string',
            console: true,
          },
        ],
      })
    )
    .pipe(cached('scss'))
    .pipe(dependents())
    .pipe(init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', logError))
    .pipe(webpcss(
      {
        webpClass: '._webp',
        noWebpClass: '._no-webp'
      }
    ))
    .pipe(gcmq())
    .pipe(write({ includeContent: false }))
    .pipe(init({ loadMaps: true }))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(postcss(plugins))

    .pipe(write('.'))
    .pipe(dest(paths.dist.css))
    .pipe(stream());
};

const styleProd = () => {
  return src(paths.dev.scss)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', logError))
    .pipe(webpcss(
      {
        webpClass: '._webp',
        noWebpClass: '._no-webp'
      }
    ))
    .pipe(gcmq())
    .pipe(postcss(plugins))
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: '*',
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(dest(paths.dist.css));
};

export { styleDev, styleProd };
