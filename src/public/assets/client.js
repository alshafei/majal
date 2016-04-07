/**
---
_bundle: true
---
*/

import Application from '../../_app';

function resolveImages(nodes) {
  nodes.forEach(function(img) {
    const sources = img.getAttribute('srcset').split(/\s*,\s*/)
      .map((source) => {
        const parts = source.split(/\s+/);

        return { src: parts[0], size: parseInt(parts[1], 10) };
      });

    for (let i in sources) {
      if (Math.round(window.devicePixelRatio) === sources[i].size) {
        img.setAttribute('src', sources[i].src);
        break;
      }
    }
  });
}

resolveImages(Array.prototype.slice.call(document.querySelectorAll('img[srcset]')));

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
    resolveImages(app.findAll('img[srcset]'));
  });
}

main();
