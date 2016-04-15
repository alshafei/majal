/**
---
_bundle: true
---
*/

import Application from '../../_app';

import resolveImages from './_helpers/resolve-images';

resolveImages(Array.prototype.slice.call(document.querySelectorAll('.fast-image')));

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
    resolveImages(app.findAll('.fast-image'));
  });
}

main();
