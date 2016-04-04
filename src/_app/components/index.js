var fixedComponents = [
  require('./home'),
  require('./example')
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

    var matches = path.match(handler.matches);

    if (matches) {
      return {
        name: handler.name,
        params: matches.slice(1)
      };
    }
  }
};
