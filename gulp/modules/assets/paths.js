const { distPath, srcPath } = {
  distPath: 'build/',
  srcPath: 'src/'
};

export default {
  distPath,
  srcPath,
  clean: distPath,
  deployFiles: distPath + '**/*',
  images: {
    src: srcPath + 'img/**/*.{jpg,png,svg}',
    dist: distPath + 'img',
    svg: srcPath + 'img/**/*.svg',
    png: srcPath + 'img/**/*.png',
    jpeg: srcPath + 'img/**/*.{jpg,jpeg}',
    webp: distPath + 'img',
  },
  dist: {
    html: distPath,
    css: distPath + 'css',
    js: distPath + 'js',
    images: distPath + 'img',
    fonts: srcPath + 'assets/fonts',
    assets: distPath + 'assets',
  },
  dev: {
    html: [srcPath + '**/*.html', '!' + srcPath + '**/_*.html'],
    scss: srcPath + 'scss/**/*.scss',
    js: srcPath + 'js/*.js',
    images: srcPath + 'img/**/*',
    fonts: srcPath + 'assets/fonts/**/*.ttf',
    assets: srcPath + 'assets/**/*',
    ignores: [srcPath + 'img/**/*.{svg,ico}'],
  },
  watch: {
    html: srcPath + '**/*.html',
    scss: srcPath + 'scss/**/*.scss',
    js: srcPath + 'js/**/*.js',
    images: srcPath + 'img/**/*.{jpg,png,svg}',
    assets: srcPath + 'assets/**/*',
  },
};
