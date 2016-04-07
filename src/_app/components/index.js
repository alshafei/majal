import home from './home';
import example from './example';
import sidebar from './sidebar';
import donation from './donation';

var fixedComponents = [
  home,
  example,
  sidebar,
  donation
];

var components = {};

fixedComponents.forEach(function(handler) {
  components[handler.name] = Ractive.extend(handler.component);
});

export function getComponents() {
  return components;
}

export function findComponent(path) {
  for (var key in fixedComponents) {
    var handler = fixedComponents[key];

    if (handler.matches && handler.matches.test(path)) {
      return handler.name;
    }
  }
}
