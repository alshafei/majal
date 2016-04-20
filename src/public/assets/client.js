/**
---
_bundle: true
---
*/

import Application from '../../_app';

/* global talavera */

talavera(Array.prototype.slice.call(document.querySelectorAll('img[srcset]')));

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
    talavera(app.findAll('img[srcset]'));
  });

  window.addEventListener('popstate', () => {
    app.set('currentPath', document.location.pathname);
  });
}

main();
