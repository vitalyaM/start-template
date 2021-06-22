import isMobile from './modules/isMobile';
import testWebp from './modules/testWebp';
import dynamicAdapt from './modules/dynamicAdapt';

window.addEventListener('DOMContentLoaded', () => {
  isMobile();
  testWebp();
  dynamicAdapt();
});
