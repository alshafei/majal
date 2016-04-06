var MEDIA_QUERY = '(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)';

var components = require('./components');

module.exports = Ractive.extend({
  components: components.getComponents(),
  template: require('./resources/app'),
  data: function() {
    return {
      currentComponent: null,
      getComponent: function(componentName) {
        if (!this.partials[componentName]) {
          this.partials[componentName] = { v: 3, t: [ { t: 7, e: componentName } ] }
        }

        return componentName;
      }
    };
  },
  onrender: function() {
    var isRetina = window.devicePixelRatio > 1 ||
      (window.matchMedia && window.matchMedia(MEDIA_QUERY).matches);

    var currentPath = this.get('currentPath');

    var self = this;

    function resolveImages() {
      self.findAll('img[srcset]').forEach(function(img) {
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

    function attach(path) {
      self.set('currentComponent', components.findComponent(path))
        .then(function() {
          window.history.pushState(document.title, null, path);
          resolveImages();
        });
    }

    this.observe('currentPath', function(newPath, oldPath) {
      if (oldPath && newPath !== currentPath) {
        currentPath = newPath;
        attach(newPath);
      }
    });

    this.on('*.toggleSidebar', function() {
      this.toggle('showSidebar');
    });

    this.on('navigate', function(e) {
      var segment = e.node.href.split('/').slice(3).join('/');

      attach('/' + segment);

      return false;
    });

    if (currentPath) {
      attach(currentPath);
    }
  }
});
