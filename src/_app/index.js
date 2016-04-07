import { findComponent, getComponents } from './components';
import template from './resources/app';

/* global Ractive */

export default Ractive.extend({
  components: getComponents(),
  template: template,
  data: function() {
    return {
      currentComponent: null,
      getComponent: function(componentName) {
        if (!this.partials[componentName]) {
          this.partials[componentName] = { v: 3, t: [ { t: 7, e: componentName } ] };
        }

        return componentName;
      }
    };
  },
  onrender: function() {
    var currentPath = this.get('currentPath');

    var self = this;

    function attach(path) {
      self.set('currentComponent', findComponent(path))
        .then(function() {
          self.fire('componentRendered');

          window.history.pushState(document.title, null, path);
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
