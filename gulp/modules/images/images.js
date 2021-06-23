import { src, dest } from 'gulp';
import imagemin, { mozjpeg, optipng, svgo } from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';
import plumber from 'gulp-plumber';
import del from 'del';
import rename from 'gulp-rename';
import paths from '../assets/paths';

const copyImages = () =>
  src([paths.images.src]).pipe(plumber()).pipe(dest(paths.images.dist));

const clearImages = async (done) => {
  await del([paths.images.dist], { force: true });
  return done;
};

const webp = () => {
  return src([paths.images.src, '!' + paths.dev.ignores])
    .pipe(plumber())
    .pipe(imagemin([imageminWebp({ quality: 70 })], { verbose: true }))
    .pipe(rename({ extname: '.webp' }))
    .pipe(dest(paths.images.webp));
};

const imagesMinJpeg = () => {
  return src([paths.images.jpeg, '!' + paths.dev.ignores])
    .pipe(
      imagemin([mozjpeg({ quality: 75, progressive: true })], {
        verbose: true,
      })
    )
    .pipe(dest(paths.images.dist));
};

const imagesMinPng = () => {
  return src([paths.images.png, '!' + paths.dev.ignores])
    .pipe(
      imagemin([optipng()], {
        verbose: true,
      })
    )
    .pipe(dest(paths.images.dist));
};

const imagesMinSvg = () => {
  return src(paths.images.svg)
    .pipe(
      imagemin(
        [
          svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest(paths.images.dist));
};

export { clearImages, copyImages, webp, imagesMinJpeg, imagesMinSvg, imagesMinPng };
