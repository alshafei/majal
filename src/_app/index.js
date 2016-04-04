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
    var currentPath = this.get('currentPath');

    var self = this;

    function attach(path) {
      self.set('currentComponent', components.findComponent(path));
    }

    this.observe('currentPath', function(newPath, oldPath) {
      if (oldPath && newPath !== currentPath) {
        currentPath = newPath;
        attach(newPath);
      }
    });

    if (currentPath) {
      attach(currentPath);
    }
  }
});
