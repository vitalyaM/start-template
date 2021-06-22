/* eslint-disable */
const gulp = require('gulp');
const { series, parallel } = gulp;

const html = require('./gulp/modules/html/html');
const { styleDev, styleProd } = require('./gulp/modules/styles/sass');
const { scriptDev, scriptProd } = require('./gulp/modules/js/scripts');
const { copyImages, webp, imagesMinJpeg, imagesMinSvg, imagesMinPng, } = require('./gulp/modules/images/images');
const clean = require('./gulp/modules/common/clean');
const copyFiles = require('./gulp/modules/assets/files');
const { serve } = require('./gulp/modules/common/serve');
const deploy = require('./gulp/modules/common/deploy-ftp');
const fonts = require('./gulp/modules/fonts/fonts');

const imagesDev = series(copyImages, webp);
const imagesProd = series(series(imagesMinJpeg, imagesMinPng, imagesMinSvg), webp);

const build = series(clean, copyFiles, parallel(html, styleProd, scriptProd), imagesProd);
const dev = series(clean, html, styleDev, scriptDev, imagesDev, copyFiles, serve);

exports.dev = dev;
exports.build = build;
exports.fonts = fonts;
exports.deploy = series(build, deploy);
