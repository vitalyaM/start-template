import { src, dest, lastRun } from 'gulp';
import paths from '../assets/paths';
import nunjucksInheritance from 'gulp-nunjucks-inheritance';
import plumber from 'gulp-plumber';
import nunjucks from 'gulp-nunjucks-render';
import webphtml from 'gulp-webp-html';
import htmlhint, { reporter } from 'gulp-htmlhint';
import rename from 'gulp-rename';

function html(cb) {
  return src(paths.dev.html, { base: paths.srcPath, since: lastRun('html') })
    .pipe(plumber())
    .pipe(nunjucksInheritance({ base: paths.srcPath })) // Ищем изменения в зависимостях
    .pipe(
      nunjucks({
        path: paths.srcPath + 'templates',
      })
    )
    .pipe(webphtml())
    .pipe(htmlhint())
    .pipe(
      rename({
        dirname: '',
      })
    )
    .pipe(reporter())
    .pipe(dest(paths.dist.html));
}

export default html;
