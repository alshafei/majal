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
  init: function() {
    this.observe('currentPath', function(path) {
      this.set('currentComponent', components.findComponent(path));
    });
  }
});
