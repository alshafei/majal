import { findComponent, getComponents } from './components';
import { getDecorators } from './decorators';
import template from './resources/app';

/* global Ractive */

export default Ractive.extend({
  components: getComponents(),
  decorators: getDecorators(),
  template,
  data() {
    return {
      currentComponent: null,
      getComponent(componentName) {
        if (!this.partials[componentName]) {
          this.partials[componentName] = { v: 3, t: [ { t: 7, e: componentName } ] };
        }

        return componentName;
      }
    };
  },
  onrender() {
    let currentPath = this.get('currentPath');

    const self = this;

    function attach(path) {
      self.set('currentComponent', findComponent(path))
        .then(() => {
          self.fire('componentRendered');

          if (path !== currentPath) {
            window.history.pushState(document.title, null, path);
          }
        });
    }

    this.observe('currentPath', (newPath, oldPath) => {
      if (oldPath && newPath !== currentPath) {
        currentPath = newPath;
        attach(newPath);
      }
    });

    this.on('*.toggleSidebar', () => {
      this.toggle('showSidebar');
      return false;
    });

    this.on('navigate', (e) => {
      const segment = e.node.href.split('/').slice(3).join('/');

      attach('/' + segment);

      return false;
    });

    if (currentPath) {
      attach(currentPath);
    }
  }
});
