import Application from './_app';
import layout from './_app/resources/layout';
import { findComponent } from './_app/components';

Majal.render = function(path) {
  return layout()
    .replace('__APP__', (new Application({
      data: function() {
        return {
          currentPath: path,
          currentComponent: findComponent(path)
        };
      }
    })).toHTML());
};
