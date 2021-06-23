import paths from '../assets/paths';
import del from 'del';
import cache  from 'gulp-cached';

const cleanTask = () => {
  cache.caches = {};


  return del([paths.clean]);
};

export default cleanTask;
