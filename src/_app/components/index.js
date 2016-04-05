var fixedComponents = [
  require('./home'),
  require('./example'),
  require('./sidebar'),
  require('./donation')
];

var components = {};

fixedComponents.forEach(function(handler) {
  components[handler.name] = Ractive.extend(handler.component);
});

module.exports.getComponents = function() {
  return components;
};

module.exports.findComponent = function(path) {
  for (var key in fixedComponents) {
    var handler = fixedComponents[key];

    if (handler.matches && handler.matches.test(path)) {
      return handler.name;
    }
  }
};
