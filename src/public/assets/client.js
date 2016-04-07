/**
---
_bundle: true
---
*/

import Application from '../../_app';

function resolveImages(nodes) {
  nodes.forEach(function(img) {
    var sources = img.getAttribute('srcset').split(/\s*,\s*/)
      .map(function(source) {
        var parts = source.split(/\s+/);

        return { src: parts[0], size: parseInt(parts[1], 10) };
      });

    for (var i in sources) {
      if (Math.round(window.devicePixelRatio) === sources[i].size) {
        img.setAttribute('src', sources[i].src);
        break;
      }
    }
  });
}

resolveImages(Array.prototype.slice.call(document.querySelectorAll('img[srcset]')));

function main() {
  var app = new Application({
    el: '#app',
    data: function() {
      return {
        currentPath: document.location.pathname
      };
    }
  });

  app.on('componentRendered', function() {
    resolveImages(app.findAll('img[srcset]'));
  });
}

main();
