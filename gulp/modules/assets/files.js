import { src, dest } from 'gulp';
import paths from './paths';
import del from 'del';

const copyFiles = async () => {
  await del([paths.dist.assets]);

  return src(paths.dev.assets)
    .pipe(dest(paths.dist.assets));
};

export default copyFiles;
