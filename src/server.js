var Application = require('./_app');

var components = require('./_app/components');

Majal.render = function(path) {
  return require('./_app/resources/layout')()
    .replace('__APP__', (new Application({
      data: function() {
        return {
          currentPath: path,
          currentComponent: components.findComponent(path)
        };
      }
    })).toHTML());
};
