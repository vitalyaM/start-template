const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');
const plumber = require('gulp-plumber');
const del = require('del');
const rename = require('gulp-rename');
const paths = require('../assets/paths');

const copyImages = () =>
  gulp.src([paths.images.src]).pipe(plumber()).pipe(gulp.dest(paths.images.dist));

const clearImages = async (done) => {
  await del([paths.images.dist], { force: true });
  return done;
};

const webp = () => {
  return gulp
    .src([paths.images.src, '!' + paths.dev.ignores])
    .pipe(plumber())
    .pipe(imagemin([imageminWebp({ quality: 70 })], { verbose: true }))
    .pipe(rename({ extname: '.webp' }))
    .pipe(gulp.dest(paths.images.webp));
};

const imagesMinJpeg = () => {
  return gulp
    .src([paths.images.jpeg, '!' + paths.dev.ignores])
    .pipe(
      imagemin([imagemin.mozjpeg({ quality: 75, progressive: true })], {
        verbose: true,
      })
    )
    .pipe(gulp.dest(paths.images.dist));
};

const imagesMinPng = () => {
  return gulp
    .src([paths.images.png, '!' + paths.dev.ignores])
    .pipe(
      imagemin([imagemin.optipng()], {
        verbose: true,
      })
    )
    .pipe(gulp.dest(paths.images.dist));
};

const imagesMinSvg = () => {
  return gulp
    .src(paths.images.svg)
    .pipe(
      imagemin(
        [
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(gulp.dest(paths.images.dist));
};

module.exports = { clearImages, copyImages, webp, imagesMinJpeg, imagesMinSvg, imagesMinPng };
