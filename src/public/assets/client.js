/**
---
_bundle: true
---
*/

import Application from '../../_app';

/* global fastImage */

fastImage(Array.prototype.slice.call(document.querySelectorAll('.fast-image')));

function main() {
  const app = new Application({
    el: '#app',
    data() {
      return {
        currentPath: document.location.pathname
      };
    }
  });

  app.on('componentRendered', () => {
    fastImage(app.findAll('.fast-image'));
  });

  window.addEventListener('popstate', () => {
    app.set('currentPath', document.location.pathname);
  });
}

main();
