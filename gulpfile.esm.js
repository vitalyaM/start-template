import gulp from 'gulp';
const { series, parallel } = gulp;

import html from './gulp/modules/html/html';
import { styleDev, styleProd } from './gulp/modules/styles/sass';
import { scriptDev, scriptProd } from './gulp/modules/js/scripts';
import { copyImages, webp, imagesMinJpeg, imagesMinSvg, imagesMinPng } from './gulp/modules/images/images';
import clean from './gulp/modules/common/clean';
import copyFiles from './gulp/modules/assets/files';
import { serve } from './gulp/modules/common/serve';
import deploy from './gulp/modules/common/deploy-ftp';
import fonts from './gulp/modules/fonts/fonts';

const imagesDev = series(copyImages, webp);
const imagesProd = series(series(imagesMinJpeg, imagesMinPng, imagesMinSvg), webp);


export const dev = series(clean, html, styleDev, scriptDev, imagesDev, copyFiles, serve);
export const build = series(clean, copyFiles, parallel(html, styleProd, scriptProd), imagesProd);

const _fonts = fonts;
export { _fonts as fonts };

const _deploy = series(build, deploy);
export { _deploy as deploy };
